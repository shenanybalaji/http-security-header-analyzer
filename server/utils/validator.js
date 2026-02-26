const validator = require("validator");

exports.validateURL = (req, res, next) => {
    const { url } = req.body;

    if (!url || !validator.isURL(url, { require_protocol: true })) {
        return res.status(400).json({
            error: "Valid URL with http/https required"
        });
    }

    next();
};