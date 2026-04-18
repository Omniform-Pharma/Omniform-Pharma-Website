import { useState } from 'react';
import { motion } from 'motion/react';
import { Beaker, Microscope, Shield, CheckCircle, Factory, Award, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Manufacturing() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      icon: Beaker,
      title: 'Research',
      description: 'Innovative drug discovery and formulation development',
      details: 'Our R&D team explores new molecular compounds and therapeutic approaches.',
    },
    {
      icon: Microscope,
      title: 'Development',
      description: 'Clinical trials and regulatory compliance',
      details: 'Rigorous testing phases ensuring safety and efficacy standards.',
    },
    {
      icon: Shield,
      title: 'Testing',
      description: 'Quality assurance and stability studies',
      details: 'Comprehensive testing protocols for every batch produced.',
    },
    {
      icon: Factory,
      title: 'Production',
      description: 'State-of-the-art manufacturing facilities',
      details: 'Automated systems ensuring consistent quality and efficiency.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Check',
      description: 'Final verification and certification',
      details: 'Multi-stage quality control before market release.',
    },
  ];

  const facilities = [
    {
      name: 'Main Manufacturing Hub',
      location: 'New York, USA',
      capacity: '500M Units/Year',
      image: 'https://images.unsplash.com/photo-1757578097654-fdae0f7cf008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3NDQ5NzI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      certifications: ['FDA', 'ISO 9001', 'GMP'],
    },
    {
      name: 'European Production Center',
      location: 'London, UK',
      capacity: '350M Units/Year',
      image: 'https://images.unsplash.com/photo-1764114441123-586d13fc6ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3NDQ5NzI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      certifications: ['CE', 'ISO 9001', 'GMP'],
    },
    {
      name: 'Asia Pacific Facility',
      location: 'Singapore',
      capacity: '400M Units/Year',
      image: 'https://images.unsplash.com/photo-1700727448542-50531bc60211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzc0NDk3MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      certifications: ['WHO', 'ISO 9001', 'GMP'],
    },
    {
      name: 'Quality Control Lab',
      location: 'Mumbai, India',
      capacity: '10K Tests/Day',
      image: 'https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ0MTI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      certifications: ['NABL', 'ISO 17025'],
    },
  ];

  const certifications = [
    { name: 'FDA Approved', icon: Award },
    { name: 'ISO 9001:2015', icon: Award },
    { name: 'GMP Certified', icon: Award },
    { name: 'WHO Prequalified', icon: Award },
    { name: 'CE Marked', icon: Award },
    { name: 'NABL Accredited', icon: Award },
  ];

  const stats = [
    { number: '67', label: 'Manufacturing Units' },
    { number: '1.5B+', label: 'Units Per Year' },
    { number: '99.9%', label: 'Quality Rate' },
    { number: '24/7', label: 'Production Support' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #0A66C2 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full">
                <span className="text-[#0A66C2] font-medium">Manufacturing Excellence</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                World-Class{' '}
                <span className="text-[#0A66C2]">Manufacturing</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                State-of-the-art facilities combining cutting-edge technology with stringent quality controls to deliver pharmaceutical excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#0A66C2] text-white rounded-xl font-semibold hover:bg-[#0856a8] transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  Tour Our Facilities
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1757578097654-fdae0f7cf008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3NDQ5NzI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Manufacturing Facility"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#0A66C2] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Our Process</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From research to quality check, every step is carefully monitored for excellence
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200">
              <motion.div
                className="h-full bg-gradient-to-r from-[#0A66C2] to-[#0856a8]"
                initial={{ width: '0%' }}
                whileInView={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            <div className="grid md:grid-cols-5 gap-8 relative">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    onHoverStart={() => setActiveStep(index)}
                    className="relative"
                  >
                    <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all cursor-pointer ${
                      activeStep === index ? 'ring-2 ring-[#0A66C2]' : ''
                    }`}>
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all ${
                        activeStep === index
                          ? 'bg-gradient-to-br from-[#0A66C2] to-[#0856a8]'
                          : 'bg-gray-100'
                      }`}>
                        <IconComponent
                          className={activeStep === index ? 'text-white' : 'text-gray-600'}
                          size={28}
                        />
                      </div>
                      
                      <h3 className={`text-lg font-semibold mb-2 text-center ${
                        activeStep === index ? 'text-[#0A66C2]' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 text-center mb-3">
                        {step.description}
                      </p>

                      {activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-xs text-gray-500 text-center border-t border-gray-100 pt-3"
                        >
                          {step.details}
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Step Number */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeStep === index
                        ? 'bg-[#0A66C2] text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Our Facilities</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Manufacturing Network
            </h2>
            <p className="text-xl text-gray-600">
              Strategic locations ensuring efficient global distribution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {facility.name}
                    </h3>
                    <p className="text-blue-100">{facility.location}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Production Capacity</span>
                      <p className="text-xl font-semibold text-[#0A66C2]">
                        {facility.capacity}
                      </p>
                    </div>
                    <Factory className="text-[#0A66C2]" size={32} />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {facility.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-r from-[#0A66C2] to-[#0856a8]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Certified & Compliant
            </h2>
            <p className="text-blue-100 text-lg">
              Meeting the highest international standards for pharmaceutical manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
                >
                  <IconComponent className="text-white mx-auto mb-3" size={32} />
                  <span className="text-white font-semibold text-sm">{cert.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 md:p-16 text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Want to Learn More About Our Manufacturing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a virtual tour of our facilities or speak with our manufacturing team.
            </p>
            <button className="px-8 py-4 bg-[#0A66C2] text-white rounded-xl font-semibold hover:bg-[#0856a8] transition-all shadow-lg hover:shadow-xl">
              Schedule a Facility Tour
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
