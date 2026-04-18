import { motion } from "framer-motion";
import { subtleHover } from "../../utils/motion";

// Reusable button for all call-to-action elements across the website.
function Button({
  label = "Button",
  onClick,
  className = "",
  type = "button",
  variant = "primary",
}) {
  const variantClasses = {
    primary: "bg-[#0A66C2] text-white hover:bg-[#0856a8] shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-[#0A66C2] border-2 border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
    ghost: "bg-transparent text-[#0A66C2] hover:text-[#0856a8]",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-2.5 font-medium transition-all ${variantClasses[variant]} ${className}`}
      whileHover={subtleHover.whileHover}
      whileTap={{ scale: 0.98 }}
      transition={subtleHover.transition}
    >
      {label}
    </motion.button>
  );
}

export default Button;
