import { ScrollRevealText } from "./ScrollRevealText";

const servicesList = [
  {
    num: "01/",
    title: "WEBSITE MIGRATION",
    items: ["Web Rebuilds", "Web Migration", "Web Optimization"],
  },
  {
    num: "02/",
    title: "ANIMATED WEBSITES",
    items: ["Animations", "Fluid Architect", "Responsive Motions"],
  },
  {
    num: "03/",
    title: "APP DEVELOPMENT",
    items: ["UI Dev", "Cross-Platform Solutions", "iOS & Android Native Development"],
  },
  {
    num: "04/",
    title: "PRODUCT CONSULTING",
    items: ["Web Strategy", "Product Direction", "Technical Guidance"],
  },
  {
    num: "05/",
    title: "DIGITAL MARKETING",
    items: ["Ads", "Smart SEO", "Organic Trafficking"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-zinc-800 bg-black text-white">
      {/* Title Section */}
      <div className="border-b border-zinc-800 p-6 sm:p-12">
        <ScrollRevealText
          text="SERVICES"
          className="text-5xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-wider text-white"
        />
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        {servicesList.map((service) => (
          <div
            key={service.title}
            className="p-8 sm:p-12 flex flex-col justify-between min-h-[300px] border-b md:border-b-0 border-zinc-800 md:border-r last:border-r-0"
          >
            <div>
              <span className="font-mono text-xs text-zinc-500 block mb-6">{service.num}</span>
              <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-wider text-white mb-8">
                {service.title}
              </h3>
            </div>
            <div className="space-y-3">
              {service.items.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="h-1 w-1 bg-white rounded-full opacity-40" />
                  <span className="text-zinc-400 text-sm font-sans tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
