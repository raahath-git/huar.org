import { Link } from "@tanstack/react-router";
import { ScrollRevealText } from "./ScrollRevealText";

const featuredProjects = [
  {
    id: "damas",
    name: "Damas",
    category: "Agency Framer Template",
    image: "https://framerusercontent.com/images/VNXQLcPHw9VbVzy6BDpZ8pUsaU.png?width=1160&height=800",
  },
  {
    id: "najm",
    name: "Najm",
    category: "SaaS Framer Template",
    image: "https://framerusercontent.com/images/WgEHVRrQs62rgxlzrnXJJ8rr4.png?width=1160&height=800",
  },
  {
    id: "kavi",
    name: "Kavi",
    category: "AI Framer Template",
    image: "https://framerusercontent.com/images/I3azeVtkvdKBGl9TX38tUdXEb0.png?width=1160&height=800",
  },
  {
    id: "sham",
    name: "Sham",
    category: "Studio Framer Template",
    image: "https://framerusercontent.com/images/e3DxUGJWqt7CIVVQIA0VZoy09FQ.png?width=1160&height=800",
  },
];

export function PortfolioGrid() {
  return (
    <section id="work" className="border-b border-zinc-800 bg-black text-white">
      {/* Title Section */}
      <div className="border-b border-zinc-800 p-6 sm:p-12 flex items-center justify-between">
        <ScrollRevealText
          text="Featured Projects"
          className="text-3xl font-display font-bold uppercase tracking-wider text-white"
        />
        <Link
          to="/work"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-400 hover:text-white transition-colors duration-200"
        >
          View All Work
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

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <Link
            key={project.id}
            to="/work/$projectId"
            params={{ projectId: project.id }}
            className={`group p-8 sm:p-12 flex flex-col justify-between border-b border-zinc-800 transition-all duration-300 hover:bg-zinc-950 ${
              index % 2 === 0 ? "md:border-r" : ""
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-zinc-850 bg-zinc-900 mb-8">
              <img
                src={project.image}
                alt={project.name}
                className={`h-full w-full object-cover transition-[transform,filter] duration-700 group-hover:scale-102 filter grayscale group-hover:grayscale-0 contrast-110 brightness-95 group-hover:brightness-100 ${
                  project.id === "sham" ? "group-hover:sepia-[.6] group-hover:saturate-150" : ""
                }`}
                loading="lazy"
              />
              <div className="absolute top-4 left-4 text-[10px] tracking-widest text-zinc-500 uppercase font-mono bg-black/80 px-2.5 py-1 backdrop-blur-sm">
                Project.0{index + 1}
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white group-hover:text-zinc-200 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium mt-2">
                  {project.category}
                </p>
              </div>
              <div className="flex size-10 items-center justify-center border border-zinc-800 bg-transparent text-white group-hover:border-white transition-colors duration-300">
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
    </section>
  );
}
