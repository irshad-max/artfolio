import Design from "../model/DesignCollection.js";

export const uppdateimage = async (req, res) => {
    if (!req.params.id) return res.status(404).send("ImageId not found")
    try {
        const updateDesign = await Design.findById({ _id: req.params.id })
        if (!updateDesign) {
            return res.status(404).send("Design not found");
        }
        updateDesign.photo.push(req.file.filename);
        await updateDesign.save()
        res.status(200).json("save sucessfully")
    }
    catch (e) { console.log("error", e.message) }
}