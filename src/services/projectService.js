const Project = require("../models/project");
const aqp = require("api-query-params");

const createProjectService = async (projectData) => {
  try {
    if (projectData.type === "EMPTY-PROJECT") {
      let result = await Project.create(projectData);

      return result;
    }

    if (projectData.type === "ADD-USERS") {
      let myProject = await Project.findById(projectData.projectId).exec();

      for (let i = 0; i < projectData.usersArr.length; i++) {
        myProject.userInfor.push(projectData.usersArr[i]);
      }

      let newResult = await myProject.save();

      return newResult;
    }

    if (projectData.type === "REMOVE-USERS") {
      let myProject = await Project.findById(projectData.projectId).exec();

      for (let i = 0; i < projectData.usersArr.length; i++) {
        myProject.userInfor.pull(projectData.usersArr[i]);
      }

      let newResult = await myProject.save();

      return newResult;
    }

    if (projectData.type === "ADD-TASK") {
      let myProject = await Project.findById(projectData.projectId);

      for (let i = 0; i < projectData.taskArr.length; i++) {
        myProject.tasks.push(projectData.taskArr[i]);
      }

      let newResult = await myProject.save();
      return newResult;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllProjectService = async (queryString) => {
  const page = queryString.page;
  const { filter, limit, population } = aqp(queryString);

  delete filter.page;

  let offset = (page - 1) * limit;

  let result = await Project.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();

  // console.log(filter);
  // let result = await Project.find({});

  return result;
};

const deleteProjectService = async (id) => {
  let result = await Project.deleteById(id);

  return result;
};

const updateProjectService = async (projectData) => {
  let project = await Project.updateOne(
    { _id: projectData.id },
    { ...projectData }
  );

  return project;
};

module.exports = {
  createProjectService,
  getAllProjectService,
  deleteProjectService,
  updateProjectService,
};
