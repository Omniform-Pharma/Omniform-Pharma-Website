import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function NewsEvents() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'News', 'Events', 'Research Updates', 'Press Releases'];

  const posts = [
    {
      id: 1,
      title: 'PharmaCare Announces Breakthrough in Cardiovascular Treatment',
      category: 'News',
      date: 'March 20, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBtZWRpY2FsfGVufDF8fHx8MTc3NDQ5NzMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Our latest clinical trials show promising results in treating advanced heart disease with our new CardioGuard formula.',
      featured: true,
    },
    {
      id: 2,
      title: 'Annual Healthcare Innovation Summit 2026',
      category: 'Events',
      date: 'April 15, 2026',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1618615159724-118c1f47f7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG5ld3MlMjBldmVudHxlbnwxfHx8fDE3NzQ0OTczMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Join us for our annual summit featuring leading healthcare professionals and groundbreaking research presentations.',
      featured: false,
    },
    {
      id: 3,
      title: 'New Research Facility Opens in Singapore',
      category: 'Research Updates',
      date: 'March 18, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1733222765056-b0790217baa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2VtaW5hciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzQ0OTczMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'PharmaCare expands its R&D capabilities with a state-of-the-art facility dedicated to oncology research.',
      featured: false,
    },
    {
      id: 4,
      title: 'PharmaCare Receives FDA Approval for ImmunoBoost',
      category: 'Press Releases',
      date: 'March 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ0MTI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Our innovative immunology treatment receives regulatory approval, marking a significant milestone in patient care.',
      featured: false,
    },
    {
      id: 5,
      title: 'Q1 2026 Earnings Report Exceeds Expectations',
      category: 'News',
      date: 'March 10, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0MjM5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Strong performance driven by increased global demand and successful product launches across key markets.',
      featured: false,
    },
    {
      id: 6,
      title: 'Webinar: Future of Pharmaceutical Innovation',
      category: 'Events',
      date: 'April 5, 2026',
      readTime: '2 min read',
      image: 'https://images.unsplash.com/photo-1742206594477-15139139c0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBtaWNyb3Njb3BlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzQ0OTM3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Register for our free webinar discussing emerging trends and technologies shaping the pharmaceutical industry.',
      featured: false,
    },
    {
      id: 7,
      title: 'Partnership with Global Health Initiative',
      category: 'Press Releases',
      date: 'March 5, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1770221797869-81e508282ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjB0ZWFtfGVufDF8fHx8MTc3NDQyNjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'PharmaCare joins forces with international organizations to improve healthcare access in developing nations.',
      featured: false,
    },
    {
      id: 8,
      title: 'Clinical Trial Results Published in Medical Journal',
      category: 'Research Updates',
      date: 'March 1, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1739298061768-41a8a7d8b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzc0NDgxODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      excerpt: 'Peer-reviewed study confirms efficacy and safety of our new neurological treatment in phase III trials.',
      featured: false,
    },
  ];

  const filteredPosts = posts.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory
  );

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
              <span className="text-[#0A66C2] font-medium">Stay Updated</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              News & <span className="text-[#0A66C2]">Events</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Stay informed about our latest innovations, research breakthroughs, and upcoming events in the pharmaceutical industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#0A66C2] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="activeNewsCategory"
                      className="absolute inset-0 bg-[#0A66C2] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-block px-4 py-2 bg-[#0A66C2]/10 rounded-full">
                <span className="text-[#0A66C2] font-medium">Featured Story</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-[#0A66C2] text-white rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#0A66C2] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-[#0A66C2] font-semibold hover:gap-4 transition-all group">
                    Read Full Story
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all group cursor-pointer"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-[#0A66C2]">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0A66C2] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <button className="inline-flex items-center gap-2 text-[#0A66C2] font-medium text-sm hover:gap-3 transition-all">
                        Read More
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {regularPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
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
              Subscribe to our newsletter for the latest updates, research insights, and event announcements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-xl text-gray-900 outline-none flex-1 max-w-md"
              />
              <button className="px-8 py-4 bg-white text-[#0A66C2] rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
