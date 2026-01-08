import mongoose from "mongoose";
import Category from "../model/Category.model.js"

import Joi from "joi"
const categorySchema = Joi.object({
    title: Joi.string().required(),
});

export const createCategory = async (req, res) => {
    try {

        const { error, value } = categorySchema.validate(req.body)
        if (!error) {
            const category = await Category.create(value)
            res.status(201).send({
                message: "Category created ",
                data: category
            })
        } else {
            throw error
        }
    } catch (err) {
        console.log(err)
    }
}




export const getCategory = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).send({ message: "All cateogry", data: categories })
    } catch (err) {
        console.log(err)
    }
}

export const deleteCategory = async (req, res)=>{
    try {
        const { id } = req.params
        const categoryId = new mongoose.Types.ObjectId(id)
        await Category.findByIdAndDelete(categoryId)
        res.status(200).json({message:"category delete successfully"})
    } catch (err) {
        console.log(err)
    }
}