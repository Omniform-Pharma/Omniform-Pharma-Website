import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Users, Building2, Award } from "lucide-react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// ✅ FIX: world-atlas TopoJSON uses NUMERIC ISO 3166-1 codes as geo.id
// NOT alpha-3 strings like "USA", "GBR" etc. — that's why nothing was highlighting.
const marketData = {
  840: { label: "Headquarters", city: "New York, USA", employees: 500 }, // USA
  826: { label: "Regional Office", city: "London, UK", employees: 350 }, // UK
  356: { label: "Manufacturing Hub", city: "Mumbai, India", employees: 800 }, // India
  702: { label: "Asia HQ", city: "Singapore", employees: 400 }, // Singapore
  784: { label: "MENA Office", city: "Dubai, UAE", employees: 250 }, // UAE
  76: { label: "LATAM HQ", city: "São Paulo, Brazil", employees: 300 }, // Brazil
};

function GlobalPresencePage() {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const regions = [
    {
      name: "North America",
      countries: "3 Countries",
      partners: "250+ Partners",
      description:
        "Leading pharmaceutical presence across USA, Canada, and Mexico.",
      stats: { offices: 12, employees: "2,500+" },
      color: "#0A66C2",
    },
    {
      name: "Europe",
      countries: "15 Countries",
      partners: "400+ Partners",
      description: "Comprehensive network covering Western and Eastern Europe.",
      stats: { offices: 18, employees: "3,200+" },
      color: "#0856a8",
    },
    {
      name: "Asia Pacific",
      countries: "12 Countries",
      partners: "300+ Partners",
      description: "Expanding footprint in rapidly growing Asian markets.",
      stats: { offices: 15, employees: "2,800+" },
      color: "#0A66C2",
    },
    {
      name: "Middle East & Africa",
      countries: "8 Countries",
      partners: "150+ Partners",
      description: "Strategic presence in emerging pharmaceutical markets.",
      stats: { offices: 8, employees: "1,200+" },
      color: "#0856a8",
    },
    {
      name: "Latin America",
      countries: "10 Countries",
      partners: "200+ Partners",
      description: "Growing operations across Central and South America.",
      stats: { offices: 10, employees: "1,500+" },
      color: "#0A66C2",
    },
    {
      name: "Oceania",
      countries: "2 Countries",
      partners: "80+ Partners",
      description: "Strong presence in Australia and New Zealand markets.",
      stats: { offices: 4, employees: "600+" },
      color: "#0856a8",
    },
  ];

  const globalStats = [
    { number: "100+", label: "Countries Worldwide", icon: Globe },
    { number: "1,400+", label: "Global Partners", icon: Users },
    { number: "67", label: "Manufacturing Units", icon: Building2 },
    { number: "50+", label: "Years of Excellence", icon: Award },
  ];

  const keyMarkets = [
    { city: "New York", country: "USA", type: "HQ", employees: 500 },
    { city: "London", country: "UK", type: "Regional Office", employees: 350 },
    {
      city: "Singapore",
      country: "Singapore",
      type: "Asia HQ",
      employees: 400,
    },
    {
      city: "Mumbai",
      country: "India",
      type: "Manufacturing Hub",
      employees: 800,
    },
    { city: "Dubai", country: "UAE", type: "MENA Office", employees: 250 },
    { city: "São Paulo", country: "Brazil", type: "LATAM HQ", employees: 300 },
  ];

  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
              <span className="font-medium text-[#0A66C2]">Global Reach</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl leading-tight">
              Our <span className="text-[#0A66C2]">Global Presence</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Serving communities across six continents with innovative
              pharmaceutical solutions and unwavering commitment to global
              health.
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

      {/* WORLD MAP */}
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-xl p-8"
          >
            <ComposableMap
              projectionConfig={{ scale: 150 }}
              className="w-full h-[500px]"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    // geo.id is a numeric string e.g. "840" for USA
                    const info = marketData[String(geo.id)];
                    const isActive = !!info;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          if (isActive) setTooltip(info);
                        }}
                        onMouseLeave={() => setTooltip(null)}
                        style={{
                          default: {
                            fill: isActive ? "#0A66C2" : "#E5E7EB",
                            outline: "none",
                          },
                          hover: {
                            fill: isActive ? "#0856a8" : "#D1D5DB",
                            outline: "none",
                            cursor: isActive ? "pointer" : "default",
                          },
                          pressed: {
                            fill: "#0856a8",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>

            {/* RICH TOOLTIP */}
            {tooltip && (
              <motion.div
                key={tooltip.city}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-5 py-3 rounded-xl text-sm shadow-2xl pointer-events-none"
              >
                <p className="text-[#60a5fa] text-xs font-semibold uppercase tracking-wider mb-0.5">
                  {tooltip.label}
                </p>
                <p className="font-medium">{tooltip.city}</p>
                <p className="text-gray-400 text-xs mt-1">
                  👥 {tooltip.employees} employees
                </p>
              </motion.div>
            )}

            {/* LEGEND */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 text-xs text-gray-500 bg-white/80 backdrop-blur rounded-lg px-3 py-2 shadow">
              <span className="flex items-center gap-2">
                <span className="inline-block h-3 w-5 rounded bg-[#0A66C2]" />{" "}
                Key Market
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-3 w-5 rounded bg-[#E5E7EB]" />{" "}
                Other
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REGIONAL CARDS */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
              <span className="font-medium text-[#0A66C2]">Our Regions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Regional Operations
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredRegion(region.name)}
                onHoverEnd={() => setHoveredRegion(null)}
                className="group cursor-pointer rounded-xl border-2 border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-md transition-all hover:shadow-2xl hover:border-[#0A66C2]/20"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${region.color}15` }}
                  >
                    <MapPin style={{ color: region.color }} size={28} />
                  </div>
                  <motion.div
                    animate={{ scale: hoveredRegion === region.name ? 1.1 : 1 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0A66C2] to-[#0856a8]"
                  >
                    <Globe className="text-white" size={22} />
                  </motion.div>
                </div>

                <h3 className="mb-2 text-2xl font-semibold text-gray-900 group-hover:text-[#0A66C2] transition-colors">
                  {region.name}
                </h3>
                <p className="mb-4 text-gray-600 leading-relaxed">
                  {region.description}
                </p>

                <div className="mb-6 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#0A66C2]" />
                    <span className="text-gray-700">{region.countries}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#0A66C2]" />
                    <span className="text-gray-700">{region.partners}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t pt-6">
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: region.color }}
                    >
                      {region.stats.offices}
                    </div>
                    <div className="text-xs text-gray-600">Offices</div>
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: region.color }}
                    >
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

      {/* KEY MARKETS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Key Market Locations
            </h2>
            <p className="text-xl text-gray-600">
              Strategic offices and facilities around the world
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyMarkets.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {market.city}
                    </h3>
                    <p className="text-sm text-gray-500">{market.country}</p>
                  </div>
                  <Building2 className="text-[#0A66C2]" size={22} />
                </div>
                <div className="mb-3 inline-block rounded-full bg-[#0A66C2]/10 px-3 py-1 text-sm font-medium text-[#0A66C2]">
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0A66C2] to-[#0856a8] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Partner with Us Globally
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Interested in distribution or partnership opportunities? Get in
              touch with our regional teams.
            </p>
            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0A66C2] shadow-xl transition-all hover:bg-gray-100">
              Contact Regional Office
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default GlobalPresencePage;
