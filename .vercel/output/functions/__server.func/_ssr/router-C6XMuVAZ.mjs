import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as Menu, c as Linkedin, d as Facebook, i as Phone, l as Instagram, o as MapPin, s as Mail, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C6XMuVAZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles--Z8To9VP.css";
/**
* Generic error reporting helper. Logs errors to the console and could be
* extended to forward to any observability provider (Sentry, Datadog, etc.).
*/
function reportError(error, context = {}) {
	console.error("[reportError]", error, context);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var NAV_ITEMS = [
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Portfolio",
		href: "#portfolio"
	},
	{
		label: "Process",
		href: "#process"
	},
	{
		label: "Testimonials",
		href: "#testimonials"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToSection = (e, href) => {
		if (pathname === "/") {
			e.preventDefault();
			setMobileMenuOpen(false);
			const target = document.querySelector(href);
			if (target) target.scrollIntoView({ behavior: "smooth" });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || mobileMenuOpen ? "border-b border-white/10 bg-background/90 backdrop-blur-md shadow-lg" : "border-b border-white/5 bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex flex-col text-left font-display text-sm font-bold uppercase tracking-[0.18em] text-foreground transition-opacity hover:opacity-90 md:text-base",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Summit Commercial" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-semibold tracking-[0.22em] text-primary",
						children: "Roofing"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: (e) => scrollToSection(e, item.href),
						className: "text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground",
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#consultation",
					onClick: (e) => scrollToSection(e, "#consultation"),
					className: "hidden rounded-xl bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition hover:brightness-110 active:scale-95 lg:inline-flex",
					children: "Request Free Estimate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMobileMenuOpen((prev) => !prev),
					"aria-label": mobileMenuOpen ? "Close navigation menu" : "Open navigation menu",
					className: "rounded-lg p-2 text-foreground transition hover:bg-white/5 lg:hidden",
					children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10 bg-background/95 backdrop-blur-lg lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6",
				children: [NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: (e) => scrollToSection(e, item.href),
					className: "rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground transition hover:bg-surface hover:text-foreground",
					children: item.label
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#consultation",
					onClick: (e) => scrollToSection(e, "#consultation"),
					className: "mt-4 rounded-xl bg-primary px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow",
					children: "Request Free Estimate"
				})]
			})
		})]
	});
}
var svc_replacement_default = "/assets/svc-replacement-WcmucNP5.jpg";
var svc_repair_default = "/assets/svc-repair-BAd4VK7u.jpg";
var svc_maintenance_default = "/assets/svc-maintenance-D05H0Gek.jpg";
var svc_coating_default = "/assets/svc-coating-DDxqDpeV.jpg";
var ind_office_default = "/assets/ind-office-CZfQhG4r.jpg";
var ind_warehouse_default = "/assets/ind-warehouse-MCobQWF3.jpg";
var ind_retail_default = "/assets/ind-retail-DYZV7Lik.jpg";
var ind_industrial_default = "/assets/ind-industrial-DBePV8dz.jpg";
var ind_school_default = "/assets/ind-school-CNWMlDKP.jpg";
var ind_healthcare_default = "/assets/ind-healthcare-CGRRwmMq.jpg";
var ind_multifamily_default = "/assets/ind-multifamily-cbUBNGI_.jpg";
var ind_government_default = "/assets/ind-government-DlxHZs1O.jpg";
var COMPANY = {
	name: "Summit Commercial Roofing",
	established: 1984,
	location: "Edmonton, AB",
	tagline: "Premium commercial roofing solutions built for long-term performance.",
	phone: "780-555-0123",
	phoneHref: "tel:+17805550123",
	email: "hello@summitcommercialroofing.ca",
	office: "Edmonton, AB",
	hours: "Mon – Fri: 7:00 AM – 5:00 PM | 24/7 Emergency Service"
};
var SERVICES = [
	{
		slug: "roof-replacement",
		title: "Commercial Roof Replacement",
		blurb: "Complete roof replacement systems engineered for extreme weather resilience and decades of worry-free operation.",
		image: svc_replacement_default,
		points: [
			"Complete Roof Systems",
			"Tear-Off & Installation",
			"Manufacturer Warranties"
		]
	},
	{
		slug: "roof-repair",
		title: "Commercial Roof Repair",
		blurb: "Precision leak detection and rapid repairs for storm damage, seam failures, and structural vulnerabilities.",
		image: svc_repair_default,
		points: [
			"Leak Detection",
			"Storm Damage",
			"Emergency Repairs"
		]
	},
	{
		slug: "maintenance",
		title: "Preventive Roof Maintenance",
		blurb: "Proactive inspection programs that identify issues early, prevent costly downtime, and double roof lifespan.",
		image: svc_maintenance_default,
		points: [
			"Scheduled Inspections",
			"Drain & Flashing Care",
			"Roof-Life Extension"
		]
	},
	{
		slug: "coatings",
		title: "Roof Coatings & Restoration",
		blurb: "Seamless fluid-applied waterproof coatings that restore existing roofs at a fraction of full replacement cost.",
		image: svc_coating_default,
		points: [
			"Waterproof Coatings",
			"Energy Efficiency",
			"System Restoration"
		]
	}
];
var STATS = [
	{
		value: 40,
		suffix: "+",
		label: "Years in Edmonton"
	},
	{
		value: 1500,
		suffix: "+",
		label: "Projects Delivered"
	},
	{
		value: 20,
		suffix: "yr",
		label: "Workmanship Warranty"
	},
	{
		value: 98,
		suffix: "%",
		label: "Client Satisfaction"
	}
];
var PROPERTY_TYPES = [
	"Office Building",
	"Warehouse",
	"Retail",
	"Industrial",
	"Multifamily",
	"Other"
];
var SERVICE_OPTIONS = [
	"Roof Replacement",
	"Roof Repair",
	"Maintenance",
	"Roof Coating",
	"Emergency Service"
];
var CONSULTATION_FEATURES = [
	{
		title: "Fast Response",
		description: "On-site assessments scheduled within 48 hours of inquiry."
	},
	{
		title: "Professional Assessment",
		description: "Detailed inspection and roofing recommendations from experienced specialists."
	},
	{
		title: "Transparent Proposal",
		description: "Clear project pricing with no unnecessary surprises."
	}
];
var TRUST_POINTS = [
	"20-Year Workmanship Warranty",
	"No Surprise Pricing",
	"40+ Years Local Experience & A+ BBB"
];
var INDUSTRIES = [
	{
		slug: "office",
		title: "Office Buildings",
		image: ind_office_default,
		points: [
			"Flat & Low-Slope Systems",
			"HVAC Integration",
			"Minimal Disruption"
		]
	},
	{
		slug: "warehouse",
		title: "Warehouses & Distribution",
		image: ind_warehouse_default,
		points: [
			"Metal Roof Systems",
			"Spray-Foam Insulation",
			"Rapid Installation"
		]
	},
	{
		slug: "retail",
		title: "Retail & Mixed-Use",
		image: ind_retail_default,
		points: [
			"Aesthetic Roof Design",
			"Energy-Efficient Systems",
			"Code Compliance"
		]
	},
	{
		slug: "industrial",
		title: "Industrial Facilities",
		image: ind_industrial_default,
		points: [
			"Heavy-Duty Membranes",
			"Chemical Resistance",
			"Structural Support"
		]
	},
	{
		slug: "school",
		title: "Schools & Institutions",
		image: ind_school_default,
		points: [
			"Safe Work Protocols",
			"Budget-Aligned Scopes",
			"Scheduled Shutdowns"
		]
	},
	{
		slug: "healthcare",
		title: "Healthcare Facilities",
		image: ind_healthcare_default,
		points: [
			"Infection Control",
			"24/7 Access Plans",
			"Noise Management"
		]
	},
	{
		slug: "multifamily",
		title: "Multifamily Residential",
		image: ind_multifamily_default,
		points: [
			"Tenant-Safe Methods",
			"Phased Scheduling",
			"Long-Term Warranties"
		]
	},
	{
		slug: "government",
		title: "Government & Municipal",
		image: ind_government_default,
		points: [
			"Certified Contractors",
			"Compliance Documentation",
			"Bid-Ready Proposals"
		]
	}
];
var PROCESS_STEPS = [
	{
		step: "01",
		title: "Free Roof Assessment",
		description: "Our roofing specialists conduct a thorough on-site inspection within 48 hours. We document every issue — no obligation, no pressure."
	},
	{
		step: "02",
		title: "Transparent Proposal",
		description: "You receive a clear, itemized proposal with fixed pricing. No surprises, no hidden fees. We explain every line before you sign."
	},
	{
		step: "03",
		title: "Professional Installation",
		description: "Our certified crews execute the project with precision, using manufacturer-approved materials and strict safety protocols throughout."
	},
	{
		step: "04",
		title: "Final Inspection & Warranty",
		description: "We conduct a comprehensive quality walkthrough with you before handing over your 20-year workmanship warranty documentation."
	}
];
var TESTIMONIALS = [
	{
		id: "t1",
		quote: "Summit replaced the membrane across our entire 80,000 sq. ft. facility on schedule and under budget. The crew was professional, safe, and the quality speaks for itself.",
		author: "David K.",
		role: "Facilities Manager, Industrial Corp.",
		rating: 5
	},
	{
		id: "t2",
		quote: "We've used Summit for preventive maintenance on three of our office properties for six years. Zero leaks, zero surprises — just reliable craftsmanship every single year.",
		author: "Sarah M.",
		role: "Property Manager, Meridian Properties",
		rating: 5
	},
	{
		id: "t3",
		quote: "After storm damage compromised our school's roof, Summit mobilized within 24 hours. The emergency repair was thorough and they minimized disruption to our students entirely.",
		author: "Principal T. Olsen",
		role: "Edmonton Catholic School District",
		rating: 5
	},
	{
		id: "t4",
		quote: "The TPO system Summit installed on our retail plaza cut our energy costs by 18%. Their recommendation was exactly right — and the installation quality is second to none.",
		author: "Mark R.",
		role: "Owner, Westpark Retail Plaza",
		rating: 5
	},
	{
		id: "t5",
		quote: "Summit's team treated our healthcare facility with the utmost professionalism. Work zones were sealed off, noise was managed, and they completed the project three days early.",
		author: "Operations Director",
		role: "Edmonton Regional Health Centre",
		rating: 5
	},
	{
		id: "t6",
		quote: "The 20-year warranty was the deciding factor for us, but the outstanding workmanship sealed the deal. Best commercial roofing investment we've made in 15 years.",
		author: "Linda H.",
		role: "VP Operations, Sterling Group",
		rating: 5
	}
];
function Footer() {
	const scrollToSection = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) target.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-white/10 bg-background pt-16 pb-12 text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display text-xl font-bold tracking-tight text-foreground",
						children: ["Summit Commercial ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Roofing"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
						children: "Edmonton's trusted commercial roofing partner. Protecting commercial properties through professional craftsmanship, quality systems, and long-term service since 1984."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: "EXPLORE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								onClick: (e) => scrollToSection(e, "#services"),
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: "Services"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#portfolio",
								onClick: (e) => scrollToSection(e, "#portfolio"),
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: "Our Portfolio"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#process",
								onClick: (e) => scrollToSection(e, "#process"),
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: "The Process"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#testimonials",
								onClick: (e) => scrollToSection(e, "#testimonials"),
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: "Client Reviews"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: "CONTACT US"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3.5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 15,
									className: "text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: COMPANY.phoneHref,
									className: "transition-colors hover:text-foreground",
									children: COMPANY.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									size: 15,
									className: "text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${COMPANY.email}`,
									className: "transition-colors hover:text-foreground",
									children: COMPANY.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									size: 15,
									className: "text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: COMPANY.office })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: "CONNECT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://instagram.com",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { size: 16 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://linkedin.com",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "LinkedIn",
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 16 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://facebook.com",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Facebook",
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { size: 16 })
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 border-t border-white/10 pt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground/70 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Summit Commercial Roofing. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#privacy",
							className: "transition-colors hover:text-foreground",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#terms",
							className: "transition-colors hover:text-foreground",
							children: "Terms of Service"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cookies",
							className: "transition-colors hover:text-foreground",
							children: "Cookie Policy"
						})
					]
				})]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Summit Commercial Roofing | Commercial Roofing Built to Last" },
			{
				name: "description",
				content: "Commercial roof replacement, repair, coatings, TPO and EPDM systems for offices, warehouses and industrial properties."
			},
			{
				name: "author",
				content: "Summit Commercial Roofing"
			},
			{
				property: "og:title",
				content: "Summit Commercial Roofing"
			},
			{
				property: "og:description",
				content: "Engineered commercial roof systems, warranty-backed and installed on schedule."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "32x32"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col bg-background",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$6 = () => import("./routes-Bq-Yw9gi.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Summit Commercial Roofing | Premium Commercial Roofing in Edmonton, AB" },
			{
				name: "description",
				content: "Edmonton's trusted commercial roofing partner since 1984. Roof replacement, repair, preventive maintenance, and roof coatings backed by a 20-year workmanship warranty."
			},
			{
				property: "og:title",
				content: "Summit Commercial Roofing"
			},
			{
				property: "og:description",
				content: "40+ years of craftsmanship. Professional commercial roofing systems built for long-term performance."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Summit Commercial Roofing"
			},
			{
				name: "twitter:description",
				content: "40+ years of craftsmanship. Professional commercial roofing systems built for long-term performance."
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-D-79YBvp.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Summit Commercial Roofing | 25+ Years Commercial Only" },
			{
				name: "description",
				content: "Meet the commercial-only roofing contractor protecting Arizona offices, warehouses and industrial plants since 2001."
			},
			{
				property: "og:title",
				content: "About Summit Commercial Roofing"
			},
			{
				property: "og:description",
				content: "Certified crews, safety-first worksites, and 1,500+ completed commercial projects."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "About Summit Commercial Roofing"
			},
			{
				name: "twitter:description",
				content: "Certified crews, safety-first worksites, and 1,500+ completed commercial projects."
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-Y22yuMq5.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Summit Commercial Roofing | Free Roof Inspection" },
			{
				name: "description",
				content: "Request a free commercial roof inspection and line-item estimate. 24/7 emergency roofing response across the Phoenix metro."
			},
			{
				property: "og:title",
				content: "Contact Summit Commercial Roofing"
			},
			{
				property: "og:description",
				content: "Talk to a project manager about your roof — response within one business day."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Contact Summit Commercial Roofing"
			},
			{
				name: "twitter:description",
				content: "Talk to a project manager about your roof — response within one business day."
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./industries-DIplnGOb.mjs");
var Route$3 = createFileRoute("/industries")({
	head: () => ({
		meta: [
			{ title: "Industries We Roof | Warehouses, Offices, Healthcare & More" },
			{
				name: "description",
				content: "Commercial roofing for office buildings, warehouses, retail centers, industrial plants, schools, healthcare, multifamily and government facilities."
			},
			{
				property: "og:title",
				content: "Industries We Serve"
			},
			{
				property: "og:description",
				content: "Roof systems matched to how your facility actually operates."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/industries"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Industries We Serve"
			},
			{
				name: "twitter:description",
				content: "Roof systems matched to how your facility actually operates."
			}
		],
		links: [{
			rel: "canonical",
			href: "/industries"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./projects-Pkf-8hL2.mjs");
var Route$2 = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Commercial Roofing Projects | Summit Case Studies" },
			{
				name: "description",
				content: "Warehouse, office, retail and industrial roofing projects delivered without shutting down operations."
			},
			{
				property: "og:title",
				content: "Commercial Roofing Projects"
			},
			{
				property: "og:description",
				content: "See recent commercial roof replacements, restorations and maintenance programs."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/projects"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Commercial Roofing Projects"
			},
			{
				name: "twitter:description",
				content: "See recent commercial roof replacements, restorations and maintenance programs."
			}
		],
		links: [{
			rel: "canonical",
			href: "/projects"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./resources-B9Yi8MpY.mjs");
var Route$1 = createFileRoute("/resources")({
	head: () => ({
		meta: [
			{ title: "Commercial Roofing Resources & Guides | Summit" },
			{
				name: "description",
				content: "Guides for facility teams: repair vs. replace, TPO vs. EPDM, maintenance programs, storm response, and roof budgeting."
			},
			{
				property: "og:title",
				content: "Commercial Roofing Resources"
			},
			{
				property: "og:description",
				content: "Practical guidance for facility directors managing commercial roof assets."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/resources"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Commercial Roofing Resources"
			},
			{
				name: "twitter:description",
				content: "Practical guidance for facility directors managing commercial roof assets."
			}
		],
		links: [{
			rel: "canonical",
			href: "/resources"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-CCZblQ1p.mjs");
var Route = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Commercial Roofing Services | TPO, EPDM, Coatings & Repair" },
			{
				name: "description",
				content: "Roof replacement, repair, maintenance, coatings, TPO, EPDM, metal and 24/7 emergency roofing for commercial properties."
			},
			{
				property: "og:title",
				content: "Commercial Roofing Services"
			},
			{
				property: "og:description",
				content: "Engineered roof systems installed by manufacturer-certified commercial crews."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "/services"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Commercial Roofing Services"
			},
			{
				name: "twitter:description",
				content: "Engineered roof systems installed by manufacturer-certified commercial crews."
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	IndustriesRoute: Route$3.update({
		id: "/industries",
		path: "/industries",
		getParentRoute: () => Route$7
	}),
	ProjectsRoute: Route$2.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$7
	}),
	ResourcesRoute: Route$1.update({
		id: "/resources",
		path: "/resources",
		getParentRoute: () => Route$7
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { svc_replacement_default as _, PROCESS_STEPS as a, SERVICE_OPTIONS as c, TRUST_POINTS as d, ind_industrial_default as f, svc_repair_default as g, svc_maintenance_default as h, INDUSTRIES as i, STATS as l, svc_coating_default as m, COMPANY as n, PROPERTY_TYPES as o, ind_warehouse_default as p, CONSULTATION_FEATURES as r, SERVICES as s, router_exports as t, TESTIMONIALS as u, cn as v };
