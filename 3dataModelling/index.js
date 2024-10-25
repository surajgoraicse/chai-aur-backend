

import express from "express"
import 'dotenv/config'


const port = process.env.PORT || 3000;

const app =  express();


app.get("/", (req , res) => {
    res.send("Hello this is a local server hosted at port 4000" )
})


app.listen(port, () => {
    console.log(` app listening on port ${port}`)
})
  



