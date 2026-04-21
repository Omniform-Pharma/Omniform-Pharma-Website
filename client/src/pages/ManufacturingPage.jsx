import { useState } from "react";
import { motion } from "framer-motion";
import {
  Beaker,
  Microscope,
  Shield,
  CheckCircle,
  Factory,
  ArrowRight,
} from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";

// Manufacturing page with process flow and facilities overview.
function ManufacturingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const processSteps = [
    {
      icon: Beaker,
      title: "Research",
      description: "Innovative drug discovery",
      details: "Exploring molecules and therapies",
    },
    {
      icon: Microscope,
      title: "Development",
      description: "Clinical trials & compliance",
      details: "Ensuring safety and efficacy",
    },
    {
      icon: Shield,
      title: "Testing",
      description: "Quality assurance",
      details: "Batch-level testing protocols",
    },
    {
      icon: Factory,
      title: "Production",
      description: "Manufacturing at scale",
      details: "Automated high-quality systems",
    },
    {
      icon: CheckCircle,
      title: "Quality Check",
      description: "Final validation",
      details: "Certified before release",
    },
  ];

  const stats = [
    { number: "67", label: "Manufacturing Units" },
    { number: "1.5B+", label: "Units Per Year" },
    { number: "99.9%", label: "Quality Rate" },
    { number: "24/7", label: "Production Support" },
  ];

  const facilities = [
    {
      name: "Main Manufacturing Hub",
      location: "New York, USA",
      capacity: "500M Units/Year",
      image: "https://images.unsplash.com/photo-1757578097654-fdae0f7cf008",
      certifications: ["FDA", "ISO 9001", "GMP"],
    },
    {
      name: "Asia Facility",
      location: "Mumbai, India",
      capacity: "400M Units/Year",
      image: "https://images.unsplash.com/photo-1576670159805-622729b5b9eb",
      certifications: ["WHO", "ISO", "GMP"],
    },
  ];

  const certifications = [
    { name: "FDA Approved", icon: CheckCircle },
    { name: "ISO 9001", icon: CheckCircle },
    { name: "GMP Certified", icon: CheckCircle },
    { name: "WHO Certified", icon: CheckCircle },
    { name: "CE Marked", icon: CheckCircle },
    { name: "NABL Accredited", icon: CheckCircle },
  ];

  const progress = (activeStep / (processSteps.length - 1)) * 100;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0A66C2 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
              <span className="font-medium text-[#0A66C2]">
                Manufacturing Excellence
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              World-Class <span className="text-[#0A66C2]">Manufacturing</span>
            </h1>

            <p className="text-xl leading-relaxed text-gray-600">
              State-of-the-art facilities combining cutting-edge technology with
              stringent quality controls to deliver pharmaceutical excellence.
            </p>

            {/* CTA */}
            <div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0856a8] hover:shadow-xl">
                Tour Our Facilities
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757578097654-fdae0f7cf008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Manufacturing Facility"
                className="h-[500px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
              <span className="font-medium text-[#0A66C2]">Our Process</span>
            </div>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Manufacturing Process Flow
            </h2>

            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              From research to quality check, every step is carefully monitored
              for excellence
            </p>
          </motion.div>

          {/* TIMELINE */}
          <div className="relative max-w-6xl mx-auto">
            {/* CONNECTION LINE */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200">
              <motion.div
                className="h-full bg-gradient-to-r from-[#0A66C2] to-[#0856a8]"
                initial={{ width: "0%" }}
                animate={{
                  width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* STEPS */}
            <div className="grid gap-8 md:grid-cols-5 relative">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -6 }}
                    onHoverStart={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)} // ✅ mobile fix
                    className="relative cursor-pointer"
                  >
                    {/* CARD */}
                    <div
                      className={`rounded-xl bg-white p-6 text-center shadow-md transition-all hover:shadow-2xl ${
                        activeStep === index ? "ring-2 ring-[#0A66C2]" : ""
                      }`}
                    >
                      {/* ICON */}
                      <div
                        className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all ${
                          activeStep === index
                            ? "bg-gradient-to-br from-[#0A66C2] to-[#0856a8]"
                            : "bg-gray-100"
                        }`}
                      >
                        <Icon
                          className={
                            activeStep === index
                              ? "text-white"
                              : "text-gray-600"
                          }
                          size={28}
                        />
                      </div>

                      {/* TITLE */}
                      <h3
                        className={`mb-2 text-lg font-semibold ${
                          activeStep === index
                            ? "text-[#0A66C2]"
                            : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* DESC */}
                      <p className="mb-3 text-sm text-gray-600 text-center">
                        {step.description}
                      </p>

                      {/* DETAILS */}
                      {activeStep === index && step.details && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="border-t border-gray-100 pt-3 text-xs text-gray-500 text-center"
                        >
                          {step.details}
                        </motion.div>
                      )}
                    </div>

                    {/* STEP NUMBER */}
                    <div
                      className={`absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                        activeStep === index
                          ? "bg-[#0A66C2] text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
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
                      <span className="text-sm text-gray-600">
                        Production Capacity
                      </span>
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
              Meeting the highest international standards for pharmaceutical
              manufacturing
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
                  <IconComponent
                    className="text-white mx-auto mb-3"
                    size={32}
                  />
                  <span className="text-white font-semibold text-sm">
                    {cert.name}
                  </span>
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
              Schedule a virtual tour of our facilities or speak with our
              manufacturing team.
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

export default ManufacturingPage;
