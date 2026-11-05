import "dotenv/config";
import express from "express";
import connectDB from "./config/Databased_connection.js";
import router from "./routes/Register_routes.js";
import LoginRoute from "./routes/Login_routes.js";
import Adminrouter from "./routes/AdminDetailRoutes.js";
import Designrouter from "./routes/Upload_Design_routes.js";
import GetDesignssRoutre from "./routes/GetDesignRoutes.js";
import randomImgae from "./routes/ShowRandomDesignRouter.js";
import updateImgRouter from "./routes/UpdateImageRouter.js";
import delRouter from "./routes/DeleteRouter.js";
import FilterRouter from "./routes/FilltrRouter.js";
import Searchrouter from "./routes/SearcgRouter.js";
import categoryRouter from "./routes/CreateCategoruRouter.js";

import { Auth } from "./middleware/Auth.js";
const app = express()
app.use(express.json())
app.use("/api/users", router)
app.use("/api/users", LoginRoute)
app.use("/api/user/admin-detail", Auth, Adminrouter)
app.use("/api/user", Designrouter)
app.use("/api/user", GetDesignssRoutre)
app.use("/api/user", randomImgae)
app.use("/api/user", updateImgRouter)
app.use("/api", Auth, delRouter)
app.use("/api", FilterRouter)
app.use("/api", Searchrouter)
app.use("/api", Auth, categoryRouter)
connectDB().then(() => {
    app.listen(8080, () => {
        console.log("server run sucessfully")
    })
})
