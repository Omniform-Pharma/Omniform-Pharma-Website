import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ImageWithFallback from "../components/common/ImageWithFallback";

// News and events listing with category filters and featured card.
function NewsEventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "News", "Events", "Research Updates", "Press Releases"];
  const posts = [
    { id: 1, title: "PharmaCare Announces Breakthrough in Cardiovascular Treatment", category: "News", date: "March 20, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBtZWRpY2FsfGVufDF8fHx8MTc3NDQ5NzMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", excerpt: "Our latest clinical trials show promising results.", featured: true },
    { id: 2, title: "Annual Healthcare Innovation Summit 2026", category: "Events", date: "April 15, 2026", readTime: "3 min read", image: "https://images.unsplash.com/photo-1618615159724-118c1f47f7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG5ld3MlMjBldmVudHxlbnwxfHx8fDE3NzQ0OTczMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", excerpt: "Join us for our annual summit.", featured: false },
    { id: 3, title: "New Research Facility Opens in Singapore", category: "Research Updates", date: "March 18, 2026", readTime: "4 min read", image: "https://images.unsplash.com/photo-1733222765056-b0790217baa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2VtaW5hciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzQ0OTczMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", excerpt: "PharmaCare expands its R&D capabilities.", featured: false },
  ];
  const filteredPosts = posts.filter((post) => selectedCategory === "All" || post.category === selectedCategory);
  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">News & <span className="text-[#0A66C2]">Events</span></h1>
          <p className="text-xl text-gray-600">Stay informed about our latest innovations, research breakthroughs, and upcoming events.</p>
        </div>
      </section>
      <section className="sticky top-20 z-40 border-b bg-white py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-3 px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`rounded-full px-6 py-3 font-medium transition-all ${selectedCategory === category ? "bg-[#0A66C2] text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>{category}</button>
          ))}
        </div>
      </section>
      {featuredPost && selectedCategory === "All" && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto grid w-full max-w-7xl gap-0 overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2 px-4 sm:px-6 lg:px-8">
            <ImageWithFallback src={featuredPost.image} alt={featuredPost.title} className="h-96 w-full object-cover" />
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">{featuredPost.title}</h2>
              <p className="mb-6 text-lg text-gray-600">{featuredPost.excerpt}</p>
              <button className="inline-flex items-center gap-2 font-semibold text-[#0A66C2]">Read Full Story <ArrowRight size={20} /></button>
            </div>
          </div>
        </section>
      )}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div key={selectedCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <div key={post.id} className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl">
                  <ImageWithFallback src={post.image} alt={post.title} className="h-56 w-full object-cover" />
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-gray-500"><Calendar size={14} />{post.date}<Clock size={14} />{post.readTime}</div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-[#0A66C2]">{post.title}</h3>
                    <p className="mb-4 text-sm text-gray-600">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

export default NewsEventsPage;
