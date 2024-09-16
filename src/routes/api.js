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

const {
  createProjectAPI,
  getAllProjectAPI,
  deleteProjectAPI,
  updateProjectAPI,
} = require("../controllers/projectControllers");

const {
  createTaskAPI,
  getAllTaskAPI,
  updateTaskAPI,
  deleteTaskAPI,
} = require("../controllers/taskControllers");
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
routerAPI.get("/projects", getAllProjectAPI);
routerAPI.delete("/projects", deleteProjectAPI);
routerAPI.put("/projects", updateProjectAPI);

routerAPI.post("/tasks", createTaskAPI);
routerAPI.get("/tasks", getAllTaskAPI);
routerAPI.put("/tasks", updateTaskAPI);
routerAPI.delete("/tasks", deleteTaskAPI);

module.exports = routerAPI;
