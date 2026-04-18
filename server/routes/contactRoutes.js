const express = require("express");
const { submitContactForm } = require("../controllers/contactController");

const router = express.Router();

// Public route used by website contact form.
router.post("/", submitContactForm);

module.exports = router;
