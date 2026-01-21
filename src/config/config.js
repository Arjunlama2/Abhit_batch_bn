import dotenv from "dotenv";
dotenv.config();
export const monodb_url = process.env.MONGODB_URI;
export const port = process.env.PORT
export const secret=process.env.JWT_SECRET
export const node_env=process.env.NODE_ENV






