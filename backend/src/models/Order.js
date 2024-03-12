import mongoose from "mongoose"
const {model,Schema}=mongoose
const order=new Schema({
    dishId:String,
    userId:String,
    time:String,
    photo:String,
    dname:String,
    price:Number,
    quantity:Number,
    paymentType:String,
    states:String,
    user:Object,


})

const Order = model("order", order)
export default Order