import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — huaR" },
      {
        name: "description",
        content: "Discover ideas, perspectives, and creative thinking shaped by our work in brand identity and art direction.",
      },
    ],
  }),
  component: BlogPage,
});

const blogPosts = [
  {
    id: "how-can-designers-prepare-for-the-future",
    date: "May 5, 2025",
    title: "Building Trust Through Clear Design",
    description: "How thoughtful visual choices create a stronger sense of reliability for modern brands.",
    image: "https://framerusercontent.com/images/lxtBXj3G7Bloek83WxPY1ZUuw0Q.png?width=640&height=360",
  },
  {
    id: "why-every-business-needs-a-professional-website-in-2025",
    date: "Jun 16, 2025",
    title: "The Role of Art Direction in Branding",
    description: "Why visual direction helps brands create emotion and a distinct point of view.",
    image: "https://framerusercontent.com/images/ic9k42rYytbJtnRUJXdcNxCHSc.png?width=640&height=359",
  },
  {
    id: "how-creative-teams-build-strong-brand-systems",
    date: "Jun 16, 2025",
    title: "How Creative Teams Build Brand Systems",
    description: "A look at the workflows that keep branding consistent across every touchpoint.",
    image: "https://framerusercontent.com/images/MWSFsHfw8FDzKSMZllibGDMY4CU.png?width=640&height=360",
  },
  {
    id: "the-rise-of-modern-tech-startup-websites",
    date: "Jun 16, 2025",
    title: "The Rise of Modern Tech Startup Websites",
    description: "Why tech startups need clear, high trust digital experiences to communicate and attract users.",
    image: "https://framerusercontent.com/images/Mirnh1WfdeIPhnjStrfY33WLFo8.png?width=640&height=427",
  },
  {
    id: "top-web-design-trends-to-watch-in-2025",
    date: "Jun 16, 2025",
    title: "Top Web Design Trends to Watch in 2025",
    description: "Stay ahead of the curve with these key design trends shaping the future of the web.",
    image: "https://framerusercontent.com/images/xgMwYRclJvAhqaJhMbQm8kpRv0.png?width=640&height=427",
  },
  {
    id: "designing-products-with-purpose",
    date: "May 5, 2025",
    title: "Designing Products with Clear Purpose",
    description: "How mission-led design turns digital products into richer, more meaningful experiences.",
    image: "https://framerusercontent.com/images/VIMRfiZ27XChz1XOgjss4EmUoDM.png?width=640&height=480",
  },
  {
    id: "starting-and-growing-a-career-in-web-design",
    date: "May 5, 2025",
    title: "Starting and Growing a Career in Web Design",
    description: "Web design blends creativity and tech, offering strong demand and roles in design.",
    image: "https://framerusercontent.com/images/HH3YKlPdNvuWQdn3ypOgOThmOk.png?width=640&height=427",
  },
];

function BlogPage() {
  return (
    <div className="bg-black min-h-screen font-sans text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
      <Nav />
      <main className="pt-20">
        {/* Header Section */}
        <section className="border-b border-zinc-800 px-6 sm:px-12 py-16 sm:py-24">
          <div className="max-w-4xl space-y-6">
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-white reveal">
              Our Brightest<br />Thoughts
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl reveal" style={{ animationDelay: "200ms" }}>
              Discover ideas, perspectives, and creative thinking shaped by our work in brand identity and art direction. Each article explores how thoughtful design helps brands with clarity and intention.
            </p>
          </div>
        </section>

        {/* Blog Post List */}
        <section className="bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to="/blog/$blogId"
                params={{ blogId: post.id }}
                className={`group p-8 sm:p-12 flex flex-col justify-between border-b border-zinc-800 transition-all duration-300 hover:bg-zinc-950 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-zinc-850 bg-zinc-900 mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`h-full w-full object-cover transition-[transform,filter] duration-700 group-hover:scale-102 filter grayscale group-hover:grayscale-0 contrast-105 brightness-95 ${
                      index < 3 ? "group-hover:sepia-[0.4] group-hover:saturate-[180%]" : ""
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 text-[10px] tracking-widest text-zinc-500 uppercase font-mono bg-black/80 px-2.5 py-1 backdrop-blur-sm">
                    {post.date}
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="max-w-[80%]">
                    <h2 className="text-xl font-display font-bold uppercase tracking-wider text-white group-hover:text-zinc-200 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-zinc-400 text-sm font-sans mt-3 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex size-10 items-center justify-center border border-zinc-800 bg-transparent text-white group-hover:border-white transition-colors duration-300 shrink-0">
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
