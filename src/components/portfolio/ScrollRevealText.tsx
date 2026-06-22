import { useEffect, useRef, useState } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  const words = text.split(" ");
  
  // Calculate total characters (excluding spaces for active count, or including is fine)
  const totalChars = text.length;

  useEffect(() => {
    setIsClient(true);
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when the top of the heading is at the bottom of the viewport
      // Complete the reveal when the heading is at 35% of the viewport height (scrolled into clear view)
      const start = windowHeight;
      const end = windowHeight * 0.35;

      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      container.style.setProperty("--scroll-progress", progress.toString());
    };

    // Initialize position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  let globalCharCounter = 0;

  return (
    <h2
      ref={containerRef}
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
      style={{
        "--scroll-progress": isClient ? "0" : "1",
        "--total-chars": totalChars.toString(),
      } as React.CSSProperties}
    >
      {words.map((word, wordIdx) => {
        const chars = Array.from(word);
        return (
          <span key={wordIdx} className="inline-flex whitespace-nowrap">
            {chars.map((char, charIdx) => {
              const globalIdx = globalCharCounter++;
              return (
                <span
                  key={charIdx}
                  className="transition-opacity duration-150 ease-out"
                  style={{
                    "--char-index": globalIdx.toString(),
                    opacity: `calc(0.25 + 0.75 * clamp(0, (var(--scroll-progress) * var(--total-chars) - var(--char-index)) / 2.5, 1))`,
                  } as React.CSSProperties}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h2>
  );
}
