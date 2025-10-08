const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const { Resend } = require('resend'); // 1. Import Resend
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const otpStore = {};

// 2. Initialize Resend with your API key from the .env file
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// SEND OTP Endpoint (Updated to use Resend)
app.post("/api/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const otp = crypto.randomInt(100000, 999999).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minute expiration
  otpStore[email] = { otp, expiresAt };

  try {
    // 3. Use resend.emails.send() instead of transporter.sendMail()
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use this required address for testing
      to: email,
      subject: 'Your Talrn Verification Code',
      html: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 5 minutes.</p>`,
    });

    console.log(`OTP sent to ${email} via Resend`);
    res.json({ message: "OTP sent successfully" });

  } catch (err) {
    console.error("Failed to send email:", err);
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

// VERIFY OTP Endpoint (No changes are needed here)
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

app.listen(PORT, () => console.log(`🚀 Backend server running on port ${PORT}`));