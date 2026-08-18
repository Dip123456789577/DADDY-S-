import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as svc_replacement_default } from "./router-C6XMuVAZ.mjs";
import { i as FinalCta, l as Process, p as Services, s as PageHero, v as WhyUs } from "./sections-DtAhO3Cs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CCZblQ1p.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "Roof systems engineered for commercial buildings",
			copy: "From full tear-off replacements to restoration coatings and 24/7 emergency response — every scope is specified, documented, and warranty-backed.",
			image: svc_replacement_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { ServicesPage as component };
