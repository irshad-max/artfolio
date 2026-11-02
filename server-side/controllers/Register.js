import user from "../model/userinfo.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
export const RegisterUser = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) return res.status(401).send("invalid api call")
    try {
        const hashpassword = await bcrypt.hash(password, 12)
        const User = await user.create({
            name: name,
            email: email,
            password: hashpassword
        })
        const token = await jwt.sign({ _id: User._id, email: User.email }, "K9xP2mQ7vL4zA8nR5tW3bY6cD", { expiresIn: "7d" })
        res.status(200).json({token, User})
    }
    catch (e) { console.log("error", e.message) }
}