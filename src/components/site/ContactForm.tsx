import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { PROPERTY_TYPES, SERVICE_OPTIONS } from "@/lib/site-data";

const inputStyles =
  "w-full rounded-lg border border-white/10 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all";
const labelStyles = "block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-surface/90 p-8 md:p-10 text-center shadow-card backdrop-blur">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
          <Check size={26} />
        </div>
        <h3 className="mt-6 font-display text-2xl text-foreground">Estimate Request Received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. A Summit commercial roofing specialist will contact you within
          24 hours to schedule your free on-site property inspection.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-card backdrop-blur sm:p-8 md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelStyles} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputStyles}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className={labelStyles} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputStyles}
            placeholder="780-000-0000"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelStyles} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputStyles}
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label className={labelStyles} htmlFor="propertyType">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            required
            className={inputStyles}
            defaultValue=""
          >
            <option value="" disabled>
              Select Property Type
            </option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type} className="bg-surface text-foreground">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelStyles} htmlFor="roofingService">
            Roofing Service
          </label>
          <select
            id="roofingService"
            name="roofingService"
            required
            className={inputStyles}
            defaultValue=""
          >
            <option value="" disabled>
              Select Roofing Service
            </option>
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service} className="bg-surface text-foreground">
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-xl bg-primary px-6 py-4 text-center text-sm font-bold tracking-wide uppercase text-primary-foreground shadow-glow transition hover:brightness-110 active:scale-[0.99]"
      >
        Get My Free On-Site Estimate
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground/80">
        By submitting, you agree to our terms of service and privacy policy regarding your contact information.
      </p>
    </form>
  );
}
