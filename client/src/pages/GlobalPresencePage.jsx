import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Users, Building2, Award } from "lucide-react";

// Global presence page with region cards and key market highlights.
function GlobalPresencePage() {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const regions = [
    { name: "North America", countries: "3 Countries", partners: "250+ Partners", color: "#0A66C2" },
    { name: "Europe", countries: "15 Countries", partners: "400+ Partners", color: "#0856a8" },
    { name: "Asia Pacific", countries: "12 Countries", partners: "300+ Partners", color: "#0A66C2" },
  ];
  const globalStats = [
    { number: "100+", label: "Countries Worldwide", icon: Globe },
    { number: "1,400+", label: "Global Partners", icon: Users },
    { number: "67", label: "Manufacturing Units", icon: Building2 },
    { number: "50+", label: "Years of Excellence", icon: Award },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">Our <span className="text-[#0A66C2]">Global Presence</span></h1>
          <p className="text-xl text-gray-600">Serving communities across six continents with innovative pharmaceutical solutions.</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 sm:px-6 lg:px-8">
          {globalStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0A66C2] to-[#0856a8]"><Icon className="text-white" size={32} /></div>
                <div className="mb-2 text-4xl font-bold text-[#0A66C2]">{stat.number}</div><div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-3 sm:px-6 lg:px-8">
          {regions.map((region, index) => (
            <motion.div key={index} onHoverStart={() => setHoveredRegion(region.name)} onHoverEnd={() => setHoveredRegion(null)} className="rounded-xl border-2 border-gray-100 bg-white p-8 shadow-md transition-all hover:shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg" style={{ backgroundColor: `${region.color}15` }}><MapPin style={{ color: region.color }} size={28} /></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0A66C2] to-[#0856a8]"><Globe className="text-white" size={22} /></div>
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">{region.name}</h3>
              <p className="text-sm text-gray-600">{region.countries} • {region.partners}</p>
              {hoveredRegion === region.name && <p className="mt-3 text-xs text-[#0A66C2]">Regional details highlighted</p>}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default GlobalPresencePage;
