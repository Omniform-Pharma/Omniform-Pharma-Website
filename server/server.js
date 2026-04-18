const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const contactRoutes = require("./routes/contactRoutes");

// Loads values from .env so we can keep secrets out of code.
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// Connect to MongoDB only when a connection string is provided.
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected successfully.");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message);
    });
}

// Allows frontend and backend to communicate safely.
app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.use(express.json({ limit: "1mb" }));

// Health route to quickly confirm server status.
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running.",
    database:
      mongoose.connection.readyState === 1 ? "connected" : "not_connected",
  });
});

// Contact endpoint group (initial scaffold for future form integration).
app.use("/api/contact", contactRoutes);

// Handles unknown API routes with a clear message.
app.use(/^\/api\/.*/, (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  });
});

// Centralized fallback error handler for unexpected failures.
app.use((error, req, res, next) => {
  console.error("Unhandled server error:", error);
  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
