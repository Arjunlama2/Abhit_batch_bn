import Joi from "joi"

const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
});


// crud

import mongoose from "mongoose"
import User from "../model/User.model.js"
import bcrypt from "bcryptjs";


export const createUser = async (req, res) => {
    try {
        const data = req.body
        const { error, value } = userSchema.validate(data)

        if (!error) {
            const hash = bcrypt.hashSync(value.password, 10);
            await User.create({...value,password:hash})
            res.status(201).send()

        } else {
            throw error
        }


    }
    catch (err) {
        console.log(err)
        res.send(400).send("Bad request")
    }
}



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