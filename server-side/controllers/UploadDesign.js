import Design from "../model/DesignCollection.js";

export const Degin_Collcetion = async (req, res) => {
    try {
        if (!req.file) return res.status(401).send("Design required")
        const Upload = await Design.create({
            photo: req.file.filename,
            Description: req.body.Description,
            Type: req.body.Type
        })
        res.status(200).json({ Upload })
    }
    catch (e) {
        console.log("error", e.message)
        return res.status(500).json({ message: e.message });
    }
}