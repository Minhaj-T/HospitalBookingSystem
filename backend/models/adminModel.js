const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({
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
},
    {
        timestamps:true
    })

    module.exports=mongoose.model('admins',adminSchema)