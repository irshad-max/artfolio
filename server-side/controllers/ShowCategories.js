import category from "../model/CategoryModel.js";
export const ShowCategories = async (req, res) => {
  if (!req.userid) return res.status(401).json({ message: "UNAUTHORIZED" });
  const categories = await category.find({});
  if (!categories)
    return res.status(404).json({ message: "there is no categories" });
  res.status(200).json({ categories });
};
