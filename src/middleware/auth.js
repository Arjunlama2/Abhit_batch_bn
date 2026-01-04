export const authenticate=(req,res,next)=>{
let isUser=true

if(isUser){
    next()
}else{
    res.status(401).send({message:"please authenticate"})
}
}