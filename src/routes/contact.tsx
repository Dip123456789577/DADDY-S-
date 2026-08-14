import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import svcEmergency from "@/assets/svc-emergency.jpg";
import { PageHero, Process } from "@/components/site/sections";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Summit Commercial Roofing | Free Roof Inspection" },
      {
        name: "description",
        content:
          "Request a free commercial roof inspection and line-item estimate. 24/7 emergency roofing response across the Phoenix metro.",
      },
      { property: "og:title", content: "Contact Summit Commercial Roofing" },
      {
        property: "og:description",
        content: "Talk to a project manager about your roof — response within one business day.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Summit Commercial Roofing" },
      { name: "twitter:description", content: "Talk to a project manager about your roof — response within one business day." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const DETAILS = [
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: "Office", value: COMPANY.office },
  { icon: Clock, label: "Hours", value: COMPANY.hours },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your roof"
        copy="Tell us about the building and the problem. We'll inspect it, document what we find, and give you a clear line-item scope."
        image={svcEmergency}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-3 text-4xl leading-tight tracking-tight text-foreground">
              Free inspection, no obligation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Commercial properties only. For active leaks or storm damage, call our emergency line
              — we dispatch 24/7.
            </p>
            <ul className="mt-8 space-y-5">
              {DETAILS.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                    <d.icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-sm text-foreground transition-colors hover:text-primary"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </section>
      <Process />
    </>
  );
}
