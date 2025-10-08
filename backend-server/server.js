const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const otpStore = {};

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL })); // Allow requests from your Vite frontend
app.use(express.json());

// Transporter using secure environment variables
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// SEND OTP
app.post("/api/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const otp = crypto.randomInt(100000, 999999).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minute expiration
  otpStore[email] = { otp, expiresAt };

  try {
    await transporter.sendMail({
      from: `"Talrn Clone" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Talrn Verification Code",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
      html: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 5 minutes.</p>`,
    });
    console.log(`OTP sent to ${email}: ${otp}`);
    res.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error("Failed to send email:", err);
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

// VERIFY OTP
app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  const record = otpStore[email];

  if (!record) return res.status(400).json({ error: "OTP not found or expired. Please request a new one." });
  if (Date.now() > record.expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ error: "OTP has expired. Please request a new one." });
  }
  if (record.otp !== otp) return res.status(400).json({ error: "Invalid OTP." });

  delete otpStore[email];
  res.json({ message: "OTP verified successfully" });
});

app.listen(PORT, () => console.log(`🚀 Backend server running on http://localhost:${PORT}`));