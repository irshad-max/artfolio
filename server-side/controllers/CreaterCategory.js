import category from "../model/CategoryModel.js";

export const CreateCatogry = async (req, res) => {
    if (!req.body.category) return res.status(401).send("CATEGOTY REQUIRED")
    try {
        if (!req.userid) return res.stauts(401).send("UNAUTHORIZED USER")
        const Category = await category.create({
            category: req.body.category
        })
        res.status(200).json({ Category })
    }
    catch (e) { console.log("erorr", e.message) }
}