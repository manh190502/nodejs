<<<<<<< HEAD
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const dbState = [
  { value: 0, label: "Disconnected" },
  { value: 1, label: "Connected" },
  { value: 2, label: "Connecting" },
  { value: 3, label: "Disconnecting" },
];

const connection = async () => {
  try {
    // const options = {
    //   user: process.env.DB_USER,
    //   pass: process.env.DB_PASSWORD,
    //   dbName: process.env.DB_NAME,
    // };
    // await mongoose.connect(process.env.DB_HOST, options);

    await mongoose.connect(process.env.DB_HOST);

    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value === state).label, "to Database"); // connected to db
  } catch (error) {
    console.log(">>> Error connection DB: ", error);
  }
};

module.exports = connection;
=======
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const dbState = [
  { value: 0, label: "Disconnected" },
  { value: 1, label: "Connected" },
  { value: 2, label: "Connecting" },
  { value: 3, label: "Disconnecting" },
];

const connection = async () => {
  try {
    const options = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    };
    await mongoose.connect(process.env.DB_HOST, options);

    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value === state).label, "to Database"); // connected to db
  } catch (error) {
    console.log(">>> Error connection DB: ", error);
  }
};

module.exports = connection;
>>>>>>> e6384bf4975f75df05ffa9b7bc176c2c8754d3f9
