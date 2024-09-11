const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getEjs,
  createUser,
} = require("../controllers/homeController");
const { get } = require("https");

// router.method('/route', handler)
router.get("/", getHomepage);
router.get("/ejs", getEjs);

router.post("/create-user", createUser);

module.exports = router;
