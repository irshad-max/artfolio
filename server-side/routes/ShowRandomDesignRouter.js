import express from "express"
import { showAllIage } from "../controllers/ShowAllDesign.js"
const randomImgae = express.Router()
randomImgae.get("/random/image", showAllIage)
export default randomImgae