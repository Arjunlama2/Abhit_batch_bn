import { node_env } from "../config/config.js"

export const handleError = (err, req, res, next) => {
    console.log("this is erroo handle function", err)
    let status = 500
    let message = "Internal Server Error "


    if (err.name === "ValidationError") {
        status = 400
        message = err.message
        res.status(status).send({
            message: message
        })
        return
    }

    if (node_env == "development") {
        res.status(status).send(err.stack)
    } else {
        res.status(status).send({ message: message })
    }

}