import express from "express"
import mongoose from "mongoose"
import { monodb_url, port } from "./config/config.js"
import app from "./app.js"

mongoose.connect(`${monodb_url}`).then(() => {
    console.log("Db Connected!")
    app.listen(port, () => {
        console.log(`server is running at port ${port}`)
    })

})



