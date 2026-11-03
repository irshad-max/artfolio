import user from "../model/userinfo.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";

export const Login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(401).send("unauthorize")
    try {
        const User = await user.findOne({ email: email })
        if (!User) return res.status(401).send("email invalid")
        const check = await bcrypt.compare(password, User.password)
        if (!check) return res.status(401).send("password is worng")
        const token = jwt.sign({ _id: User._id, email: User.email }, "K9xP2mQ7vL4zA8nR5tW3bY6cD", { expiresIn: "7d" })
        res.status(200).json({ token, User })

    }
    catch (e) { console.log("error", e.message) }
}