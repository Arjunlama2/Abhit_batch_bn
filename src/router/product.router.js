import express from "express"
import { upload, uploadImage } from "../config/multer.js"
import { checkkFile } from "../middleware/checkfiles.js"
import { createProduct, getAllProducts, getProductById } from "../controller/product.controller.js"
import { authenticate, isAdmin } from "../middleware/auth.js"
const router = express.Router()
router.get("/", getAllProducts)

router.post("/", authenticate, isAdmin, upload.single("image"),uploadImage, checkkFile, createProduct)
router.get("/:id", getProductById)

export default router