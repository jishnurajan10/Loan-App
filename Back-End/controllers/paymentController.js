const Payment = require('../models/Payment');
const Customer = require('../models/Customer');

exports.makePayment = async (req, res) => {
  const { accountNumber, amountPaid } = req.body;

  const customer = await Customer.findOne({ accountNumber });
  if (!customer) return res.status(404).json({ message: 'Customer not found' });

  customer.dueAmount -= amountPaid;
  await customer.save();

  const payment = await Payment.create({ accountNumber, amountPaid });
  res.status(201).json(payment);
};

exports.getPaymentsByAccount = async (req, res) => {
  const { account_number } = req.params;
  const payments = await Payment.find({ accountNumber: account_number });
  res.json(payments);
};
