
import express from "express"
import { createCategory } from "../controller/category.controller.js"

const router=express.Router()

router.post("/",createCategory)
router.get("/",(req,res)=>{res.send("all category")})



export default router