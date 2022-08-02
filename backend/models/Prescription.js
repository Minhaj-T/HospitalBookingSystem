const mongoose = require('mongoose');

const prescription = mongoose.Schema({
    date:{type:Date},
    userId:{type: mongoose.Schema.ObjectId, ref: 'users'},
    doctorId:{type: mongoose.Schema.ObjectId, ref: 'doctors'},
    prescription:{ type:Array }
},
{
    timestamps:true
})

module.exports = mongoose.model("prescription", prescription);