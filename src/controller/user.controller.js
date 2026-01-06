import Joi from "joi"




// crud

import mongoose from "mongoose"
import User from "../model/User.model.js"









export const deleteUer = async (req, res) => {
    const { id } = req.params
    const userId = new mongoose.Types.ObjectId(id)
    await User.findByIdAndDelete(userId)
    res.status(200).send("user deleted")
}



export const getALlUsers = async (req, res) => {
    try {
        const allusers = await User.find({},{password:0})

        res.status(200).send({ data: allusers })
    } catch (err) {
        console.log(err)
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const userID = new mongoose.Types.ObjectId(id)
        const user = await User.findById(userID)
        res.status(200).send({ data: user })
    } catch (err) {
        console.log(err)
    }
}