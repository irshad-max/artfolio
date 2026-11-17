import user from "../model/userinfo.js";
import "dotenv/config";
import bcrypt from "bcryptjs";
export const CreateAdmin = async (req, res) => {
  try {
    const ADMINEMAIL = process.env.ADMINEMAIL;
    const ADMINPASSWORD = process.env.ADMINPASSWORD;

    const existingAdmin = await user.findOne({
      email: ADMINEMAIL,
    });
    if (existingAdmin) {
      return console.log("Admin already exists");
    }
    const hashpassword = await bcrypt.hash(ADMINPASSWORD, 10);
    await user.create({
      email: ADMINEMAIL,
      password: hashpassword,
    });
   console.log("Admin created successfully")
  } catch (e) {
    console.log("Server error");
  }
};
