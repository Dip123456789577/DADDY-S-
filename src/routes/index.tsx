import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  FinalCta,
  Hero,
  Industries,
  Process,
  Projects,
  Services,
  Stats,
  Testimonials,
  Transformation,
  TrustBar,
  WhyUs,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Summit Commercial Roofing | Commercial Roofing Built to Last" },
      {
        name: "description",
        content:
          "Commercial roof replacement, repair, coatings, TPO and EPDM systems for offices, warehouses and industrial properties. 25+ years, 1,500+ projects.",
      },
      { property: "og:title", content: "Summit Commercial Roofing" },
      {
        property: "og:description",
        content: "Engineered commercial roof systems, warranty-backed and installed on schedule.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <About />
      <Services limit={6} />
      <Transformation />
      <Industries />
      <Projects limit={3} />
      <WhyUs />
      <Process />
      <Testimonials />
      <FinalCta />
    </>
  );
}
