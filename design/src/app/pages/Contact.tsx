import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Building } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Medical Plaza', 'Healthcare District', 'New York, NY 10001'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'Mon-Fri, 9AM-6PM EST'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@pharmacare.com', 'support@pharmacare.com', 'careers@pharmacare.com'],
    },
  ];

  const offices = [
    { city: 'New York', country: 'USA', address: '123 Medical Plaza, NY 10001' },
    { city: 'London', country: 'UK', address: '456 Healthcare Ave, EC1A 1BB' },
    { city: 'Singapore', country: 'Singapore', address: '789 Pharma Street, 018989' },
    { city: 'Tokyo', country: 'Japan', address: '321 Medical District, 100-0001' },
  ];

  return (
    <>
      {/* Hero Section */}
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
              Let's Start a{' '}
              <span className="text-[#0A66C2]">Conversation</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about our products or services? Our team is here to help you find the solutions you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#0856a8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20 outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="medical-affairs">Medical Affairs</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="career">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20 outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#0A66C2] text-white rounded-lg font-semibold hover:bg-[#0856a8] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#0A66C2]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-4">
                        * All times are in Eastern Standard Time (EST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0">
                    <Building className="text-[#0A66C2]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Global Offices
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className="pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <div className="font-semibold text-gray-900">
                        {office.city}, {office.country}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {office.address}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Emergency Medical Information
                </h3>
                <p className="text-gray-700 mb-4">
                  For urgent medical inquiries or adverse event reporting:
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+15551234999"
                    className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700"
                  >
                    <Phone size={18} />
                    +1 (555) 123-4999
                  </a>
                  <p className="text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/10 to-[#0856a8]/10 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-[#0A66C2] mx-auto mb-4" />
              <p className="text-gray-600 font-medium">
                Interactive Map Placeholder
              </p>
              <p className="text-sm text-gray-500 mt-2">
                123 Medical Plaza, Healthcare District, NY 10001
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
