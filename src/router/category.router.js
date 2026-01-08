
import express from "express"
import { createCategory, deleteCategory, getCategory } from "../controller/category.controller.js"
import { authenticate, isAdmin } from "../middleware/auth.js"

const router=express.Router()

router.post("/",authenticate,isAdmin,createCategory)
router.get("/",getCategory)
router.delete("/:id",authenticate,isAdmin,deleteCategory)



export default router