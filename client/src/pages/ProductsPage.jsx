import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Pill,
  Circle,
  FlaskConical,
  Leaf,
  Sparkles,
  Droplets,
  Package,
  X,
} from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";
import Seo from "../components/common/Seo";

const CATEGORIES = [
  { name: "All", icon: Package },
  { name: "Tablets", icon: Pill },
  { name: "Capsules", icon: Circle },
  { name: "Syrups", icon: Droplets },
  { name: "Sachets", icon: FlaskConical },
  { name: "Ayurvedic", icon: Leaf },
  { name: "Specialty", icon: Sparkles },
];

const PRODUCTS = [
  // TABLETS
  {
    name: "General Medicine Tablets",
    category: "Tablets",
    description: "Broad-spectrum pharmaceutical tablet formulations.",
    image:
      "https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?auto=format&fit=crop&w=1600&q=80",
    strength: "Various Strengths",
  },
  {
    name: "Antibiotic Tablets",
    category: "Tablets",
    description: "Effective antibacterial tablet formulations.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80",
    strength: "Customizable",
  },
  {
    name: "Pain Relief Tablets",
    category: "Tablets",
    description: "Fast-acting analgesic and pain management tablets.",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1600&q=80",
    strength: "Multiple Strengths",
  },
  {
    name: "Multivitamin Tablets",
    category: "Tablets",
    description: "Nutritional and wellness supplement tablets.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80",
    strength: "Nutraceutical",
  },

  // CAPSULES
  {
    name: "Softgel Capsules",
    category: "Capsules",
    description: "Easy-to-consume soft gelatin capsules.",
    image:
      "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1600&q=80",
    strength: "Custom Sizes",
  },
  {
    name: "Hard Gelatin Capsules",
    category: "Capsules",
    description: "High-quality hard gelatin capsule manufacturing.",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=1600&q=80",
    strength: "Various Sizes",
  },
  {
    name: "Nutraceutical Capsules",
    category: "Capsules",
    description: "Health supplement and immunity capsules.",
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=1600&q=80",
    strength: "Wellness Range",
  },
  {
    name: "Herbal Blend Capsules",
    category: "Capsules",
    description: "Herbal extract and Ayurvedic capsules.",
    image:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=1600&q=80",
    strength: "Natural Blend",
  },

  // SYRUPS
  {
    name: "Pediatric Syrups",
    category: "Syrups",
    description: "Safe and effective syrups for children.",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1600&q=80",
    strength: "Bottle Sizes",
  },
  {
    name: "Cough Syrups",
    category: "Syrups",
    description: "Relief for dry and wet cough symptoms.",
    image:
      "https://images.unsplash.com/photo-1626716493137-b67fe9501e7d?auto=format&fit=crop&w=1600&q=80",
    strength: "Custom Formula",
  },
  {
    name: "Digestive Formulations",
    category: "Syrups",
    description: "Digestive and enzyme syrup formulations.",
    image:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=1600&q=80",
    strength: "Multiple Sizes",
  },

  // SACHETS
  {
    name: "ORS Sachets",
    category: "Sachets",
    description: "Oral rehydration sachets.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80",
    strength: "Custom Packaging",
  },
  {
    name: "Protein Powder Sachets",
    category: "Sachets",
    description: "Protein and nutrition sachets.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1600&q=80",
    strength: "Single Serve",
  },
  {
    name: "Probiotic Sachets",
    category: "Sachets",
    description: "Digestive health probiotic sachets.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    strength: "Custom Formula",
  },
  {
    name: "Effervescent Sachets",
    category: "Sachets",
    description: "Quick dissolving effervescent formulations.",
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1600&q=80",
    strength: "Fast Dissolve",
  },

  // AYURVEDIC
  {
    name: "Immunity Boosters",
    category: "Ayurvedic",
    description: "Ayurvedic immunity enhancing products.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80",
    strength: "Natural",
  },
  {
    name: "Herbal Powders",
    category: "Ayurvedic",
    description: "Traditional herbal powder formulations.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
    strength: "Custom Blend",
  },

  // SPECIALTY
  {
    name: "Women’s Health Products",
    category: "Specialty",
    description: "Specialized healthcare formulations for women.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80",
    strength: "Custom Range",
  },
  {
    name: "Skincare Pharma",
    category: "Specialty",
    description: "Dermaceutical and skincare products.",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=80",
    strength: "Topical Care",
  },
];

// Product listing page with category filters and search interactions.
function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCatalogExpanded, setIsCatalogExpanded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // const filteredProducts = products.filter(
  //   (p) =>
  //     (selectedCategory === "All" || p.category === selectedCategory) &&
  //     (searchQuery === "" ||
  //       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       p.description.toLowerCase().includes(searchQuery.toLowerCase()))
  // );

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRODUCTS.filter(
      (p) =>
        (selectedCategory === "All" || p.category === selectedCategory) &&
        (query === "" ||
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query))
    );
  }, [selectedCategory, searchQuery]);

  const visibleProducts = useMemo(() => {
    if (isCatalogExpanded) return filteredProducts;
    return filteredProducts.slice(0, 8);
  }, [filteredProducts, isCatalogExpanded]);

  useEffect(() => {
    // Reset "view all" when filter/search changes to keep list predictable.
    setIsCatalogExpanded(false);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    if (!selectedProduct) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedProduct]);

  return (
    <>
      <Seo
        title="Products"
        description="Explore Omniform Pharma's product range across tablets, capsules, syrups, sachets, ayurvedic and specialty products."
      />
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
            <span className="font-medium text-[#0A66C2]">Our Products</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Our Product <span className="text-[#0A66C2]">Range</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600">
            We provide premium third-party pharma contract manufacturing
            services across multiple dosage forms for domestic and international
            markets.
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
      <section className="sticky top-18 z-40 bg-white py-6 sm:py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="flex flex-nowrap justify-start gap-3  sm:flex-wrap sm:justify-center">
              {CATEGORIES.map((category) => {
                const Icon = category.icon;

                return (
                  <motion.button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 font-medium transition-all sm:px-6 sm:py-3 ${
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
                        layoutId="products-activeCategory"
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
                  {visibleProducts.map((product, index) => (
                    <motion.div
                      key={`${product.name}-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.2 }}
                      whileHover={{ y: -8 }}
                      className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-2xl"
                      onClick={() => setSelectedProduct(product)}
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
                              Available In
                            </span>
                            <p className="text-sm font-medium text-gray-900">
                              {product.strength}
                            </p>
                          </div>

                          {/* ✅ CTA */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProduct(product);
                            }}
                            className="rounded-lg bg-[#0A66C2]/10 px-4 py-2 text-sm font-medium text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white"
                          >
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
            <button
              type="button"
              onClick={() => setIsCatalogExpanded((v) => !v)}
              className="inline-flex rounded-xl bg-[#0A66C2] px-10 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0856a8] hover:shadow-xl"
            >
              {isCatalogExpanded
                ? "View Less"
                : "View Complete Product Catalog"}
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0A66C2] to-[#0856a8]">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Manufacturing Support?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Connect with us for product development, private labeling, and
            contract manufacturing solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-[#0A66C2] shadow-xl hover:bg-gray-100"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* ✅ PRODUCT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedProduct(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                if (e.key === "Escape") setSelectedProduct(null);
              }}
              tabIndex={-1}
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <ImageWithFallback
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-[#0A66C2] backdrop-blur">
                  {selectedProduct.category}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm backdrop-blur transition-colors hover:bg-white"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h3>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Available In
                    </div>
                    <div className="mt-1 font-semibold text-gray-900">
                      {selectedProduct.strength}
                    </div>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Category
                    </div>
                    <div className="mt-1 font-semibold text-gray-900">
                      {selectedProduct.category}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="rounded-lg border-2 border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-[#0A66C2] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#0856a8] hover:shadow-xl"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductsPage;
