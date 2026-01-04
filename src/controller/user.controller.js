

// crud

import mongoose from "mongoose"
import User from "../model/User.model.js"


export const createUser=async(req,res)=>{
    const data=req.body
    const user=await User.create(data)
    res.status(201).send({status:"success",data:user})
}



export const deleteUer=async (req,res)=>{
    const {id}=req.params
    const userId=new mongoose.Types.ObjectId(id)
    await User.findByIdAndDelete(userId)
    res.status(200).send("user deleted")
}



