<<<<<<< HEAD
const express = require("express");
const {
  getUsersAPI,
  createUsersAPI,
  updateUsersAPI,
  deleteUsersAPI,
  uploadSingleFileAPI,
  uploadMultipleFilesAPI,
} = require("../controllers/apiControllers");
const {
  createCustomersAPI,
  createArrayCustomersAPI,
  getCustomersAPI,
  updateCustomersAPI,
  deleteCustomerAPI,
  deleteArrayCustomersAPI,
} = require("../controllers/customerControllers");

const { createProjectAPI } = require("../controllers/projectControllers");
const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", createUsersAPI);
routerAPI.put("/users", updateUsersAPI);
routerAPI.delete("/users", deleteUsersAPI);

routerAPI.post("/file", uploadSingleFileAPI);
routerAPI.post("/files", uploadMultipleFilesAPI);

routerAPI.post("/customers", createCustomersAPI);
routerAPI.post("/customers-many", createArrayCustomersAPI);
routerAPI.get("/customers", getCustomersAPI);
routerAPI.put("/customers", updateCustomersAPI);
routerAPI.delete("/customers", deleteCustomerAPI);
routerAPI.delete("/customers-many", deleteArrayCustomersAPI);

routerAPI.post("/projects", createProjectAPI);

module.exports = routerAPI;
=======
const express = require("express");
const {
  getUsersAPI,
  createUsersAPI,
  updateUsersAPI,
  deleteUsersAPI,
  uploadSingleFileAPI,
  uploadMultipleFilesAPI,
} = require("../controllers/apiControllers");
const {
  createCustomersAPI,
  createArrayCustomersAPI,
  getCustomersAPI,
  updateCustomersAPI,
  deleteCustomerAPI,
  deleteArrayCustomersAPI,
} = require("../controllers/customerControllers");
const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", createUsersAPI);
routerAPI.put("/users", updateUsersAPI);
routerAPI.delete("/users", deleteUsersAPI);

routerAPI.post("/file", uploadSingleFileAPI);
routerAPI.post("/files", uploadMultipleFilesAPI);

routerAPI.post("/customers", createCustomersAPI);
routerAPI.post("/customers-many", createArrayCustomersAPI);
routerAPI.get("/customers", getCustomersAPI);
routerAPI.put("/customers", updateCustomersAPI);
routerAPI.delete("/customers", deleteCustomerAPI);
routerAPI.delete("/customers-many", deleteArrayCustomersAPI);

module.exports = routerAPI;
>>>>>>> e6384bf4975f75df05ffa9b7bc176c2c8754d3f9
