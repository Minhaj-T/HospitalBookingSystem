const mongoose = require('mongoose')
const specialtiesSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a Name']
    }
},
    {
        timestamps:true
    })

    module.exports=mongoose.model('specialties',specialtiesSchema)