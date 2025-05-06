import express from "express"
import cors from 'cors'
import { connectDb } from "./config/config.js"
import router from "./router/router.js"

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors("*"))

connectDb()
app.use("/", router)

app.listen(777, () => {
    console.log("Qalxdi")
})