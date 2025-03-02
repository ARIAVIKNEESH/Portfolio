require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define Mongoose Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

let isSubmitting = false; // Prevent multiple submissions

app.post("/contact", async (req, res) => {
  if (isSubmitting) {
    return res.status(429).json({ message: "Please wait before submitting again." });
  }

  isSubmitting = true;
  setTimeout(() => (isSubmitting = false), 5000); // Prevents spam (5 seconds)

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All required fields must be filled." });
  }

  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(200).json({ message: "Message saved successfully!" });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
