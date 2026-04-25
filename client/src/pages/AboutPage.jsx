import { motion } from "framer-motion";
import { Target, Eye, Users, Lightbulb, Award, Globe } from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";

// About page sections based on the provided design.
function AboutPage() {
  // const values = [
  //   {
  //     icon: Lightbulb,
  //     title: "Innovation",
  //     description:
  //       "Pioneering new treatments and therapeutic approaches through continuous research and development.",
  //   },
  //   {
  //     icon: Award,
  //     title: "Excellence",
  //     description:
  //       "Maintaining the highest standards in quality, safety, and efficacy across all our products.",
  //   },
  //   {
  //     icon: Users,
  //     title: "Patient Focus",
  //     description:
  //       "Putting patient needs at the center of everything we do, from research to delivery.",
  //   },
  //   {
  //     icon: Globe,
  //     title: "Global Impact",
  //     description:
  //       "Making life-saving medications accessible to communities worldwide.",
  //   },
  // ];
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
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Leading Omniform Pharma towards a future where healthcare is accessible to all.",
      image:
        "https://images.unsplash.com/photo-1739298061768-41a8a7d8b38f?auto=format&fit=crop&w=1080&q=80",
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Scientific Officer",
      bio: "Innovation in pharmaceutical science is the key to solving tomorrow's health challenges.",
      image:
        "https://images.unsplash.com/photo-1742206594477-15139139c0df?auto=format&fit=crop&w=1080&q=80",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of R&D",
      bio: "Our commitment to research excellence drives breakthrough treatments worldwide.",
      image:
        "https://images.unsplash.com/photo-1770221797869-81e508282ac4?auto=format&fit=crop&w=1080&q=80",
    },
  ];

  return (
    <>
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
                Founded in 1970, Omniform Pharma began with a simple yet
                profound mission: to create medications that truly make a
                difference in people's lives. What started as a small research
                facility has grown into a global pharmaceutical leader.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                Today, our portfolio includes over 500 products serving millions
                of patients across more than 100 countries. Our commitment to
                innovation, quality, and accessibility remains as strong as it
                was on day one.
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
                src="https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ0MTI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pharmaceutical Laboratory"
                className="h-[500px] w-full rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
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
      </section>

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
              <span className="font-medium text-[#0A66C2]">Leadership</span>
            </div>

            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Meet Our Executive Team
            </h2>

            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Led by industry experts committed to advancing pharmaceutical
              science.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
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
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-[#0A66C2] to-[#0856a8] py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* [
              { number: "5000+", label: "Employees Worldwide" },
              { number: "500+", label: "Products & Solutions" },
              { number: "100+", label: "Countries Served" },
              { number: "50+", label: "Years of Excellence" },
            ] */}
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
