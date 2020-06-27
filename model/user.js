var mongoose = require("mongoose");
var nameSchema = new mongoose.Schema({
    name: String,
    email: String,
    message:String
   });
   module.exports=nameSchema