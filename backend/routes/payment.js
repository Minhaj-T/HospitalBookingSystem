const express = require("express");
const router = express.Router();
const {getRazorKey,createOrder,verifyPayment}=require('../controllers/paymentController')

router.get("/get-razor-key",getRazorKey);
router.post("/create-order",createOrder);
router.post("/verify-payment", verifyPayment);
// router.get("/fetch-transactions",  fetchTransactions);





module.exports = router;