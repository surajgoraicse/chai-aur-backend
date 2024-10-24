import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true
    },
    productImage: {
        type: String,

    },
    price: {
        type: Number,
        default: 0,

    },
    stock: {
        type: Number,
        default: 0
    },
    categroy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
        
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true
    }
}, { timestamps: true })

export const Product = mongoose.model("Product", productSchema)