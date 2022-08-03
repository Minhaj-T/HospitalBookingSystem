const mongoose = require('mongoose');

const medicalrecords = mongoose.Schema({
    date:{type:Date},
    userId:{type: mongoose.Schema.ObjectId, ref: 'users'},
    doctorId:{type: mongoose.Schema.ObjectId, ref: 'doctors'},
    description:{ type:String},
    document:{type:String}
},
{
    timestamps:true
})

module.exports = mongoose.model("medicalrecords", medicalrecords);