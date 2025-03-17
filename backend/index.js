require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // For parsing JSON body
app.use(cors());

// Connect to MongoDB
connectDB();

// Test API Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
