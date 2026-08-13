import svcReplacement from "@/assets/svc-replacement.jpg";
import svcRepair from "@/assets/svc-repair.jpg";
import svcMaintenance from "@/assets/svc-maintenance.jpg";
import svcCoating from "@/assets/svc-coating.jpg";
import svcTpo from "@/assets/svc-tpo.jpg";
import svcEpdm from "@/assets/svc-epdm.jpg";
import svcMetal from "@/assets/svc-metal.jpg";
import svcEmergency from "@/assets/svc-emergency.jpg";
import indOffice from "@/assets/ind-office.jpg";
import indWarehouse from "@/assets/ind-warehouse.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import indIndustrial from "@/assets/ind-industrial.jpg";
import indSchool from "@/assets/ind-school.jpg";
import indHealthcare from "@/assets/ind-healthcare.jpg";
import indMultifamily from "@/assets/ind-multifamily.jpg";
import indGovernment from "@/assets/ind-government.jpg";

export const COMPANY = {
  name: "Summit Commercial Roofing",
  tagline: "Commercial Roofing Built to Last.",
  phone: "(602) 555-0148",
  phoneHref: "tel:+16025550148",
  email: "estimates@summitcommercialroofing.com",
  office: "4820 W Industrial Pkwy, Phoenix, AZ 85043",
  hours: "Mon – Fri, 7:00am – 5:00pm · 24/7 Emergency Response",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Industries", to: "/industries" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "roof-replacement",
    title: "Commercial Roof Replacement",
    blurb: "Complete replacement systems designed for long-term performance.",
    image: svcReplacement,
    points: ["Full tear-off & recover", "Engineered assemblies", "Warranty-backed systems"],
  },
  {
    slug: "roof-repair",
    title: "Commercial Roof Repair",
    blurb: "Professional repairs for leaks, storm damage, and roofing failures.",
    image: svcRepair,
    points: ["Leak diagnostics", "Storm damage repair", "Flashing & seam work"],
  },
  {
    slug: "maintenance",
    title: "Roof Maintenance",
    blurb: "Preventive maintenance programs that extend roof life.",
    image: svcMaintenance,
    points: ["Biannual inspections", "Infrared moisture scans", "Documented reporting"],
  },
  {
    slug: "coatings",
    title: "Roof Coatings",
    blurb: "Protective coating systems that improve durability and waterproofing.",
    image: svcCoating,
    points: ["Silicone & acrylic", "Reflective cool roofs", "Restoration warranties"],
  },
  {
    slug: "tpo",
    title: "TPO Roofing",
    blurb: "Energy-efficient single-ply roofing systems.",
    image: svcTpo,
    points: ["Heat-welded seams", "Cool-roof rated", "60 & 80 mil membranes"],
  },
  {
    slug: "epdm",
    title: "EPDM Roofing",
    blurb: "Durable membrane roofing for commercial buildings.",
    image: svcEpdm,
    points: ["Ballasted & adhered", "Proven longevity", "Cold-climate performance"],
  },
  {
    slug: "metal",
    title: "Metal Roofing",
    blurb: "Long-lasting roofing systems for demanding environments.",
    image: svcMetal,
    points: ["Standing seam", "Retrofit framing", "Industrial-grade finishes"],
  },
  {
    slug: "emergency",
    title: "Emergency Roofing",
    blurb: "Fast response for urgent commercial roofing problems.",
    image: svcEmergency,
    points: ["24/7 dispatch", "Temporary dry-in", "Insurance documentation"],
  },
];

export const INDUSTRIES = [
  { title: "Office Buildings", image: indOffice, note: "Class A & multi-tenant" },
  { title: "Warehouses", image: indWarehouse, note: "Large-span distribution" },
  { title: "Retail Centers", image: indRetail, note: "Occupied-hours scheduling" },
  { title: "Industrial Facilities", image: indIndustrial, note: "Chemical & heat resistant" },
  { title: "Schools", image: indSchool, note: "Summer-window delivery" },
  { title: "Healthcare", image: indHealthcare, note: "Infection-control protocols" },
  { title: "Multifamily", image: indMultifamily, note: "Resident-safe worksites" },
  { title: "Government Buildings", image: indGovernment, note: "Prevailing wage & bonded" },
];

export const PROJECTS = [
  {
    title: "Corporate Office Roof Replacement",
    type: "Office Building",
    location: "Scottsdale, AZ",
    description:
      "84,000 sq ft mechanically attached TPO replacement completed over weekends to keep tenants operating.",
    image: indOffice,
  },
  {
    title: "Industrial Facility Restoration",
    type: "Industrial Facility",
    location: "Tolleson, AZ",
    description:
      "Silicone restoration over an aging metal deck, eliminating chronic leaks without production downtime.",
    image: indIndustrial,
  },
  {
    title: "Retail Center Roofing Upgrade",
    type: "Retail Property",
    location: "Chandler, AZ",
    description:
      "Twelve-tenant center re-roofed in phased sections with new drainage and full curb flashing rebuilds.",
    image: indRetail,
  },
  {
    title: "Distribution Warehouse Roof Replacement",
    type: "Warehouse",
    location: "Goodyear, AZ",
    description:
      "310,000 sq ft tear-off and 80 mil TPO install with upgraded insulation to hit new energy targets.",
    image: indWarehouse,
  },
  {
    title: "Multifamily Roof Restoration",
    type: "Multifamily Property",
    location: "Mesa, AZ",
    description:
      "Nine residential buildings restored with reflective coatings while every unit stayed occupied.",
    image: indMultifamily,
  },
  {
    title: "Commercial Roof Maintenance Program",
    type: "Healthcare Campus",
    location: "Tempe, AZ",
    description:
      "Five-year preventive maintenance agreement covering 14 roof sections with infrared moisture surveys.",
    image: indHealthcare,
  },
];

export const WHY_US = [
  { title: "25+ Years of Experience", copy: "A quarter century of commercial-only roofing work." },
  { title: "Certified Roofing Professionals", copy: "Manufacturer-certified crews on every project." },
  { title: "Premium Materials", copy: "Specification-grade systems from proven manufacturers." },
  { title: "Safety-First Worksites", copy: "OSHA-compliant plans and daily site audits." },
  { title: "Transparent Estimates", copy: "Line-item scopes with no surprise change orders." },
  { title: "Dedicated Project Management", copy: "One point of contact from survey to closeout." },
  { title: "Long-Term Warranties", copy: "Up to 30-year manufacturer and workmanship coverage." },
  { title: "Reliable Scheduling", copy: "Milestone dates we publish, track, and hit." },
];

export const PROCESS = [
  { step: "01", title: "Inspect", copy: "Complete professional roof inspection." },
  { step: "02", title: "Assess", copy: "Identify problems and determine the best solution." },
  { step: "03", title: "Propose", copy: "Provide a clear and detailed proposal." },
  { step: "04", title: "Install", copy: "Complete the roofing project safely and professionally." },
  { step: "05", title: "Protect", copy: "Provide maintenance and long-term support." },
];

export const TESTIMONIALS = [
  {
    quote:
      "Summit Commercial Roofing made our roof replacement simple from start to finish. Their team was professional, organized, and kept us informed throughout the entire project.",
    name: "Daniel Reyes",
    role: "Facilities Director",
    company: "Meridian Office Group",
    rating: 5,
  },
  {
    quote:
      "They re-roofed 310,000 square feet over our peak season without costing us a single hour of shipping. The coordination was genuinely impressive.",
    name: "Alicia Moore",
    role: "Regional Operations Manager",
    company: "Cardinal Distribution",
    rating: 5,
  },
  {
    quote:
      "We had chronic leaks for years. Summit found the real cause, documented everything, and the restoration has been watertight through two monsoon seasons.",
    name: "Peter Nowak",
    role: "Plant Engineer",
    company: "Foundry West Manufacturing",
    rating: 5,
  },
  {
    quote:
      "Their maintenance program pays for itself. We finally have a roof budget we can forecast instead of emergency invoices.",
    name: "Sandra Ellis",
    role: "Property Manager",
    company: "Northline Retail Partners",
    rating: 5,
  },
];

export const STATS = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1500, suffix: "+", label: "Commercial Projects" },
  { value: 20, suffix: "M+", label: "Square Feet Installed" },
  { value: 24, suffix: "/7", label: "Emergency Service" },
];

export const PROPERTY_TYPES = [
  "Office Building",
  "Warehouse / Distribution",
  "Retail Property",
  "Industrial Facility",
  "School / Education",
  "Healthcare Facility",
  "Multifamily Property",
  "Government Facility",
];

export const SERVICE_OPTIONS = [
  "Roof Replacement",
  "Roof Repair",
  "Roof Inspection",
  "Preventive Maintenance",
  "Roof Coating",
  "TPO / EPDM System",
  "Metal Roofing",
  "Emergency Service",
];
