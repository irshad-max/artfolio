import "dotenv/config";
import express from "express";
import connectDB from "./config/Databased_connection.js";
import router from "./routes/Register_routes.js";
const app = express()
app.use(express.json())
app.use("/api/users",router)
connectDB().then(() => {
    app.listen(8080, () => {
        console.log("server run sucessfully")
    })
})
