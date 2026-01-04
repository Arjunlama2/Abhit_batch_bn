import express from "express"
import { userROuter } from "./router/index.js"


const app = express()
app.use(express.json())
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Server is running"
    })
})


app.use("/api/v1",userROuter)



export default app