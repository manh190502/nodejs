const getHomepage = (req, res) => {
  res.send("hello");
};

const getEjs = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomepage,
  getEjs,
};
