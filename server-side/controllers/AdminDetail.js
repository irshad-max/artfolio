import user from "../model/userinfo.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";


export const AdmindetailRoutes = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userinfo = await user.findOne({ email: email });
    if (!userinfo) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, userinfo.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: userinfo._id }, process.env.JWT_SECRET, {
      expiresIn: "1y",
    });
    res.status(200).json({ token });
  } catch (e) {
    console.log("error", e.message);
  }
};
