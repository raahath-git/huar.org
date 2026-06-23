import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/#services" },
    { name: "Works", to: "/work" },
    { name: "Blog", to: "/blog" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.startsWith("/#")) {
      const id = to.substring(2);
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        const yOffset = -80; // Offset for sticky header
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#111111]/95 border-[#27272a] backdrop-blur-md py-4"
          : "bg-[#111111] border-[#27272a] backdrop-blur-sm py-6"
      }`}
      style={{ backgroundImage: "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="hover:opacity-85 transition-opacity -ml-4"
        >
          <img
            src="/logo-header.png"
            alt="huaR logo"
            className="h-5 w-auto object-contain"
            style={{ filter: "invert(1)", mixBlendMode: "screen" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={(e) => handleLinkClick(e, link.to)}
              className="text-xs uppercase tracking-widest font-medium text-[#a1a1aa] hover:text-[#f2efeb] transition-colors duration-200"
              activeProps={{ className: "text-[#f2efeb]" }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/#contact"
            onClick={(e) => handleLinkClick(e, "/#contact")}
            className="border border-[#27272a] hover:border-[#f2efeb] px-5 py-2 text-xs uppercase tracking-widest font-semibold text-[#f2efeb] bg-transparent transition-all duration-300 active:scale-95"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#a1a1aa] hover:text-[#f2efeb] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[69px] bg-[#111111] z-40 border-t border-[#27272a] px-6 py-8 flex flex-col gap-6 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={(e) => handleLinkClick(e, link.to)}
              className="text-lg font-display uppercase tracking-widest font-semibold text-[#a1a1aa] hover:text-[#f2efeb] transition-colors py-2 border-b border-[#27272a]"
              activeProps={{ className: "text-[#f2efeb] border-[#f2efeb]" }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={(e) => handleLinkClick(e, "/#contact")}
            className="border border-[#27272a] hover:border-[#f2efeb] py-3 text-center text-sm uppercase tracking-widest font-semibold text-[#f2efeb] bg-transparent transition-all duration-300 mt-4"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
