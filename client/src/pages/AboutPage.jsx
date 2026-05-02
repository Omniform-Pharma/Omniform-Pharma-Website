import { motion } from "framer-motion";
import { Target, Eye, Users, Lightbulb, Award, Globe } from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";
import Seo from "../components/common/Seo";

// About page sections based on the provided design.
function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Developing innovative formulations and customized pharmaceutical solutions.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Ensuring strict compliance with WHO-GMP and ISO standards.",
    },
    {
      icon: Users,
      title: "Customer Commitment",
      description:
        "Delivering tailored solutions to pharmaceutical marketing companies.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Serving PAN India and international markets including MENA & GCC countries.",
    },
  ];

  const team = [
    {
      name: "Gaurav Patel",
      role: "Founder & Managing Director",
      bio: "Gaurav Patel, an MBA graduate with over 15 years of professional experience, brings extensive expertise in the pharmaceutical and laboratory testing sectors. Driven by a clear vision to bridge critical gaps in global pharmaceutical access, he founded Omniform Pharma with a focus on building a reliable, compliant, and efficient sourcing ecosystem. Having closely observed the challenges faced by healthcare providers and patients, he recognized the need for a trusted partner capable of delivering high-quality medicines from India while adhering to international standards and timelines. Under his leadership, Omniform Pharma is committed to understanding diverse healthcare needs, collaborating across global markets, and ensuring seamless, compliant supply solutions that contribute to improving lives worldwide.",
      image:
        "https://images.unsplash.com/photo-1739298061768-41a8a7d8b38f?auto=format&fit=crop&w=1080&q=80",
    },
    // {
    //   name: "Dr. Michael Chen",
    //   role: "Chief Scientific Officer",
    //   bio: "Innovation in pharmaceutical science is the key to solving tomorrow's health challenges.",
    //   image:
    //     "https://images.unsplash.com/photo-1742206594477-15139139c0df?auto=format&fit=crop&w=1080&q=80",
    // },
    // {
    //   name: "Dr. Emily Rodriguez",
    //   role: "Head of R&D",
    //   bio: "Our commitment to research excellence drives breakthrough treatments worldwide.",
    //   image:
    //     "https://images.unsplash.com/photo-1770221797869-81e508282ac4?auto=format&fit=crop&w=1080&q=80",
    // },
  ];

  return (
    <>
      <Seo
        title="About"
        description="Learn about Omniform Pharma — our mission, values, manufacturing excellence, and global reach."
      />
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
            <span className="font-medium text-[#0A66C2]">
              About Omniform Pharma
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Trusted Partner in{" "}
            <span className="text-[#0A66C2]">Pharma Manufacturing</span>
          </h1>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600">
            With 10+ years of industry experience, Omniform Pharma provides
            premium third-party contract manufacturing, private labeling, and
            export solutions across India and global markets.
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            className="rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#0856a8] p-10 text-white"
          >
            <Target size={48} className="mb-6" />
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="text-lg leading-relaxed text-blue-50">
              Our mission at Omniform Pharma is to advance healthcare by
              relentlessly pursuing innovation, delivering high-quality
              pharmaceuticals, and improving access to life-saving treatments
              for all.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            className="rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-10"
          >
            <Eye size={48} className="mb-6 text-[#0A66C2]" />
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              To become a globally recognized pharmaceutical manufacturing
              partner, specializing in innovative formulations and delivering
              high-quality, accessible healthcare solutions.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
              <span className="font-medium text-[#0A66C2]">Our Values</span>
            </div>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              What Drives Us Forward
            </h2>

            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Our core values guide every decision we make and every action we
              take.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-white p-8 shadow-md transition-all hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#0856a8]">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Company Story */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.25 }}
              className="space-y-6"
            >
              <div className="inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
                <span className="font-medium text-[#0A66C2]">Our Story</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                10+ Years of Manufacturing Excellence
              </h2>

              <p className="text-lg leading-relaxed text-gray-600">
                Our journey began with a simple vision to make quality
                pharmaceutical products more accessible, reliable, and efficient
                for businesses and communities. Omniform Pharma was established
                with a focus on bridging the gap between pharmaceutical
                manufacturing and market-ready solutions. From the very
                beginning, we have worked closely with our clients to understand
                their needs and deliver products that meet the highest standards
                of quality, compliance, and consistency.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                Over the years, we have grown into a trusted partner for
                pharmaceutical companies across India and international markets,
                offering end-to-end support, from formulation and manufacturing
                to branded packaging and export. Today, our commitment remains
                the same: to build long-term partnerships by delivering
                dependable pharmaceutical solutions with integrity, precision,
                and care.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-[#0A66C2]">10+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0A66C2]">500+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0A66C2]">
                    MENA & GCC
                  </div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.25 }}
            >
              <ImageWithFallback
                src="\src\assets\photos\about.png"
                alt="Pharmaceutical Laboratory"
                className="h-[500px] w-full rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
              <span className="font-medium text-[#0A66C2]">Our Journey</span>
            </div>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Key Milestones
            </h2>

            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              A timeline of our most significant achievements and innovations.
            </p>
          </motion.div>

          {[
            {
              year: "1970",
              event:
                "Omniform Pharma founded with a vision to revolutionize healthcare",
            },
            {
              year: "1985",
              event: "First breakthrough cardiovascular drug approved",
            },
            { year: "1998", event: "Expanded operations to 50+ countries" },
            { year: "2005", event: "Launched state-of-the-art R&D facility" },
            {
              year: "2015",
              event: "Achieved WHO prequalification for key products",
            },
            {
              year: "2026",
              event: "Leading pharmaceutical innovation globally",
            },
          ].map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: index * 0.1 }}
              className="relative border-l-2 border-[#0A66C2]/20 pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-4 w-4 -translate-x-[9px] rounded-full bg-[#0A66C2]" />

              <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all">
                <div className="mb-2 text-2xl font-bold text-[#0A66C2]">
                  {milestone.year}
                </div>
                <p className="text-lg text-gray-700">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Leadership Team */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
              <span className="font-medium text-[#0A66C2]">
                Leadership / Founder
              </span>
            </div>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              {/* Meet Our Executive Team */}
              Leadership That Drives Excellence
            </h2>

            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              {/* Led by industry experts committed to advancing pharmaceutical
              science. */}
              Guided by vision, experience, and a commitment to delivering
              reliable pharmaceutical solutions worldwide.
            </p>
          </motion.div>

          {/* <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="font-medium text-[#0A66C2]">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div> */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-white shadow-xl p-8 max-w-4xl w-full"
            >
              {/* LEFT - IMAGE */}
              <div className="w-full md:w-1/3">
                <div className="relative overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src={team[0].image}
                    alt={team[0].name}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>

              {/* RIGHT - CONTENT */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {team[0].name}
                </h3>

                <p className="mb-3 font-medium text-[#0A66C2]">
                  {team[0].role}
                </p>

                <p className="text-gray-600 leading-relaxed">{team[0].bio}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-[#0A66C2] to-[#0856a8] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Products Manufactured" },
              { number: "PAN India", label: "Market Reach" },
              { number: "Global", label: "Export Services" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
