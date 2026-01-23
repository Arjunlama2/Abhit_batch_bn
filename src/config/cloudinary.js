
import cloudinary from"cloudinary"
import { api_key, api_secret, cloud_name } from "./config.js";


cloudinary.v2.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret:api_secret
});

export default  cloudinary;