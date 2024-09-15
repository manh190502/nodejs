const { createProjectService } = require("../services/projectService");

const createProjectAPI = async (req, res) => {
  let projectData = req.body;

  let project = await createProjectService(projectData);

  return res.status(200).json({
    EC: 0,
    data: project,
  });
};

module.exports = { createProjectAPI };
