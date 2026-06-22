import { ScrollRevealText } from "./ScrollRevealText";

const testimonials = [
  {
    quote:
      "huaR completely changed how I approach building sites in Framer. The templates are not just beautiful, they’re actually structured in a way that makes scaling so much easier.",
    name: "Yakoub Kashmiri",
    role: "Marketing Director",
    avatar: "https://framerusercontent.com/images/kAftuUN9iRKwIt9M6RqZo9NS314.jpg?width=160&height=160",
  },
  {
    quote:
      "I’ve tried dozens of Framer templates, but huaR stands out. Everything feels intentional, from the layout to the smallest interactions.",
    name: "Daniel K.",
    role: "Indie Maker",
    avatar: "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg?width=160&height=160",
  },
  {
    quote:
      "huaR saved me weeks of work. I was able to launch my landing page in a day, and it still looks fully custom.",
    name: "Mark M.",
    role: "Startup Founder",
    avatar: "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg?width=160&height=160",
  },
  {
    quote:
      "The quality is insane. Clean structure, smooth animations, and super easy to customize. It feels like a premium product from start to finish.",
    name: "Omar H.",
    role: "Frontend Developer",
    avatar: "https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg?width=160&height=160",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-zinc-800 bg-black text-white">
      {/* Title Section */}
      <div className="border-b border-zinc-800 p-6 sm:p-12">
        <ScrollRevealText
          text="Testimonials"
          className="text-3xl font-display font-bold uppercase tracking-wider text-white"
        />
      </div>

      {/* Grid of Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, index) => (
          <div
            key={t.name}
            className={`p-8 sm:p-12 flex flex-col justify-between border-b border-zinc-800 lg:border-b-0 ${
              index < 3 ? "lg:border-r" : ""
            } ${index % 2 === 0 ? "md:border-r lg:border-r" : ""} ${
              index === 1 ? "md:border-r-0 lg:border-r" : ""
            } ${index === 2 ? "md:border-r lg:border-r" : ""}`}
          >
            <blockquote className="text-zinc-400 text-sm leading-relaxed font-sans mb-8">
              “{t.quote}”
            </blockquote>
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="size-10 rounded-full border border-zinc-850 object-cover filter grayscale"
                loading="lazy"
              />
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-white">
                  {t.name}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
