const mongoose = require("mongoose");

// schema definition
const ScanSchema = new mongoose.Schema({
    url: String,
    finalURL: String,
    statusCode: Number,
    headers: Object,
    score: String,
    grade: String,
    findings: Array,
    redirectChain: Array,
    createdAt: { type: Date, default: Date.now },
    ipAddress: { type: String, default: "Not Found" },
    headersMain: Object,
});

module.exports = mongoose.model("Scan", ScanSchema);