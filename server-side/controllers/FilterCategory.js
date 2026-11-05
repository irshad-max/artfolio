import Design from "../model/DesignCollection.js";
export const FilterDesign = async (req, res) => {
    console.log(req.params.category)
    if (!req.params.category) return res.status(401).send("PLS SELECT CATEGORY TOO")
    try {
        const FilterImage = await Design.aggregate([
            {
                $match: { Type: req.params.category }
            }
        ])
        res.status(200).json({ FilterImage })
    }
    catch (e) { console.log("error", e.message) }
}