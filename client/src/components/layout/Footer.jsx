import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookFilled,
  XOutlined,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

// Global footer with quick links, company details, and contact information.
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* ── 4-column grid
            mobile  : 1 col (stacked)
            sm      : 2 col (brand + contact side by side, links below)
            lg      : 4 col (all side by side)
        ── */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand block */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#0856a8]">
                <span className="text-xl font-bold text-white">OfP</span>
              </div>
              <span className="text-xl font-bold text-white">
                Omniform Pharma
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted partner for third-party pharma manufacturing, private
              labeling, and export solutions across India and global markets.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-[#0A66C2]"
              >
                <FacebookFilled style={{ fontSize: "18px" }} />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="transition-colors hover:text-[#0A66C2]"
              >
                <XOutlined style={{ fontSize: "18px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/omniform-pharmaceuticals-154356402"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-[#0A66C2]"
              >
                <LinkedinFilled style={{ fontSize: "18px" }} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-[#0A66C2]"
              >
                <InstagramOutlined style={{ fontSize: "18px" }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/",              label: "Home" },
                { to: "/about",         label: "About Us" },
                { to: "/products",      label: "Products" },
                { to: "/manufacturing", label: "Manufacturing" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="transition-colors hover:text-[#0A66C2]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Explore</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/global-presence", label: "Global Presence" },
                { to: "/news-events",     label: "News and Events" },
                { to: "/contact",         label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="transition-colors hover:text-[#0A66C2]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#0A66C2]" />
                {/* Long address: allow it to wrap naturally, no overflow */}
                <span className="break-words leading-relaxed">
                  912, Satyamev Elite, Nr Satyamev Shivalik Ambli - Bopal,
                  Cross Road, Ahmedabad, Gujarat 380051, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#0A66C2]" />
                <a
                  href="tel:+919712112177"
                  className="transition-colors hover:text-[#0A66C2]"
                >
                  +91 97121 12177
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-[#0A66C2]" />
                {/* Email: allow break on narrow screens */}
                <a
                  href="mailto:inquiry@omniformpharma.com"
                  className="break-all transition-colors hover:text-[#0A66C2]"
                >
                  inquiry@omniformpharma.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm sm:px-6 md:flex-row lg:px-8">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Omniform Pharma. All rights reserved.
          </p>
          {/* Policy links — wrap on narrow screens instead of scrolling */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            <Link to="/privacy-policy" className="transition-colors hover:text-[#0A66C2]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-[#0A66C2]">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="transition-colors hover:text-[#0A66C2]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;