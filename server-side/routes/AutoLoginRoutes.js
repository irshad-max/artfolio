import express from "express";
import { AutoLogin } from "../controllers/AutoLogin.js";

const AutoLoginrouter = express.Router();
AutoLoginrouter.get("/Auth/auto", AutoLogin);
export { AutoLoginrouter };
