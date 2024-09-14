const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getEjs,
  createUser,
  getCreatePage,
  getUpdatePage,
  updateUser,
  deleteUser,
  removeUser,
} = require("../controllers/homeController");
const { get } = require("https");

// router.method('/route', handler)
router.get("/", getHomepage);
router.get("/ejs", getEjs);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", createUser);
router.post("/update-user", updateUser);
router.post("/delete-user/:id", deleteUser);
router.post("/delete-user", removeUser);

module.exports = router;
