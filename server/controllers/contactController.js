const Contact = require("../models/Contact");
const { sendContactEmail } = require("../utils/mailer");

// Handles contact-form related requests from the frontend.
const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const trimmedName = (name || "").trim();
    const trimmedEmail = (email || "").trim().toLowerCase();
    const trimmedPhone = (phone || "").trim();
    const trimmedSubject = (subject || "").trim();
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

    if (trimmedName.length > 120) {
      return res.status(400).json({
        success: false,
        message: "Name is too long.",
      });
    }

    if (trimmedSubject && trimmedSubject.length > 160) {
      return res.status(400).json({
        success: false,
        message: "Subject is too long.",
      });
    }

    if (trimmedPhone && trimmedPhone.length > 40) {
      return res.status(400).json({
        success: false,
        message: "Phone number is too long.",
      });
    }

    if (trimmedMessage.length > 4000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long.",
      });
    }

    // Save to database when MongoDB is connected; otherwise continue gracefully.
    if (Contact.db?.readyState === 1) {
      await Contact.create({
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone,
        subject: trimmedSubject,
        message: trimmedMessage,
      });
    }

    // Send email via SMTP (Nodemailer). This is the primary "functional" integration.
    await sendContactEmail({
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      subject: trimmedSubject,
      message: trimmedMessage,
    });

    return res.status(200).json({
      success: true,
      message: "Message received successfully. Our team will contact you soon.",
    });
  } catch (error) {
    console.error("Contact submission failed:", error);

    if (error?.code === "MAIL_NOT_CONFIGURED") {
      return res.status(503).json({
        success: false,
        message:
          "Contact service is temporarily unavailable. Please try again later.",
      });
    }

    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong while submitting your message.",
    });
  }
};

module.exports = {
  submitContactForm,
};
