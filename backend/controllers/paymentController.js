const asyncHandler = require('express-async-handler');
const Razorpay = require('razorpay');
const Transactions = require('../models/transactions');
const crypto = require("crypto");

// @desc    Get Razorpay key
// @rout    GET /api/payment/get-razor-key
const getRazorKey = asyncHandler(async (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_KEY });
});

// @desc    Create order
// @rout    POST /api/payment/create-order
const createOrder = asyncHandler(async (req, res) => {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  const options = {
    amount: parseInt(Math.round(req.body.amount)),
    currency: 'INR',
  };
 
  const order = await instance.orders.create(options);
  if (!order) return res.status(500).send('Some error occured');
  res.status(200).json({ ...order, key: process.env.RAZORPAY_KEY });
});

// @desc    Verify Rayzor payment
// @rout    POST /api/payment/verify-payment
const verifyPayment = asyncHandler(async (req, res) => {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      amount,
      // decodeId: sponsorId,
    } = req.body;
  
    let hmac = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    hmac = hmac.digest("hex");
  
    if (hmac == razorpay_signature) {
      const newTransaction = Transactions({
        payId: razorpay_payment_id,
        date: new Date(),
        amount: amount / 100,
        method: "RAZOR",
        // sponsorId,
      });
      await newTransaction.save();
  
      res.status(200).json({
        status: true,
        message: "Payment Successfull !",
        tranId: newTransaction._id,
      });
    } else {
      res.status(400).json({ status: false, message: "Payment Failed" });
    }
  });

module.exports = {
  getRazorKey,
  createOrder,
  verifyPayment
};
