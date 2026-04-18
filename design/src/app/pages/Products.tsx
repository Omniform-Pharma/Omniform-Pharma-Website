import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Pill, Droplet, Syringe, Circle, Blend, Package } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'All', icon: Package },
    { name: 'Tablets', icon: Pill },
    { name: 'Capsules', icon: Circle },
    { name: 'Softgel', icon: Droplet },
    { name: 'Injectables', icon: Syringe },
    { name: 'Liquid', icon: Droplet },
    { name: 'Semi-Solid', icon: Blend },
  ];

  const products = [
    {
      name: 'CardioGuard',
      category: 'Tablets',
      description: 'Advanced treatment for hypertension and heart disease prevention.',
      image: 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxscyUyMG1lZGljYXRpb24lMjBwaGFybWFjeXxlbnwxfHx8fDE3NzQzNzMwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      strength: '50mg, 100mg',
    },
    {
      name: 'NeuroBalance',
      category: 'Capsules',
      description: 'Innovative therapy for neurological disorders and cognitive enhancement.',
      image: 'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0MjM5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      strength: '25mg, 50mg',
    },
    {
      name: 'VitaPlex Omega',
      category: 'Softgel',
      description: 'Premium omega-3 fatty acids for cardiovascular and brain health.',
      image: 'https://images.unsplash.com/photo-1742206594477-15139139c0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBtaWNyb3Njb3BlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzQ0OTM3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      strength: '1000mg',
    },
    {
      name: 'ImmunoBoost IV',
      category: 'Injectables',
      description: 'Rapid immune system support through intravenous administration.',
      image: 'https://images.unsplash.com/photo-1770221797869-81e508282ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjB0ZWFtfGVufDF8fHx8MTc3NDQyNjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      strength: '500mg/10ml',
    },
    {
      name: 'PediaCare Syrup',
      category: 'Liquid',
      description: 'Gentle pediatric formulation for fever and pain relief.',
      image: 'https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ0MTI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      strength: '120mg/5ml',
    },
    {
      name: 'ArthriCare Gel',
      category: 'Semi-Solid',
      description: 'Topical anti-inflammatory gel for joint pain and arthritis.',
      image: 'https://images.unsplash.com/photo-1739298061768-41a8a7d8b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzc0NDgxODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      strength: '1% w/w',
    },
    {
      name: 'DiabetControl',
      category: 'Tablets',
      description: 'Effective diabetes management with sustained release technology.',
      image: 'https://images.unsplash.com/photo-1646392206581-2527b1cae5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxscyUyMG1lZGljYXRpb24lMjBwaGFybWFjeXxlbnwxfHx8fDE3NzQzNzMwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      strength: '500mg, 850mg',
    },
    {
      name: 'ImmuneShield',
      category: 'Capsules',
      description: 'Comprehensive immune system support with vitamin blend.',
      image: 'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0MjM5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      strength: '500mg',
    },
    {
      name: 'CalciumPlus',
      category: 'Softgel',
      description: 'Enhanced calcium absorption with vitamin D3 for bone health.',
      image: 'https://images.unsplash.com/photo-1742206594477-15139139c0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBtaWNyb3Njb3BlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzQ0OTM3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      strength: '1200mg',
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
              <span className="text-[#0A66C2] font-medium">Our Products</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovative Pharmaceutical{' '}
              <span className="text-[#0A66C2]">Solutions</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover our comprehensive portfolio of life-changing medications designed to address critical healthcare needs.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#0A66C2] focus:outline-none text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                      selectedCategory === category.name
                        ? 'bg-[#0A66C2] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={18} />
                    {category.name}
                    {selectedCategory === category.name && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-[#0A66C2] rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-gray-600 mb-8 text-center"
              >
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} in {selectedCategory === 'All' ? 'all categories' : selectedCategory}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={`${product.name}-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all group cursor-pointer"
                    >
                      {/* Product Image */}
                      <div className="relative overflow-hidden h-56">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-[#0A66C2]">
                          {product.category}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0A66C2] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                          {product.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Strength</span>
                            <p className="text-sm font-medium text-gray-900">{product.strength}</p>
                          </div>
                          <button className="px-4 py-2 bg-[#0A66C2]/10 text-[#0A66C2] rounded-lg font-medium hover:bg-[#0A66C2] hover:text-white transition-colors text-sm">
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

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-10 py-4 bg-[#0A66C2] text-white rounded-xl font-semibold hover:bg-[#0856a8] transition-all shadow-lg hover:shadow-xl">
              View Complete Product Catalog
            </button>
          </motion.div>
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
              Need Product Information?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our medical affairs team is available to answer your questions about our products.
            </p>
            <button className="px-8 py-4 bg-white text-[#0A66C2] rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl">
              Contact Medical Affairs
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
