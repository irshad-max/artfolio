import express from "express"
import { AdmindetailRoutes } from "../controllers/AdminDetail.js"

const Adminrouter = express.Router();
Adminrouter.post("/Auth/detail", AdmindetailRoutes);
export default Adminrouter;