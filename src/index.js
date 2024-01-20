// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.port}`);
    })
})
.catch((err) =>{
    console.log("db connection failed", err);
})




















// CONNECT DATABASE FIRST APPROACH IN MAIN FILE(index.js)
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";


( async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("error:", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening at port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("error:", error)
        throw error
    }
})() */