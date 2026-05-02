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
import sachetImg from "../assets/photos/sachets1.png";
import syrupImg from "../assets/photos/syrup.png";
import capsuleImg from "../assets/photos/capsule1.png";
import certImg from "../assets/photos/certification1.png";
import tebletImg from "../assets/photos/tablet1.png";

// Home page with full section structure from the provided design.
function HomePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const products = [
    {
      title: "Tablets",
      description:
        "General medicines, antibiotics, pain relief & multivitamins",
      image: tebletImg,
    },

    {
      title: "Capsules",
      description: "Softgel, hard gelatin, nutraceuticals & herbal blends",
      image: capsuleImg,
    },
    {
      title: "Syrups & Suspensions",
      description: "Pediatric, cough & digestive formulations",
      image: syrupImg,
    },
    {
      title: "Sachets",
      description: "ORS, protein powders, probiotics & effervescent sachets",
      image: sachetImg,
    },
  ];

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
      title: "Contract & Loan License Manufacturing",
      description:
        "Third-party and loan license manufacturing to produce and market products under your brand using our certified facilities.",
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
                Your End-to-End{" "}
                <span className="text-[#0A66C2]">Pharmaceutical Partner</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl leading-relaxed text-gray-600"
              >
                From product development to manufacturing and branded packaging,
                we help you bring your own pharmaceutical products to market
                seamlessly.
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
                  src="\src\assets\photos\roberto-sorin-RS0-h_pyByk-unsplash.jpg"
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
                className="absolute -bottom-6 left-4 rounded-xl bg-white p-6 shadow-2xl sm:-bottom-8 sm:-left-8"
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
                src="\src\assets\photos\WhatsApp Image 2026-04-12 at 9.02.37 PM (2).jpeg"
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
                Reliable Pharmaceutical Manufacturing Solutions
              </h2>

              <p className="text-lg leading-relaxed text-gray-600">
                Omniform Pharma provides premium third-party contract
                manufacturing services tailored for pharmaceutical marketing
                companies across India and global customers.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.25 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl shadow-xl bg-white p-4">
            <ImageWithFallback
              src={certImg}
              alt="Certifications"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </motion.div>
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
