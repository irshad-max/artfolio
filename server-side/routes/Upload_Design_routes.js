import express from "express";
import { Degin_Collcetion } from "../controllers/UploadDesign.js";
import upload from "../middleware/DesignAuth.js";

const Designrouter = express.Router();

Designrouter.post("/upload", upload.array("image", 10), Degin_Collcetion);

export default Designrouter;
