const mongoose = require('mongoose')
const doctorSchema = mongoose.Schema({
    doctorID:{
        type:String,
        required:[true,'Please add a ID']
    },
    name:{
        type:String,
        required:[true,'Please add a Name']
    },
    email:{
        type:String,
        required:[true,'please add a Email'],
        unique : true
    },
    password:{
        type:String,
        required:[true,'Please add a Password']
    },
    gender:{
        type:String,
        required:[true,'Please add doctors gender']
    },
    phone:{
        type:Number,
        required:[true,'Please add Doctors phone']
    },
    specialization :{
        type:String,
        required:[true,'Please add Doctors specialization ']
    },
},
    {
        timestamps:true
    })

    module.exports=mongoose.model('doctors',doctorSchema)