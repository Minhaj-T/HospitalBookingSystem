const express = require('express');
const router = express.Router();
const {
  getRazorKey,
  createOrder,
  verifyPayment,
} = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/get-razor-key', getRazorKey);
router.post('/create-order', createOrder);
router.post('/verify-payment', protect, verifyPayment);

module.exports = router;
