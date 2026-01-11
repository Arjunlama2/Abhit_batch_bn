import mongoose from "mongoose";


const { Schema } = mongoose
const ObjectId = mongoose.Types.ObjectId
const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },

    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
    productOf: {
        type: ObjectId,
        ref: "User"
    }

})

const Product = mongoose.model("Product", productSchema)


export default Product
