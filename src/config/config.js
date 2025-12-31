import dotenv from "dotenv";
dotenv.config();
export const monodb_url = process.env.MONGODB_URI;
export const port = process.env.PORT
