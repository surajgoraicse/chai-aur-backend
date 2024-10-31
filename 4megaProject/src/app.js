import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();


// configure cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// conf json data
app.use(express.json({
    limit : "16kb", 
}))

// conf url data
app.use(express.urlencoded({
    extended: true,
    limit : "16kb"
}))

// conf to store static files (public assets)
app.use(express.static("public",))

// conf cookie-parser
app.use(cookieParser())


export {app}