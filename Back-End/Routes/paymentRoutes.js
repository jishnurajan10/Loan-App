const express = require('express');
const router = express.Router();
const { makePayment, getPaymentsByAccount } = require('../controllers/paymentController');
const { auth } = require('../middleware/authMiddleware');

router.post('/', auth, makePayment);
router.get('/:account_number', auth, getPaymentsByAccount);

module.exports = router;
