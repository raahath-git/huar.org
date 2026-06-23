import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { InteractiveTicker } from "@/components/portfolio/InteractiveTicker";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { ThoughtsList } from "@/components/portfolio/ThoughtsList";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "huaR — Software Engineer & Framer Creator" },
      {
        name: "description",
        content:
          "Software engineer and Framer creator with a strong focus on building modern, scalable, and conversion-driven web experiences.",
      },
      { property: "og:title", content: "huaR — Software Engineer & Framer Creator" },
      {
        property: "og:description",
        content:
          "Software engineer and Framer creator with a strong focus on building modern, scalable, and conversion-driven web experiences.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-black min-h-screen font-sans text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <InteractiveTicker />
        <Services />
        <PortfolioGrid />
        <Testimonials />
        <ThoughtsList />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
