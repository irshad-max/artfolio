import jwt from "jsonwebtoken"

export const Auth = (req, res, next) => {
    try {
        const check = req.headers.authorization
        if (!check) return res.status(401).send("invalid token")
        const token = check.split(" ")[1];
        const id = jwt.verify(token, "K9xP2mQ7vL4zA8nR5tW3bY6cD")._id
        req.userid = id
        next()
    }
    catch (e) { console.log("error", e.message) }
}