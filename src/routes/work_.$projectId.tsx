import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/work_/$projectId")({
  head: ({ params }) => {
    const name = params.projectId.charAt(0).toUpperCase() + params.projectId.slice(1);
    return {
      meta: [
        { title: `${name} — Project Detail` },
        {
          name: "description",
          content: `Details and case study for the ${name} Framer website template.`,
        },
      ],
    };
  },
  component: WorkDetailPage,
});

const projectsData: Record<
  string,
  {
    id: string;
    name: string;
    category: string;
    year: string;
    liveLink: string;
    desc: string;
    sections: { title: string; content: string }[];
    mainImage: string;
    gallery: string[];
  }
> = {
  damas: {
    id: "damas",
    name: "Damas",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "https://framer.link/bsFvFjY",
    desc: "Damas is a modern creative agency template built for bold visuals, smooth interactions, and standout storytelling. Perfect for agencies, studios, and creators who want a polished, high impact online presence without starting from scratch.",
    mainImage: "https://framerusercontent.com/images/VNXQLcPHw9VbVzy6BDpZ8pUsaU.png?width=1160&height=800",
    sections: [
      {
        title: "About the Template",
        content:
          "Damas is a refined digital template crafted for modern brands that value clarity, elegance, and strong visual presence. Built with versatility in mind, it adapts seamlessly across industries—whether for studios, agencies, or product-focused businesses looking to elevate their online identity.",
      },
      {
        title: "Designing for Impact, Built for Flexibility",
        content:
          "The goal behind Damas was to create a system that doesn’t just look good, but performs. Every section is intentionally structured to guide attention, highlight key content, and support storytelling without overwhelming the user. The result is a template that feels confident, clean, and highly adaptable.",
      },
      {
        title: "Visual Language",
        content:
          "Damas uses a minimal yet striking visual approach. Strong typography anchors the layout, while generous spacing and structured grids create rhythm and clarity. The color system is intentionally restrained, allowing brands to easily customize while maintaining a polished and cohesive look. Subtle contrasts and refined alignments bring a sense of precision, helping content stand out without unnecessary decoration.",
      },
      {
        title: "Structured Storytelling",
        content:
          "The layout is designed to flow naturally—from introduction to deeper engagement. Each section builds on the previous one, making it easy to present services, showcase work, or communicate brand values in a clear and compelling way. This structure ensures that users not only explore, but understand and connect with the content.",
      },
      {
        title: "Built for Real Use",
        content:
          "Beyond aesthetics, Damas is highly practical. It’s optimized for performance, responsiveness, and ease of editing inside Framer. Every component is reusable and scalable, allowing creators to expand pages, adjust layouts, and maintain consistency without friction.",
      },
      {
        title: "A Foundation for Growth",
        content:
          "Damas is more than a template—it’s a system designed to evolve with the brand using it. Whether expanding content, launching new services, or refining positioning, the structure supports growth without losing visual integrity.",
      },
      {
        title: "Clarity that Scales with You",
        content:
          "Every element within Damas is crafted to serve a purpose—bringing together design and function in a way that feels effortless. It empowers brands to present themselves with confidence, precision, and lasting impact.",
      },
    ],
    gallery: [
      "https://framerusercontent.com/images/173P7WbvHMc1Z9lNpSNy6GIYif8.png?width=1066&height=800",
      "https://framerusercontent.com/images/UmXfpYfVhYqoqb1DnbFpIC98OIo.png?width=1066&height=800",
      "https://framerusercontent.com/images/rRp1KaDwStpJ6Pxo05Doj1IjSU.png?width=1066&height=800",
    ],
  },
  najm: {
    id: "najm",
    name: "Najm",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "https://framer.link/bsFvFjY",
    desc: "A beautifully crafted Framer website template perfect for AI SaaS businesses looking to showcase their innovative products and services.",
    mainImage: "https://framerusercontent.com/images/WgEHVRrQs62rgxlzrnXJJ8rr4.png?width=1160&height=800",
    sections: [
      {
        title: "About the Template",
        content:
          "Najm is a bold, forward-looking digital template designed for brands that want to stand out with clarity and presence. Inspired by the idea of a “guiding star,” it focuses on strong visual direction, confident layouts, and a sense of movement that naturally draws attention. Built for modern creators, studios, and startups, Najm provides a foundation that feels dynamic yet controlled—allowing brands to communicate their identity with precision and energy.",
      },
      {
        title: "A Guiding Presence, Built to Lead",
        content:
          "The concept behind Najm was to create a template that leads rather than follows. Every layout decision is intentional, guiding users through content in a way that feels natural and engaging. It balances bold expression with thoughtful structure, resulting in an experience that is both impactful and easy to navigate.",
      },
      {
        title: "Visual Language",
        content:
          "Najm embraces contrast and depth. Strong typography, layered compositions, and carefully used spacing create a sense of hierarchy and motion. The design system allows for expressive visuals while maintaining a clean and organized framework. Light and dark interplay, combined with sharp alignments, gives the template a modern, almost cinematic feel—perfect for brands that want a striking digital presence.",
      },
      {
        title: "Dynamic Storytelling",
        content:
          "The flow of Najm is built to capture attention and maintain it. Sections transition smoothly, encouraging users to explore further while keeping the experience intuitive. It supports a wide range of content—from portfolios to product highlights—without losing clarity. This approach helps transform static content into a narrative that feels alive and engaging.",
      },
      {
        title: "Built for Creators",
        content:
          "Najm is designed with flexibility at its core. Fully responsive and easy to customize in Framer, it allows creators to adapt layouts, experiment with visuals, and scale their content effortlessly. Each component is built to be modular and reusable, making it simple to maintain consistency while evolving the design.",
      },
      {
        title: "A System That Evolves",
        content:
          "Najm is not just about making a strong first impression—it’s about sustaining it. As brands grow and their needs expand, the template continues to support new ideas, content, and directions without losing its identity.",
      },
      {
        title: "Designed to Guide, Built to Last",
        content:
          "Every element in Najm works together to create a clear, confident presence. It gives brands the tools to express themselves boldly while staying grounded in structure—resulting in a digital experience that feels both powerful and refined.",
      },
    ],
    gallery: [
      "https://framerusercontent.com/images/ujTNOAyihWs0g4ns3ZEmKQBW6M.jpeg?width=1400&height=950",
      "https://framerusercontent.com/images/v1SmiICbdgfuSlTYmhS054D8sI.jpeg?width=1400&height=950",
      "https://framerusercontent.com/images/ixj3l3ntKSbk66sf6KZmqHxXWi0.jpeg?width=1400&height=950",
    ],
  },
  kavi: {
    id: "kavi",
    name: "Kavi",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "https://framer.link/bsFvFjY",
    desc: "Kavi is a bold and modern website template made for SaaS and AI startups looking to launch fast and scale smarter with clean design and intuitive customization.",
    mainImage: "https://framerusercontent.com/images/I3azeVtkvdKBGl9TX38tUdXEb0.png?width=1160&height=800",
    sections: [
      {
        title: "About the Brand",
        content:
          "Kavi is a refined, expressive digital template inspired by creativity, rhythm, and artistic flow. Designed for brands that value storytelling and visual emotion, it creates a space where content feels curated rather than simply arranged. Built for creatives, studios, and personal brands, Kavi blends structure with artistic freedom—allowing each project to feel distinctive while maintaining a cohesive identity.",
      },
      {
        title: "An Artistic Flow",
        content:
          "The vision behind Kavi was to craft a template that feels less rigid and more intuitive. It embraces movement, pacing, and composition to guide users through content in a way that feels natural and engaging.",
      },
      {
        title: "Visual Language",
        content:
          "Kavi uses a soft yet expressive visual system. Layered compositions, balanced whitespace, and elegant typography create a sense of rhythm across the layout. The design allows for visual experimentation while maintaining harmony and clarity. Subtle contrasts and refined details give each section depth, making the overall experience feel rich without being overwhelming.",
      },
      {
        title: "Narrative-Driven Design",
        content:
          "The structure of Kavi is built around storytelling. Content flows in a way that encourages exploration, allowing each section to reveal itself gradually. This creates a more engaging and memorable journey for the user. It’s especially effective for showcasing portfolios, creative work, and brands that rely on emotion and identity.",
      },
      {
        title: "Built for Creative Freedom",
        content:
          "Kavi is designed to be flexible and easy to customize in Framer. Its modular components allow creators to rearrange layouts, adapt styles, and expand content without losing consistency.",
      },
      {
        title: "A Canvas for Growth",
        content:
          "Kavi is more than a template—it’s a creative framework that evolves with the work it presents. As projects grow and ideas expand, it continues to support new expressions and directions.",
      },
      {
        title: "Design that Moves with You",
        content:
          "Every element in Kavi is crafted to enhance creativity and storytelling. It gives brands the ability to present their work with depth, emotion, and clarity—creating a digital presence that feels both personal and impactful.",
      },
    ],
    gallery: [
      "https://framerusercontent.com/images/J0VwtYHHXMhL1FV3jH8iWEtAVk.webp?width=1600&height=1200",
      "https://framerusercontent.com/images/8UEzK68Cuo7xH5PuKC44uAV0ckY.webp?width=1600&height=1200",
      "https://framerusercontent.com/images/Ks48TT9awwpT9gdcWgZd8ev1WY.webp?width=1600&height=1200",
    ],
  },
  sham: {
    id: "sham",
    name: "Sham",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "https://framer.link/bsFvFjY",
    desc: "A clean, modern Framer template designed for creative studios and businesses. Built with flexible sections, smooth interactions, and fully editable components so you can launch a professional agency site quickly and for free.",
    mainImage: "https://framerusercontent.com/images/e3DxUGJWqt7CIVVQIA0VZoy09FQ.png?width=1160&height=800",
    sections: [
      {
        title: "About the Brand",
        content:
          "Sham is a warm, expressive digital template inspired by culture, light, and storytelling. Rooted in a sense of familiarity and depth, it’s designed for brands that want to feel human, grounded, and visually rich without losing clarity. Whether used for creative studios, personal brands, or cultural projects, Sham creates an atmosphere that feels inviting and memorable—where content is not just presented, but experienced.",
      },
      {
        title: "Where Warmth Meets Expression",
        content:
          "The idea behind Sham was to move beyond purely minimal design and introduce emotion into the experience. It blends structure with softness, allowing visuals, typography, and spacing to work together in a way that feels natural and fluid.",
      },
      {
        title: "Visual Language",
        content:
          "Sham leans into warm tones, soft contrasts, and expressive layouts. The design system balances editorial-style typography with relaxed spacing, creating a rhythm that feels both intentional and effortless. Subtle layering and organic flow give the interface a sense of depth, making each section feel connected rather than isolated.",
      },
      {
        title: "Emotional Storytelling",
        content:
          "More than just structure, Sham is built to convey feeling. It encourages the use of imagery, narrative, and pacing to create a deeper connection with the audience. Sections unfold naturally, allowing stories to breathe while maintaining clarity. This makes it especially effective for brands that rely on narrative, identity, and personal touch.",
      },
      {
        title: "Crafted for Flexibility",
        content:
          "Despite its expressive nature, Sham remains highly functional. Fully responsive and easy to customize in Framer, it allows creators to adapt the mood, colors, and layouts to match their vision. Components are designed to be flexible and reusable, supporting both simple pages and more layered storytelling.",
      },
      {
        title: "A Living System",
        content:
          "Sham is designed to grow alongside the brand it represents. As content evolves and stories expand, the template provides a consistent yet flexible foundation to build on.",
      },
      {
        title: "Design that Connects and Lasts",
        content:
          "Every element in Sham works to create a sense of connection—between brand and audience, structure and emotion. It’s a system that doesn’t just showcase content, but brings it to life with warmth, depth, and intention.",
      },
    ],
    gallery: [
      "https://framerusercontent.com/images/TYjXSgMIzqcCLynoQQYhbF7aeM.webp?width=1600&height=1200",
      "https://framerusercontent.com/images/AmqdjgheRojNIWusBddw5GXHErc.webp?width=1600&height=1200",
      "https://framerusercontent.com/images/Kwfcsb5AKYGhAjNC9ZFvtVn7cU.webp?width=1600&height=1200",
    ],
  },
  abjad: {
    id: "abjad",
    name: "Abjad",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "https://framer.link/bsFvFjY",
    desc: "Olive Living is a slow-living lifestyle brand that creates products for mindful homes. Their philosophy centers on intentional living, warm textures, and everyday rituals that bring comfort and clarity.",
    mainImage: "https://framerusercontent.com/images/l08IN6OxWS7DxFD28fNZXjCT4.png?width=1160&height=800",
    sections: [
      {
        title: "About the Brand",
        content:
          "Abjad is a typography-driven digital template built for brands that see words as their strongest visual asset. Inspired by language, rhythm, and editorial design, it focuses on clarity of message while turning content into a compelling visual experience. Designed for studios, writers, and modern brands, Abjad creates a space where typography leads and design supports—resulting in a presence that feels intelligent, expressive, and intentional.",
      },
      {
        title: "Where Words Become Visual",
        content:
          "The idea behind Abjad was to elevate text from simple communication to a central design element. Every layout is crafted to highlight hierarchy, pacing, and readability, allowing content to naturally guide the user’s attention. It’s a system that feels calm yet confident, minimal yet deeply expressive.",
      },
      {
        title: "Visual Language",
        content:
          "Abjad centers around strong typographic hierarchy. Carefully selected font pairings, balanced line lengths, and intentional spacing create a rhythm that feels editorial and refined.",
      },
    ],
    gallery: [
      "https://framerusercontent.com/images/N7dtL6bcw7MBEpYrA8GCYU1bIY.webp?width=1600&height=1200",
      "https://framerusercontent.com/images/HGArSkPIhysxjkfAUbQ7UBw5EcQ.webp?width=1600&height=1200",
      "https://framerusercontent.com/images/f5mIs8ybPXTLDkmTnN1bJL3xaU.webp?width=1600&height=1200",
    ],
  },
  fasselh: {
    id: "fasselh",
    name: "Faseelh",
    category: "Free Framer Template",
    year: "2025",
    liveLink: "https://framer.link/bsFvFjY",
    desc: "Faseelh is a sleek, nature-inspired Framer template built for environmental projects, nonprofits, and sustainability-driven brands. It features immersive visuals, smooth animations, and flexible sections that make storytelling easy.",
    mainImage: "https://framerusercontent.com/images/IBHqRDPghoZPLzWsGC2SWmPo.png?width=1160&height=800",
    sections: [
      {
        title: "About the Brand",
        content:
          "Faseelh is a clean, modular digital template built around clarity, structure, and precision. Designed for modern brands that value organization and scalability, it offers a system that feels solid, reliable, and effortlessly adaptable across different use cases. From agencies to product-focused startups, Faseelh provides a strong foundation where content is clearly structured and easy to navigate—without sacrificing visual appeal.",
      },
      {
        title: "Built on Structure, Simplifying Complexity",
        content:
          "The core idea behind Faseelh was to create a template that simplifies complexity. Every section is thoughtfully organized, allowing information to be presented in a way that feels intuitive and easy to follow.",
      },
      {
        title: "Visual Language",
        content:
          "Faseelh uses a structured grid system combined with clean typography and balanced spacing. The visual approach is minimal yet purposeful, ensuring that every element has a clear role within the layout. A neutral, adaptable color system allows brands to customize the look while preserving consistency and professionalism across all pages.",
      },
    ],
    gallery: [
      "https://framerusercontent.com/images/YT4HqGR2CJLRQpCrIlsUf8crU.webp?width=1600&height=1200",
      "https://framerusercontent.com/images/lSXxeEVPppxwb724jqEYgrTtv8.webp?width=1600&height=1200",
      "https://framerusercontent.com/images/iTQWsWIUAn02uPq2Xa9LxHOoZY.webp?width=1600&height=1200",
    ],
  },
};

function WorkDetailPage() {
  const { projectId } = useParams({ from: "/work_/$projectId" });
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold uppercase tracking-widest">Project Not Found</h1>
        <Link to="/work" className="mt-4 border border-zinc-800 hover:border-white px-6 py-3 text-xs uppercase tracking-widest font-semibold">
          Back to Projects
        </Link>
      </div>
    );
  }

  // Related work suggestions (pick two other projects)
  const related = Object.values(projectsData)
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="bg-black min-h-screen font-sans text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
      <Nav />
      <main className="pt-20">
        {/* Header grid */}
        <section className="border-b border-zinc-800">
          <div className="p-6 sm:p-12 border-b border-zinc-800 flex flex-col md:flex-row items-start justify-between gap-8">
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider text-white">
              {project.name}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 text-xs uppercase tracking-widest text-zinc-500 font-medium">
            <div className="py-6 px-6 sm:px-12 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col gap-1.5">
              <span className="text-zinc-600 font-mono">/ Category</span>
              <span className="text-white">{project.category}</span>
            </div>
            <div className="py-6 px-6 sm:px-12 flex flex-col gap-1.5">
              <span className="text-zinc-600 font-mono">/ Year</span>
              <span className="text-white">{project.year}</span>
            </div>
          </div>
        </section>

        {/* Intro & Main Image Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-800 bg-black">
          <div className="lg:col-span-5 p-6 sm:p-12 lg:border-r border-zinc-800 flex flex-col justify-center">
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-sans max-w-xl">
              {project.desc}
            </p>
          </div>
          <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-12 flex items-center justify-center border-t lg:border-t-0 border-zinc-800">
            <div className="w-full aspect-[4/3] overflow-hidden border border-zinc-850 bg-black">
              <img
                src={project.mainImage}
                alt={`${project.name} preview`}
                className="w-full h-full object-cover filter contrast-105 brightness-95"
              />
            </div>
          </div>
        </section>

        {/* Detailed case study text and screenshots split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-800">
          {/* Left: Case study items */}
          <div className="lg:col-span-6 p-6 sm:p-12 lg:border-r border-zinc-800 space-y-12">
            {project.sections.map((section, idx) => (
              <div key={section.title} className="space-y-4">
                <span className="font-mono text-xs text-zinc-600 block">/ SECTION.0{idx + 1}</span>
                <h2 className="text-xl font-display font-bold uppercase tracking-wider text-white">
                  {section.title}
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Gallery screenshots */}
          <div className="lg:col-span-6 p-6 sm:p-12 bg-zinc-950 flex flex-col gap-8 justify-center border-t lg:border-t-0 border-zinc-800">
            {project.gallery.map((imgUrl, index) => (
              <div
                key={index}
                className="w-full aspect-[4/3] overflow-hidden border border-zinc-850 bg-black transition-all duration-500 hover:border-zinc-700"
              >
                <img
                  src={imgUrl}
                  alt={`${project.name} showcase screenshot ${index + 1}`}
                  className="w-full h-full object-cover filter contrast-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* More Projects Related Work */}
        <section className="border-b border-zinc-800 bg-black">
          <div className="border-b border-zinc-800 p-6 sm:p-12">
            <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
              More Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {related.map((p, index) => (
              <Link
                key={p.id}
                to="/work/$projectId"
                params={{ projectId: p.id }}
                className={`group p-8 sm:p-12 flex flex-col justify-between border-b border-zinc-800 md:border-b-0 transition-all duration-300 hover:bg-zinc-950 ${
                  index === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-zinc-850 bg-zinc-900 mb-8">
                  <img
                    src={p.mainImage}
                    alt={p.name}
                    className={`h-full w-full object-cover transition-[transform,filter] duration-700 group-hover:scale-102 filter grayscale group-hover:grayscale-0 contrast-110 brightness-95 ${
                      p.id === "sham" ? "group-hover:sepia-[.6] group-hover:saturate-150" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white">
                      {p.name}
                    </h3>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium mt-2">
                      {p.category}
                    </p>
                  </div>
                  <div className="flex size-10 items-center justify-center border border-zinc-800 bg-transparent text-white group-hover:border-white transition-colors duration-300">
                    <svg className="size-4" viewBox="0 0 16 16" fill="currentColor">
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

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
