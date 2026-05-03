const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const contactRoutes = require("./routes/contactRoutes");

// Loads values from .env so we can keep secrets out of code.
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── CORS ──────────────────────────────────────────────────────────────────
const allowedOrigins = [
  "https://omniformpharma.com",
  "https://www.omniformpharma.com",
  "http://localhost:5173",
  "http://localhost:4173", // vite preview
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, mobile apps, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle preflight OPTIONS requests for all routes
app.options("*", cors());

// ── Body parser ───────────────────────────────────────────────────────────
app.use(express.json({ limit: "1mb" }));

// ── Database ──────────────────────────────────────────────────────────────
if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected successfully."))
    .catch((error) =>
      console.error("MongoDB connection failed:", error.message)
    );
}

// ── Routes ────────────────────────────────────────────────────────────────

// Health route to quickly confirm server status.
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running.",
    database:
      mongoose.connection.readyState === 1 ? "connected" : "not_connected",
  });
});

// Contact endpoint group.
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

// ── Start ─────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
