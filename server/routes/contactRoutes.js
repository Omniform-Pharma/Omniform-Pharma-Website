const express = require("express");
const { submitContactForm } = require("../controllers/contactController");
const rateLimit = require("express-rate-limit");

const router = express.Router();

// Public route used by website contact form.
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  limit: 10, // per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again in a few minutes.",
  },
});

router.post("/", contactLimiter, submitContactForm);

module.exports = router;
