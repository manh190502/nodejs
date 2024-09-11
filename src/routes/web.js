const express = require("express");
const router = express.Router();
const { getHomepage, getEjs } = require("../controllers/homeController");
const { get } = require("https");

// router.method('/route', handler)
router.get("/", getHomepage);
router.get("/ejs", getEjs);

module.exports = router;
