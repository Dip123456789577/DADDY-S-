import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as svc_maintenance_default } from "./router-C6XMuVAZ.mjs";
import { d as Reveal, f as SectionHeading, i as FinalCta, l as Process, s as PageHero } from "./sections-DtAhO3Cs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-B9Yi8MpY.js
var import_jsx_runtime = require_jsx_runtime();
var ARTICLES = [
	{
		title: "When to Repair vs. Replace a Commercial Roof",
		copy: "A cost-per-year framework for deciding between another repair cycle and a full replacement."
	},
	{
		title: "TPO vs. EPDM: Choosing a Single-Ply System",
		copy: "How climate, roof traffic, and energy targets should drive your membrane decision."
	},
	{
		title: "What a Roof Maintenance Program Should Include",
		copy: "Inspection cadence, infrared moisture surveys, and the documentation your warranty requires."
	},
	{
		title: "Budgeting a Roof Replacement Without Surprises",
		copy: "Line items facility teams routinely miss — deck repair, insulation upgrades, and code compliance."
	},
	{
		title: "Storm Damage: The First 48 Hours",
		copy: "Temporary dry-in, documentation, and what your insurer will ask for."
	},
	{
		title: "Cool Roof Coatings and Energy Savings",
		copy: "Where reflective coatings pay back fastest on large-span commercial roofs."
	}
];
function ResourcesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Resources",
			title: "Guidance for teams that own the roof budget",
			copy: "Straightforward answers to the questions facility directors ask us most — no sales pitch attached.",
			image: svc_maintenance_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Knowledge Base",
				title: "Articles & guides",
				copy: "Written by the people who spec and install these systems every week."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: ARTICLES.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full rounded-2xl border border-border bg-surface p-7 shadow-card transition hover:border-primary/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl leading-snug text-foreground",
							children: a.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: a.copy
						})]
					})
				}, a.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { ResourcesPage as component };
