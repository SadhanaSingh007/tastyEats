import express from "express"
import {config}from "dotenv"
import cors from "cors"


const app = express()
config()
app.use(express.json())
app.use(cors())



const port = process.env.PORT||5000
app.listen(port,()=>{
    console.log(`Server is listening`,port);
})