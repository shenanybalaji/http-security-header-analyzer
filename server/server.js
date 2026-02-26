const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const scanRoutes = require("./routes/scanRoutes");
const connectDB = require("./config/db");
const rateLimiter = require("./middleware/rateLimiter");
const errorHandler = require("./middleware/errorHandler");

// express app creation
const app = express();

// database connection
connectDB();

// for the addtional security in http
app.use(helmet());

// to establish connect between two ports
app.use(cors());

// limits the file size 
app.use(express.json({ limit: "2mb" }));

// show the api details
app.use(morgan("dev"));

// limits the users request and avoid spam
app.use(rateLimiter);

// scan the routes 
app.use("/api/scan", scanRoutes);

// handle error globally
app.use(errorHandler);

// port number
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));