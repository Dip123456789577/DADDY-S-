import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as ind_industrial_default } from "./router-C6XMuVAZ.mjs";
import { i as FinalCta, o as Industries, s as PageHero, u as Projects, v as WhyUs } from "./sections-DtAhO3Cs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-DIplnGOb.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Industries",
			title: "Roofing matched to how your facility operates",
			copy: "Occupied-hours scheduling for retail, summer windows for schools, infection-control protocols for healthcare, and heat-resistant assemblies for industrial plants.",
			image: ind_industrial_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, { limit: 3 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { IndustriesPage as component };
