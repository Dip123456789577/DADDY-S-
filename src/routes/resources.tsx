import { createFileRoute } from "@tanstack/react-router";
import svcMaintenance from "@/assets/svc-maintenance.jpg";
import { FinalCta, PageHero, Process, SectionHeading } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";

const ARTICLES = [
  {
    title: "When to Repair vs. Replace a Commercial Roof",
    copy: "A cost-per-year framework for deciding between another repair cycle and a full replacement.",
  },
  {
    title: "TPO vs. EPDM: Choosing a Single-Ply System",
    copy: "How climate, roof traffic, and energy targets should drive your membrane decision.",
  },
  {
    title: "What a Roof Maintenance Program Should Include",
    copy: "Inspection cadence, infrared moisture surveys, and the documentation your warranty requires.",
  },
  {
    title: "Budgeting a Roof Replacement Without Surprises",
    copy: "Line items facility teams routinely miss — deck repair, insulation upgrades, and code compliance.",
  },
  {
    title: "Storm Damage: The First 48 Hours",
    copy: "Temporary dry-in, documentation, and what your insurer will ask for.",
  },
  {
    title: "Cool Roof Coatings and Energy Savings",
    copy: "Where reflective coatings pay back fastest on large-span commercial roofs.",
  },
];

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Commercial Roofing Resources & Guides | Summit" },
      {
        name: "description",
        content:
          "Guides for facility teams: repair vs. replace, TPO vs. EPDM, maintenance programs, storm response, and roof budgeting.",
      },
      { property: "og:title", content: "Commercial Roofing Resources" },
      {
        property: "og:description",
        content: "Practical guidance for facility directors managing commercial roof assets.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guidance for teams that own the roof budget"
        copy="Straightforward answers to the questions facility directors ask us most — no sales pitch attached."
        image={svcMaintenance}
      />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Knowledge Base"
          title="Articles & guides"
          copy="Written by the people who spec and install these systems every week."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <article className="h-full rounded-2xl border border-border bg-surface p-7 shadow-card transition hover:border-primary/50">
                <h3 className="font-display text-xl leading-snug text-foreground">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <Process />
      <FinalCta />
    </>
  );
}
