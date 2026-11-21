import cors from "cors";
import express from "express";
import path from "path";
import connectDB from "./config/Databased_connection.js";
import { CreateAdmin } from "./controllers/Login.js";
import Adminrouter from "./routes/AdminDetailRoutes.js";
import Designrouter from "./routes/Upload_Design_routes.js";
import GetDesignssRoutre from "./routes/GetDesignRoutes.js";
import randomImgae from "./routes/ShowRandomDesignRouter.js";
import updateImgRouter from "./routes/UpdateImageRouter.js";
import delRouter from "./routes/DeleteRouter.js";
import FilterRouter from "./routes/FilltrRouter.js";
import Searchrouter from "./routes/SearcgRouter.js";
import categoryRouter from "./routes/CreateCategoruRouter.js";
import {AutoLoginrouter} from "./routes/AutoLoginRoutes.js";
import ShowRouter from './routes/ShowCategoriesRouter.js'
import { Auth } from "./middleware/Auth.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api/user/admin-detail",Adminrouter);
app.use("/api/user", Designrouter);
app.use("/api/user", GetDesignssRoutre);
app.use("/api/user", randomImgae);
app.use("/api/user", updateImgRouter);
app.use("/api", Auth, delRouter);
app.use("/api", FilterRouter);
app.use("/api", Searchrouter);
app.use("/api", Auth, categoryRouter);
app.use("/api", Auth, AutoLoginrouter);
app.use("/api",Auth,ShowRouter);
connectDB().then(async () => {
  await CreateAdmin();
  app.listen(8080, () => {
    console.log("server run sucessfully");
  });
});
