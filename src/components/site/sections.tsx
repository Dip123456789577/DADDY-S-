import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  HardHat,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { BeforeAfter } from "./BeforeAfter";
import {
  COMPANY,
  INDUSTRIES,
  PROCESS,
  PROJECTS,
  SERVICES,
  STATS,
  TESTIMONIALS,
  WHY_US,
} from "@/lib/site-data";
import heroRoof from "@/assets/hero-roof.jpg";
import aboutCrew from "@/assets/about-crew.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="text-balance text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
        {copy && <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{copy}</p>}
      </div>
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-36 md:pb-24 md:pt-44">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{copy}</p>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <img
        src={heroRoof}
        alt="Modern commercial building rooftop with new membrane roofing at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pt-24">
        <Reveal>
          <p className="eyebrow">Est. 2001 · Commercial &amp; Industrial Roofing</p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl uppercase leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Commercial Roofing Built to Last.
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Reliable roofing systems, expert workmanship, and long-term protection for commercial
            properties.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              Get a Free Estimate
            </Link>
            <Link
              to="/services"
              className="rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
            >
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const TRUST = [
  { icon: ShieldCheck, label: "Up to 30-Year System Warranties" },
  { icon: HardHat, label: "Certified, Safety-Trained Crews" },
  { icon: BadgeCheck, label: "Licensed, Bonded &amp; Fully Insured" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 md:grid-cols-3">
        {TRUST.map((t, i) => (
          <Reveal key={t.label} delay={i * 80}>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-primary/40 text-primary">
                <t.icon size={16} />
              </span>
              Licensed, bonded &amp; insured
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="border-y border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="text-center">
              <div className="font-display text-4xl text-primary md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border shadow-card">
          <img
            src={aboutCrew}
            alt="Summit roofing crew installing membrane on a commercial roof"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </Reveal>
      <Reveal delay={120}>
        <p className="eyebrow">Who We Are</p>
        <h2 className="mt-3 text-balance text-4xl uppercase leading-tight tracking-tight text-foreground md:text-5xl">
          Protecting commercial properties from the top down.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Summit Commercial Roofing has spent more than 25 years working exclusively on commercial
          and industrial buildings. We know how a roof fails, how it is specified, and how to keep a
          facility running while it is replaced.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Every project is led by a dedicated project manager, staffed by manufacturer-certified
          crews, and delivered under a documented safety plan. We build roof systems that are
          inspected, maintained, and warrantied for decades — not just installed and forgotten.
        </p>
        <div className="mt-8">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:border-primary hover:text-primary"
          >
            Learn More About Us <ArrowUpRight size={16} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export function Services({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Our Expertise"
        title="Commercial Roofing Services"
        copy="From emergency leak response to full roof replacement, we manage every phase with engineered detail and documented workmanship."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 4) * 80}>
            <div className="group h-full overflow-hidden rounded-xl border border-border bg-surface shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition hover:gap-2"
                >
                  Request Service <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Transformation() {
  return (
    <section className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Before &amp; After</p>
            <h2 className="mt-3 text-balance text-4xl uppercase leading-tight tracking-tight text-foreground md:text-5xl">
              The Roof Transformation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              See how a failing commercial roof becomes a watertight, warrantied system. Drag the
              slider.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <BeforeAfter
              before={before1}
              after={after1}
              beforeAlt="Aged commercial roof with ponding water and cracked membrane"
              afterAlt="Newly installed white TPO commercial roof"
            />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Office Campus TPO Replacement
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Failed built-up roof with chronic ponding replaced by a tapered, 80 mil TPO system.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <BeforeAfter
              before={before2}
              after={after2}
              beforeAlt="Rusted corrugated metal warehouse roof"
              afterAlt="Restored metal warehouse roof with reflective coating"
            />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Warehouse Metal Roof Restoration
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Corroded metal deck cleaned, fastened, and restored with a reflective silicone system.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Who We Serve"
        title="Roofing for every commercial property"
        copy="Occupied buildings, active plants, and public facilities — we plan the work around how your property operates."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.title} delay={(i % 4) * 70}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
              <img
                src={ind.image}
                alt={ind.title}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-sm font-semibold text-foreground md:text-base">{ind.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{ind.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects({ limit }: { limit?: number }) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <section className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent commercial roofing projects"
          copy="A sample of the buildings we have re-roofed, restored, and maintained across the region."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <article className="group h-full overflow-hidden rounded-xl border border-border bg-background shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary backdrop-blur">
                    {p.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {p.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {limit && (
          <Reveal>
            <div className="mt-12 text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:border-primary hover:text-primary"
              >
                View All Projects <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="The Difference"
        title="Why property owners trust us"
        copy="Commercial roofing is a long-term relationship. We are built to be accountable years after the crew leaves."
      />
      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {WHY_US.map((w, i) => (
          <Reveal key={w.title} delay={(i % 4) * 70}>
            <div className="h-full bg-surface p-6 transition hover:bg-surface-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 text-primary">
                <BadgeCheck size={16} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How We Work"
          title="A process built around your building"
          copy="Five clear stages, documented at every step, so you always know what happens next."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 80}>
              <div className="h-full rounded-xl border border-border bg-background p-6 transition hover:border-primary/40">
                <span className="font-display text-3xl text-primary">{p.step}</span>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Client Feedback"
        title="What facility teams say"
        copy="Property managers, plant engineers, and facility directors on working with Summit."
      />
      <Reveal>
        <div className="mt-12 rounded-2xl border border-border bg-surface p-8 shadow-card md:p-12">
          <div className="flex gap-1 text-primary">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <blockquote className="mt-6 max-w-3xl font-display text-2xl leading-snug text-foreground md:text-3xl">
            “{t.quote}”
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">
                {t.role}, {t.company}
              </p>
            </div>
            <div className="flex gap-2">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show review from ${item.name}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={
                    i === index
                      ? "h-2 w-8 rounded-full bg-primary transition-all"
                      : "h-2 w-2 rounded-full bg-border transition-all hover:bg-muted-foreground"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="max-w-3xl text-balance text-4xl uppercase leading-tight tracking-tight text-foreground md:text-5xl">
            Protect your property with a roof built to perform.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Talk with our commercial roofing specialists about your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              Get a Free Estimate
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
            >
              <Phone size={15} /> Call Our Team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export const ESTIMATE_PERKS = [
  { icon: CalendarCheck, title: "48-Hour Site Visit", copy: "On-site roof survey scheduled within two business days." },
  { icon: ClipboardList, title: "Documented Findings", copy: "Photo report, core samples, and a line-item scope." },
  { icon: ShieldCheck, title: "No-Pressure Proposal", copy: "Clear pricing and system options — no obligation." },
];
