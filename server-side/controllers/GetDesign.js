import Design from "../model/DesignCollection.js"
export const GetDesign = async (req, res) => {
    try {
        console.log(req.params.id)
        if (!req.params.id) return res.status(401).send("ImageId not found")
        const GetDesignss = await Design.findById({ _id: req.params.id })
        res.status(200).json({ GetDesignss })
    }
    catch (e) { console.log("error", e.message) }
}