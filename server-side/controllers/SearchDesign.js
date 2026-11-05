import Design from "../model/DesignCollection.js";
export const SearchImage = async (req, res) => {
    if (!req.query.category) return res.status(401).send("PLS SEARCH SOMETHING")
    try {
        const SearchDesign = await Design.aggregate([{ $match: { Type: req.query.category } }])
        res.status(200).json({ SearchDesign })
    }
    catch (e) { console.log("error", e.message) }
}