import { motion } from "framer-motion";
import Seo from "../components/common/Seo";

function CookiePolicyPage() {
  return (
    <>
      <Seo title="Cookie Policy" description="Cookie policy for Omniform Pharma." />
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl bg-white p-8 shadow-xl md:p-10"
          >
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Cookie Policy
            </h1>
            <p className="text-gray-600 leading-relaxed">
              This demo website may use essential cookies required for basic
              functionality. Where applicable, analytics and marketing cookies
              are managed by your browser settings.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default CookiePolicyPage;

