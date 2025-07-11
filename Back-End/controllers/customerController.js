const Customer = require('../models/Customer');
const { validationResult } = require('express-validator');

// @desc    Get all customers (Admin only)
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate('userId', 'name email');
    res.status(200).json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ message: 'Server error while fetching customers' });
  }
};

// @desc    Get customer by account number (Authenticated user)
const getCustomerByAccountNumber = async (req, res) => {
  const { accountNumber } = req.params;

  try {
    const customer = await Customer.findOne({ accountNumber });

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Optionally restrict non-admins to only view their own loan
    if (req.user.role !== 'admin' && customer.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied to this loan information.' });
    }

    res.status(200).json(customer);
  } catch (error) {
    console.error('Error fetching customer:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create a new customer (Admin only)
const createCustomer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const {
    userId,
    issueDate,
    interestRate,
    tenure,
    loanAmount,
    emiAmount,
    emiDue,
    nextDueDate
  } = req.body;

  try {
    const newCustomer = new Customer({
      userId,
      issueDate,
      interestRate,
      tenure,
      loanAmount,
      emiAmount,
      emiDue,
      nextDueDate
    });

    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ message: 'Server error while creating customer' });
  }
};

module.exports = {
  getAllCustomers,
  getCustomerByAccountNumber,
  createCustomer
};
