import express from "express"
import upload from "../middleware/DesignAuth.js";
import { uppdateimage } from "../controllers/UpdateImage.js"

const updateImgRouter = express.Router();
updateImgRouter.put("/update/image/:id", upload.single("image"), uppdateimage)
export default updateImgRouter