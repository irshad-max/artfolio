import express from "express"
import { SearchImage } from "../controllers/SearchDesign.js"

const Searchrouter = express.Router()
Searchrouter.get("/designs", SearchImage)
export default Searchrouter