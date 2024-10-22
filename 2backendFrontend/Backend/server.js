// const express = require('express')
import express from "express"


const app = express()


app.get('/', (req , res) => {
    res.send("Server is ready")
})

app.get('/api/jokes' , (req , res) => {
    // array of 5 jokes wiht id , title and body.
    const jokes = [
        {
            id : 1,
            title : "Joke 1",
            body : "Joke 1 body"
        },
        {
            id : 2,
            title : "Joke 2",
            body : "Joke 2 body"    
        },
        {
            id : 3,
            title : "Joke 3",
            body : "Joke 3 body"    
        },
        {
            id : 4,
            title : "Joke 4",
            body : "Joke 4 body"    
        },
        {
            id : 5,
            title : "Joke 5",
            body : "Joke 5 body"
        }
       
    ]
    res.send(jokes)
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at https://localhost:${port}`);
})