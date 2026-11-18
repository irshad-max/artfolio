import jwt from "jsonwebtoken";
import "dotenv/config";
export const Auth = (req, res, next) => {
  try {
    const check = req.headers.authorization;
    if (!check) return res.status(401).send("invalid token");
    const token = check.split(" ")[1];
    const id = jwt.verify(token, process.env.JWT_SECRET).id;
    req.userid = id;
    next();
  } catch (e) {
    console.log("error", e.message);
  }
};
