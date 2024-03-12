import mongoose from "mongoose"
const {model,Schema}=mongoose
const dish=new  Schema({
    dname:String,
    dtype:String,
    dprice:Number,
    dtime:String,
    photo:String,
    discription:String,
    ddiscount:Number,
    dserve:Number
})

const Dish = model("dish", dish)
export default Dish