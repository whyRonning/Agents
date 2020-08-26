const {Schema, model}= require("mongoose")

const schema=new Schema({
    street:{type:String,required:true},
    name:{type:String,required:true},
    secondName:{type:String,required:true},
    size:{type:Number,required:true},
    district:{type:String,required:true},
    house:{type:String,required:true},
    imgSrc:{type:Array,required:true},
    countApp:{type:Number,required:true},
    rooms:{type:Number,required:true},
    type:{type:String,required:true},
    phone:{type:String,required:true},
    cost:{type:Number,required:true}
})
module.exports=model("Objects",schema)