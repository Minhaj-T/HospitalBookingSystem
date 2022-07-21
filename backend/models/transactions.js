const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    payId:{type:String},
    date:{type:Date},
    amount:{type:Number},
    method:{type:String},
    // userId:{type: mongoose.Schema.ObjectId, ref: 'userModel'},
    // SloatID:{type: mongoose.Schema.ObjectId},
})

module.exports = mongoose.model("transactions", transactionSchema);