import { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, MapPin, Users, Building2, TrendingUp, Award } from 'lucide-react';

export default function GlobalPresence() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    {
      name: 'North America',
      countries: '3 Countries',
      partners: '250+ Partners',
      description: 'Leading pharmaceutical presence across USA, Canada, and Mexico.',
      stats: { offices: 12, employees: '2,500+' },
      color: '#0A66C2',
    },
    {
      name: 'Europe',
      countries: '15 Countries',
      partners: '400+ Partners',
      description: 'Comprehensive network covering Western and Eastern Europe.',
      stats: { offices: 18, employees: '3,200+' },
      color: '#0856a8',
    },
    {
      name: 'Asia Pacific',
      countries: '12 Countries',
      partners: '300+ Partners',
      description: 'Expanding footprint in rapidly growing Asian markets.',
      stats: { offices: 15, employees: '2,800+' },
      color: '#0A66C2',
    },
    {
      name: 'Middle East & Africa',
      countries: '8 Countries',
      partners: '150+ Partners',
      description: 'Strategic presence in emerging pharmaceutical markets.',
      stats: { offices: 8, employees: '1,200+' },
      color: '#0856a8',
    },
    {
      name: 'Latin America',
      countries: '10 Countries',
      partners: '200+ Partners',
      description: 'Growing operations across Central and South America.',
      stats: { offices: 10, employees: '1,500+' },
      color: '#0A66C2',
    },
    {
      name: 'Oceania',
      countries: '2 Countries',
      partners: '80+ Partners',
      description: 'Strong presence in Australia and New Zealand markets.',
      stats: { offices: 4, employees: '600+' },
      color: '#0856a8',
    },
  ];

  const globalStats = [
    { number: '100+', label: 'Countries Worldwide', icon: Globe },
    { number: '1,400+', label: 'Global Partners', icon: Users },
    { number: '67', label: 'Manufacturing Units', icon: Building2 },
    { number: '50+', label: 'Years of Excellence', icon: Award },
  ];

  const keyMarkets = [
    { city: 'New York', country: 'USA', type: 'Headquarters', employees: 500 },
    { city: 'London', country: 'UK', type: 'Regional Office', employees: 350 },
    { city: 'Singapore', country: 'Singapore', type: 'Asia HQ', employees: 400 },
    { city: 'Mumbai', country: 'India', type: 'Manufacturing Hub', employees: 800 },
    { city: 'São Paulo', country: 'Brazil', type: 'Latin America HQ', employees: 300 },
    { city: 'Dubai', country: 'UAE', type: 'MENA Office', employees: 250 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Global Reach</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#0A66C2]">Global Presence</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Serving communities across six continents with innovative pharmaceutical solutions and unwavering commitment to global health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#0856a8] flex items-center justify-center">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-[#0A66C2] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Worldwide Distribution Network
            </h2>
            <p className="text-xl text-gray-600">
              Connected healthcare solutions across all major markets
            </p>
          </motion.div>

          {/* Map Placeholder with Markers */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-xl p-12 mb-12"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl relative overflow-hidden">
              {/* Simplified world map visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="text-[#0A66C2] opacity-20" size={200} />
              </div>

              {/* Animated Markers */}
              {[
                { top: '35%', left: '20%', label: 'New York' },
                { top: '30%', left: '50%', label: 'London' },
                { top: '45%', left: '72%', label: 'Singapore' },
                { top: '50%', left: '68%', label: 'Mumbai' },
                { top: '60%', left: '32%', label: 'São Paulo' },
                { top: '40%', left: '58%', label: 'Dubai' },
              ].map((marker, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: 'spring' }}
                  className="absolute"
                  style={{ top: marker.top, left: marker.left }}
                >
                  <div className="relative group cursor-pointer">
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-4 h-4 bg-[#0A66C2] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
                    />
                    <div className="w-3 h-3 bg-[#0A66C2] rounded-full shadow-lg" />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {marker.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regional Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full mb-4">
              <span className="text-[#0A66C2] font-medium">Our Regions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Regional Operations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredRegion(region.name)}
                onHoverEnd={() => setHoveredRegion(null)}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-md hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#0A66C2]/20 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${region.color}15` }}
                  >
                    <MapPin style={{ color: region.color }} size={28} />
                  </div>
                  <motion.div
                    animate={{ scale: hoveredRegion === region.name ? 1.1 : 1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#0856a8] flex items-center justify-center"
                  >
                    <Globe className="text-white" size={24} />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-[#0A66C2] transition-colors">
                  {region.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {region.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[#0A66C2]" />
                    <span className="text-gray-700">{region.countries}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[#0A66C2]" />
                    <span className="text-gray-700">{region.partners}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold" style={{ color: region.color }}>
                      {region.stats.offices}
                    </div>
                    <div className="text-xs text-gray-600">Offices</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: region.color }}>
                      {region.stats.employees}
                    </div>
                    <div className="text-xs text-gray-600">Employees</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Markets */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Market Locations
            </h2>
            <p className="text-xl text-gray-600">
              Strategic offices and facilities around the world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keyMarkets.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {market.city}
                    </h3>
                    <p className="text-sm text-gray-500">{market.country}</p>
                  </div>
                  <Building2 className="text-[#0A66C2]" size={24} />
                </div>
                <div className="inline-block px-3 py-1 bg-[#0A66C2]/10 rounded-full text-sm font-medium text-[#0A66C2] mb-3">
                  {market.type}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} />
                  <span>{market.employees} Employees</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A66C2] to-[#0856a8]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner with Us Globally
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Interested in distribution or partnership opportunities? Get in touch with our regional teams.
            </p>
            <button className="px-8 py-4 bg-white text-[#0A66C2] rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl">
              Contact Regional Office
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
