import mongoose  from "mongoose";


const {Schema}=mongoose
const ObjectId = mongoose.Types.ObjectId
const bannerSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    quote:{
        type:String
    },
    product:{
        type:ObjectId,
        ref:"Product",
        required:true
    },
    description:{
        type:String
    }


})

const Banner=mongoose.model("Banner",bannerSchema)


export default Banner
