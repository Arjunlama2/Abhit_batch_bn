import express from "express"
import { authenticate, isAdmin } from "../middleware/auth.js"

const router=express.Router()

// router.post("/",)
// router.get("/",)


// router.patch("/:id",()=>{})

// router.delete("/:id",authenticate,isAdmin,)

export default router