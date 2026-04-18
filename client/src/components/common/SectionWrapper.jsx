import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motion";

// Standard section container with subtle entry animation.
function SectionWrapper({ children, className = "" }) {
  return (
    <motion.section
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={fadeInUp.transition}
    >
      {children}
    </motion.section>
  );
}

export default SectionWrapper;
