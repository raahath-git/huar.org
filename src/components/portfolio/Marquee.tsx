export function Marquee() {
  const text = "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design. ";
  const repeatedText = Array(4).fill(text).join("  •  ");

  return (
    <div className="border-b border-zinc-800 bg-black py-8 overflow-hidden flex select-none">
      <div className="flex whitespace-nowrap min-w-full">
        {/* Two identical containers for seamless loop */}
        <div className="animate-marquee flex gap-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-zinc-400">
          <span>{repeatedText}</span>
          <span className="mx-4">•</span>
        </div>
        <div className="animate-marquee flex gap-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-zinc-400">
          <span>{repeatedText}</span>
          <span className="mx-4">•</span>
        </div>
      </div>
    </div>
  );
}
