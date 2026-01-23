import dotenv from "dotenv";
dotenv.config();
export const monodb_url = process.env.MONGODB_URI;
export const port = process.env.PORT
export const secret=process.env.JWT_SECRET
export const node_env=process.env.NODE_ENV

export const cloud_name=process.env.CLOUDINARY_CLOUD_NAME
export const api_key= process.env.CLOUDINARY_API_KEY
export const api_secret=process.env.CLOUDINARY_API_SECRET
