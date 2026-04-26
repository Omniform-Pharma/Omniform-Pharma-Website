import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Award,
  Heart,
  Microscope,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "../components/common/ImageWithFallback";
import Seo from "../components/common/Seo";

// Home page with full section structure from the provided design.
function HomePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // const products = [
  //   {
  //     title: "Cardiovascular Solutions",
  //     description:
  //       "Advanced treatments for heart health and circulatory system wellness.",
  //     image:
  //       "https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxscyUyMG1lZGljYXRpb24lMjBwaGFybWFjeXxlbnwxfHx8fDE3NzQzNzMwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   },
  //   {
  //     title: "Oncology Therapeutics",
  //     description:
  //       "Innovative cancer treatments backed by cutting-edge research.",
  //     image:
  //       "https://images.unsplash.com/photo-1742206594477-15139139c0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBtaWNyb3Njb3BlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzQ0OTM3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   },
  //   {
  //     title: "Immunology Products",
  //     description:
  //       "Strengthening immune systems with scientifically proven medications.",
  //     image:
  //       "https://images.unsplash.com/photo-1770221797869-81e508282ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjB0ZWFtfGVufDF8fHx8MTc3NDQyNjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   },
  //   {
  //     title: "Neurological Care",
  //     description:
  //       "Breakthrough therapies for neurological disorders and brain health.",
  //     image:
  //       "https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0MjM5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   },
  // ];
  const products = [
    {
      title: "Tablets",
      description:
        "General medicines, antibiotics, pain relief & multivitamins",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=80",
    },

    {
      title: "Capsules",
      description: "Softgel, hard gelatin, nutraceuticals & herbal blends",
      image:
        "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Syrups & Suspensions",
      description: "Pediatric, cough & digestive formulations",
      image:
        "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Sachets",
      description: "ORS, protein powders, probiotics & effervescent sachets",
      image:
        "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  // const features = [
  //   {
  //     icon: Shield,
  //     title: "Quality Assurance",
  //     description:
  //       "Rigorous testing and quality control at every stage of production.",
  //   },
  //   {
  //     icon: Award,
  //     title: "FDA Approved",
  //     description: "All our products meet the highest regulatory standards.",
  //   },
  //   {
  //     icon: Microscope,
  //     title: "Advanced Research",
  //     description:
  //       "State-of-the-art R&D facilities driving pharmaceutical innovation.",
  //   },
  //   {
  //     icon: Heart,
  //     title: "Patient-Centric",
  //     description:
  //       "Dedicated to improving patient outcomes and quality of life.",
  //   },
  //   {
  //     icon: Users,
  //     title: "Expert Team",
  //     description: "World-class scientists and healthcare professionals.",
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: "Industry Leader",
  //     description:
  //       "Trusted by healthcare providers worldwide for over 50 years.",
  //   },
  // ];
  const features = [
    {
      icon: Shield,
      title: "WHO-GMP Certified",
      description:
        "Manufacturing processes compliant with international quality and safety standards.",
    },
    {
      icon: Award,
      title: "ISO Certified",
      description:
        "Ensuring consistent quality management and reliable pharmaceutical production.",
    },
    {
      icon: Microscope,
      title: "Product Development",
      description:
        "Customized formulations and innovative product solutions tailored to market needs.",
    },
    {
      icon: Heart,
      title: "Private Labeling",
      description:
        "End-to-end branding and packaging solutions for your pharmaceutical business.",
    },
    {
      icon: Users,
      title: "Expert Manufacturing Team",
      description:
        "Experienced professionals dedicated to precision manufacturing and quality assurance.",
    },
    {
      icon: TrendingUp,
      title: "Export Services",
      description:
        "Serving PAN India and international markets including MENA & GCC countries.",
    },
  ];

  // const certifications = [
  //   "FDA Approved",
  //   "ISO 9001:2015",
  //   "GMP Certified",
  //   "WHO Prequalified",
  //   "CE Marked",
  // ];
  const certifications = [
    "WHO-GMP Certified",
    "ISO Certified",
    "500+ Products Manufactured",
    "Serving PAN India",
    "Export Markets",
  ];

  return (
    <>
      <Seo
        title="Home"
        description="Premium third-party pharma contract manufacturing, private labeling, product development, and export solutions across India and global markets."
      />
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A66C2]/5 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
                  <span className="font-medium text-[#0A66C2]">
                    Leading Pharmaceutical Innovation
                  </span>
                </div>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl"
              >
                {/* Your Partner in  */}
                Your Trusted Partner in{" "}
                <span className="text-[#0A66C2]">
                  Pharma Contract Manufacturing
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl leading-relaxed text-gray-600"
              >
                {/* Committed to developing innovative pharmaceutical solutions that
                improve lives and advance global health. */}
                Delivering premium third-party contract manufacturing, private
                labeling, product development, and export solutions across India
                and global markets.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0856a8] hover:shadow-xl"
                >
                  Get Started{" "}
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </Link>
                <Link
                  to="/products"
                  className="rounded-lg border-2 border-[#0A66C2] bg-white px-8 py-4 font-semibold text-[#0A66C2] transition-all duration-300 hover:bg-[#0A66C2] hover:text-white"
                >
                  Explore Products
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ0MTI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pharmaceutical Research"
                  className="h-[360px] w-full object-cover sm:h-[500px] lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A66C2]/20 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 rounded-xl bg-white p-6 shadow-2xl"
              >
                <div className="text-4xl font-bold text-[#0A66C2]">10+</div>
                <div className="font-medium text-gray-600">
                  Years of Excellence
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061768-41a8a7d8b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzc0NDgxODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare Professional"
                className="h-[320px] w-full rounded-2xl object-cover shadow-xl sm:h-[420px] lg:h-[500px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
                <span className="font-medium text-[#0A66C2]">
                  About Omniform Pharma
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                {/* Transforming Healthcare Through Innovation */}Reliable
                Pharmaceutical Manufacturing Solutions
              </h2>

              <p className="text-lg leading-relaxed text-gray-600">
                {/* For over a decade, Omniform Pharma has been at the forefront of
                pharmaceutical innovation, dedicated to discovering and
                developing medications that address critical health challenges. */}
                Omniform Pharma provides premium third-party contract
                manufacturing services tailored for pharmaceutical marketing
                companies across India and global customers.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                {/* Our mission is to improve patient outcomes through cutting-edge
                research, rigorous quality standards, and a commitment to making
                healthcare accessible to all. */}
                We also offer dossier preparation, registration support, private
                labeling, and export services with a commitment to quality,
                safety, and innovation.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-[#0A66C2]">500+</div>
                  <div className="text-gray-600">Products Worldwide</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0A66C2]">
                    MENA & GCC{/* MENA & GCC Markets */}
                  </div>
                  <div className="text-gray-600"> Markets Served</div>{" "}
                  {/*Countries */}
                </div>
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 font-semibold text-[#0A66C2] hover:gap-4 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
              <span className="font-medium text-[#0A66C2]">Our Solutions</span>
            </div>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Our Product Range
            </h2>

            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              We offer premium third-party pharma contract manufacturing across
              multiple dosage forms.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.25 }}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#0A66C2]">
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
            viewport={{ once: false, amount: 0.25 }}
            className="mt-12 text-center"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#0A66C2] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0856a8] hover:shadow-xl"
            >
              View All Products
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={20}
              />
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
              <span className="font-medium text-[#0A66C2]">Why Choose Us</span>
            </div>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Why Businesses Choose Omniform Pharma
            </h2>

            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              We provide reliable manufacturing, packaging, and export solutions
              tailored to your business.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.25 }}
                className="group rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#0856a8] transition-transform group-hover:scale-110">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#0A66C2] to-[#0856a8] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ✅ ADD THIS HEADER BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white">
              Certified & Compliant
            </h2>

            <p className="text-lg text-blue-100">
              Meeting the highest international standards for pharmaceutical
              excellence
            </p>
          </motion.div>

          {/* EXISTING CERTIFICATIONS GRID */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-sm"
              >
                <span className="text-lg font-semibold text-white">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.25 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A66C2] to-[#0856a8] p-12 text-center md:p-16"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Looking for a Trusted Manufacturing Partner?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
                Connect with us for third-party manufacturing, private labeling,
                and export solutions.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-[#0A66C2] shadow-xl transition-all duration-300 hover:bg-gray-100"
              >
                Contact Us Today
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
