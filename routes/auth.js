const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER, // iibsecouncil@gmail.com
    pass: process.env.EMAIL_PASS  // App Password
  }
});

router.post("/send-password", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.json({ success: false, message: "Email required" });
    }

    await transporter.sendMail({
      from: `"IIBSE Council" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "IIBSE Login Access",
      text:
        "Your login request has been received.\n\n" +
        "Login verification will be enabled shortly.\n\n" +
        "— IIBSE Council"
    });

    console.log("Email sent successfully to:", email);
    res.json({ success: true, message: "Email sent successfully" });

  } catch (err) {
    console.error("EMAIL ERROR:", err);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});

module.exports = router;
