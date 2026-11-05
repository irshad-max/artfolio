import express from "express"
import { deleteDesign } from "../controllers/DeleteDesign.js"

const delRouter = express.Router();
delRouter.delete("/delete/image/:id", deleteDesign)
export default delRouter