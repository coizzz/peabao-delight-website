import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-light/95 backdrop-blur-md border-b border-border">
      <div className="container-main mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-peach to-mango flex items-center justify-center shadow-soft group-hover:shadow-card transition-all duration-300">
              <span className="text-cocoa font-heading font-bold text-lg md:text-xl">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-cocoa text-lg md:text-xl leading-tight">Peabao</span>
              <span className="font-heading font-semibold text-peach text-xs md:text-sm leading-tight">Delight</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-heading font-semibold text-sm transition-all duration-300 hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-cocoa/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" size="sm" asChild>
              <Link to="/shop">Order Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-cocoa"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-heading font-semibold text-base py-2 transition-all duration-300 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-cocoa/70"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <Link to="/shop" onClick={() => setIsOpen(false)}>Order Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
