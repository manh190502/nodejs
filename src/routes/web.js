const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getEjs,
  createUser,
  getCreatePage,
} = require("../controllers/homeController");
const { get } = require("https");

// router.method('/route', handler)
router.get("/", getHomepage);
router.get("/ejs", getEjs);

router.get("/create", getCreatePage);

router.post("/create-user", createUser);

module.exports = router;
