import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

// Global footer with quick links, company details, and contact information.
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0A66C2] to-[#0856a8]">
                <span className="text-xl font-bold text-white">Px</span>
              </div>
              <span className="text-xl font-bold text-white">PharmaCare</span>
            </div>
            <p className="text-sm leading-relaxed">
              Leading the way in pharmaceutical innovation and healthcare solutions for a
              healthier tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="transition-colors hover:text-[#0A66C2]" aria-label="Facebook">
                <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">
                  Fb
                </span>
              </a>
              <a href="#" className="transition-colors hover:text-[#0A66C2]" aria-label="Twitter">
                <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">
                  X
                </span>
              </a>
              <a href="#" className="transition-colors hover:text-[#0A66C2]" aria-label="LinkedIn">
                <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">
                  In
                </span>
              </a>
              <a href="#" className="transition-colors hover:text-[#0A66C2]" aria-label="Instagram">
                <span className="inline-flex h-5 w-5 items-center justify-center text-xs font-semibold">
                  Ig
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition-colors hover:text-[#0A66C2]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-[#0A66C2]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition-colors hover:text-[#0A66C2]">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="transition-colors hover:text-[#0A66C2]">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/global-presence" className="transition-colors hover:text-[#0A66C2]">
                  Global Presence
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="transition-colors hover:text-[#0A66C2]">
                  News and Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-[#0A66C2]">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#0A66C2]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[#0A66C2]" />
                <span className="text-sm">123 Medical Plaza, Healthcare District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#0A66C2]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#0A66C2]" />
                <span className="text-sm">info@pharmacare.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm sm:px-6 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} PharmaCare. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-[#0A66C2]">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-[#0A66C2]">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-[#0A66C2]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
