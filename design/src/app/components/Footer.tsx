import { Link } from 'react-router';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0A66C2] to-[#0856a8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Px</span>
              </div>
              <span className="text-xl font-bold text-white">PharmaCare</span>
            </div>
            <p className="text-sm leading-relaxed">
              Leading the way in pharmaceutical innovation and healthcare solutions for a healthier tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#0A66C2] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#0A66C2] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#0A66C2] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-[#0A66C2] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#0A66C2] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0A66C2] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#0A66C2] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="hover:text-[#0A66C2] transition-colors">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/global-presence" className="hover:text-[#0A66C2] transition-colors">
                  Global Presence
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="hover:text-[#0A66C2] transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0A66C2] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#0A66C2] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#0A66C2]" />
                <span className="text-sm">
                  123 Medical Plaza, Healthcare District, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-[#0A66C2]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-[#0A66C2]" />
                <span className="text-sm">info@pharmacare.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} PharmaCare. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-[#0A66C2] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#0A66C2] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#0A66C2] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}