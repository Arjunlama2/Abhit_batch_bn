import Banner from "../model/Banner.model.js";
import Joi from "joi"
const banerSchmea = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string(),
    quote: Joi.string(),
    product: Joi.string()

});



export const createBanner = async (req, res, next) => {
    try {

        const { error, value } = banerSchmea.validate(req.body)
        if (!error) {
            const banner = await Banner.create(value)
            res.status(201).send({ mesage: "Banner created successfully!" })
        } else {
            throw error
        }
    } catch (err) {
        next(err)
    }
}


export const getBanner=async(req,res,next)=>{
    try{
        const banner=await Banner.find({}).populate("product")
        res.status(200).send({message:"Banner fetched",data:banner})
    }catch(err){
        next(err)
    }
}

