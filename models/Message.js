const {Schema, model}= require("mongoose");

const schema=new Schema({
    email:{type:String,required:true},
    name:{type:String,required:true},
    message:{type:String,required:true},
    phone:{type:Number,required:true},
});
module.exports=model("User",schema);