const axios = require("axios");
const Scan = require("../models/scan");
const securityAnalyzer = require("../services/SecurityAnalyzers");
const scoringEngine = require("../services/scoringEngine");
const httpsAnalyzer = require("../services/HTTPAnalyzer");
const AppError = require("../utils/AppError");
const dns = require("dns").promises;

const scanURL = async (req, res) => {
    try {

        // gets url from frontend
        const { url } = req.body;

        // validate the URL
        if (!url) {
            return res.status(400).json({ error: "URL is required" });
        }

        // parse the url into string
        const parsedUrl = new URL(url);

        // get the hostname from the url
        const hostname = parsedUrl.hostname;

        // make a request to the URL we sent from frontend and get the response headers
        const response = await axios.get(url, {
            maxRedirects: 5,
            validateStatus: () => true
        });

        // get the headers from the response
        const headers = response.headers;

        // Check security headers
        const securityHeaders = {
            "Strict-Transport-Security": headers["strict-transport-security"] ? true : false,
            "Content-Security-Policy": headers["content-security-policy"] ? true : false,
            "X-Frame-Options": headers["x-frame-options"] ? true : false,
            "X-Content-Type-Options": headers["x-content-type-options"] ? true : false,
            "Referrer-Policy": headers["referrer-policy"] ? true : false,
            "Permissions-Policy": headers["permissions-policy"] ? true : false,
        };

        // default value
        let ipAddress = "Not Found";

        // to get the IP address of the website using dns lookup
        try {
            const lookup = await dns.lookup(hostname, { family: 4 });
            ipAddress = lookup.address;
        } catch (err) {
            console.log("DNS lookup failed:", err.message);
        }

        // check if the website is using HTTPS
        const isHTTPS = httpsAnalyzer.checkHTTPS(url);

        // analyze security headers and calculate score
        const findings = securityAnalyzer.analyze(headers, isHTTPS);

        // calculate score and grade
        const { grade, score } = scoringEngine.calculate(findings);

        // save the scan result in the database
        const scan = await Scan.create({
            url,
            finalURL: response.request?.res?.responseUrl || url,
            statusCode: response.status,
            ipAddress,
            server: headers["server"] || "Not Provided",
            headers: securityHeaders,
            time: "N/A",
            score,
            grade,
            headersMain: response.headers
        });

        // Send saved scan object as JSON response
        res.json(scan);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { scanURL };