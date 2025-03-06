import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 5000;

// Multer setup for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Set in .env file
    pass: process.env.EMAIL_PASS, // Set in .env file (Use App Password if 2FA is enabled)
  },
});

app.use(express.json());

// Handle form submission
app.post("/submit-order", upload.array("files"), async (req, res) => {
  const { firstName, lastName, phone, address, message, cup } = req.body;

  const attachments = req.files.map((file) => ({
    filename: file.originalname,
    content: file.buffer,
  }));

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "your-email@example.com", // Change to your target email
    subject: "New Cup Order",
    html: `
      <h3>Order Details</h3>
      <p><strong>Customer:</strong> ${firstName} ${lastName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Message:</strong> ${message || "None"}</p>
      <p><strong>Product:</strong> ${JSON.parse(cup).title}</p>
    `,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Order submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to submit order" });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
