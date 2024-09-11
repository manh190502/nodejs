const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getEjs = (req, res) => {
  res.render("sample");
};

const createUser = (req, res) => {
  console.log(">>>", req.body);
  res.send("create user");
};

module.exports = {
  getHomepage,
  getEjs,
  createUser,
};
