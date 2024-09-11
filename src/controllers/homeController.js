const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getEjs = (req, res) => {
  res.render("sample");
};

const createUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  // console.log(">>>", email, name, city);

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );

  console.log(">>> check results ", results);

  res.send("Created user succeed !");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomepage,
  getEjs,
  createUser,
  getCreatePage,
};
