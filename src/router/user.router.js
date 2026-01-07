import express from "express"
import { deleteUer, getALlUsers } from "../controller/user.controller.js"
import { authenticate, isAdmin } from "../middleware/auth.js"
import { createUser, login } from "../controller/auth.controller.js"

const router=express.Router()

router.post("/signup",createUser)
router.post("/login",login)
router.get("/",authenticate,isAdmin,getALlUsers)


router.patch("/:id",()=>{})

router.delete("/:id",authenticate,isAdmin,deleteUer)

export default router