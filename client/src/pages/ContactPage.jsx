import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Building } from "lucide-react";
import api from "../utils/api";

// Contact page with form UI and backend-ready submission flow.
function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      await api.post("/api/contact", {
        name: formData.name,
        email: formData.email,
        message: `${formData.subject ? `[${formData.subject}] ` : ""}${formData.message}`,
      });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">Let's Start a <span className="text-[#0A66C2]">Conversation</span></h1>
          <p className="text-xl text-gray-600">Have questions about our products or services? Our team is here to help.</p>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 lg:grid-cols-2 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl bg-white p-8 shadow-xl md:p-10">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Send Us a Message</h2>
            <p className="mb-8 text-gray-600">Fill out the form below and we will get back to you.</p>
            {submitStatus === "success" && <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">Thank you! Your message has been sent successfully.</div>}
            {submitStatus === "error" && <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">Unable to send message right now. Please try again.</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" required value={formData.name} onChange={handleChange} placeholder="Full Name *" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20" />
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address *" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20" />
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20" />
              <input name="subject" required value={formData.subject} onChange={handleChange} placeholder="Subject *" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20" />
              <textarea name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Tell us more about your inquiry..." className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20" />
              <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0856a8] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50">
                {isSubmitting ? "Sending..." : <><Send size={20} /> Send Message</>}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3"><MapPin className="text-[#0A66C2]" /><h3 className="text-xl font-semibold text-gray-900">Visit Us</h3></div>
              <p className="text-gray-600">123 Medical Plaza, Healthcare District, New York, NY 10001</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3"><Phone className="text-[#0A66C2]" /><h3 className="text-xl font-semibold text-gray-900">Call Us</h3></div>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3"><Mail className="text-[#0A66C2]" /><h3 className="text-xl font-semibold text-gray-900">Email Us</h3></div>
              <p className="text-gray-600">info@pharmacare.com</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3"><Clock className="text-[#0A66C2]" /><h3 className="text-xl font-semibold text-gray-900">Business Hours</h3></div>
              <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3"><Building className="text-[#0A66C2]" /><h3 className="text-xl font-semibold text-gray-900">Global Offices</h3></div>
              <p className="text-gray-600">New York • London • Singapore • Tokyo</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
