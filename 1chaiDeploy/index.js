require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000;

console.log(process.env);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", (req , res) => {
    res.send("Please login")
})

app.get("/suraj", (req, res) => {
    res.send("<h1>I gald to that I am learning Backend development</h1>")
})

app.get("/chai", (req, res) => {
    res.send("<p>I am lucky that I am learning from Hitesh Chaudhary sir .</p>")
})

app.get("/env", (req, res) => {
  res.send(process.env.DATA)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
}) 

