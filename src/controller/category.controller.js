import Category from "../model/Category.model.js"

export const createCategory=async(req,res)=>{
    const data=req.body
    const category=await Category.create(data)
    res.status(201).send(category)
}



