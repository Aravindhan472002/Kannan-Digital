
// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const os = require("os");
require("dotenv").config(); // Load environment variables

// Initialize the app
const app = express();

// Middleware for JSON parsing and CORS
app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGO_URI = "mongodb+srv://aravindhan4722:Aravindhan%402002@cluster.mongodb.net/orderDetailsDB?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process on connection error
  });

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, os.tmpdir()); // Save files to the system's temporary directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Order schema
const orderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  message: { type: String },
  selectedFiles: { type: [String], default: [] },
  frame: {
    title: { type: String, required: true },
    price: { type: Number, required: true },
  },
});

const Order = mongoose.model("Order", orderSchema);

// API endpoint to handle order submission
app.post("/api/orders", upload.array("files"), async (req, res) => {
  console.log("Request received:", req.body);
  try {
    const { firstName, lastName, phone, address, message, frameTitle, framePrice } = req.body;

    // Validate input data
    if (!firstName || !lastName || !phone || !address || !frameTitle || !framePrice) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    // Map file paths
    const selectedFiles = req.files ? req.files.map((file) => file.path) : [];

    // Create new order object
    const order = new Order({
      firstName,
      lastName,
      phone,
      address,
      message,
      selectedFiles,
      frame: {
        title: frameTitle,
        price: parseFloat(framePrice),
      },
    });

    // Save to database
    const savedOrder = await order.save();
    res.status(201).json({ message: "Order saved successfully", order: savedOrder });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "Failed to save order" });
  }
});

// Start server
const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
