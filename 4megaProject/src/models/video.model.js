import mongoose , {Schema , model} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema({
    videoFile: {
        type : String,
        required: true,
        
    },
    thumbnail: {
        type : String,
        required: true,
        
    },
    title: {
        type : String,
        required: true,
        trim : true
        
    },
    discription: {
        type : String,
        required: true,
        trim : true
        
    },
    duration: {
        type : Number,   // Cloudinary
        required: true,
        
    },
    views: {
        type: Number,
        default: 0,
        
    },
    idPublished: {
        type : Boolean,
        default : true
        
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref : "User"
    }





} , {timestamps : true})


export const Video = model("Video" , videoSchema)