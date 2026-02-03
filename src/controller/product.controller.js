import Joi from "joi"
import Product from "../model/Product.model.js";
import mongoose from "mongoose";

const productSchema = Joi.object({
    title: Joi.string().alphanum().min(3).max(30).required(),
    description: Joi.string(),
    category: Joi.string(),
    price: Joi.number().required(),
    image: Joi.string(),
    productOf: Joi.string()

});

export const createProduct = async (req, res, next) => {
    try {
        req.body.productOf = req.user._id
        const { error, value } = productSchema.validate(req.body,{
            allowUnknown:true
        })
        if (!error) {
            const product = await Product.create(value)
            res.status(201).json({ message: "Product created successfully!" })


        } else {
            throw error
        }

    } catch (err) {
        //dlete the recelty created file
        next(err)
    }
}

export const getAllProducts = async (req, res, next) => {
    try {
        const allProduct = await Product.find().populate("category").populate("productOf", { password: 0 })
        res.status(200).send({ message: "all products", data: allProduct })
    } catch (err) {
        next(err)
    }
}

export const getProductById=async ( req,res,next) => {
    try{
        const {id}=req.params

        const productId=new mongoose.Types.ObjectId(id)
        const product=await Product.findById({_id:productId})
        res.status(200).send(product)

    }catch(err){
        next(err)
    }
    
}