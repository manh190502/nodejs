const {
  createTaskService,
  getAllTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/taskService");

const createTaskAPI = async (req, res) => {
  let result = await createTaskService(req.body);

  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const getAllTaskAPI = async (req, res) => {
  let result = await getAllTaskService(req.query);

  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const updateTaskAPI = async (req, res) => {
  let result = await updateTaskService(req.body);

  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const deleteTaskAPI = async (req, res) => {
  let result = await deleteTaskService(req.body.id);

  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

module.exports = { createTaskAPI, getAllTaskAPI, updateTaskAPI, deleteTaskAPI };
