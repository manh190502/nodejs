const Project = require("../models/project");
const aqp = require("api-query-params");

const createProjectService = async (projectData) => {
  try {
    let result = await Project.create({
      name: projectData.name,
      startDate: projectData.startDate,
      endDate: projectData.endDate,
      description: projectData.description,
      customerInfor: projectData.customerInfor,
      userInfor: projectData.userInfor,
      leader: projectData.leader,
      tasks: projectData.tasks,
    });

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { createProjectService };
