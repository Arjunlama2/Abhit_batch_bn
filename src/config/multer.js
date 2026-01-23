import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";
import path from "path";

// ensure uploads folder exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer disk storage
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, uploadDir);
    },
    filename(req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    },
});

export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});

// Cloudinary upload middleware
export const uploadImage = async (req, res, next) => {
    try {
        if (!req.file) return next();

        const result = await cloudinary.v2.uploader.upload(
            req.file.path,
            {
                folder: "products", // ✅ Cloudinary folder name
                resource_type: "image",
            }
        );

        // remove local file
        fs.unlink(req.file.path, (err) => {
            if (err) console.log("Local file delete failed:", err.message);
        });

        // attach Cloudinary result
        req.cloudinary = {
            public_id: result.public_id,
            url: result.secure_url,
        };

        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
