const mongoose = require("mongoose");

module.exports = (err, req, res, next) => {
    console.error(err); // Log for debugging

    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // 🔎 Invalid MongoDB ObjectId
    if (err instanceof mongoose.Error.CastError) {
        statusCode = 400;
        message = "Invalid ID format";
    }

    // 🗄️ MongoDB duplicate key error
    if (err.code && err.code === 11000) {
        statusCode = 400;
        message = "Duplicate field value entered";
    }

    // 🌐 Axios network errors
    if (err.isAxiosError) {
        statusCode = 502;
        message = "Failed to fetch target website";
    }

    // 📦 JSON body too large
    if (err.type === "entity.too.large") {
        statusCode = 413;
        message = "Request body too large";
    }

    res.status(statusCode).json({
        success: false,
        error: message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack })
    });
};