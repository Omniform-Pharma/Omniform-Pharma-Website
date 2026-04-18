import { motion } from "framer-motion";
import { Target, Eye, Users, Lightbulb, Award, Globe } from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";

// About page sections based on the provided design.
function AboutPage() {
  const values = [
    { icon: Lightbulb, title: "Innovation", description: "Pioneering new treatments and therapeutic approaches through continuous research and development." },
    { icon: Award, title: "Excellence", description: "Maintaining the highest standards in quality, safety, and efficacy across all our products." },
    { icon: Users, title: "Patient Focus", description: "Putting patient needs at the center of everything we do, from research to delivery." },
    { icon: Globe, title: "Global Impact", description: "Making life-saving medications accessible to communities worldwide." },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2"><span className="font-medium text-[#0A66C2]">About PharmaCare</span></div>
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">Advancing Healthcare for a <span className="text-[#0A66C2]">Healthier World</span></h1>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600">Since 1970, PharmaCare has been dedicated to discovering, developing, and delivering innovative pharmaceutical solutions that transform lives and improve global health outcomes.</p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#0856a8] p-10 text-white">
            <Target size={48} className="mb-6" />
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="text-lg leading-relaxed text-blue-50">To improve and extend lives by discovering, developing, and providing innovative pharmaceutical products that address significant unmet medical needs around the world.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white p-10">
            <Eye size={48} className="mb-6 text-[#0A66C2]" />
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-600">To be the world's most trusted pharmaceutical company, recognized for our commitment to innovation, quality, and making healthcare accessible to all who need it.</p>
          </motion.div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-xl bg-white p-8 shadow-md transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#0856a8]"><value.icon className="text-white" size={28} /></div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2"><span className="font-medium text-[#0A66C2]">Our Story</span></div>
            <h2 className="text-4xl font-bold text-gray-900">Over 50 Years of Innovation</h2>
            <p className="text-lg leading-relaxed text-gray-600">Founded in 1970, PharmaCare began with a simple yet profound mission: to create medications that truly make a difference in people's lives.</p>
          </div>
          <ImageWithFallback src="https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ0MTI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Pharmaceutical Laboratory" className="h-[500px] w-full rounded-2xl object-cover shadow-xl" />
        </div>
      </section>
    </>
  );
}

export default AboutPage;
