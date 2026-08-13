import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV } from "@/lib/site-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-[11px] font-semibold uppercase leading-tight tracking-[0.2em] text-foreground"
        >
          Summit Commercial
          <br className="hidden sm:inline" />
          <span className="sm:hidden"> </span>Roofing
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "group relative text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.to ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 group-hover:w-full",
                  pathname === item.to ? "w-full" : "w-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110 lg:inline-flex"
        >
          Get a Free Estimate
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-md p-2 text-foreground lg:hidden"
        >
          {open ? <Menu className="hidden" size={20} /> : null}
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get a Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
