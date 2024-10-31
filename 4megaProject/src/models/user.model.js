import mongoose , {Schema , model} from "mongoose"

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
        lowercase :true,
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
        required: [ true , "password is required"],  // custom error
    },
    refreshToken: {
        type: String,
    },
} , {timestamps : true})

export const User = model("User", userSchema);