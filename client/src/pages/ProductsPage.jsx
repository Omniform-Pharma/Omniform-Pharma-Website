import { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Pill,
  Tablets,
  FlaskConical,
  TestTube,
  Syringe,
  Droplets,
  Package,
  X,
  Pipette,
} from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";
import Seo from "../components/common/Seo";
import { SEGMENTS } from "../data/segments";

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

const CATEGORIES = [
  { name: "All", icon: Package }, // all products
  { name: "Tablets", icon: Tablets }, // tablet / pill shape
  { name: "Capsules", icon: Pill }, // capsule shape (two-tone pill icon)
  { name: "Syrups", icon: Droplets }, // liquid drops
  { name: "Sachets", icon: FlaskConical }, // powder / sachet / flask
  { name: "Injectables", icon: Syringe }, // syringe — exact match
  { name: "Topicals", icon: Pipette }, // cream / gel / ointment application
];

/**
 * Maps each UI category pill to the actual tokens that appear in
 * product.availableIn across the SEGMENTS data.
 *
 * "Syrups"      → Syrup | Suspension | Dry Syrup | Drops
 * "Capsules"    → Capsule | Softgel
 * "Injectables" → Injection
 * "Topicals"    → Cream | Ointment | Gel
 * "Tablets"     → Tablet  (direct match)
 * "Sachets"     → Sachet  (direct match)
 */
const CATEGORY_ALIASES = {
  Syrups: ["syrup", "suspension", "drops"],
  Capsules: ["capsule", "softgel"],
  Injectables: ["injection"],
  Topicals: ["cream", "ointment", "gel"],
};

// Fallback image used when a product has no image of its own.
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Returns true when the product.availableIn string matches the selected
 * category, using the alias map above for grouped categories.
 */
function matchesCategory(product, selectedCategory) {
  if (selectedCategory === "All") return true;

  const haystack = product.availableIn.toLowerCase();
  const aliases = CATEGORY_ALIASES[selectedCategory];

  if (aliases) {
    // Match if ANY alias token appears as a word boundary inside availableIn.
    return aliases.some((alias) => haystack.includes(alias));
  }

  // Direct match (e.g. "Tablets" → "tablets", "Sachets" → "sachets").
  return haystack.includes(selectedCategory.toLowerCase());
}

/**
 * Returns true when the product matches the active search query.
 * Empty query always matches.
 */
function matchesSearch(product, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    product.name.toLowerCase().includes(q) ||
    product.description.toLowerCase().includes(q)
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Per-segment "expanded" state: { [segmentName]: boolean }
  const [expandedSegments, setExpandedSegments] = useState({});

  // Reset expansions whenever the filter / search changes.
  useEffect(() => {
    setExpandedSegments({});
  }, [selectedCategory, searchQuery]);

  // Lock body scroll when modal is open.
  useEffect(() => {
    if (!selectedProduct) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedProduct]);

  // ---------------------------------------------------------------------------
  // Derived data
  // ---------------------------------------------------------------------------

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const isSearchActive = trimmedQuery.length > 0;

  /**
   * filteredSegments — each segment with only the products that pass the
   * active category + search filters; segments with zero matching products
   * are removed entirely.
   */
  const filteredSegments = useMemo(() => {
    return SEGMENTS.reduce((acc, segment) => {
      const matchingProducts = segment.products.filter(
        (p) =>
          matchesCategory(p, selectedCategory) && matchesSearch(p, trimmedQuery)
      );
      if (matchingProducts.length === 0) return acc;
      acc.push({ ...segment, products: matchingProducts });
      return acc;
    }, []);
  }, [selectedCategory, trimmedQuery]);

  // Total product count across all visible segments (for the result-count label).
  const totalProductCount = useMemo(
    () => filteredSegments.reduce((sum, s) => sum + s.products.length, 0),
    [filteredSegments]
  );

  // ---------------------------------------------------------------------------
  // Display-slice logic
  // ---------------------------------------------------------------------------

  /**
   * When "All" is selected AND no search is active we collapse each segment
   * to its first 3 products unless the user has explicitly expanded it.
   * In every other case (specific category or active search) we show all
   * matching products.
   */
  const INITIAL_VISIBLE = 3;

  function getVisibleProducts(segment) {
    const showAll =
      isSearchActive ||
      selectedCategory !== "All" ||
      expandedSegments[segment.name];
    return showAll
      ? segment.products
      : segment.products.slice(0, INITIAL_VISIBLE);
  }

  function canExpand(segment) {
    return (
      !isSearchActive &&
      selectedCategory === "All" &&
      segment.products.length > INITIAL_VISIBLE
    );
  }

  function toggleSegmentExpansion(segmentName) {
    setExpandedSegments((prev) => ({
      ...prev,
      [segmentName]: !prev[segmentName],
    }));
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <>
      <Seo
        title="Products"
        description="Explore Omniform Pharma's product range across tablets, capsules, syrups, sachets, ayurvedic and specialty products."
      />

      {/* ── HERO ── */}
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

          {/* Search */}
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

      {/* ── CATEGORY PILLS ── */}
      <section className="sticky top-18 z-40 bg-white py-6 sm:py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="flex flex-nowrap justify-start gap-3 sm:flex-wrap sm:justify-center">
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

      {/* ── SEGMENTS + PRODUCTS ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Empty state */}
          {filteredSegments.length === 0 ? (
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
              {/* Result count */}
              <div className="mb-8 text-center text-sm text-gray-600">
                Showing {totalProductCount} product
                {totalProductCount !== 1 && "s"} in{" "}
                {selectedCategory === "All"
                  ? "all categories"
                  : selectedCategory}
              </div>

              {/* Segments */}
              <div className="space-y-16">
                {filteredSegments.map((segment) => {
                  const visibleProducts = getVisibleProducts(segment);
                  const showToggle = canExpand(segment);
                  const isExpanded = !!expandedSegments[segment.name];

                  return (
                    <AnimatePresence key={segment.name} mode="wait">
                      <motion.div
                        key={segment.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* ── Segment header ── */}
                        <div className="mb-8">
                          <h2 className="mb-1 text-2xl font-bold text-gray-900">
                            {segment.name}
                          </h2>
                          <p className="mb-3 text-gray-600">
                            {segment.description}
                          </p>

                          {/* Available forms as tags */}
                          <div className="flex flex-wrap gap-2">
                            {segment.forms.map((form) => (
                              <span
                                key={form}
                                className="rounded-full bg-[#0A66C2]/10 px-3 py-1 text-xs font-medium text-[#0A66C2]"
                              >
                                {form}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* ── Product grid ── */}
                        <motion.div
                          key={`${segment.name}-${selectedCategory}`}
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
                              transition={{
                                delay: index * 0.08,
                                duration: 0.2,
                              }}
                              whileHover={{ y: -8 }}
                              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-2xl"
                              onClick={() => setSelectedProduct(product)}
                            >
                              {/* Image */}
                              <div className="relative h-72 overflow-hidden">
                                <ImageWithFallback
                                  src={product.image ?? FALLBACK_IMAGE}
                                  alt={product.name}
                                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Category badge */}
                                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-[#0A66C2] backdrop-blur">
                                  {product.category}
                                </div>
                              </div>

                              {/* Content */}
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
                                      {product.availableIn}
                                    </p>
                                  </div>

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

                        {/* ── Per-segment View More / View Less ── */}
                        {showToggle && (
                          <div className="mt-8 text-center">
                            <button
                              type="button"
                              onClick={() =>
                                toggleSegmentExpansion(segment.name)
                              }
                              className="inline-flex rounded-xl bg-[#0A66C2] px-10 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#0856a8] hover:shadow-xl"
                            >
                              {isExpanded
                                ? "View Less"
                                : `View All ${segment.products.length} Products`}
                            </button>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
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

      {/* ── PRODUCT DETAILS MODAL ── */}
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
                  src={selectedProduct.image ?? FALLBACK_IMAGE}
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
                      {selectedProduct.availableIn}
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
                  {selectedProduct.compound && (
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 sm:col-span-2">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        Compound / Strength
                      </div>
                      <div className="mt-1 font-semibold text-gray-900">
                        {selectedProduct.compound}
                      </div>
                    </div>
                  )}
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
