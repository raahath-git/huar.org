import { Link } from "@tanstack/react-router";
import { ScrollRevealText } from "./ScrollRevealText";

const recentThoughts = [
  {
    id: "how-can-designers-prepare-for-the-future",
    date: "May 5, 2025",
    title: "Building Trust Through Clear Design",
    description: "How thoughtful visual choices create a stronger sense of reliability for modern brands.",
  },
  {
    id: "why-every-business-needs-a-professional-website-in-2025",
    date: "Jun 16, 2025",
    title: "The Role of Art Direction in Branding",
    description: "Why visual direction helps brands create emotion and a distinct point of view.",
  },
  {
    id: "how-creative-teams-build-strong-brand-systems",
    date: "Jun 16, 2025",
    title: "How Creative Teams Build Brand Systems",
    description: "A look at the workflows that keep branding consistent across every touchpoint.",
  },
];

export function ThoughtsList() {
  return (
    <section id="blog-section" className="border-b border-zinc-800 bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Heading and info */}
        <div className="lg:col-span-4 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between gap-12">
          <div className="space-y-6">
            <ScrollRevealText
              text="Thoughts"
              className="text-3xl font-display font-bold uppercase tracking-wider text-white"
            />
            <p className="text-zinc-400 text-sm leading-relaxed font-sans max-w-sm">
              See how we shape brands with clarity and craft—explore our blog.
            </p>
          </div>
          <div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white border border-zinc-800 hover:border-white px-6 py-3 transition-colors duration-200"
            >
              Explore Blog
              <svg
                className="size-4 transition-transform group-hover:translate-x-1 duration-200"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column: Thought list items */}
        <div className="lg:col-span-8 flex flex-col">
          {recentThoughts.map((thought, index) => (
            <Link
              key={thought.id}
              to="/blog/$blogId"
              params={{ blogId: thought.id }}
              className={`p-6 sm:p-12 flex flex-col justify-between transition-all duration-300 hover:bg-zinc-950 border-b border-zinc-800 ${
                index === recentThoughts.length - 1 ? "border-b-0" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-3 max-w-xl">
                  <span className="font-mono text-xs text-zinc-500 block">{thought.date}</span>
                  <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white group-hover:text-zinc-200 transition-colors">
                    {thought.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-sans leading-relaxed">
                    {thought.description}
                  </p>
                </div>
                <div className="flex size-10 items-center justify-center border border-zinc-800 bg-transparent text-white group-hover:border-white transition-colors duration-300 self-end sm:self-center shrink-0">
                  <svg
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.75a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0 0 1.5h5.19L2.22 12.72a.75.75 0 1 0 1.06 1.06L12.5 4.56v5.19a.75.75 0 0 0 1.5 0V2.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
