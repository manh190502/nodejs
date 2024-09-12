const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  createNewUser,
  deleteUserById,
} = require("../services/CRUDservice");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();

  return res.render("home.ejs", { listUsers: results });
};

const getEjs = (req, res) => {
  res.render("sample");
};

const createUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  await createNewUser(email, name, city);

  res.send("Created user succeed !");
};

const updateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  await updateUserById(email, name, city, userId);

  // res.send("Update user succeed !");
  res.redirect("/");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  let user = await getUserById(userId);
  res.render("update.ejs", { userEdit: user });
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);

  res.render("delete.ejs", { userEdit: user });
};

const removeUser = async (req, res) => {
  let userId = req.body.userId;

  await deleteUserById(userId);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getEjs,
  createUser,
  getCreatePage,
  getUpdatePage,
  updateUser,
  deleteUser,
  removeUser,
};
