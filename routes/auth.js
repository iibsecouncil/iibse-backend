const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-password", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `IIBSE Council <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "IIBSE Login Password",
      text: "Your login password has been generated successfully."
    });

    res.json({ success: true, message: "Mail sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Mail failed" });
  }
});

module.exports = router;
