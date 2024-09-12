const express = require("express");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
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
app.use("/v1/api", apiRoutes);

//check connection then run server
(async () => {
  // test connection
  try {
    await connection();
    //server
    app.listen(port, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to db: ", error);
  }
})();
