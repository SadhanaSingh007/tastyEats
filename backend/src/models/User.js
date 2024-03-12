import mongoose from "mongoose"
const {model, Schema}=mongoose

const user=new Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    address:String,
    type:String,
})

const User = model("user",user)
export default User