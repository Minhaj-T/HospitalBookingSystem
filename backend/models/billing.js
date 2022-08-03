const mongoose = require('mongoose');

const billing = mongoose.Schema({
    date:{type:Date},
    userId:{type: mongoose.Schema.ObjectId, ref: 'users'},
    doctorId:{type: mongoose.Schema.ObjectId, ref: 'doctors'},
    bill:{ type:Array }
},
{
    timestamps:true
})

module.exports = mongoose.model("billing", billing);