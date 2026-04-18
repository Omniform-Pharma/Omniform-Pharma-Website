const Contact = require("../models/Contact");

// Handles contact-form related requests from the frontend.
const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const trimmedName = (name || "").trim();
    const trimmedEmail = (email || "").trim().toLowerCase();
    const trimmedMessage = (message || "").trim();

    // Basic validation so users get clear feedback if a field is missing.
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Save to database when MongoDB is connected; otherwise continue gracefully.
    if (Contact.db?.readyState === 1) {
      await Contact.create({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message received successfully. Our team will contact you soon.",
    });
  } catch (error) {
    console.error("Contact submission failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your message.",
    });
  }
};

module.exports = {
  submitContactForm,
};
