import mongoose, { Schema, model } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index: true
    },
    eamil: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,

    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true,

    },
    avatar: {
        type: String,  // cloudinary url 
        required: true,

    },
    coverImage: {
        type: String,   // cloudinary url
    },
    watchHistory: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ]
    },
    password: {
        type: String,
        required: [true, "password is required"],  // custom error
    },
    refreshToken: {
        type: String,
    },
}, { timestamps: true })


// middlewares
userSchema.pre("save", async function () {   // can't use arrow fn as they does not have access to this keyword
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password , 10)   // check this part (await)  TODO:
    next();
})


// adding a custom methods 
userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password , this.password)
}




export const User = model("User", userSchema);