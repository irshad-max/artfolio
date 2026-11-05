import mongoose from "mongoose";

const DesignCollection = new mongoose.Schema({
    photo: [
        {
            type: String,
            required: true
        }
    ],
    Description: {
        type: String,
        default: "Image can turn into real if you feel the image"
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Design = mongoose.model("Degin_Collcetion", DesignCollection);
export default Design