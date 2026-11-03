import user from "../model/userinfo.js"

export const AdmindetailRoutes = async (req, res) => {
    try {
        const User = await user.findById({ _id: req.userid }).select("name email")
        if (!User) return res.status(401).send("invalid token")
        res.status(200).json({ User })
    }
    catch (e) { console.log("error", e.message) }
}