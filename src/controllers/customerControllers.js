const { uploadSingleFile } = require("../services/fileService");
const { createCustomerService } = require("../services/customerService");

const createCustomersAPI = async (req, res) => {
  let { name, address, phone, email, image, description } = req.body;
  let imgUrl = "";

  if (!req.files || Object.keys(req.files).length === 0) {
    //do nothing
  } else {
    let results = await uploadSingleFile(req.files.image);
    imgUrl = results.path;
  }
  let customerData = {
    name,
    address,
    phone,
    email,
    image: imgUrl,
    description,
  };
  let customer = await createCustomerService(customerData);

  return res.status(200).json({
    errorCode: 0,
    data: customer,
  });
};

module.exports = { createCustomersAPI };
