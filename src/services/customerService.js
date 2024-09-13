const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log(">>>error", error);
    return null;
  }
};

const getAllCustomers = async () => {
  try {
    let result = await Customer.find({});
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const updateCustomersService = async (customer) => {
  let result = await Customer.updateOne(
    { _id: customer.id },
    {
      name: customer.name,
      address: customer.address,
      email: customer.email,
    }
  );
  return result;
};

const deleteCustomerService = async (customer) => {
  let result = await Customer.deleteById(customer.id);
  return result;
};
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomers,
  updateCustomersService,
  deleteCustomerService,
};
