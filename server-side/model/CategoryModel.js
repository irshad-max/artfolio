import mongoose from "mongoose";

const Category = new mongoose.Schema({
    category: {
        type: String
    }
})

const category = mongoose.model("category", Category)
export default category