import { motion } from "framer-motion";

// Reusable simple hero for non-home pages until full section builds are added.
function PageHero({ badge, title, description }) {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl space-y-5"
        >
          <span className="inline-block rounded-full bg-[#0A66C2]/10 px-4 py-2 text-sm font-medium text-[#0A66C2]">
            {badge}
          </span>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">{title}</h1>
          <p className="text-lg leading-relaxed text-gray-600">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
