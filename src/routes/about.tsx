import { createFileRoute } from "@tanstack/react-router";
import aboutCrew from "@/assets/about-crew.jpg";
import { About, FinalCta, PageHero, Process, Stats, WhyUs } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Summit Commercial Roofing | 25+ Years Commercial Only" },
      {
        name: "description",
        content:
          "Meet the commercial-only roofing contractor protecting Arizona offices, warehouses and industrial plants since 2001.",
      },
      { property: "og:title", content: "About Summit Commercial Roofing" },
      {
        property: "og:description",
        content: "Certified crews, safety-first worksites, and 1,500+ completed commercial projects.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Summit Commercial Roofing" },
      { name: "twitter:description", content: "Certified crews, safety-first worksites, and 1,500+ completed commercial projects." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A commercial-only roofing contractor since 2001"
        copy="We work on one kind of building: the kind your business depends on. Engineered systems, documented work, and crews who show up when they said they would."
        image={aboutCrew}
      />
      <Stats />
      <About />
      <WhyUs />
      <Process />
      <FinalCta />
    </>
  );
}
