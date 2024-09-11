const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", webRoutes);

// simple query
// connection.query("select * from Users u", function (err, results, fields) {
//   console.log(">>>results ", results);
// });

// app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
