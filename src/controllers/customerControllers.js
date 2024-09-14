const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  updateCustomersService,
  deleteCustomerService,
  deleteArrayCustomersService,
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

const getCustomersAPI = async (req, res) => {
  let limit = req.query.limit;
  let page = req.query.page;
  let name = req.query.name;
  let customers = "";

  if (limit && page) {
    customers = await getAllCustomersService(limit, page, name, req.query);
  } else {
    customers = await getAllCustomersService();
  }

  return res.status(200).json({
    EC: 0,
    data: customers,
  });
};

const updateCustomersAPI = async (req, res) => {
  let result = await updateCustomersService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const deleteCustomerAPI = async (req, res) => {
  let result = await deleteCustomerService(req.body);

  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const deleteArrayCustomersAPI = async (req, res) => {
  let result = await deleteArrayCustomersService(req.body.customersId);

  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

module.exports = {
  createCustomersAPI,
  createArrayCustomersAPI,
  getCustomersAPI,
  updateCustomersAPI,
  deleteCustomerAPI,
  deleteArrayCustomersAPI,
};
