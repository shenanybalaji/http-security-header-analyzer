const express = require("express");

// create router object
const router = express.Router();

const { scanURL } = require("../controllers/scanControllers");
const validator = require("../utils/validator");

//Scan a website
router.post("/", validator.validateURL, scanURL);


module.exports = router;