const nodemailer = require("nodemailer");

function getBoolEnv(value, fallback = false) {
  if (value === undefined) return fallback;
  return ["1", "true", "yes", "on"].includes(String(value).toLowerCase());
}

function buildTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = getBoolEnv(process.env.SMTP_SECURE, port === 465);

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

async function sendContactEmail({ name, email, phone, subject, message }) {
  const transport = buildTransport();
  if (!transport) {
    const err = new Error("Email transport not configured (missing SMTP env).");
    err.code = "MAIL_NOT_CONFIGURED";
    throw err;
  }

  const to = process.env.MAIL_TO || "inquiry@omniformpharma.com";
  const from =
    process.env.MAIL_FROM ||
    `Omniform Pharma Website <${process.env.SMTP_USER}>`;

  const cleanPhone = (phone || "").trim();
  const cleanSubject = (subject || "").trim();

  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${cleanPhone || "-"}`,
    `Subject: ${cleanSubject || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
      <h2 style="margin: 0 0 12px;">New contact form submission</h2>
      <table style="border-collapse: collapse; margin-bottom: 16px;">
        <tr><td style="padding: 4px 10px 4px 0; font-weight: 700;">Name</td><td style="padding: 4px 0;">${escapeHtml(
          name
        )}</td></tr>
        <tr><td style="padding: 4px 10px 4px 0; font-weight: 700;">Email</td><td style="padding: 4px 0;"><a href="mailto:${escapeHtml(
          email
        )}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 4px 10px 4px 0; font-weight: 700;">Phone</td><td style="padding: 4px 0;">${escapeHtml(
          cleanPhone || "-"
        )}</td></tr>
        <tr><td style="padding: 4px 10px 4px 0; font-weight: 700;">Subject</td><td style="padding: 4px 0;">${escapeHtml(
          cleanSubject || "-"
        )}</td></tr>
      </table>
      <div style="padding: 12px 14px; background: #F3F4F6; border-radius: 10px; white-space: pre-wrap;">${escapeHtml(
        message
      )}</div>
    </div>
  `;

  await transport.sendMail({
    to,
    from,
    replyTo: email,
    subject: `Website Enquiry${cleanSubject ? ` - ${cleanSubject}` : ""}`,
    text,
    html,
  });
}

function escapeHtml(input) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

module.exports = {
  sendContactEmail,
};

