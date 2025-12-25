import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import peabaoLogo from "@/assets/peabao-logo-clean.png";
const navLinks = [{
  name: "Home",
  href: "/"
}, {
  name: "About Us",
  href: "/about"
}, {
  name: "Shop",
  href: "/shop"
}, {
  name: "Contact",
  href: "/contact"
}];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-light/95 backdrop-blur-md border-b border-border">
      <div className="container-main mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-soft group-hover:shadow-card transition-all duration-300 border border-border/30">
              <img alt="Peabao Delight Logo" className="w-[90%] h-[90%] object-contain group-hover:scale-105 transition-transform duration-300" src="/lovable-uploads/4f453dcd-0a1f-4c7e-9a84-5523f5decfb4.png" />
            </div>
            <span className="text-primary text-xl md:text-2xl tracking-wide" style={{
            fontFamily: "'Luckiest Guy', cursive",
            textShadow: '2px 2px 0 hsl(var(--cocoa) / 0.3)'
          }}>
              Peabao Delight
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`font-heading font-semibold text-sm transition-all duration-300 hover:text-primary ${location.pathname === link.href ? "text-primary" : "text-cocoa/70"}`}>
                {link.name}
              </Link>)}
            <Button variant="hero" size="sm" asChild>
              <Link to="/shop">Order Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-cocoa" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-6 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.name} to={link.href} className={`font-heading font-semibold text-base py-2 transition-all duration-300 ${location.pathname === link.href ? "text-primary" : "text-cocoa/70"}`} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>)}
              <Button variant="hero" className="mt-2" asChild>
                <Link to="/shop" onClick={() => setIsOpen(false)}>Order Now</Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
}