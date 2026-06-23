import { useState, useEffect } from "react";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const words = [
    "Sell Products",
    "Convert Visitors",
    "Outshine Competitors",
    "Accelerate Revenue",
    "Command Attention"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % words.length);
        setIsTransitioning(false);
      }, 800);
    }, 2800);
    return () => clearInterval(timer);
  }, [words.length]);

  const currentWord = words[activeIndex];
  const nextWord = words[(activeIndex + 1) % words.length];

  return (
    <section id="hero-section" className="pt-24 border-b border-zinc-800 bg-black text-white">
      {/* Huge Typographic Header */}
      <div className="border-b border-zinc-800 py-12 px-6 sm:px-12 flex flex-col items-start justify-center">
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.9] tracking-tighter uppercase w-full">
          <div className="reveal" style={{ animationDelay: "100ms" }}>We Craft Premium</div>
          <div className="reveal" style={{ animationDelay: "200ms" }}>Websites That</div>
          <div className="reveal text-zinc-800 h-[1.15em] overflow-hidden relative" style={{ animationDelay: "300ms" }}>
            <div
              className={isTransitioning ? "flex flex-col transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]" : "flex flex-col"}
              style={{ transform: isTransitioning ? "translateY(-1.15em)" : "translateY(0)" }}
            >
              <div className="h-[1.15em] flex items-center leading-none">
                {currentWord}
              </div>
              <div className="h-[1.15em] flex items-center leading-none">
                {nextWord}
              </div>
            </div>
          </div>
        </h1>
        <p className="mt-8 text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl reveal font-sans text-justify" style={{ animationDelay: "400ms" }}>
          We build high-converting, product-focused websites that turn your visitors into buyers. Next, our hyper-targeted ads and digital marketing launch your brand directly in front of active shoppers ready to purchase. Finally, we embed smart, data-backed SEO to drive compounding organic traffic to your site 24/7. Together, we combine premium web development with precision marketing to build you an unstoppable sales machine.
        </p>
      </div>

      {/* Meta Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-xs uppercase tracking-widest text-zinc-500 font-medium">
        <div className="py-6 px-6 sm:px-12 md:border-r border-zinc-800 flex items-center gap-2">
          <span className="text-white">©2026</span>
          <span className="text-zinc-600">/</span>
          <span>CREATING SINCE 2020</span>
        </div>
        <div className="py-6 px-6 sm:px-12 hidden md:flex items-center justify-end gap-2 text-zinc-400">
          <span>AVAILABLE FOR CONTRACTS</span>
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
