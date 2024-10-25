import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import 'dotenv/config'



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


 