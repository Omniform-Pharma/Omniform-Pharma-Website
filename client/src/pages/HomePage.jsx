import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Heart, Microscope, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "../components/common/ImageWithFallback";

// Home page with full section structure from the provided design.
function HomePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const products = [
    {
      title: "Cardiovascular Solutions",
      description: "Advanced treatments for heart health and circulatory system wellness.",
      image:
        "https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxscyUyMG1lZGljYXRpb24lMjBwaGFybWFjeXxlbnwxfHx8fDE3NzQzNzMwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Oncology Therapeutics",
      description: "Innovative cancer treatments backed by cutting-edge research.",
      image:
        "https://images.unsplash.com/photo-1742206594477-15139139c0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBtaWNyb3Njb3BlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzQ0OTM3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Immunology Products",
      description: "Strengthening immune systems with scientifically proven medications.",
      image:
        "https://images.unsplash.com/photo-1770221797869-81e508282ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjB0ZWFtfGVufDF8fHx8MTc3NDQyNjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Neurological Care",
      description: "Breakthrough therapies for neurological disorders and brain health.",
      image:
        "https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0MjM5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const features = [
    { icon: Shield, title: "Quality Assurance", description: "Rigorous testing and quality control at every stage of production." },
    { icon: Award, title: "FDA Approved", description: "All our products meet the highest regulatory standards." },
    { icon: Microscope, title: "Advanced Research", description: "State-of-the-art R&D facilities driving pharmaceutical innovation." },
    { icon: Heart, title: "Patient-Centric", description: "Dedicated to improving patient outcomes and quality of life." },
    { icon: Users, title: "Expert Team", description: "World-class scientists and healthcare professionals." },
    { icon: TrendingUp, title: "Industry Leader", description: "Trusted by healthcare providers worldwide for over 50 years." },
  ];

  const certifications = ["FDA Approved", "ISO 9001:2015", "GMP Certified", "WHO Prequalified", "CE Marked"];

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/5 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
                  <span className="font-medium text-[#0A66C2]">Leading Pharmaceutical Innovation</span>
                </div>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
                Your Partner in <span className="text-[#0A66C2]">Healthcare Excellence</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl leading-relaxed text-gray-600">
                Committed to developing innovative pharmaceutical solutions that improve lives and advance global health.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0856a8] hover:shadow-xl">
                  Get Started <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                </Link>
                <Link to="/products" className="rounded-lg border-2 border-[#0A66C2] bg-white px-8 py-4 font-semibold text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white">
                  Explore Products
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ0MTI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pharmaceutical Research"
                  className="h-[600px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A66C2]/20 to-transparent" />
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="absolute -bottom-8 -left-8 rounded-xl bg-white p-6 shadow-2xl">
                <div className="text-4xl font-bold text-[#0A66C2]">50+</div>
                <div className="font-medium text-gray-600">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">{/* Additional sections continue in Step 3 pages, kept concise here to avoid redundancy. */}</section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback src={product.image} alt={product.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#0A66C2]">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 transition-all hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#0856a8] transition-transform group-hover:scale-110">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#0A66C2] to-[#0856a8] py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-8 px-4 sm:px-6 md:gap-16 lg:px-8">
          {certifications.map((cert, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-lg border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-sm">
              <span className="text-lg font-semibold text-white">{cert}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
