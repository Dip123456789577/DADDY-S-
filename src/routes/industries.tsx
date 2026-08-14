import { createFileRoute } from "@tanstack/react-router";
import indIndustrial from "@/assets/ind-industrial.jpg";
import { FinalCta, Industries, PageHero, Projects, WhyUs } from "@/components/site/sections";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Roof | Warehouses, Offices, Healthcare & More" },
      {
        name: "description",
        content:
          "Commercial roofing for office buildings, warehouses, retail centers, industrial plants, schools, healthcare, multifamily and government facilities.",
      },
      { property: "og:title", content: "Industries We Serve" },
      {
        property: "og:description",
        content: "Roof systems matched to how your facility actually operates.",
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Roofing matched to how your facility operates"
        copy="Occupied-hours scheduling for retail, summer windows for schools, infection-control protocols for healthcare, and heat-resistant assemblies for industrial plants."
        image={indIndustrial}
      />
      <Industries />
      <Projects limit={3} />
      <WhyUs />
      <FinalCta />
    </>
  );
}
