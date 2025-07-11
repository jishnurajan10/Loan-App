const express = require('express');
const router = express.Router();
const {
  getAllCustomers,
  getCustomerByAccountNumber,
  createCustomer
} = require('../controllers/customerController');

const { auth, adminAuth } = require('../middleware/authMiddleware');

// Routes with proper middleware
router.get('/', auth, adminAuth, getAllCustomers);                     // Admin: View all customers
router.get('/:accountNumber', auth, getCustomerByAccountNumber);      // Authenticated user: View own loan
router.post('/', auth, adminAuth, createCustomer);                    // Admin: Create customer

module.exports = router;
