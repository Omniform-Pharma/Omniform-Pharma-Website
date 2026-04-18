import { motion } from 'motion/react';
import { ArrowRight, Shield, Award, Heart, Microscope, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const products = [
    {
      title: 'Cardiovascular Solutions',
      description: 'Advanced treatments for heart health and circulatory system wellness.',
      image: 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxscyUyMG1lZGljYXRpb24lMjBwaGFybWFjeXxlbnwxfHx8fDE3NzQzNzMwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Oncology Therapeutics',
      description: 'Innovative cancer treatments backed by cutting-edge research.',
      image: 'https://images.unsplash.com/photo-1742206594477-15139139c0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBtaWNyb3Njb3BlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzQ0OTM3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Immunology Products',
      description: 'Strengthening immune systems with scientifically proven medications.',
      image: 'https://images.unsplash.com/photo-1770221797869-81e508282ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjB0ZWFtfGVufDF8fHx8MTc3NDQyNjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Neurological Care',
      description: 'Breakthrough therapies for neurological disorders and brain health.',
      image: 'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0MjM5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control at every stage of production.',
    },
    {
      icon: Award,
      title: 'FDA Approved',
      description: 'All our products meet the highest regulatory standards.',
    },
    {
      icon: Microscope,
      title: 'Advanced Research',
      description: 'State-of-the-art R&D facilities driving pharmaceutical innovation.',
    },
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'Dedicated to improving patient outcomes and quality of life.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class scientists and healthcare professionals.',
    },
    {
      icon: TrendingUp,
      title: 'Industry Leader',
      description: 'Trusted by healthcare providers worldwide for over 50 years.',
    },
  ];

  const certifications = [
    'FDA Approved',
    'ISO 9001:2015',
    'GMP Certified',
    'WHO Prequalified',
    'CE Marked',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
                  <span className="text-[#0A66C2] font-medium">Leading Pharmaceutical Innovation</span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                Your Partner in{' '}
                <span className="text-[#0A66C2]">Healthcare Excellence</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Committed to developing innovative pharmaceutical solutions that improve lives and advance global health.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-[#0A66C2] text-white rounded-lg font-semibold hover:bg-[#0856a8] transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/products"
                  className="px-8 py-4 bg-white text-[#0A66C2] border-2 border-[#0A66C2] rounded-lg font-semibold hover:bg-[#0A66C2] hover:text-white transition-all"
                >
                  Explore Products
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ0MTI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pharmaceutical Research"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A66C2]/20 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-6"
              >
                <div className="text-4xl font-bold text-[#0A66C2]">50+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061768-41a8a7d8b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzc0NDgxODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare Professional"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full">
                <span className="text-[#0A66C2] font-medium">About PharmaCare</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                Transforming Healthcare Through Innovation
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                For over five decades, PharmaCare has been at the forefront of pharmaceutical innovation, dedicated to discovering and developing medications that address critical health challenges.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to improve patient outcomes through cutting-edge research, rigorous quality standards, and a commitment to making healthcare accessible to all.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-[#0A66C2]">500+</div>
                  <div className="text-gray-600">Products Worldwide</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0A66C2]">100+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#0A66C2] font-semibold hover:gap-4 transition-all group"
              >
                Learn More About Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Our Solutions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Product Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From cardiovascular care to oncology, we offer a wide range of therapeutic solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0A66C2] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A66C2] text-white rounded-lg font-semibold hover:bg-[#0856a8] transition-all shadow-lg hover:shadow-xl group"
            >
              View All Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the pharmaceutical industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#0856a8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gradient-to-r from-[#0A66C2] to-[#0856a8]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Certified & Compliant
            </h2>
            <p className="text-blue-100 text-lg">
              Meeting the highest international standards for pharmaceutical excellence
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              >
                <span className="text-white font-semibold text-lg">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0A66C2] to-[#0856a8] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get in touch with our team to learn more about our products and services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A66C2] rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl group"
              >
                Contact Us Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
