const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    payId:{type:String},
    date:{type:Date},
    amount:{type:Number},
    method:{type:String},
    userId:{type: mongoose.Schema.ObjectId, ref: 'userModel'},
    slotId:{type: mongoose.Schema.ObjectId},
    doctorId:{type: mongoose.Schema.ObjectId, ref: 'doctorModel'},
    day:{type:String}
})

module.exports = mongoose.model("transactions", transactionSchema);