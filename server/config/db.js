const mongoose = require("mongoose");

// asynchronus function to establish db connection
module.exports = async () => {

    // specific db ip address and the database
    await mongoose.connect("mongodb://127.0.0.1:27017/HTTP_header_files");
    console.log("MongoDB Connected");
};