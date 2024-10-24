// creating a schema is a 3 steps process
// step 1 : import mongoose
// step 2 : creating schema
// step 3 : export 
 

import mongoose from "mongoose";


// Basic schema
// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password : String
// });



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique : true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique : true
    },
    password: {
        type: String,
        requird : [true , "Password is required"]
    }
} , {timestamps :true});   // gives two properties .. createdAt , updatedAt

export const User = mongoose.model("User" , userSchema)
