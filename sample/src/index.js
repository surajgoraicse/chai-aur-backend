import 'dotenv/config'
import { app } from "./app.js"
import connectDB from './db/index.js';


const port = process.env.PORT || 8000;

connectDB()
    .then((res) => {
        app.on("error", (error) => {
            console.log("Error :" , error);
            throw error;
        })
        app.listen(port, () => {
            console.log("server is listening at port : ", port );
        })

    }).catch((err) => {
        console.log("Database connection failed ", err);
    });







