import express from "express"
import { AdmindetailRoutes } from "../controllers/AdminDetail.js"

const Adminrouter = express.Router();
Adminrouter.get("/Auth/detail", AdmindetailRoutes);
export default Adminrouter;