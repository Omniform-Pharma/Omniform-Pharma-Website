import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Beaker,
  Package,
  Microscope,
  Shield,
  CheckCircle,
  Factory,
  ArrowRight,
} from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";
import Seo from "../components/common/Seo";
import manu1Img from "../assets/photos/manufacturing1.png";
import manu2Img from "../assets/photos/manufacturing2.png";

// Manufacturing page with process flow and facilities overview.
function ManufacturingPage() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      icon: Beaker,
      title: "Formulation",
      description: "Customized product development",
      details: "Innovative and market-ready formulations",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "High-quality production",
      details: "WHO-GMP compliant manufacturing",
    },
    {
      icon: Package,
      title: "Packaging",
      description: "All types of packaging",
      details: "Blister, bottles, sachets, jars and more",
    },
    {
      icon: Shield,
      title: "Quality Control",
      description: "Strict testing standards",
      details: "Ensuring quality and compliance",
    },
    {
      icon: CheckCircle,
      title: "Dispatch / Export",
      description: "PAN India & global delivery",
      details: "Serving MENA & GCC countries",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Products Manufactured" },
    { number: "PAN India", label: "Market Reach" },
    { number: "Global", label: "Export Markets" },
  ];

  const facilities = [
    {
      name: "Main Manufacturing Hub",
      location: "Ahmedabad, India",
      capacity: "500M Units/Year",
      image: manu1Img,
      certifications: ["FDA", "ISO 9001", "GMP"],
    },
    {
      name: "Asia Facility",
      location: "Ahmedabad, India",
      capacity: "400M Units/Year",
      image: manu2Img,
      certifications: ["WHO", "ISO", "GMP"],
    },
  ];

  const certifications = [
    { name: "WHO-GMP Certified", icon: CheckCircle },
    { name: "ISO Certified", icon: CheckCircle },
    { name: "Quality Assured", icon: CheckCircle },
    { name: "Export Compliant", icon: CheckCircle },
    { name: "Private Labeling", icon: CheckCircle },
    { name: "Custom Packaging", icon: CheckCircle },
  ];

  const progress = (activeStep / (processSteps.length - 1)) * 100;

  return (
    <>
      <Seo
        title="Manufacturing"
        description="End-to-end pharma manufacturing, packaging, quality control, private labeling, and export support with WHO-GMP compliant processes."
      />
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
                {/* Manufacturing Excellence */}One Stop Solution for Pharma
                Manufacturing
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Pharma Manufacturing{" "}
              <span className="text-[#0A66C2]">Excellence</span>
            </h1>

            <p className="text-xl leading-relaxed text-gray-600">
              We provide end-to-end third-party pharma contract manufacturing,
              loan licensing, packaging, and export solutions with strict
              quality standards.
            </p>

            {/* CTA */}
            <div>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("facilities")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0856a8] hover:shadow-xl"
              >
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
                src="\src\assets\photos\manufacturing.png"
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
            viewport={{ once: false, amount: 0.25 }}
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
            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)} // ✅ mobile fix
                    className="relative cursor-pointer outline-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStep(index);
                      }
                    }}
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
      <section id="facilities" className="py-20 bg-white scroll-mt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Our Facilities</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Manufacturing Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Advanced facilities for pharmaceutical manufacturing and packaging
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-100 overflow-hidden">
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
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
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
                  viewport={{ once: false, amount: 0.25 }}
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
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            className="bg-white rounded-3xl p-12 md:p-16 text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Looking for a Reliable Manufacturing Partner?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with us for third-party manufacturing, packaging, and
              export solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 bg-[#0A66C2] text-white rounded-xl font-semibold hover:bg-[#0856a8] transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ManufacturingPage;
