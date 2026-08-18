import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ArrowUpRight, f as Clock, g as Award, h as Building2, i as Phone, m as Check, n as Star, p as CircleCheck, r as ShieldCheck, u as FileText, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { _ as svc_replacement_default, a as PROCESS_STEPS, c as SERVICE_OPTIONS, d as TRUST_POINTS, g as svc_repair_default, h as svc_maintenance_default, i as INDUSTRIES, l as STATS, m as svc_coating_default, o as PROPERTY_TYPES, r as CONSULTATION_FEATURES, s as SERVICES, u as TESTIMONIALS, v as cn } from "./router-C6XMuVAZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sections-DtAhO3Cs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var about_crew_default = "/assets/about-crew-DdlnOTAU.jpg";
function useInView(threshold = .15) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setInView(true);
			return;
		}
		const obs = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setInView(true);
				obs.disconnect();
			}
		}, {
			threshold,
			rootMargin: "0px 0px -60px 0px"
		});
		obs.observe(el);
		return () => obs.disconnect();
	}, [threshold]);
	return {
		ref,
		inView
	};
}
function Reveal({ children, delay = 0, className }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("transition-all duration-700 ease-out motion-reduce:transition-none", inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0", className),
		children
	});
}
function CountUp({ value, suffix = "", duration = 1600 }) {
	const { ref, inView } = useInView(.4);
	const [display, setDisplay] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		let frame = 0;
		const start = performance.now();
		const tick = (now) => {
			const p = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setDisplay(Math.round(value * eased));
			if (p < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		inView,
		value,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [display.toLocaleString(), suffix]
	});
}
function BeforeAfter({ before, after, beforeAlt, afterAlt }) {
	const containerRef = (0, import_react.useRef)(null);
	const [pos, setPos] = (0, import_react.useState)(50);
	const dragging = (0, import_react.useRef)(false);
	const setFromClientX = (0, import_react.useCallback)((clientX) => {
		const el = containerRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const next = (clientX - rect.left) / rect.width * 100;
		setPos(Math.min(100, Math.max(0, next)));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-card",
		onPointerDown: (e) => {
			dragging.current = true;
			e.currentTarget.setPointerCapture(e.pointerId);
			setFromClientX(e.clientX);
		},
		onPointerMove: (e) => {
			if (dragging.current) setFromClientX(e.clientX);
		},
		onPointerUp: () => {
			dragging.current = false;
		},
		onPointerCancel: () => {
			dragging.current = false;
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: after,
				alt: afterAlt,
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-4 top-4 z-10 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-sm",
				children: "AFTER"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 h-full w-full",
				style: { clipPath: `inset(0 ${100 - pos}% 0 0)` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: before,
					alt: beforeAlt,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-4 top-4 z-10 rounded-md bg-background/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur border border-white/10",
					children: "BEFORE"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-primary",
				style: { left: `${pos}%` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: 100,
					value: Math.round(pos),
					"aria-label": "Reveal before and after commercial roof comparison",
					onChange: (e) => setPos(Number(e.target.value)),
					className: "sr-only"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-auto absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-glow transition-transform hover:scale-110 active:scale-95",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "14",
						height: "14",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						className: "text-primary",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 6l-4 6 4 6M16 6l4 6-4 6" })
					})
				})]
			})
		]
	});
}
var inputStyles = "w-full rounded-lg border border-white/10 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all";
var labelStyles = "block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2";
function ContactForm() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	function handleSubmit(e) {
		e.preventDefault();
		setSubmitted(true);
	}
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-white/10 bg-surface/90 p-8 md:p-10 text-center shadow-card backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 26 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 font-display text-2xl text-foreground",
				children: "Estimate Request Received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground",
				children: "Thank you for reaching out. A Summit commercial roofing specialist will contact you within 24 hours to schedule your free on-site property inspection."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-card backdrop-blur sm:p-8 md:p-9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelStyles,
						htmlFor: "name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "name",
						name: "name",
						type: "text",
						required: true,
						className: inputStyles,
						placeholder: "John Doe"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelStyles,
						htmlFor: "phone",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "phone",
						name: "phone",
						type: "tel",
						required: true,
						className: inputStyles,
						placeholder: "780-000-0000"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelStyles,
							htmlFor: "email",
							children: "Email Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							className: inputStyles,
							placeholder: "john@company.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelStyles,
						htmlFor: "propertyType",
						children: "Property Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "propertyType",
						name: "propertyType",
						required: true,
						className: inputStyles,
						defaultValue: "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Select Property Type"
						}), PROPERTY_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: type,
							className: "bg-surface text-foreground",
							children: type
						}, type))]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelStyles,
						htmlFor: "roofingService",
						children: "Roofing Service"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "roofingService",
						name: "roofingService",
						required: true,
						className: inputStyles,
						defaultValue: "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Select Roofing Service"
						}), SERVICE_OPTIONS.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: service,
							className: "bg-surface text-foreground",
							children: service
						}, service))]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "mt-7 w-full rounded-xl bg-primary px-6 py-4 text-center text-sm font-bold tracking-wide uppercase text-primary-foreground shadow-glow transition hover:brightness-110 active:scale-[0.99]",
				children: "Get My Free On-Site Estimate"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-xs leading-relaxed text-muted-foreground/80",
				children: "By submitting, you agree to our terms of service and privacy policy regarding your contact information."
			})
		]
	});
}
var hero_roof_default = "/assets/hero-roof-Bo54qHmO.jpg";
var before_1_default = "/assets/before-1-D09PyXHa.jpg";
var after_1_default = "/assets/after-1-Chw5Fg9a.jpg";
var before_2_default = "/assets/before-2-CgAeMiPN.jpg";
var after_2_default = "/assets/after-2-BHH1jTB8.jpg";
var svc_epdm_default = "/assets/svc-epdm-D9NZMMTU.jpg";
var svc_metal_default = "/assets/svc-metal-DGnx23tP.jpg";
var cta_bg_default = "/assets/cta-bg-DICry1R-.jpg";
function SectionHeading({ eyebrow, title, copy, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-balance font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl",
				children: title
			}),
			copy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground md:text-base",
				children: copy
			})
		]
	}) });
}
function Hero() {
	const scrollToSection = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) target.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[92vh] w-full overflow-hidden flex items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_roof_default,
				alt: "Modern commercial building rooftop with professional membrane roofing system",
				width: 1920,
				height: 1280,
				className: "absolute inset-0 h-full w-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary",
							children: "EST. 1984 · EDMONTON, AB"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 90,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 text-balance font-display text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl",
								children: "A Higher Standard of Commercial Roofing."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 180,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
								children: "40+ years of craftsmanship. Professional roofing systems. Long-term protection backed by an industry-leading workmanship warranty."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 270,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#transformation",
									onClick: (e) => scrollToSection(e, "#transformation"),
									className: "inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-all hover:brightness-110 active:scale-95",
									children: "View Our Work"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#consultation",
									onClick: (e) => scrollToSection(e, "#consultation"),
									className: "inline-flex items-center justify-center rounded-xl border border-white/20 bg-background/40 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-md transition-all hover:border-primary hover:bg-background/60 active:scale-95",
									children: "Book Free Consultation"
								})]
							})
						})
					]
				})
			})
		]
	});
}
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-white/10 bg-surface/50 py-10 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-8 md:grid-cols-3 md:divide-x md:divide-white/10",
				children: TRUST_POINTS.map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3.5 px-4 text-center md:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-6 w-6 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-medium text-foreground tracking-wide",
							children: point
						})]
					})
				}, point))
			})
		})
	});
}
function Services() {
	const scrollToSection = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) target.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-24 md:py-32 border-b border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our Expertise",
				title: "Commercial Roofing Solutions",
				copy: "From initial inspection to final installation, we manage every detail with precision, safety, and long-term performance in mind."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-8 md:grid-cols-2",
				children: SERVICES.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-card transition-all duration-300 hover:border-white/20 hover:bg-surface/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/9] overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service.image,
								alt: service.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col justify-between p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-medium text-foreground",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: service.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-2.5",
									children: service.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3 text-xs font-medium text-foreground/90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
									}, point))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 pt-6 border-t border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#consultation",
									onClick: (e) => scrollToSection(e, "#consultation"),
									className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-foreground group-hover:translate-x-1 duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								})
							})]
						})]
					})
				}, service.slug))
			})]
		})
	});
}
function Transformation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "transformation",
		className: "py-24 md:py-32 border-b border-white/5 bg-surface/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "THE ART OF THE TRANSFORMATION",
				title: "See the Difference Professional Roofing Makes.",
				copy: "Witness how we transform aging and damaged commercial roofing systems into durable, professional roofing solutions. Drag the slider."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
							before: before_1_default,
							after: after_1_default,
							beforeAlt: "Aged commercial roof with visible deterioration",
							afterAlt: "Fully restored commercial roofing system with clean detailing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-[0.2em] text-primary",
								children: "PROJECT 01"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl font-medium text-foreground",
								children: "Downtown Office Roof Restoration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-1 gap-2 text-xs text-muted-foreground sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground/80",
									children: "Before:"
								}), " Aged commercial roof with visible deterioration."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground/80",
									children: "After:"
								}), " Fully restored commercial roofing system with clean detailing."] })]
							})
						] })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
							before: before_2_default,
							after: after_2_default,
							beforeAlt: "Worn and weather-damaged industrial roof",
							afterAlt: "Modern high-performance commercial roofing system"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase tracking-[0.2em] text-primary",
								children: "PROJECT 02"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl font-medium text-foreground",
								children: "Industrial Facility Roof Replacement"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-1 gap-2 text-xs text-muted-foreground sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground/80",
									children: "Before:"
								}), " Worn and weather-damaged industrial roof."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground/80",
									children: "After:"
								}), " Modern high-performance commercial roofing system."] })]
							})
						] })]
					})
				})]
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stats",
		className: "py-20 md:py-24 border-b border-white/5 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12",
				children: STATS.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-white/5 bg-surface/40 backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-4xl font-normal text-foreground md:text-5xl lg:text-6xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
								value: stat.value,
								suffix: stat.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
							children: stat.label
						})]
					})
				}, stat.label))
			})
		})
	});
}
function Consultation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "consultation",
		className: "py-24 md:py-32 border-b border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary",
							children: "GET STARTED"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl",
							children: "Start Your Roofing Project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "Take the first step toward protecting your commercial property. Our roofing specialists will meet with you on-site, assess your roof, and provide a clear, transparent proposal."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-6",
						children: CONSULTATION_FEATURES.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100 + index * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface text-primary shadow-sm",
									children: [
										index === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 18 }),
										index === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 18 }),
										index === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 18 })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-base font-medium text-foreground",
									children: feature.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-relaxed text-muted-foreground",
									children: feature.description
								})] })]
							})
						}, feature.title))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
					})
				})]
			})
		})
	});
}
function Portfolio() {
	const scrollToSection = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) target.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "py-24 md:py-32 border-b border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Industries We Serve",
					title: "Built for Every Commercial Property Type.",
					copy: "From office towers to healthcare campuses, our certified team delivers precision roofing solutions that meet the unique demands of each facility."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: INDUSTRIES.map((industry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-card transition-all duration-300 hover:border-primary/40 hover:bg-surface/90 hover:-translate-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/3] overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: industry.image,
										alt: industry.title,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-background/70 backdrop-blur-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
											size: 14,
											className: "text-primary"
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-medium text-foreground",
									children: industry.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1.5",
									children: industry.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 shrink-0 rounded-full bg-primary" }), point]
									}, point))
								})]
							})]
						})
					}, industry.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#consultation",
							onClick: (e) => scrollToSection(e, "#consultation"),
							className: "inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-surface/50 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-surface/80 active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start Your Project" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 14,
								className: "text-primary"
							})]
						})
					})
				})
			]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "py-24 md:py-32 border-b border-white/5 bg-surface/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "How It Works",
				title: "A Proven Process. Zero Surprises.",
				copy: "From first call to final walkthrough, every step is designed to deliver a seamless, stress-free roofing experience.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: PROCESS_STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative flex flex-col rounded-2xl border border-white/10 bg-surface/60 p-7 shadow-card transition-all duration-300 hover:border-primary/30 hover:bg-surface/90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-4xl font-normal leading-none text-primary/20 group-hover:text-primary/40 transition-colors duration-300",
									children: step.step
								}), index < PROCESS_STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-px flex-1 mx-4 bg-gradient-to-r from-primary/20 to-transparent lg:block" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-4 h-px w-10 bg-primary/50 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-medium text-foreground",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: step.description
							})
						]
					})
				}, step.step))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "py-24 md:py-32 border-b border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Client Reviews",
				title: "Trusted by Edmonton's Leading Property Owners.",
				copy: "Hear directly from facilities managers, property owners, and operations directors who rely on Summit for their most critical roofing needs."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: TESTIMONIALS.map((testimonial, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex flex-col rounded-2xl border border-white/10 bg-surface/60 p-7 shadow-card transition-all duration-300 hover:border-white/20 hover:bg-surface/90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-0.5",
								children: Array.from({ length: testimonial.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									size: 13,
									className: "fill-primary text-primary"
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: [
									"“",
									testimonial.quote,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-px bg-white/8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-display text-sm font-medium text-primary",
									children: testimonial.author.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-foreground",
									children: testimonial.author
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: testimonial.role
								})] })]
							})
						]
					})
				}, testimonial.id))
			})]
		})
	});
}
function PageHero({ eyebrow, title, copy, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[55vh] w-full overflow-hidden flex items-end",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: title,
				className: "absolute inset-0 h-full w-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 pt-40 pb-20 w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary",
						children: eyebrow
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl text-balance font-display text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl",
							children: title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base",
							children: copy
						})
					})
				]
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 border-b border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-2xl border border-white/10 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about_crew_default,
							alt: "Summit Commercial Roofing crew on a commercial project",
							className: "h-full w-full object-cover aspect-[4/3]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-6 left-6 rounded-xl border border-white/15 bg-background/80 px-5 py-3 backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
								children: "Est. 1984"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 font-display text-xl font-medium text-foreground",
								children: "40+ Years in Edmonton"
							})]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary",
						children: "Our Story"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl",
						children: "Commercial-Only Since 1984"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 80,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground",
							children: "Summit Commercial Roofing was founded on a simple principle: commercial buildings deserve contractors who understand them. For over four decades we've worked exclusively on commercial, industrial, and institutional properties across Edmonton — never residential, never residential crews working on commercial."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "Every foreman on our crew is manufacturer-certified. Every project is documented with pre-installation photos, moisture surveys, and inspection reports. And every job ships with a 20-year workmanship warranty alongside the manufacturer's material warranty."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-2 gap-4",
							children: [
								{
									value: "40+",
									label: "Years in Edmonton"
								},
								{
									value: "1,500+",
									label: "Projects Delivered"
								},
								{
									value: "20yr",
									label: "Workmanship Warranty"
								},
								{
									value: "98%",
									label: "Client Satisfaction"
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-white/10 bg-surface/60 p-5 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-normal text-primary",
									children: item.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground",
									children: item.label
								})]
							}, item.label))
						})
					})
				] })]
			})
		})
	});
}
var WHY_POINTS = [
	{
		icon: ShieldCheck,
		title: "20-Year Workmanship Warranty",
		description: "The longest workmanship warranty in Edmonton — not 5 years, not 10. We stand behind every seam, flashing, and penetration for 20 full years."
	},
	{
		icon: FileText,
		title: "No Surprise Pricing",
		description: "Fixed-price proposals with a full line-item breakdown before you sign. Any scope change is documented and approved before we spend a dollar more."
	},
	{
		icon: Award,
		title: "Manufacturer-Certified Crews",
		description: "Our foremen hold active certifications from Soprema, GAF, and Firestone. That's what qualifies our projects for manufacturer's material warranties."
	},
	{
		icon: Clock,
		title: "Zero Downtime Scheduling",
		description: "Nights, weekends, phased sections — we work around your tenants, not the other way around. Your building stays open and productive throughout."
	}
];
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 border-b border-white/5 bg-surface/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why Summit",
				title: "The Commercial Roofing Standard Others Don't Meet.",
				copy: "Four concrete reasons Edmonton's most demanding property owners keep choosing Summit year after year.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-6 md:grid-cols-2",
				children: WHY_POINTS.map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex gap-5 rounded-2xl border border-white/10 bg-surface/60 p-7 shadow-card transition-all duration-300 hover:border-primary/30 hover:bg-surface/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-background text-primary shadow-sm transition group-hover:border-primary/40 group-hover:bg-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(point.icon, { size: 18 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-medium text-foreground",
							children: point.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: point.description
						})] })]
					})
				}, point.title))
			})]
		})
	});
}
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 border-b border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Industries We Serve",
				title: "Roofing Matched to How Your Facility Operates.",
				copy: "Occupied-hours scheduling for retail, summer windows for schools, infection-control protocols for healthcare, and heat-resistant assemblies for industrial plants."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: INDUSTRIES.map((industry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-card transition-all duration-300 hover:border-primary/40 hover:bg-surface/90 hover:-translate-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: industry.image,
									alt: industry.title,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-background/70 backdrop-blur-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
										size: 14,
										className: "text-primary"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-medium text-foreground",
								children: industry.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1.5",
								children: industry.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 shrink-0 rounded-full bg-primary" }), point]
								}, point))
							})]
						})]
					})
				}, industry.slug))
			})]
		})
	});
}
var PROJECTS = [
	{
		id: "p1",
		tag: "Roof Replacement",
		title: "Westbrook Commerce Park",
		description: "80,000 sq. ft. TPO membrane replacement across three connected warehouse bays. Completed during off-hours with zero operational disruption.",
		image: "svc-replacement",
		industry: "Warehouse"
	},
	{
		id: "p2",
		tag: "Roof Restoration",
		title: "Kingsway Medical Centre",
		description: "Full fluid-applied waterproof coating restoration over an occupied healthcare facility using infection-control work zones.",
		image: "svc-coating",
		industry: "Healthcare"
	},
	{
		id: "p3",
		tag: "Preventive Maintenance",
		title: "Meridian Office Portfolio",
		description: "Annual maintenance program across a 12-building office portfolio. Zero leak calls in six years of service.",
		image: "svc-maintenance",
		industry: "Office"
	},
	{
		id: "p4",
		tag: "Emergency Repair",
		title: "Northgate Retail Plaza",
		description: "Storm damage response within 4 hours. Full documentation package provided for insurance claim. Permanent repair completed within 72 hours.",
		image: "svc-repair",
		industry: "Retail"
	},
	{
		id: "p5",
		tag: "EPDM Installation",
		title: "Archbishop MacDonald High School",
		description: "EPDM system installed over summer break. Full project completed 8 days ahead of schedule, classrooms ready for September.",
		image: "svc-epdm",
		industry: "School"
	},
	{
		id: "p6",
		tag: "Metal Roof System",
		title: "Leduc Industrial Campus",
		description: "Standing seam metal roof system over a 120,000 sq. ft. processing facility. 40-year maintenance-free guarantee.",
		image: "svc-metal",
		industry: "Industrial"
	}
];
var PROJECT_IMAGES = {
	"svc-replacement": svc_replacement_default,
	"svc-coating": svc_coating_default,
	"svc-maintenance": svc_maintenance_default,
	"svc-repair": svc_repair_default,
	"svc-epdm": svc_epdm_default,
	"svc-metal": svc_metal_default
};
function Projects({ limit }) {
	const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 border-b border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Case Studies",
				title: "Work Delivered Without Shutting Your Building Down.",
				copy: "A sample of recent commercial roofing projects — from emergency call-outs to multi-year maintenance programs."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-card transition-all duration-300 hover:border-white/20 hover:bg-surface/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: PROJECT_IMAGES[project.image],
									alt: project.title,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-3 left-3 rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-sm",
									children: project.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-3 right-3 rounded-lg border border-white/15 bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm",
									children: project.industry
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-medium text-foreground",
								children: project.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 text-sm leading-relaxed text-muted-foreground",
								children: project.description
							})]
						})]
					})
				}, project.id))
			})]
		})
	});
}
function FinalCta() {
	const scrollToSection = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) target.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-24 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: cta_bg_default,
				alt: "",
				"aria-hidden": true,
				className: "absolute inset-0 h-full w-full object-cover object-center opacity-20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.25em] text-primary",
							children: "Ready to Protect Your Building?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-balance font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl",
							children: "Get Your Free Commercial Roof Assessment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "Our roofing specialists will inspect your property, document every issue, and provide a clear line-item proposal — no obligation, no pressure, no surprises."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#consultation",
								onClick: (e) => scrollToSection(e, "#consultation"),
								className: "inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-all hover:brightness-110 active:scale-95",
								children: "Request Free Inspection"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+17805550123`,
								className: "inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-background/40 px-8 py-4 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-md transition-all hover:border-primary hover:bg-background/60 active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 14,
									className: "text-primary"
								}), "780-555-0123"]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground",
							children: [
								"20-Year Warranty",
								"No Deposit Required",
								"Response in 48 Hours"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									size: 13,
									className: "text-primary"
								}), t]
							}, t))
						})
					})
				]
			})
		]
	});
}
//#endregion
export { TrustBar as _, Hero as a, Portfolio as c, Reveal as d, SectionHeading as f, Transformation as g, Testimonials as h, FinalCta as i, Process as l, Stats as m, Consultation as n, Industries as o, Services as p, ContactForm as r, PageHero as s, About as t, Projects as u, WhyUs as v, about_crew_default as y };
