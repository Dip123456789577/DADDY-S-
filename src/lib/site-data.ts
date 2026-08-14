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

export { indOffice, indWarehouse, indRetail, indIndustrial, indSchool, indHealthcare, indMultifamily, indGovernment };

export const COMPANY = {
  name: "Summit Commercial Roofing",
  established: 1984,
  location: "Edmonton, AB",
  tagline: "Premium commercial roofing solutions built for long-term performance.",
  phone: "780-555-0123",
  phoneHref: "tel:+17805550123",
  email: "hello@summitcommercialroofing.ca",
  office: "Edmonton, AB",
  hours: "Mon – Fri: 7:00 AM – 5:00 PM | 24/7 Emergency Service",
};

export const NAV = [
  { label: "Services", to: "/#services" },
  { label: "Portfolio", to: "/#portfolio" },
  { label: "Process", to: "/#process" },
  { label: "Testimonials", to: "/#testimonials" },
] as const;

export const SERVICES = [
  {
    slug: "roof-replacement",
    title: "Commercial Roof Replacement",
    blurb: "Complete roof replacement systems engineered for extreme weather resilience and decades of worry-free operation.",
    image: svcReplacement,
    points: [
      "Complete Roof Systems",
      "Tear-Off & Installation",
      "Manufacturer Warranties",
    ],
  },
  {
    slug: "roof-repair",
    title: "Commercial Roof Repair",
    blurb: "Precision leak detection and rapid repairs for storm damage, seam failures, and structural vulnerabilities.",
    image: svcRepair,
    points: [
      "Leak Detection",
      "Storm Damage",
      "Emergency Repairs",
    ],
  },
  {
    slug: "maintenance",
    title: "Preventive Roof Maintenance",
    blurb: "Proactive inspection programs that identify issues early, prevent costly downtime, and double roof lifespan.",
    image: svcMaintenance,
    points: [
      "Scheduled Inspections",
      "Drain & Flashing Care",
      "Roof-Life Extension",
    ],
  },
  {
    slug: "coatings",
    title: "Roof Coatings & Restoration",
    blurb: "Seamless fluid-applied waterproof coatings that restore existing roofs at a fraction of full replacement cost.",
    image: svcCoating,
    points: [
      "Waterproof Coatings",
      "Energy Efficiency",
      "System Restoration",
    ],
  },
];

export const TRANSFORMATIONS = [
  {
    id: "project-01",
    tag: "PROJECT 01",
    title: "Downtown Office Roof Restoration",
    beforeText: "Aged commercial roof with visible deterioration.",
    afterText: "Fully restored commercial roofing system with clean detailing.",
    beforeImage: "@/assets/before-1.jpg",
    afterImage: "@/assets/after-1.jpg",
  },
  {
    id: "project-02",
    tag: "PROJECT 02",
    title: "Industrial Facility Roof Replacement",
    beforeText: "Worn and weather-damaged industrial roof.",
    afterText: "Modern high-performance commercial roofing system.",
    beforeImage: "@/assets/before-2.jpg",
    afterImage: "@/assets/after-2.jpg",
  },
];

export const STATS = [
  { value: 40, suffix: "+", label: "Years in Edmonton" },
  { value: 1500, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "yr", label: "Workmanship Warranty" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const PROPERTY_TYPES = [
  "Office Building",
  "Warehouse",
  "Retail",
  "Industrial",
  "Multifamily",
  "Other",
];

export const SERVICE_OPTIONS = [
  "Roof Replacement",
  "Roof Repair",
  "Maintenance",
  "Roof Coating",
  "Emergency Service",
];

export const CONSULTATION_FEATURES = [
  {
    title: "Fast Response",
    description: "On-site assessments scheduled within 48 hours of inquiry.",
  },
  {
    title: "Professional Assessment",
    description: "Detailed inspection and roofing recommendations from experienced specialists.",
  },
  {
    title: "Transparent Proposal",
    description: "Clear project pricing with no unnecessary surprises.",
  },
];

export const TRUST_POINTS = [
  "20-Year Workmanship Warranty",
  "No Surprise Pricing",
  "40+ Years Local Experience & A+ BBB",
];

export const INDUSTRIES = [
  {
    slug: "office",
    title: "Office Buildings",
    image: indOffice,
    points: ["Flat & Low-Slope Systems", "HVAC Integration", "Minimal Disruption"],
  },
  {
    slug: "warehouse",
    title: "Warehouses & Distribution",
    image: indWarehouse,
    points: ["Metal Roof Systems", "Spray-Foam Insulation", "Rapid Installation"],
  },
  {
    slug: "retail",
    title: "Retail & Mixed-Use",
    image: indRetail,
    points: ["Aesthetic Roof Design", "Energy-Efficient Systems", "Code Compliance"],
  },
  {
    slug: "industrial",
    title: "Industrial Facilities",
    image: indIndustrial,
    points: ["Heavy-Duty Membranes", "Chemical Resistance", "Structural Support"],
  },
  {
    slug: "school",
    title: "Schools & Institutions",
    image: indSchool,
    points: ["Safe Work Protocols", "Budget-Aligned Scopes", "Scheduled Shutdowns"],
  },
  {
    slug: "healthcare",
    title: "Healthcare Facilities",
    image: indHealthcare,
    points: ["Infection Control", "24/7 Access Plans", "Noise Management"],
  },
  {
    slug: "multifamily",
    title: "Multifamily Residential",
    image: indMultifamily,
    points: ["Tenant-Safe Methods", "Phased Scheduling", "Long-Term Warranties"],
  },
  {
    slug: "government",
    title: "Government & Municipal",
    image: indGovernment,
    points: ["Certified Contractors", "Compliance Documentation", "Bid-Ready Proposals"],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Roof Assessment",
    description:
      "Our roofing specialists conduct a thorough on-site inspection within 48 hours. We document every issue — no obligation, no pressure.",
  },
  {
    step: "02",
    title: "Transparent Proposal",
    description:
      "You receive a clear, itemized proposal with fixed pricing. No surprises, no hidden fees. We explain every line before you sign.",
  },
  {
    step: "03",
    title: "Professional Installation",
    description:
      "Our certified crews execute the project with precision, using manufacturer-approved materials and strict safety protocols throughout.",
  },
  {
    step: "04",
    title: "Final Inspection & Warranty",
    description:
      "We conduct a comprehensive quality walkthrough with you before handing over your 20-year workmanship warranty documentation.",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "Summit replaced the membrane across our entire 80,000 sq. ft. facility on schedule and under budget. The crew was professional, safe, and the quality speaks for itself.",
    author: "David K.",
    role: "Facilities Manager, Industrial Corp.",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "We've used Summit for preventive maintenance on three of our office properties for six years. Zero leaks, zero surprises — just reliable craftsmanship every single year.",
    author: "Sarah M.",
    role: "Property Manager, Meridian Properties",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "After storm damage compromised our school's roof, Summit mobilized within 24 hours. The emergency repair was thorough and they minimized disruption to our students entirely.",
    author: "Principal T. Olsen",
    role: "Edmonton Catholic School District",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "The TPO system Summit installed on our retail plaza cut our energy costs by 18%. Their recommendation was exactly right — and the installation quality is second to none.",
    author: "Mark R.",
    role: "Owner, Westpark Retail Plaza",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "Summit's team treated our healthcare facility with the utmost professionalism. Work zones were sealed off, noise was managed, and they completed the project three days early.",
    author: "Operations Director",
    role: "Edmonton Regional Health Centre",
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "The 20-year warranty was the deciding factor for us, but the outstanding workmanship sealed the deal. Best commercial roofing investment we've made in 15 years.",
    author: "Linda H.",
    role: "VP Operations, Sterling Group",
    rating: 5,
  },
];
