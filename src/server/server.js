const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// In production set CORS_ORIGIN to your portfolio URL, e.g. https://your-portfolio.com
app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json({ limit: "20kb" }));

const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_APP_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("SMTP verification failed:", error.message);
  } else {
    console.log("SMTP connection verified.");
  }
});

app.get("/", (req, res) => {
  res.send("Portfolio contact API is running.");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "Please fill all required fields.",
      });
    }

    if (!emailUser || !emailPassword) {
      return res.status(500).json({
        message:
          "Email service is not configured. Add a valid Gmail app password in the server environment.",
      });
    }

    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: email,
      subject: `Portfolio enquiry: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}
      `,
    });

    res.status(200).json({
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);

    const message =
      error && typeof error === "object" && "code" in error && error.code === "EAUTH"
        ? "Email authentication failed. Update the Gmail app password in the server environment."
        : "Failed to send enquiry.";

    res.status(500).json({ message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});