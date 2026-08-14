import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { PROPERTY_TYPES, SERVICE_OPTIONS } from "@/lib/site-data";

const field =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
const label = "text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-10 text-center shadow-card">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check size={22} />
        </div>
        <h3 className="mt-6 font-display text-2xl text-foreground">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          A project manager will contact you within one business day to schedule your roof
          inspection. For urgent leaks, call our 24/7 emergency line.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-surface p-7 shadow-card md:p-9"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Full name
          </label>
          <input id="name" name="name" required className={`mt-2 ${field}`} placeholder="Jane Doe" />
        </div>
        <div>
          <label className={label} htmlFor="company">
            Company
          </label>
          <input id="company" name="company" className={`mt-2 ${field}`} placeholder="Company name" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-2 ${field}`}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`mt-2 ${field}`}
            placeholder="(602) 555-0148"
          />
        </div>
        <div>
          <label className={label} htmlFor="property">
            Property type
          </label>
          <select id="property" name="property" className={`mt-2 ${field}`} defaultValue="">
            <option value="" disabled>
              Select property type
            </option>
            {PROPERTY_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="service">
            Service needed
          </label>
          <select id="service" name="service" className={`mt-2 ${field}`} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="message">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`mt-2 ${field}`}
          placeholder="Roof size, age, known issues, timeline…"
        />
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
      >
        Request Free Roof Inspection
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No obligation. We respond within one business day.
      </p>
    </form>
  );
}
