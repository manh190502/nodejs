const {
  createProjectService,
  getAllProjectService,
  deleteProjectService,
  updateProjectService,
} = require("../services/projectService");

const createProjectAPI = async (req, res) => {
  let projectData = req.body;

  let project = await createProjectService(projectData);

  return res.status(200).json({
    EC: 0,
    data: project,
  });
};

const getAllProjectAPI = async (req, res) => {
  let project = await getAllProjectService(req.query);

  return res.status(200).json({
    EC: 0,
    data: project,
  });
};

const deleteProjectAPI = async (req, res) => {
  console.log(req.body);
  let result = await deleteProjectService(req.body.id);

  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const updateProjectAPI = async (req, res) => {
  let result = await updateProjectService(req.body);

  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

module.exports = {
  createProjectAPI,
  getAllProjectAPI,
  deleteProjectAPI,
  updateProjectAPI,
};
