import express from "express"
import mongoose from "mongoose"
import { monodb_url, port } from "./config/config.js"
const app = express()
 


app.get("", (req, res) => {
    res.status(200).send({
        message: "Server is running"
    })
})

mongoose.connect(`${monodb_url}`).then(() => {
    console.log("Db Connected!")
    app.listen(port, () => {
        console.log(`server is running at port ${port}`)
    })

})



