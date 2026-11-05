import express from "express"
import { FilterDesign } from "../controllers/FilterCategory.js"
const FilterRouter = express.Router()
FilterRouter.get("/category/:category", FilterDesign)
export default FilterRouter