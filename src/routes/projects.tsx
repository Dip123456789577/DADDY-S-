import { createFileRoute } from "@tanstack/react-router";
import indWarehouse from "@/assets/ind-warehouse.jpg";
import { FinalCta, PageHero, Projects, Testimonials, Transformation } from "@/components/site/sections";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Commercial Roofing Projects | Summit Case Studies" },
      {
        name: "description",
        content:
          "Warehouse, office, retail and industrial roofing projects delivered without shutting down operations.",
      },
      { property: "og:title", content: "Commercial Roofing Projects" },
      {
        property: "og:description",
        content: "See recent commercial roof replacements, restorations and maintenance programs.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Commercial Roofing Projects" },
      { name: "twitter:description", content: "See recent commercial roof replacements, restorations and maintenance programs." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work delivered without shutting your building down"
        copy="Phased schedules, weekend installs and tenant-safe worksites across offices, warehouses, retail centers and industrial plants."
        image={indWarehouse}
      />
      <Projects />
      <Transformation />
      <Testimonials />
      <FinalCta />
    </>
  );
}
