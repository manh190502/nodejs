const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);
// config static files

// route
app.use("/", webRoutes);

// test connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

// simple query
connection.query("select * from Users u", function (err, results, fields) {
  console.log(">>>results ", results);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
