import { ScrollRevealText } from "./ScrollRevealText";

const servicesList = [
  {
    num: "01/",
    title: "Website Migration",
    items: ["Web Migration", "Optimization", "Framer Rebuild"],
  },
  {
    num: "02/",
    title: "Framer Templates",
    items: ["Startup", "Agency", "SaaS"],
  },
  {
    num: "03/",
    title: "Frontend Development",
    items: ["UI Dev", "Responsive Layouts", "Web Performance"],
  },
  {
    num: "04/",
    title: "Product Consulting",
    items: ["Product Direction", "Web Strategy", "Technical Guidance"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-zinc-800 bg-black text-white">
      {/* Title Section */}
      <div className="border-b border-zinc-800 p-6 sm:p-12">
        <ScrollRevealText
          text="Services"
          className="text-3xl font-display font-bold uppercase tracking-wider text-white"
        />
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {servicesList.map((service, index) => (
          <div
            key={service.title}
            className={`p-8 sm:p-12 flex flex-col justify-between min-h-[250px] border-b sm:border-b-0 border-zinc-800 ${
              index < 3 ? "sm:border-r" : ""
            } ${index === 1 ? "lg:border-r" : ""} ${index === 2 ? "lg:border-r" : ""}`}
          >
            <div>
              <span className="font-mono text-xs text-zinc-600 block mb-6">{service.num}</span>
              <h3 className="text-lg font-display font-bold uppercase tracking-wider text-white mb-8">
                {service.title}
              </h3>
            </div>
            <div className="space-y-3">
              {service.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
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
