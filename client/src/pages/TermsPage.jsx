import { motion } from "framer-motion";
import Seo from "../components/common/Seo";

function TermsPage() {
  return (
    <>
      <Seo title="Terms of Service" description="Terms of service for Omniform Pharma." />
      <section className="bg-gray-50 py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-2xl bg-white p-8 shadow-xl md:p-10"
          >
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Terms of Service
            </h1>
            <p className="text-gray-600 leading-relaxed">
              This website is provided for informational and enquiry purposes.
              Submitted enquiries are handled via our contact process. Use of
              this site constitutes acceptance of these terms.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default TermsPage;

