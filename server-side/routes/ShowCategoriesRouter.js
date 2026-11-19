import express from "express";
import { ShowCategories } from "../controllers/ShowCategories.js";

const ShowRouter = express.Router();
ShowRouter.get("/categories", ShowCategories);
export default ShowRouter