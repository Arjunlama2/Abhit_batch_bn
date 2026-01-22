import express from "express"
import { authenticate, isAdmin } from "../middleware/auth.js"
import { createBanner, getBanner } from "../controller/banner.controller.js"

const router=express.Router()

router.post("/",authenticate,isAdmin,createBanner)
router.get("/",getBanner)


// router.patch("/:id",()=>{})

// router.delete("/:id",authenticate,isAdmin,)

export default router