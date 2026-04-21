import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import {
  Search,
  Pill,
  Droplet,
  Syringe,
  Circle,
  Blend,
  Package,
} from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";

// Product listing page with category filters and search interactions.
function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    { name: "All", icon: Package },
    { name: "Tablets", icon: Pill },
    { name: "Capsules", icon: Circle },
    { name: "Softgel", icon: Droplet },
    { name: "Injectables", icon: Syringe },
    { name: "Liquid", icon: Droplet },
    { name: "Semi-Solid", icon: Blend },
  ];
  const products = [
    {
      name: "CardioGuard",
      category: "Tablets",
      description:
        "Advanced treatment for hypertension and heart disease prevention.",
      image:
        "https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxscyUyMG1lZGljYXRpb24lMjBwaGFybWFjeXxlbnwxfHx8fDE3NzQzNzMwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      strength: "50mg, 100mg",
    },
    {
      name: "NeuroBalance",
      category: "Capsules",
      description:
        "Innovative therapy for neurological disorders and cognitive enhancement.",
      image:
        "https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0MjM5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      strength: "25mg, 50mg",
    },
    {
      name: "ImmunoBoost IV",
      category: "Injectables",
      description:
        "Rapid immune system support through intravenous administration.",
      image:
        "https://images.unsplash.com/photo-1770221797869-81e508282ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjB0ZWFtfGVufDF8fHx8MTc3NDQyNjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      strength: "500mg/10ml",
    },
  ];
  // const filteredProducts = products.filter(
  //   (p) =>
  //     (selectedCategory === "All" || p.category === selectedCategory) &&
  //     (searchQuery === "" ||
  //       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       p.description.toLowerCase().includes(searchQuery.toLowerCase()))
  // );

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter(
      (p) =>
        (selectedCategory === "All" || p.category === selectedCategory) &&
        (query === "" ||
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query))
    );
  }, [products, selectedCategory, searchQuery]);

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
            <span className="font-medium text-[#0A66C2]">Our Products</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Innovative Pharmaceutical{" "}
            <span className="text-[#0A66C2]">Solutions</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600">
            Discover our comprehensive portfolio of life-changing medications
            designed to address critical healthcare needs.
          </p>

          <div className="relative mx-auto max-w-2xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 py-4 pl-12 pr-4 text-lg focus:border-[#0A66C2] focus:outline-none"
            />
          </div>
        </div>
      </section>
      <section className="sticky top-20 z-40  bg-white py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <motion.button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all ${
                      selectedCategory === category.name
                        ? "text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon size={18} />

                    {category.name}

                    {/* ✅ Animated active pill */}
                    {selectedCategory === category.name && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 rounded-full bg-[#0A66C2] -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ✅ EMPTY STATE */}
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          ) : (
            <>
              {/* ✅ RESULT COUNT */}
              <div className="mb-8 text-center text-sm text-gray-600">
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1 && "s"} in{" "}
                {selectedCategory === "All"
                  ? "all categories"
                  : selectedCategory}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={`${product.name}-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.2 }}
                      whileHover={{ y: -8 }}
                      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-2xl"
                    >
                      {/* IMAGE */}
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* ✅ CATEGORY BADGE */}
                        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-[#0A66C2] backdrop-blur">
                          {product.category}
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-6">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-[#0A66C2]">
                          {product.name}
                        </h3>

                        <p className="mb-4 text-sm leading-relaxed text-gray-600">
                          {product.description}
                        </p>

                        <div className="flex items-center justify-between border-t pt-4">
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wide">
                              Strength
                            </span>
                            <p className="text-sm font-medium text-gray-900">
                              {product.strength}
                            </p>
                          </div>

                          {/* ✅ CTA */}
                          <button className="rounded-lg bg-[#0A66C2]/10 px-4 py-2 text-sm font-medium text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white">
                            View Details
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </>
          )}

          {/* ✅ VIEW ALL BUTTON */}
          <div className="mt-16 text-center">
            <button className="rounded-xl bg-[#0A66C2] px-10 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0856a8] hover:shadow-xl">
              View Complete Product Catalog
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0A66C2] to-[#0856a8]">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Product Information?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Our medical affairs team is available to answer your questions.
          </p>
          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0A66C2] shadow-xl hover:bg-gray-100">
            Contact Medical Affairs
          </button>
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
