import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as FinalCta, l as Process, m as Stats, s as PageHero, t as About, v as WhyUs, y as about_crew_default } from "./sections-DtAhO3Cs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D-79YBvp.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About Us",
			title: "A commercial-only roofing contractor since 2001",
			copy: "We work on one kind of building: the kind your business depends on. Engineered systems, documented work, and crews who show up when they said they would.",
			image: about_crew_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { AboutPage as component };
