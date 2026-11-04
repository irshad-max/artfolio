import Design from "../model/DesignCollection.js";

export const showAllIage = async (req, res) => {
    try {
        const designs = await Design.aggregate([{ $sample: { size: 10 } }]);
        res.status(200).json({ designs })
    }
    catch (e) { console.log("error", e.message) }
}