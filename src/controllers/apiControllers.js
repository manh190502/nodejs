const User = require("../models/user");
const {
  uploadSingleFile,
  uploadMultipleFiles,
} = require("../services/fileService");

const getUsersAPI = async (req, res) => {
  let results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const createUsersAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let user = await User.create({
    email: email,
    name: name,
    city: city,
  });

  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const updateUsersAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  let user = await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );

  res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const deleteUsersAPI = async (req, res) => {
  let userId = req.body.userId;

  let results = await User.deleteOne({ _id: userId });
  res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const uploadSingleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let results = await uploadSingleFile(req.files.image);

  return res.status(200).json({
    data: results,
  });
};

const uploadMultipleFilesAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  if (Array.isArray(req.files.image)) {
    let results = await uploadMultipleFiles(req.files.image);

    return res.status(200).json({
      errCode: 0,
      data: results,
    });
  } else {
    return await uploadSingleFileAPI(req, res);
  }
};

module.exports = {
  getUsersAPI,
  createUsersAPI,
  updateUsersAPI,
  deleteUsersAPI,
  uploadSingleFileAPI,
  uploadMultipleFilesAPI,
};
