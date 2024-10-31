import express from "express"
import cors from "cors"




const app = express();

// configure cors
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        Credential : true
    })
)

export {app}