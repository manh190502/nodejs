const Project = require("../models/project");
const Task = require("../models/task");
const aqp = require("api-query-params");

const createTaskService = async (taskData) => {
  try {
    if (taskData.type === "EMPTY-TASK") {
      let result = await Task.create(taskData);

      return result;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllTaskService = async (queryString) => {
  const page = queryString.page;

  const { filter, limit, population } = aqp(queryString);
  delete filter.page;

  let offset = (page - 1) * limit;

  let result = await Task.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();

  return result;
};

const updateTaskService = async (taskData) => {
  let result = await Task.updateOne({ _id: taskData.id }, { ...taskData });

  return result;
};

const deleteTaskService = async (id) => {
  let result = await Task.deleteById(id);

  return result;
};
module.exports = {
  createTaskService,
  getAllTaskService,
  updateTaskService,
  deleteTaskService,
};
