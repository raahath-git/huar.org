import { Link } from "@tanstack/react-router";

export function Footer() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-zinc-900">
      {/* Top Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-900">
        {/* Col 1: Big Pitch */}
        <div className="md:col-span-6 p-6 sm:p-12 md:border-r border-zinc-900 flex flex-col justify-center">
          <h3 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight leading-none max-w-sm">
            Scaling<br />
            Start-ups<br />
            for Growth.
          </h3>
        </div>

        {/* Col 2: Quick Links */}
        <div className="md:col-span-3 p-6 sm:p-12 border-t md:border-t-0 border-zinc-900 md:border-r flex flex-col gap-6">
          <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            / Quick links
          </div>
          <div className="flex flex-col gap-3 text-sm font-sans">
            <Link
              to="/"
              onClick={(e) => handleScrollToSection(e, "hero-section")}
              className="text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={(e) => handleScrollToSection(e, "bio-section")}
              className="text-zinc-400 hover:text-white transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/"
              onClick={(e) => handleScrollToSection(e, "services")}
              className="text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/work"
              className="text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Works
            </Link>
            <Link
              to="/blog"
              className="text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              to="/"
              onClick={(e) => handleScrollToSection(e, "contact")}
              className="text-zinc-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Col 3: Contact */}
        <div className="md:col-span-3 p-6 sm:p-12 border-t md:border-t-0 border-zinc-900 flex flex-col gap-6">
          <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            / Contact
          </div>
          <div className="space-y-4">
            <a
              href="mailto:mejed@huar.io"
              className="text-sm font-sans text-zinc-400 hover:text-white transition-colors duration-200 block break-all font-medium"
            >
              mejed@huar.io
            </a>
            <div className="text-zinc-500 text-[10px] leading-relaxed tracking-wider font-sans uppercase">
              Syria, Damascus<br />
              GMT +3
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="p-6 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 text-xs uppercase tracking-widest font-mono text-zinc-500">
        {/* Brand Logo */}
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <img
            src="/logo.png"
            alt="huaR brand logo"
            className="h-12 w-auto object-contain mix-blend-multiply"
          />
        </Link>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 text-[10px] tracking-[0.2em] font-semibold text-zinc-400">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            X (Twitter)
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            YouTube
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[10px] text-zinc-600 font-sans text-center sm:text-right">
          © {new Date().getFullYear()} huaR. YOUR VISION, FULLY CODED.
        </div>
      </div>
    </footer>
  );
}
