const express = require("express");
const {
  getUsersAPI,
  createUsersAPI,
  updateUsersAPI,
  deleteUsersAPI,
  uploadSingleFileAPI,
  uploadMultipleFilesAPI,
} = require("../controllers/apiControllers");
const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", createUsersAPI);
routerAPI.put("/users", updateUsersAPI);
routerAPI.delete("/users", deleteUsersAPI);

routerAPI.post("/file", uploadSingleFileAPI);
routerAPI.post("/files", uploadMultipleFilesAPI);

module.exports = routerAPI;
