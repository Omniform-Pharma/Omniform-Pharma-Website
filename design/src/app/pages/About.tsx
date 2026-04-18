import { motion } from 'motion/react';
import { Target, Eye, Users, Lightbulb, Award, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering new treatments and therapeutic approaches through continuous research and development.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in quality, safety, and efficacy across all our products.',
    },
    {
      icon: Users,
      title: 'Patient Focus',
      description: 'Putting patient needs at the center of everything we do, from research to delivery.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making life-saving medications accessible to communities worldwide.',
    },
  ];

  const milestones = [
    { year: '1970', event: 'PharmaCare founded with a vision to revolutionize healthcare' },
    { year: '1985', event: 'First breakthrough cardiovascular drug approved' },
    { year: '1998', event: 'Expanded operations to 50+ countries' },
    { year: '2005', event: 'Launched state-of-the-art R&D facility' },
    { year: '2015', event: 'Achieved WHO prequalification for key products' },
    { year: '2026', event: 'Leading pharmaceutical innovation globally' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: '"Leading PharmaCare towards a future where healthcare is accessible to all."',
      image: 'https://images.unsplash.com/photo-1739298061768-41a8a7d8b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzc0NDgxODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Chief Scientific Officer',
      bio: '"Innovation in pharmaceutical science is the key to solving tomorrow\'s health challenges."',
      image: 'https://images.unsplash.com/photo-1742206594477-15139139c0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBtaWNyb3Njb3BlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzQ0OTM3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Research & Development',
      bio: '"Our commitment to research excellence drives breakthrough treatments for patients worldwide."',
      image: 'https://images.unsplash.com/photo-1770221797869-81e508282ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjB0ZWFtfGVufDF8fHx8MTc3NDQyNjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
    },
    {
      name: 'James Anderson',
      role: 'Chief Financial Officer',
      bio: '"Strategic financial management enables sustainable growth and global impact."',
      image: 'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0MjM5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
    },
    {
      name: 'Dr. Priya Patel',
      role: 'VP of Quality Assurance',
      bio: '"Quality is not negotiable. Every product must meet the highest standards of safety and efficacy."',
      image: 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxscyUyMG1lZGljYXRpb24lMjBwaGFybWFjeXxlbnwxfHx8fDE3NzQzNzMwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
    },
    {
      name: 'Robert Kim',
      role: 'Global Operations Director',
      bio: '"Efficient operations ensure our life-saving medications reach patients when they need them most."',
      image: 'https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ0MTI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      linkedin: '#',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
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
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
                <span className="text-[#0A66C2] font-medium">About PharmaCare</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Advancing Healthcare for a{' '}
              <span className="text-[#0A66C2]">Healthier World</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Since 1970, PharmaCare has been dedicated to discovering, developing, and delivering innovative pharmaceutical solutions that transform lives and improve global health outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0A66C2] to-[#0856a8] rounded-2xl p-10 text-white"
            >
              <Target size={48} className="mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-blue-50 leading-relaxed">
                To improve and extend lives by discovering, developing, and providing innovative pharmaceutical products that address significant unmet medical needs around the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-10"
            >
              <Eye size={48} className="text-[#0A66C2] mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the world's most trusted pharmaceutical company, recognized for our commitment to innovation, quality, and making healthcare accessible to all who need it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Our Values</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every action we take.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#0856a8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full">
                <span className="text-[#0A66C2] font-medium">Our Story</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                Over 50 Years of Innovation
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1970, PharmaCare began with a simple yet profound mission: to create medications that truly make a difference in people's lives. What started as a small research facility has grown into a global pharmaceutical leader.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Today, our portfolio includes over 500 products serving millions of patients across more than 100 countries. Our commitment to innovation, quality, and accessibility remains as strong as it was on day one.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-[#0A66C2]">50+</div>
                  <div className="text-gray-600 text-sm">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0A66C2]">500+</div>
                  <div className="text-gray-600 text-sm">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0A66C2]">100+</div>
                  <div className="text-gray-600 text-sm">Countries</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ0MTI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pharmaceutical Laboratory"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Our Journey</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A timeline of our most significant achievements and innovations.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-[#0A66C2]/20 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-[#0A66C2] rounded-full -translate-x-[9px]" />
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                  <div className="text-2xl font-bold text-[#0A66C2] mb-2">
                    {milestone.year}
                  </div>
                  <p className="text-lg text-gray-700">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Leadership</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Executive Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Led by industry experts committed to advancing pharmaceutical science.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className="relative overflow-hidden h-64">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0A66C2] font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0A66C2] to-[#0856a8]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5000+', label: 'Employees Worldwide' },
              { number: '500+', label: 'Products & Solutions' },
              { number: '100+', label: 'Countries Served' },
              { number: '50+', label: 'Years of Excellence' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
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