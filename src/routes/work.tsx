import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Projects — huaR" },
      {
        name: "description",
        content: "A showcase of our latest projects, highlighting thoughtful design, clear strategy, and impactful results.",
      },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    id: "astral",
    name: "Astral",
    category: "Agency Template",
    image: "https://framerusercontent.com/images/VNXQLcPHw9VbVzy6BDpZ8pUsaU.png?width=1160&height=800",
  },
  {
    id: "equinox",
    name: "Equinox",
    category: "SaaS Template",
    image: "https://framerusercontent.com/images/WgEHVRrQs62rgxlzrnXJJ8rr4.png?width=1160&height=800",
  },
  {
    id: "vesta",
    name: "Vesta",
    category: "AI Template",
    image: "https://framerusercontent.com/images/I3azeVtkvdKBGl9TX38tUdXEb0.png?width=1160&height=800",
  },
  {
    id: "caelum",
    name: "Caelum",
    category: "Studio Template",
    image: "https://framerusercontent.com/images/e3DxUGJWqt7CIVVQIA0VZoy09FQ.png?width=1160&height=800",
  },
  {
    id: "irsa",
    name: "Irsa",
    category: "AI Template",
    image: "https://framerusercontent.com/images/l08IN6OxWS7DxFD28fNZXjCT4.png?width=1160&height=800",
  },
  {
    id: "rah",
    name: "Rah",
    category: "Environmental Template",
    image: "https://framerusercontent.com/images/IBHqRDPghoZPLzWsGC2SWmPo.png?width=1160&height=800",
  },
];

function WorkPage() {
  return (
    <div className="bg-black min-h-screen font-sans text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
      <Nav />
      <main className="pt-20">
        {/* Header Section */}
        <section className="border-b border-zinc-800 px-6 sm:px-12 py-16 sm:py-24">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-white reveal">
              Our Brightest<br />Creations
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl reveal" style={{ animationDelay: "200ms" }}>
              A showcase of our latest projects, highlighting thoughtful design, clear strategy, and impactful results.
            </p>
          </div>
        </section>

        {/* Project Grid */}
        <section className="border-b border-zinc-800 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
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
                      project.id === "caelum" ? "group-hover:sepia-[.6] group-hover:saturate-150" : ""
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 text-[10px] tracking-widest text-zinc-500 uppercase font-mono bg-black/80 px-2.5 py-1 backdrop-blur-sm">
                    Project.0{index + 1}
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-xl font-display font-bold uppercase tracking-wider text-white group-hover:text-zinc-200 transition-colors">
                      {project.name}
                    </h2>
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
      </main>
      <Footer />
    </div>
  );
}
