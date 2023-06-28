const mongoose =require('mongoose');
const productschemas= new mongoose.Schema({
    name:String,
    age:String,
    contact:Number,
    address:String
});
module.exports=mongoose.model("products",productschemas);