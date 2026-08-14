import { createFileRoute } from "@tanstack/react-router";
import svcReplacement from "@/assets/svc-replacement.jpg";
import { FinalCta, PageHero, Process, Services, WhyUs } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Commercial Roofing Services | TPO, EPDM, Coatings & Repair" },
      {
        name: "description",
        content:
          "Roof replacement, repair, maintenance, coatings, TPO, EPDM, metal and 24/7 emergency roofing for commercial properties.",
      },
      { property: "og:title", content: "Commercial Roofing Services" },
      {
        property: "og:description",
        content: "Engineered roof systems installed by manufacturer-certified commercial crews.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Roof systems engineered for commercial buildings"
        copy="From full tear-off replacements to restoration coatings and 24/7 emergency response — every scope is specified, documented, and warranty-backed."
        image={svcReplacement}
      />
      <Services />
      <Process />
      <WhyUs />
      <FinalCta />
    </>
  );
}
