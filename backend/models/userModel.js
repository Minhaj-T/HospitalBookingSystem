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
    address:{
        type:String,
    },
    mobile:{
        type:String,
    },
    age:{
        type:String,
    },
    allergies:{
        type:String,
    },
    blood_group:{
        type:String,
    },
    bp:{
        type:String,
    },
    city:{
        type:String,
    },
    gender:{
        type:String,
    },
    glucose:{
        type:String,
    },
    heart_rate:{
        type:String,
    },
    height:{
        type:String,
    },
    height_unit:{
        type:String,
    },
    profile_image:{
        type:String,
    },
    state:{
        type:String,
    },
    weight:{
        type:String,
    },
    weight_unit:{
        type:String,
    },
    zip_code:{
        type:String,
    }
},
    {
        timestamps:true
    })

    module.exports=mongoose.model('users',userSchema)