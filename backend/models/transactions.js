const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    payId:{type:String},
    date:{type:Date},
    amount:{type:Number},
    method:{type:String},
    userId:{type: mongoose.Schema.ObjectId, ref: 'users'},
    doctorId:{type: mongoose.Schema.ObjectId, ref: 'doctors'},
    status:{type:String, default:'pending'},
    slotDetails:{ type: mongoose.SchemaTypes.Mixed }
},
{
    timestamps:true
})

module.exports = mongoose.model("transactions", transactionSchema);