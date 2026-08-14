import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-12 text-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
        {/* Brand Column */}
        <div className="lg:col-span-4">
          <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
            Summit Commercial <span className="text-primary">Roofing</span>
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Edmonton's trusted commercial roofing partner. Protecting commercial properties through
            professional craftsmanship, quality systems, and long-term service since 1984.
          </p>
        </div>

        {/* Explore Links */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            EXPLORE
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "#services")}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={(e) => scrollToSection(e, "#portfolio")}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Our Portfolio
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={(e) => scrollToSection(e, "#process")}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                The Process
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={(e) => scrollToSection(e, "#testimonials")}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Client Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            CONTACT US
          </h4>
          <ul className="mt-5 space-y-3.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-primary" />
              <a href={COMPANY.phoneHref} className="transition-colors hover:text-foreground">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="text-primary" />
              <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-foreground">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={15} className="text-primary" />
              <span>{COMPANY.office}</span>
            </li>
          </ul>
        </div>

        {/* Connect / Socials */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            CONNECT
          </h4>
          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-white/10 pt-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground/70 sm:flex-row">
          <p>© 2026 Summit Commercial Roofing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a href="#cookies" className="transition-colors hover:text-foreground">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
