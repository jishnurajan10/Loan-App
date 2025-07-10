const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { getAllCustomers } = require('../controllers/customerController');

router.get('/', verifyToken, getAllCustomers);

module.exports = router;
