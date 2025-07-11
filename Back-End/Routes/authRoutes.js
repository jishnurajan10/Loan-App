const express = require('express');
const { body } = require('express-validator');


const authController = require('../controllers/authController');
const { auth } = require('../middleware/authMiddleware');

const router = express.Router();

router.post(
  '/register',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    body('firstName').notEmpty(),
    body('lastName').notEmpty()
  ],
  authController.register
);

router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').exists()
  ],
  authController.login
);

router.get('/me', auth, authController.getMe);
router.post('/logout', auth, authController.logout);

module.exports = router;
