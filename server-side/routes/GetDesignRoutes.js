import express from "express"
import { GetDesign } from "../controllers/GetDesign.js"

const GetDesignssRoutre = express.Router();
GetDesignssRoutre.get("/Get/Design/:id", GetDesign)

export default GetDesignssRoutre