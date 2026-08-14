import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/") {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileMenuOpen
          ? "border-b border-white/10 bg-background/90 backdrop-blur-md shadow-lg"
          : "border-b border-white/5 bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="group flex flex-col text-left font-display text-sm font-bold uppercase tracking-[0.18em] text-foreground transition-opacity hover:opacity-90 md:text-base"
        >
          <span>Summit Commercial</span>
          <span className="text-[11px] font-semibold tracking-[0.22em] text-primary">Roofing</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#consultation"
          onClick={(e) => scrollToSection(e, "#consultation")}
          className="hidden rounded-xl bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:brightness-110 active:scale-95 lg:inline-flex"
        >
          Request Free Estimate
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="rounded-lg p-2 text-foreground transition hover:bg-white/5 lg:hidden"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground transition hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#consultation"
              onClick={(e) => scrollToSection(e, "#consultation")}
              className="mt-4 rounded-xl bg-primary px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow"
            >
              Request Free Estimate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
