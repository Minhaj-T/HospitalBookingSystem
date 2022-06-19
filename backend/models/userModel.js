const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
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
    phone:{
        type:String,
        required:[true,'Please add a Phone']
    },
},
    {
        timestamps:true
    })

    module.exports=mongoose.model('users',userSchema)