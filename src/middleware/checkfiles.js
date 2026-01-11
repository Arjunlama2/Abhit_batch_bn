

export const checkkFile=(req,res,next)=>{
    if(req.file){
        req.body.image=req.file.path
        next()
    }else{
        next()
    }
}



