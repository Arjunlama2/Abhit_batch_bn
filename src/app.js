import express from "express"
import path from "path"
import router from "./router/index.js"
import { handleError } from "./middleware/handleError.js"
import cors from "cors"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "../uploads");

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Server is running"
    })
})


app.use("/api/v1",router)
app.use('/uploads', express.static(uploadDir));
app.use(handleError)


export default app