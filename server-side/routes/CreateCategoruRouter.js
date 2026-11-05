import express from "express"
import { CreateCatogry } from "../controllers/CreaterCategory.js"

const categoryRouter = express.Router()
categoryRouter.post("/create/category", CreateCatogry)
export default categoryRouter