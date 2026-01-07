
import jwt from "jsonwebtoken"
import { secret } from "../config/config.js";

export const authenticate=(req,res,next)=>{
const token=req.headers?.authorization?.split(" ")[1]
if(token){
const user= jwt.verify(token, secret)
if(user){
    req.user=user
    next()
}

}else{
    res.status(403).send({message:"please authenticate"})
}


}





export const isAdmin=(req,res,next)=>{
    const user=req.user
    if(user.role==="admin"){
        next()
    }else{
        res.status(403).send({
            message:"you do not have permission to perfrom this action"
        })
    }
}