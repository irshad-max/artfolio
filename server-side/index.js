import "dotenv/config";
import express from "express";
import connectDB from "./config/Databased_connection.js";
import router from "./routes/Register_routes.js";
import LoginRoute from "./routes/Login_routes.js";
import Adminrouter from "./routes/AdminDetailRoutes.js";
import Designrouter from "./routes/Upload_Design_routes.js";

import { Auth } from "./middleware/Auth.js";
const app = express()
app.use(express.json())
app.use("/api/users", router)
app.use("/api/users", LoginRoute)
app.use("/api/user/admin-detail", Auth, Adminrouter)
app.use("/api/user", Designrouter)
connectDB().then(() => {
    app.listen(8080, () => {
        console.log("server run sucessfully")
    })
})
