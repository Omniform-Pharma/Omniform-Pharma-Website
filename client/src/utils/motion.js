// Reusable animation presets to keep motion behavior consistent site-wide.
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

export const subtleHover = {
  whileHover: { y: -2 },
  transition: { duration: 0.2, ease: "easeOut" },
};
