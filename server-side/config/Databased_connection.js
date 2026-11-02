import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import mongoose from "mongoose"
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://khushbudeenshah_db_user:UV3Fo0QoJcpZzcqH@nexora.9cwenqd.mongodb.net/Artfolio")
        console.log("databased connect sucessfully")
    }
    catch (e) { console.log("error", e.message) }
}
export default connectDB