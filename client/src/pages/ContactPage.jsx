import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Building } from "lucide-react";
import api from "../utils/api";
import Seo from "../components/common/Seo";

// Contact page with form UI and backend-ready submission flow.
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      await api.post("/api/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
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
      <Seo
        title="Contact"
        description="Contact Omniform Pharma for third-party manufacturing, private labeling, product development, and export solutions."
      />
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Get in Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch <span className="text-[#0A66C2]">with Us</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Connect with us for third-party manufacturing, private labeling,
              product development, and export solutions.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 lg:grid-cols-2 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl bg-white p-8 shadow-xl md:p-10"
          >
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Enquire Now
            </h2>
            <p className="mb-8 text-gray-600">
              Tell us about your requirements and our team will contact you
              shortly.
            </p>
            {submitStatus === "success" && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                Unable to send message right now. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
              />
              <input
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
              />
              <textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your manufacturing or product requirements..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0856a8] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="text-[#0A66C2]" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Visit Us
                </h3>
              </div>
              <p className="text-gray-600">
                912, Satyamev Elite, Nr Satyamev Shivalik Ambli - Bopal, Cross,
                Road, Ahmedabad, Gujarat 380051, India
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <Phone className="text-[#0A66C2]" />
                <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
              </div>
              <p className="text-gray-600">+91 97121 12177</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <Mail className="text-[#0A66C2]" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Email Us
                </h3>
              </div>
              <p className="text-gray-600">inquiry@omniformpharma.com</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="text-[#0A66C2]" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <Building className="text-[#0A66C2]" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Global Offices
                </h3>
              </div>
              <p className="text-gray-600">India</p>
              {/* <p className="text-gray-600">India • MENA • GCC Countries</p> */}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
