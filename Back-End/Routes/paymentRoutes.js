const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { makePayment, getPaymentsByAccount } = require('../controllers/paymentController');

router.post('/', verifyToken, makePayment);
router.get('/:account_number', verifyToken, getPaymentsByAccount);

module.exports = router;
