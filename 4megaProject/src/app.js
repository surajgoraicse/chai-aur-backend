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
    limit: "16kb",
}))

// conf url data
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

// conf to store static files (public assets)
app.use(express.static("public"))

// conf cookie-parser
app.use(cookieParser())




// import router
import userRouter from "./routes/user.routes.js";

// routes declaration  ( app.get("/users" , () =>{}) )
// here a middleware is used to create routes so,
// app.use("/users" , userRouter)

app.use("/api/v1/users", userRouter)
// http://localhost:8000/api/v1/users/ -> prfix url 
// http://localhost:8000/api/v1/users/<route> -> actual url
// when the user hit the url the control is passed to userRouter middleware




export { app }