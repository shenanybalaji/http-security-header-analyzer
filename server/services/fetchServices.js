const axios = require("axios");

exports.fetchURL = async (url, method, headers, body) => {
    const startTime = Date.now();
    const redirects = [];

    const response = await axios({
        url,
        method,
        headers,
        data: body,
        maxRedirects: 5,
        validateStatus: () => true,
    });

    const endTime = Date.now();

    return {
        status: response.status,
        headers: response.headers,
        body: response.data,
        size: JSON.stringify(response.data).length,
        responseTime: endTime - startTime,
        finalURL: response.request.res.responseUrl,
        requestHeaders: response.config.headers,
        redirects,
        cookies: response.headers["set-cookie"] || [],
    };
};