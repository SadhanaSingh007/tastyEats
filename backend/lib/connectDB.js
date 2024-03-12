import mongoose from "mongoose";

export const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.CONNECTION_URL)
        console.log("[DB] is Connected");
    } catch (error) {
        console.log(error.message);
    }
}