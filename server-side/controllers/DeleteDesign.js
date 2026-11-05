import Design from "../model/DesignCollection.js";

export const deleteDesign = async (req, res) => {
    if (!req.params.id) return res.status(401).send("IMAGEID NOT FOUND")
    try {
        if (!req.userid) return res.status(401).send("TOKEN INVALID")
        const del = await Design.findByIdAndDelete({ _id: req.params.id })
        res.status(200).send("IMAGE DELETE SUCCESSFULLY")
    }
    catch (e) { console.log("error", e.message) }
}