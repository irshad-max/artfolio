import express from "express"
import { Login } from "../controllers/Login.js"

const LoginRoute = express.Router()
LoginRoute.post("/login", Login)
export default LoginRoute