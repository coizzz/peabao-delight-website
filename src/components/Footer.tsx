import { Link } from "react-router-dom";
import { Facebook, Instagram, Music2 } from "lucide-react";
import peabaoLogo from "@/assets/peabao-logo-clean.png";

export function Footer() {
  return (
    <footer className="bg-cocoa text-cream-light">
      <div className="container-main mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-peach/30 to-mango/40 flex items-center justify-center overflow-hidden">
                <img 
                  src={peabaoLogo} 
                  alt="Peabao Delight Logo" 
                  className="w-14 h-14 object-contain"
                />
              </div>
              <span 
                className="text-primary text-2xl"
                style={{ fontFamily: "'Luckiest Guy', cursive", textShadow: '2px 2px 0 hsl(var(--background) / 0.2)' }}
              >
                Peabao Delight
              </span>
            </div>
            <p className="text-cream-light/80 text-sm leading-relaxed max-w-sm mb-6">
              Filipino dessert in a bao. Experience the joy of peach mango comfort wrapped in every bite.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585103797635"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-light/10 flex items-center justify-center hover:bg-primary hover:text-cocoa transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/peabao_delight/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-light/10 flex items-center justify-center hover:bg-primary hover:text-cocoa transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream-light/10 flex items-center justify-center hover:bg-primary hover:text-cocoa transition-all duration-300"
                aria-label="TikTok"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-cream-light">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-cream-light/70 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-light/70 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-cream-light/70 hover:text-primary transition-colors text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-light/70 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-cream-light">Contact Us</h4>
            <ul className="space-y-3 text-sm text-cream-light/70">
              <li>
                <a href="tel:+639171862249" className="hover:text-primary transition-colors">
                  +63 917 186 2249
                </a>
              </li>
              <li>
                <a href="mailto:peabaodelight@gmail.com" className="hover:text-primary transition-colors">
                  peabaodelight@gmail.com
                </a>
              </li>
              <li>Tue–Sun: 11:00 AM – 8:00 PM</li>
              <li>Fairview, Quezon City</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream-light/60 text-sm">
              © {new Date().getFullYear()} Peabao Delight. All rights reserved.
            </p>
            <p className="text-cream-light/60 text-sm">
              Filipino dessert in a bao. 🥟
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
