import express from "express"
import { createUser, deleteUer } from "../controller/user.controller.js"
import { authenticate } from "../middleware/auth.js"

const router=express.Router()

router.post("/user",createUser)
router.get("/user",authenticate,(req,res)=>{
    res.send("all user")
})


router.patch("/user/:id",()=>{})

router.delete("/user/:id",authenticate,deleteUer)

export default router