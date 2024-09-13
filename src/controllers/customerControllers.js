const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
} = require("../services/customerService");

const createCustomersAPI = async (req, res) => {
  let { name, address, phone, email, description } = req.body;
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

const createArrayCustomersAPI = async (req, res) => {
  let customers = await createArrayCustomerService(req.body.customers);
  if (customers) {
    return res.status(200).json({
      errorCode: 0,
      data: customers,
    });
  } else {
    return res.status(200).json({
      errorCode: -1,
      data: customers,
    });
  }
};

module.exports = { createCustomersAPI, createArrayCustomersAPI };
