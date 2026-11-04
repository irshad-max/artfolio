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
    Type: {
        type: String,
        default: "Artfolio"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Design = mongoose.model("Degin_Collcetion", DesignCollection);
export default Design