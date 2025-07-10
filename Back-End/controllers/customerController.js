const Customer = require('../models/Customer');

exports.getAllCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};
