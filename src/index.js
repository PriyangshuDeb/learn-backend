// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()





















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