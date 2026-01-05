import express from "express"
import { createUser, deleteUer, getALlUsers } from "../controller/user.controller.js"
import { authenticate } from "../middleware/auth.js"

const router=express.Router()

router.post("/signup",createUser)
router.get("/",authenticate,getALlUsers)


router.patch("/:id",()=>{})

router.delete("/:id",deleteUer)

export default router