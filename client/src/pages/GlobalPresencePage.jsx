import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Users, Building2, Award } from "lucide-react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";

// const marketData = {
//   356: { label: "India Market", city: "India", employees: "PAN India" },
//   784: { label: "UAE Market", city: "Dubai, UAE", employees: "GCC" },
//   682: { label: "Saudi Arabia", city: "Saudi Arabia", employees: "MENA" },
//   512: { label: "Oman", city: "Oman", employees: "Export" },
//   634: { label: "Qatar", city: "Qatar", employees: "Export" },
//   414: { label: "Kuwait", city: "Kuwait", employees: "Export" },
// };

const regionsMap = {
  india: ["356"],

  gcc: ["784", "682", "512", "634", "414", "48"], // UAE, Saudi, Oman, Qatar, Kuwait, Bahrain

  mena: ["818", "504", "12", "788", "434", "729", "728", "760", "400", "422"],

  asia: ["156", "392", "410", "764", "704", "360", "458", "608"],
};

const getRegionColor = (geoId) => {
  if (regionsMap.india.includes(geoId)) return "#0A66C2"; // India
  if (regionsMap.gcc.includes(geoId)) return "#08306b"; // GCC (darkest)
  if (regionsMap.mena.includes(geoId)) return "#2171b5"; // MENA
  if (regionsMap.asia.includes(geoId)) return "#6baed6"; // Asia
  return "#E5E7EB"; // Others
};

const getRegionInfo = (geoId) => {
  if (regionsMap.india.includes(geoId)) {
    return { name: "India", type: "Domestic Market" };
  }
  if (regionsMap.gcc.includes(geoId)) {
    return { name: "GCC", type: "Export Market" };
  }
  if (regionsMap.mena.includes(geoId)) {
    return { name: "MENA", type: "Export Market" };
  }
  if (regionsMap.asia.includes(geoId)) {
    return { name: "Asia", type: "International Market" };
  }
  return null;
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
    { number: "PAN India", label: "Domestic Reach", icon: Globe },
    { number: "MENA", label: "Export Markets", icon: Users },
    { number: "GCC", label: "Countries Served", icon: Building2 },
    { number: "10+", label: "Years Experience", icon: Award },
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
      <Seo
        title="Global Presence"
        description="Omniform Pharma serves PAN India and export markets including MENA and GCC countries with reliable manufacturing and distribution support."
      />
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
              Serving PAN India and international markets with reliable
              pharmaceutical manufacturing and export solutions.
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
                  viewport={{ once: false, amount: 0.25 }}
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
            viewport={{ once: false, amount: 0.25 }}
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
            viewport={{ once: false, amount: 0.25 }}
            className="relative bg-white rounded-2xl shadow-xl p-8"
          >
            {/* <ComposableMap
              projectionConfig={{ scale: 150 }}
              className="w-full h-[500px]"
            > */}
            {/* <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    // geo.id is a numeric string e.g. "840" for USA
                    // const info = marketData[String(geo.id)];
                    // const isActive = !!info;

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
              </Geographies> */}

            {/* </ComposableMap> */}

            <ComposableMap
              projectionConfig={{ scale: 150 }}
              className="w-full h-[500px]"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const geoId = String(geo.id);
                    const info = getRegionInfo(geoId);

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          if (info) {
                            setTooltip({
                              country: geo.properties.name,
                              region: info.name,
                              type: info.type,
                            });
                          }
                        }}
                        onMouseLeave={() => setTooltip(null)}
                        style={{
                          default: {
                            fill: getRegionColor(geoId),
                            outline: "none",
                          },
                          hover: {
                            fill: getRegionColor(geoId),
                            outline: "none",
                            cursor: info ? "pointer" : "default",
                            opacity: 0.8,
                          },
                          pressed: {
                            fill: getRegionColor(geoId),
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
            {/* {tooltip && (
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
                 
                  📦 Export Market
                </p>
              </motion.div>
            )} */}
            {/* 👥 {tooltip.employees} employees */}

            {tooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-5 py-3 rounded-xl text-sm shadow-2xl"
              >
                <p className="text-blue-400 text-xs uppercase mb-1">
                  {tooltip.region}
                </p>
                <p className="font-semibold">{tooltip.country}</p>
                <p className="text-gray-400 text-xs mt-1">📦 {tooltip.type}</p>
              </motion.div>
            )}
            {/* LEGEND */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 text-xs text-gray-500 bg-white/80 backdrop-blur rounded-lg px-3 py-2 shadow">
              {/* <span className="flex items-center gap-2">
                <span className="inline-block h-3 w-5 rounded bg-[#0A66C2]" />{" "}
                Key Market
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-3 w-5 rounded bg-[#E5E7EB]" />{" "}
                Other
              </span> */}

              <span className="flex items-center gap-2">
                <span className="inline-block h-3 w-5 rounded bg-[#0A66C2]" />
                India
              </span>

              <span className="flex items-center gap-2">
                <span className="inline-block h-3 w-5 rounded bg-[#6baed6]" />
                Asia Countries
              </span>

              <span className="flex items-center gap-2">
                <span className="inline-block h-3 w-5 rounded bg-[#2171b5]" />
                MENA Countries
              </span>

              <span className="flex items-center gap-2">
                <span className="inline-block h-3 w-5 rounded bg-[#08306b]" />
                GCC Countries
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REGIONAL CARDS */}
      {/* <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
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
                viewport={{ once: false, amount: 0.25 }}
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
      </section> */}

      {/* KEY MARKETS */}
      {/* <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
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
                viewport={{ once: false, amount: 0.25 }}
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
      </section> */}

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0A66C2] to-[#0856a8] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Partner with Us Globally
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Interested in export services or global distribution partnerships?
              Connect with our team today.
            </p>
            <Link
              to="/contact"
              className="inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-[#0A66C2] shadow-xl transition-all hover:bg-gray-100"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default GlobalPresencePage;
