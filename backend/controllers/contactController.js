import Contact from "../models/Contact.js";
import { sendMail } from "../utils/sendMail.js";

export const submitMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    await Contact.create({ name, email, message });

    const emailResult = await sendMail({ name, email, message });

    if (!emailResult.success) {
      return res.status(500).json({
        success: false,
        message: "Message saved, but email failed",
      });
    }

    res.json({
      success: true,
      message: "Message sent & email delivered successfully!",
    });
  } catch (error) {
    console.log("Controller Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
