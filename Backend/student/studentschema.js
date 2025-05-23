const mongoose=require("mongoose")
const studentschema =new mongoose.Schema({
   Name:{type:String},
   Email:{type:String},
   Password:{type:String},
   Age:{type:Number},
   image:{type:Object}

})
module.exports=new mongoose.model("students",studentschema)