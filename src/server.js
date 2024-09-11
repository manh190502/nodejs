const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);
// config static files

// route
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
