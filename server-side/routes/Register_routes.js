import express from "express"
import { RegisterUser } from "../controllers/Register.js"
const Registerrouter = express.Router()
Registerrouter.post("/register",RegisterUser)
export default Registerrouter