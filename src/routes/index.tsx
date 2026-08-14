import { createFileRoute } from "@tanstack/react-router";
import {
  Consultation,
  Hero,
  Portfolio,
  Process,
  Services,
  Stats,
  Testimonials,
  Transformation,
  TrustBar,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Summit Commercial Roofing | Premium Commercial Roofing in Edmonton, AB" },
      {
        name: "description",
        content:
          "Edmonton's trusted commercial roofing partner since 1984. Roof replacement, repair, preventive maintenance, and roof coatings backed by a 20-year workmanship warranty.",
      },
      { property: "og:title", content: "Summit Commercial Roofing" },
      {
        property: "og:description",
        content:
          "40+ years of craftsmanship. Professional commercial roofing systems built for long-term performance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Summit Commercial Roofing" },
      {
        name: "twitter:description",
        content:
          "40+ years of craftsmanship. Professional commercial roofing systems built for long-term performance.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <Transformation />
      <Process />
      <Testimonials />
      <Stats />
      <Consultation />
    </>
  );
}
