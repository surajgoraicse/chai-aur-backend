// require('dotenv').config({path : "./env"})
// import dotenv from 'dotenv'
// dotenv.config({
//     path : "./env"
// });


import "dotenv/config"
import connectDB from "./db/index.js";
import { app } from "./app.js";

/* Approach 1:

import express from "express";
const app = express()
(
    async function connectDB() {
        try {
          await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

            app.on("error", (error) => {
                console.log("Error : ", error);
                throw error;
            })

            app.listen(process.env.PORT, () => {
                console.log("app is listening at " , process.env.PORT);
            })
            
        } catch (error) {
            console.log("DB connection error " , error);
            throw error
        }    
    }
)();

*/

const port = process.env.PORT || 8000;          


connectDB()   // handle the promise returned by async function 
    .then(() => { 
        app.on("error", (error) => {            // handling the error event
            console.log("Error :", error);
            throw error;
        })
        app.listen( port , () => {   //define server listening port 
            console.log("Server is listening at port : " , port);
        })
    })
    .catch((error) => {      
        console.log("DB connection failes " , error);
    })