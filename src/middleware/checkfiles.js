

export const checkkFile = (req, res, next) => {
    console.log(req.cloudinary)

    if (req.file) {
        req.body.image = req.cloudinary.url
        req.body.public_id=req.cloudinary.public_id
        next()
    } else {
        next()
    }
}



