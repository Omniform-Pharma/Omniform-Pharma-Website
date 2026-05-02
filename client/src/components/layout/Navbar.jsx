import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../utils/constants";

// Global website navigation with responsive desktop/mobile behavior.
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white py-4 shadow-md"
          : "bg-white/95 py-6 backdrop-blur-sm"
      }`}
    >
      {/* ── Main bar ── */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo — shrinks on very small screens so it never overflows */}
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#0856a8] sm:h-10 sm:w-10">
            <span className="text-base font-bold text-white sm:text-xl">OfP</span>
          </div>
          <span className="truncate text-lg font-bold text-gray-900 sm:text-2xl">
            OmniformPharma
          </span>
        </Link>

        {/* Desktop nav — hidden below md */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative whitespace-nowrap text-sm font-medium transition-colors lg:text-base ${
                  isActive
                    ? "text-[#0A66C2]"
                    : "text-gray-700 hover:text-[#0A66C2]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-link"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0A66C2]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA — hidden below md */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-lg bg-[#0A66C2] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#0856a8] hover:shadow-md lg:px-6"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger — visible below md only */}
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="shrink-0 p-2 text-gray-700 transition-colors hover:text-[#0A66C2] md:hidden"
          aria-label="Toggle mobile menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t bg-white md:hidden"
          >
            <div className="mx-auto space-y-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#0A66C2]/10 text-[#0A66C2]"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full rounded-lg bg-[#0A66C2] px-6 py-2.5 text-center font-medium text-white transition-colors hover:bg-[#0856a8]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;