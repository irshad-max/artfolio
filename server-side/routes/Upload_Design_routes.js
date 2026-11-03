import express from "express";
import { Degin_Collcetion } from "../controllers/UploadDesign.js";
import upload from "../middleware/DesignAuth.js";

const Designrouter = express.Router();

Designrouter.post("/upload", upload.single("image"), Degin_Collcetion);

export default Designrouter;
