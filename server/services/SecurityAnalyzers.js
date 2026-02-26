exports.analyze = (headers, isHTTPS) => {

    // initial declaration
    const findings = [];

    // HSTS
    if (!headers["strict-transport-security"]) {
        findings.push({
            header: "HSTS",
            severity: "high",
            message: "Missing Strict-Transport-Security"
        });
    }

    // CSP
    if (!headers["content-security-policy"]) {
        findings.push({
            header: "CSP",
            severity: "high",
            message: "Missing Content-Security-Policy"
        });
    }

    // X-Frame
    if (!headers["x-frame-options"]) {
        findings.push({
            header: "X-Frame-Options",
            severity: "medium",
            message: "Clickjacking protection missing"
        });
    }

    // X-Content-Type
    if (!headers["x-content-type-options"]) {
        findings.push({
            header: "X-Content-Type-Options",
            severity: "medium",
            message: "MIME sniffing protection missing"
        });
    }

    // HTTPS check
    if (!isHTTPS) {
        findings.push({
            header: "HTTPS",
            severity: "critical",
            message: "Site not served over HTTPS"
        });
    }

    return findings;
};