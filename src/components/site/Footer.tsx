import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

const SERVICE_LINKS = [
  "Roof Replacement",
  "Roof Repair",
  "Maintenance",
  "Roof Coatings",
  "TPO",
  "EPDM",
  "Metal Roofing",
];

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Industries", to: "/industries" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <h3 className="font-display text-lg text-foreground">
            Summit Commercial
            <br />
            Roofing
          </h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Commercial roofing built to last. Protecting offices, warehouses, and industrial
            properties with engineered roof systems since 2001.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Facebook size={15} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {COMPANY_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <a href={COMPANY.phoneHref} className="transition-colors hover:text-primary">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-primary">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 text-primary" />
              {COMPANY.office}
            </li>
            <li className="flex items-start gap-2">
              <Clock size={14} className="mt-0.5 text-primary" />
              {COMPANY.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Summit Commercial Roofing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/resources" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/resources" className="transition-colors hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
