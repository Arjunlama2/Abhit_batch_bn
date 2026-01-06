import User from "../model/User.model.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import Joi from "joi"
import { secret } from "../config/config.js";
const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
});

const loginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
});
export const createUser = async (req, res) => {
    try {
        const data = req.body
        const { error, value } = userSchema.validate(data)

        if (!error) {
            const hash = bcrypt.hashSync(value.password, 10);
            await User.create({ ...value, password: hash })
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




export const login = async (req, res) => {
    try {
        const data = req.body
        const { error, value } = loginSchema.validate(data)
        if (!error) {
            const Useremail = value.email
            const password = value.password

            const user = await User.findOne({email:Useremail})
            

            const userObject=user.toObject()
            delete userObject.password
        

            if (user) {
                const hashedPassword = user.password
                const match = bcrypt.compare(hashedPassword, password)

                if (match) {
                    const token = jwt.sign({userObject}, secret);
                    res.status(200).send({ mesage: "User Login successful", token: token })
                } else {
                    res.status(403).send({ message: "Wrong credential" })
                }

            } else {
                res.status(403).send({ message: "Wrong credential" })
            }




        } else {
            throw error
        }

    } catch (err) {
        console.log(err)
    }
}