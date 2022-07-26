const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    payId:{type:String},
    date:{type:Date},
    amount:{type:Number},
    method:{type:String},
    userId:{type: mongoose.Schema.ObjectId, ref: 'users'},
    slotId:{type: mongoose.Schema.ObjectId},
    doctorId:{type: mongoose.Schema.ObjectId, ref: 'doctors'},
    day:{type:String},
    status:{type:String, default:'pending'},
    slotDate:{type:String}
})

module.exports = mongoose.model("transactions", transactionSchema);