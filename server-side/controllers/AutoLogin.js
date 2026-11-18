import user from "../model/userinfo.js";
export const AutoLogin = async (req, res) => {
  try {
    const userinfo = await user.findById({ _id: req.userid });
        if (!userinfo) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ email: userinfo.email });
  } catch (e) {
    console.log("error", e.message);
  }
};
