import { ShieldCheck, CheckCircle2, ArrowUpRight, Clock, Award, FileText, Star, Building2, ArrowRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { BeforeAfter } from "./BeforeAfter";
import { ContactForm } from "./ContactForm";
import {
  SERVICES,
  STATS,
  TRUST_POINTS,
  CONSULTATION_FEATURES,
  INDUSTRIES,
  PROCESS_STEPS,
  TESTIMONIALS,
} from "@/lib/site-data";
import heroRoof from "@/assets/hero-roof.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import aboutCrew from "@/assets/about-crew.jpg";
import svcReplacementImg from "@/assets/svc-replacement.jpg";
import svcCoatingImg from "@/assets/svc-coating.jpg";
import svcMaintenanceImg from "@/assets/svc-maintenance.jpg";
import svcRepairImg from "@/assets/svc-repair.jpg";
import svcEpdmImg from "@/assets/svc-epdm.jpg";
import svcMetalImg from "@/assets/svc-metal.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {copy && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {copy}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <img
        src={heroRoof}
        alt="Modern commercial building rooftop with professional membrane roofing system"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Luxury Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              EST. 1984 · EDMONTON, AB
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-4 text-balance font-display text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              A Higher Standard of Commercial Roofing.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              40+ years of craftsmanship. Professional roofing systems. Long-term protection backed by an industry-leading workmanship warranty.
            </p>
          </Reveal>

          <Reveal delay={270}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#transformation"
                onClick={(e) => scrollToSection(e, "#transformation")}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-all hover:brightness-110 active:scale-95"
              >
                View Our Work
              </a>
              <a
                href="#consultation"
                onClick={(e) => scrollToSection(e, "#consultation")}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-background/40 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-md transition-all hover:border-primary hover:bg-background/60 active:scale-95"
              >
                Book Free Consultation
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-surface/50 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:divide-x md:divide-white/10">
          {TRUST_POINTS.map((point, index) => (
            <Reveal key={point} delay={index * 100}>
              <div className="flex items-center justify-center gap-3.5 px-4 text-center md:text-left">
                <ShieldCheck className="h-6 w-6 shrink-0 text-primary" />
                <span className="font-display text-lg font-medium text-foreground tracking-wide">
                  {point}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Commercial Roofing Solutions"
          copy="From initial inspection to final installation, we manage every detail with precision, safety, and long-term performance in mind."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={index * 100}>
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-card transition-all duration-300 hover:border-white/20 hover:bg-surface/90">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.blurb}
                    </p>

                    {/* Bullet List */}
                    <ul className="mt-6 space-y-2.5">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-xs font-medium text-foreground/90">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <a
                      href="#consultation"
                      onClick={(e) => scrollToSection(e, "#consultation")}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-foreground group-hover:translate-x-1 duration-300"
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Transformation() {
  return (
    <section id="transformation" className="py-24 md:py-32 border-b border-white/5 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="THE ART OF THE TRANSFORMATION"
          title="See the Difference Professional Roofing Makes."
          copy="Witness how we transform aging and damaged commercial roofing systems into durable, professional roofing solutions. Drag the slider."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Project 01 */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              <BeforeAfter
                before={before1}
                after={after1}
                beforeAlt="Aged commercial roof with visible deterioration"
                afterAlt="Fully restored commercial roofing system with clean detailing"
              />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  PROJECT 01
                </p>
                <h3 className="mt-1 font-display text-2xl font-medium text-foreground">
                  Downtown Office Roof Restoration
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-muted-foreground sm:grid-cols-2">
                  <p><span className="font-semibold text-foreground/80">Before:</span> Aged commercial roof with visible deterioration.</p>
                  <p><span className="font-semibold text-foreground/80">After:</span> Fully restored commercial roofing system with clean detailing.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Project 02 */}
          <Reveal delay={200}>
            <div className="flex flex-col gap-6">
              <BeforeAfter
                before={before2}
                after={after2}
                beforeAlt="Worn and weather-damaged industrial roof"
                afterAlt="Modern high-performance commercial roofing system"
              />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  PROJECT 02
                </p>
                <h3 className="mt-1 font-display text-2xl font-medium text-foreground">
                  Industrial Facility Roof Replacement
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-muted-foreground sm:grid-cols-2">
                  <p><span className="font-semibold text-foreground/80">Before:</span> Worn and weather-damaged industrial roof.</p>
                  <p><span className="font-semibold text-foreground/80">After:</span> Modern high-performance commercial roofing system.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-20 md:py-24 border-b border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-white/5 bg-surface/40 backdrop-blur">
                <div className="font-display text-4xl font-normal text-foreground md:text-5xl lg:text-6xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Consultation() {
  return (
    <section id="consultation" className="py-24 md:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
          {/* Left Column Text & Feature List */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                GET STARTED
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
                Start Your Roofing Project
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Take the first step toward protecting your commercial property. Our roofing specialists will meet with you on-site, assess your roof, and provide a clear, transparent proposal.
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {CONSULTATION_FEATURES.map((feature, index) => (
                <Reveal key={feature.title} delay={100 + index * 80}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface text-primary shadow-sm">
                      {index === 0 && <Clock size={18} />}
                      {index === 1 && <Award size={18} />}
                      {index === 2 && <FileText size={18} />}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-medium text-foreground">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for Every Commercial Property Type."
          copy="From office towers to healthcare campuses, our certified team delivers precision roofing solutions that meet the unique demands of each facility."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 60}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-card transition-all duration-300 hover:border-primary/40 hover:bg-surface/90 hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-background/70 backdrop-blur-sm">
                    <Building2 size={14} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-base font-medium text-foreground">
                    {industry.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {industry.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={200}>
          <div className="mt-14 flex justify-center">
            <a
              href="#consultation"
              onClick={(e) => scrollToSection(e, "#consultation")}
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-surface/50 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-surface/80 active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowRight size={14} className="text-primary" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-b border-white/5 bg-surface/20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="A Proven Process. Zero Surprises."
          copy="From first call to final walkthrough, every step is designed to deliver a seamless, stress-free roofing experience."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.step} delay={index * 100}>
              <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-surface/60 p-7 shadow-card transition-all duration-300 hover:border-primary/30 hover:bg-surface/90">
                {/* Step number */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-display text-4xl font-normal leading-none text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                    {step.step}
                  </span>
                  {/* Connector line (hidden on last) */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden h-px flex-1 mx-4 bg-gradient-to-r from-primary/20 to-transparent lg:block" />
                  )}
                </div>

                {/* Line accent */}
                <div className="mb-4 h-px w-10 bg-primary/50 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />

                <h3 className="font-display text-xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Client Reviews"
          title="Trusted by Edmonton's Leading Property Owners."
          copy="Hear directly from facilities managers, property owners, and operations directors who rely on Summit for their most critical roofing needs."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 80}>
              <div className="group flex flex-col rounded-2xl border border-white/10 bg-surface/60 p-7 shadow-card transition-all duration-300 hover:border-white/20 hover:bg-surface/90">
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={13} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="mt-6 h-px bg-white/8" />

                {/* Author */}
                <div className="mt-5 flex items-center gap-3">
                  {/* Avatar initial */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-display text-sm font-medium text-primary">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-[11px] text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PageHero ─────────────────────────────────────────────────────────────── */
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
    <section className="relative min-h-[55vh] w-full overflow-hidden flex items-end">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-20 w-full">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {copy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── About ────────────────────────────────────────────────────────────────── */

export function About() {
  return (
    <section className="py-24 md:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-card">
              <img
                src={aboutCrew}
                alt="Summit Commercial Roofing crew on a commercial project"
                className="h-full w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 rounded-xl border border-white/15 bg-background/80 px-5 py-3 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Est. 1984</p>
                <p className="mt-0.5 font-display text-xl font-medium text-foreground">40+ Years in Edmonton</p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Story</p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
                Commercial-Only Since 1984
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Summit Commercial Roofing was founded on a simple principle: commercial buildings deserve contractors who understand them. For over four decades we've worked exclusively on commercial, industrial, and institutional properties across Edmonton — never residential, never residential crews working on commercial.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every foreman on our crew is manufacturer-certified. Every project is documented with pre-installation photos, moisture surveys, and inspection reports. And every job ships with a 20-year workmanship warranty alongside the manufacturer's material warranty.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "40+", label: "Years in Edmonton" },
                  { value: "1,500+", label: "Projects Delivered" },
                  { value: "20yr", label: "Workmanship Warranty" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-surface/60 p-5 text-center">
                    <p className="font-display text-2xl font-normal text-primary">{item.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WhyUs ────────────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  {
    icon: ShieldCheck,
    title: "20-Year Workmanship Warranty",
    description: "The longest workmanship warranty in Edmonton — not 5 years, not 10. We stand behind every seam, flashing, and penetration for 20 full years.",
  },
  {
    icon: FileText,
    title: "No Surprise Pricing",
    description: "Fixed-price proposals with a full line-item breakdown before you sign. Any scope change is documented and approved before we spend a dollar more.",
  },
  {
    icon: Award,
    title: "Manufacturer-Certified Crews",
    description: "Our foremen hold active certifications from Soprema, GAF, and Firestone. That's what qualifies our projects for manufacturer's material warranties.",
  },
  {
    icon: Clock,
    title: "Zero Downtime Scheduling",
    description: "Nights, weekends, phased sections — we work around your tenants, not the other way around. Your building stays open and productive throughout.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 border-b border-white/5 bg-surface/20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Summit"
          title="The Commercial Roofing Standard Others Don't Meet."
          copy="Four concrete reasons Edmonton's most demanding property owners keep choosing Summit year after year."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {WHY_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <div className="group flex gap-5 rounded-2xl border border-white/10 bg-surface/60 p-7 shadow-card transition-all duration-300 hover:border-primary/30 hover:bg-surface/90">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-background text-primary shadow-sm transition group-hover:border-primary/40 group-hover:bg-primary/10">
                  <point.icon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Industries (alias for inner pages) ───────────────────────────────────── */
export function Industries() {
  return (
    <section className="py-24 md:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Roofing Matched to How Your Facility Operates."
          copy="Occupied-hours scheduling for retail, summer windows for schools, infection-control protocols for healthcare, and heat-resistant assemblies for industrial plants."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 60}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-card transition-all duration-300 hover:border-primary/40 hover:bg-surface/90 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-background/70 backdrop-blur-sm">
                    <Building2 size={14} className="text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-medium text-foreground">{industry.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {industry.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ─────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "p1",
    tag: "Roof Replacement",
    title: "Westbrook Commerce Park",
    description: "80,000 sq. ft. TPO membrane replacement across three connected warehouse bays. Completed during off-hours with zero operational disruption.",
    image: "svc-replacement",
    industry: "Warehouse",
  },
  {
    id: "p2",
    tag: "Roof Restoration",
    title: "Kingsway Medical Centre",
    description: "Full fluid-applied waterproof coating restoration over an occupied healthcare facility using infection-control work zones.",
    image: "svc-coating",
    industry: "Healthcare",
  },
  {
    id: "p3",
    tag: "Preventive Maintenance",
    title: "Meridian Office Portfolio",
    description: "Annual maintenance program across a 12-building office portfolio. Zero leak calls in six years of service.",
    image: "svc-maintenance",
    industry: "Office",
  },
  {
    id: "p4",
    tag: "Emergency Repair",
    title: "Northgate Retail Plaza",
    description: "Storm damage response within 4 hours. Full documentation package provided for insurance claim. Permanent repair completed within 72 hours.",
    image: "svc-repair",
    industry: "Retail",
  },
  {
    id: "p5",
    tag: "EPDM Installation",
    title: "Archbishop MacDonald High School",
    description: "EPDM system installed over summer break. Full project completed 8 days ahead of schedule, classrooms ready for September.",
    image: "svc-epdm",
    industry: "School",
  },
  {
    id: "p6",
    tag: "Metal Roof System",
    title: "Leduc Industrial Campus",
    description: "Standing seam metal roof system over a 120,000 sq. ft. processing facility. 40-year maintenance-free guarantee.",
    image: "svc-metal",
    industry: "Industrial",
  },
];


const PROJECT_IMAGES: Record<string, string> = {
  "svc-replacement": svcReplacementImg,
  "svc-coating": svcCoatingImg,
  "svc-maintenance": svcMaintenanceImg,
  "svc-repair": svcRepairImg,
  "svc-epdm": svcEpdmImg,
  "svc-metal": svcMetalImg,
};

export function Projects({ limit }: { limit?: number }) {
  const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section className="py-24 md:py-32 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Case Studies"
          title="Work Delivered Without Shutting Your Building Down."
          copy="A sample of recent commercial roofing projects — from emergency call-outs to multi-year maintenance programs."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 70}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-card transition-all duration-300 hover:border-white/20 hover:bg-surface/90">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={PROJECT_IMAGES[project.image]}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
                    {project.tag}
                  </span>
                  <span className="absolute top-3 right-3 rounded-lg border border-white/15 bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
                    {project.industry}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium text-foreground">{project.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FinalCta ─────────────────────────────────────────────────────────────── */

export function FinalCta() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Ready to Protect Your Building?
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
            Get Your Free Commercial Roof Assessment
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Our roofing specialists will inspect your property, document every issue, and provide a clear line-item proposal — no obligation, no pressure, no surprises.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#consultation"
              onClick={(e) => scrollToSection(e, "#consultation")}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-all hover:brightness-110 active:scale-95"
            >
              Request Free Inspection
            </a>
            <a
              href={`tel:+17805550123`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-background/40 px-8 py-4 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-md transition-all hover:border-primary hover:bg-background/60 active:scale-95"
            >
              <Phone size={14} className="text-primary" />
              780-555-0123
            </a>
          </div>
        </Reveal>

        {/* Trust signals */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {["20-Year Warranty", "No Deposit Required", "Response in 48 Hours"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-primary" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
