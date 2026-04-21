import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";

// News and events listing with category filters and featured card.
function NewsEventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "News",
    "Events",
    "Research Updates",
    "Press Releases",
  ];
  const posts = [
    {
      id: 1,
      title: "PharmaCare Announces Breakthrough in Cardiovascular Treatment",
      category: "News",
      date: "March 20, 2026",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBtZWRpY2FsfGVufDF8fHx8MTc3NDQ5NzMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      excerpt: "Our latest clinical trials show promising results.",
      featured: true,
    },
    {
      id: 2,
      title: "Annual Healthcare Innovation Summit 2026",
      category: "Events",
      date: "April 15, 2026",
      readTime: "3 min read",
      image:
        "https://images.unsplash.com/photo-1618615159724-118c1f47f7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG5ld3MlMjBldmVudHxlbnwxfHx8fDE3NzQ0OTczMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      excerpt: "Join us for our annual summit.",
      featured: false,
    },
    {
      id: 3,
      title: "New Research Facility Opens in Singapore",
      category: "Research Updates",
      date: "March 18, 2026",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1733222765056-b0790217baa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2VtaW5hciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzQ0OTczMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      excerpt: "PharmaCare expands its R&D capabilities.",
      featured: false,
    },
  ];
  const filteredPosts = posts.filter(
    (post) => selectedCategory === "All" || post.category === selectedCategory
  );
  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-4 inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
              <span className="font-medium text-[#0A66C2]">Stay Updated</span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl leading-tight">
              News & <span className="text-[#0A66C2]">Events</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay informed about our latest innovations, research
              breakthroughs, and upcoming events in the pharmaceutical industry.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="sticky top-18 z-40 bg-white/80 backdrop-blur py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}

                  {/* ACTIVE PILL ANIMATION */}
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-[#0A66C2] rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {featuredPost && selectedCategory === "All" && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center"
            >
              <div className="inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2">
                <span className="font-medium text-[#0A66C2]">
                  Featured Story
                </span>
              </div>
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl"
            >
              <div className="grid md:grid-cols-2">
                {/* IMAGE */}
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center p-8 md:p-12">
                  {/* Meta */}
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 transition-colors group-hover:text-[#0A66C2]">
                    {featuredPost.title}
                  </h2>

                  {/* Description */}
                  <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 font-semibold text-[#0A66C2] transition-all group-hover:gap-4">
                    Read Full Story
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-2xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category */}
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-medium text-[#0A66C2]">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#0A66C2] line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* CTA */}
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-[#0A66C2] transition-all group-hover:gap-3">
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* EMPTY STATE */}
          {regularPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="mb-4 text-6xl">📰</div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                No posts found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-[#0A66C2] to-[#0856a8]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest updates, research
              insights, and event announcements.
            </p>

            <div className="flex flex-col sm:flex-row justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 max-w-md px-6 py-4 
    rounded-xl sm:rounded-r-none 
    border border-gray-300 bg-white text-gray-900 
    outline-none focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20 
    placeholder:text-gray-400 transition-all"
              />

              <button
                className="px-8 py-4 
    bg-[#0A66C2] text-white font-semibold 
    rounded-xl sm:rounded-l-none 
    border border-[#0A66C2] 
    hover:bg-[#0856a8] transition-all shadow-xl whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default NewsEventsPage;
