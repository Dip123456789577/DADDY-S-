import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Clock, i as Phone, o as MapPin, s as Mail } from "../_libs/lucide-react.mjs";
import { n as COMPANY } from "./router-C6XMuVAZ.mjs";
import { d as Reveal, l as Process, r as ContactForm, s as PageHero } from "./sections-DtAhO3Cs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Y22yuMq5.js
var import_jsx_runtime = require_jsx_runtime();
var svc_emergency_default = "/assets/svc-emergency-CWro7EGQ.jpg";
var DETAILS = [
	{
		icon: Phone,
		label: "Phone",
		value: COMPANY.phone,
		href: COMPANY.phoneHref
	},
	{
		icon: Mail,
		label: "Email",
		value: COMPANY.email,
		href: `mailto:${COMPANY.email}`
	},
	{
		icon: MapPin,
		label: "Office",
		value: COMPANY.office
	},
	{
		icon: Clock,
		label: "Hours",
		value: COMPANY.hours
	}
];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Let's talk about your roof",
			copy: "Tell us about the building and the problem. We'll inspect it, document what we find, and give you a clear line-item scope.",
			image: svc_emergency_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl leading-tight tracking-tight text-foreground",
					children: "Free inspection, no obligation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "Commercial properties only. For active leaks or storm damage, call our emergency line — we dispatch 24/7."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-5",
					children: DETAILS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { size: 16 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground",
							children: d.label
						}), d.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: d.href,
							className: "text-sm text-foreground transition-colors hover:text-primary",
							children: d.value
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-foreground",
							children: d.value
						})] })]
					}, d.label))
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {})
	] });
}
//#endregion
export { ContactPage as component };
