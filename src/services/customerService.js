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

const getAllCustomersService = async (limit, page) => {
  try {
    let result = "";
    if (limit && page) {
      let offset = (page - 1) * limit;
      result = await Customer.find({}).skip(offset).limit(limit).exec();
    } else {
      result = await Customer.find({});
    }
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

const deleteArrayCustomersService = async (arrId) => {
  let result = await Customer.delete({ _id: { $in: arrId } });
  return result;
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  updateCustomersService,
  deleteCustomerService,
  deleteArrayCustomersService,
};
