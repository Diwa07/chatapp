const mongoose = require('mongoose');
const profileSchema =new mongoose.Schema({
        fullName:{type:String},
  
        id:{type:String},
        avatar:{type:String},
        file:{type:String},
        url:{type:String}

   
 

},{collection:"profile"});
module.exports=mongoose.model("profile",profileSchema);
