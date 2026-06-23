import { Link } from "@tanstack/react-router";
import { useState } from "react";
import * as React from "react";

export function InteractiveTicker() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const tickerItems = [
    { id: "marketing", text: "Marketing", img: "/ticker-marketing.png" },
    { id: "creativity", text: "Creativity", img: "/ticker-creativity.png" },
    { id: "strategy", text: "Strategy", img: "/ticker-strategy.png" },
  ];

  // Repeat items for seamless infinite loops
  const repeatedItems = [
    ...tickerItems,
    ...tickerItems,
    ...tickerItems,
    ...tickerItems,
    ...tickerItems,
  ];

  return (
    <section
      onMouseLeave={() => setHoveredItem(null)}
      className="bg-[#000000] py-12 md:py-20 flex flex-col gap-8 border-y border-zinc-900 overflow-hidden relative select-none w-full"
      style={{ backgroundImage: "none" }}
    >
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#000000] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#000000] to-transparent z-20 pointer-events-none" />

      {/* Main Track (Default State) */}
      <div className="flex whitespace-nowrap min-w-full overflow-hidden relative z-10">
        <div className="animate-marquee flex items-center gap-10 md:gap-16 pr-10 md:pr-16 hover:[animation-play-state:paused]">
          {repeatedItems.map((item, idx) => (
            <Link
              key={`default-1-${idx}`}
              to="/work"
              onMouseEnter={() => setHoveredItem(item.id)}
              className="flex items-center gap-5 md:gap-8 cursor-pointer group no-underline shrink-0"
            >
              <img
                src={item.img}
                alt={item.text}
                className="w-[140px] md:w-[240px] h-[89px] md:h-[153px] object-cover rounded-none transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="text-[80px] md:text-[120px] font-sans font-bold tracking-[-0.07em] leading-none text-[#a1a1aa] transition-all duration-500 group-hover:scale-105 group-hover:text-[#ffffff]">
                {item.text}
              </span>
            </Link>
          ))}
        </div>
        <div className="animate-marquee flex items-center gap-10 md:gap-16 pr-10 md:pr-16 hover:[animation-play-state:paused]" aria-hidden="true">
          {repeatedItems.map((item, idx) => (
            <Link
              key={`default-2-${idx}`}
              to="/work"
              onMouseEnter={() => setHoveredItem(item.id)}
              className="flex items-center gap-5 md:gap-8 cursor-pointer group no-underline shrink-0"
            >
              <img
                src={item.img}
                alt={item.text}
                className="w-[140px] md:w-[240px] h-[89px] md:h-[153px] object-cover rounded-none transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="text-[80px] md:text-[120px] font-sans font-bold tracking-[-0.07em] leading-none text-[#a1a1aa] transition-all duration-500 group-hover:scale-105 group-hover:text-[#ffffff]">
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Hover Overlays */}
      {tickerItems.map((item) => {
        const isActive = hoveredItem === item.id;
        return (
          <div
            key={item.id}
            className={`absolute inset-0 z-30 transition-all duration-500 ease-out pointer-events-none flex items-center overflow-hidden ${
              isActive ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
            }`}
          >
            {/* Background Blurred Image */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-[4px] brightness-75 scale-105 transition-all duration-500"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            {/* Light Tint Overlay for Black Text Contrast */}
            <div className="absolute inset-0 bg-white/20" />

            {/* Scrolling Ticker for Hover State */}
            <div className="relative z-10 flex whitespace-nowrap min-w-full overflow-hidden w-full items-center">
              <div className="animate-marquee flex items-center gap-10 md:gap-16 pr-10 md:pr-16">
                {Array(10)
                  .fill(null)
                  .map((_, i) => (
                    <div key={`hover-1-${item.id}-${i}`} className="flex items-center gap-10 md:gap-16 shrink-0">
                      <span className="text-[80px] md:text-[120px] font-sans font-bold tracking-[-0.07em] leading-none text-[#000000]">
                        {item.text}
                      </span>
                      <span className="text-[80px] md:text-[120px] font-sans font-bold tracking-[-0.07em] leading-none text-[#000000]">
                        ↗
                      </span>
                    </div>
                  ))}
              </div>
              <div className="animate-marquee flex items-center gap-10 md:gap-16 pr-10 md:pr-16" aria-hidden="true">
                {Array(10)
                  .fill(null)
                  .map((_, i) => (
                    <div key={`hover-2-${item.id}-${i}`} className="flex items-center gap-10 md:gap-16 shrink-0">
                      <span className="text-[80px] md:text-[120px] font-sans font-bold tracking-[-0.07em] leading-none text-[#000000]">
                        {item.text}
                      </span>
                      <span className="text-[80px] md:text-[120px] font-sans font-bold tracking-[-0.07em] leading-none text-[#000000]">
                        ↗
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

