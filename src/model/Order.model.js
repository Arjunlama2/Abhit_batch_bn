import mongoose from "mongoose";


const { Schema } = mongoose
const ObjectId = mongoose.Types.ObjectId
const orderSchema = new Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    user: {
        type: ObjectId,
        ref: "User"
    },
    status: {
        enum: ["cancelled", "completed", "pending"],
        default: "pending"
    }
})

const Order = mongoose.model("Order", orderSchema)


export default Order
