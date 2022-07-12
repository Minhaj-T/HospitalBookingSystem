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
    profile_image:{
        type:String,
    },
    lastname:{
        type:String,
    },
    address1:{
        type:String,
    },
    address2:{
        type:String,
    },
    phone:{
        type:String,
    },
    gender:{
        type:String,
    },
    age:{
        type:String,
    },
    biography:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    country:{
        type:String,
    },
    postalCode:{
        type:String,
    },
    degree:{
        type:String,
    },
    college:{
        type:String,
    },
    completion:{
        type:String,
    },
    hospitalname:{
        type:String,
    },
    from:{
        type:String,
    },
    to:{
        type:String,
    },
    designation:{
        type:String,
    },
},
    {
        timestamps:true
    })

    module.exports=mongoose.model('doctors',doctorSchema)