const mongoose=require('mongoose')

//we need to create Schema for structure of the database
const eventSchema=new mongoose.Schema({
//list of things inside the schema structure and their type
name:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
category:{

    type:String,
    required:false,
},
Schedule:{
    type:Date,
    default:Date.now
},
})
//exporting schema
module.exports=mongoose.model('Event',eventSchema)