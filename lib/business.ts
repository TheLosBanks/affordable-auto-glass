// Single source of truth for business data. Every page, schema block, and
// CTA reads from here, change it once, it changes everywhere.

export const BUSINESS = {
  name: "Affordable Auto Glass & Repair",
  legalName: "Affordable Auto Glass & Repair",
  phone: "508-304-3141",
  phoneHref: "tel:+15083043141",
  phoneIntl: "+1-508-304-3141",
  email: "info@affordableautoglassrepair.com",
  address: {
    street: "3 King St #1",
    city: "Worcester",
    state: "MA",
    zip: "01610",
  },
  geo: { lat: 42.2599, lng: -71.7962 },
  // Source of truth = current site footer + schema (Mon–Sat 8–6).
  // TODO(Carlos): confirm against Google Business Profile.
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 6:00 PM" },
    { days: "Sunday", time: "By appointment" },
  ],
  schemaHours: ["Mo-Sa 08:00-18:00"],
  rating: { value: 4.7, count: 70 }, // per GBP screenshot 2026-06-12
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=42.2599,-71.7962",
  // Official GBP share link from Carlos (listing name: "Affordable Auto Glass & Repair Co")
  reviewsUrl: "https://share.google/KMUqWkdWuIOHFVRzF",
  serviceAreas: [
    "Worcester",
    "Shrewsbury",
    "Auburn",
    "Holden",
    "Millbury",
    "Leicester",
    "West Boylston",
    "Grafton",
  ],
  yearsInBusiness: "20+",
  yearsExperience: "45+",
} as const;

export const SITE_URL = "https://affordableautoglassrepair.com";

export const TRUST_BADGES = [
  "Same-day & next-day service",
  "Insurance accepted",
  "Mobile service available",
  "Lifetime warranty",
] as const;

export const SERVICES = [
  {
    slug: "windshield-repair-worcester-ma",
    name: "Windshield Repair",
    short: "Rock chips and small cracks fixed fast, often without replacement.",
  },
  {
    slug: "windshield-replacement-worcester-ma",
    name: "Windshield Replacement",
    short: "Full windshield replacement with OEM-quality glass and a lifetime warranty.",
  },
  {
    slug: "car-window-replacement-worcester-ma",
    name: "Side Window Replacement",
    short: "Broken door glass replaced same-day, broken glass vacuumed out.",
  },
  {
    slug: "rear-windshield-replacement-worcester-ma",
    name: "Rear Windshield Replacement",
    short: "Back glass with defroster lines replaced and tested.",
  },
  {
    slug: "mobile-auto-glass-repair-worcester-ma",
    name: "Mobile Service",
    short: "We come to your home or workplace anywhere in the Worcester area.",
  },
  {
    slug: "auto-glass-insurance-claims-worcester-ma",
    name: "Insurance Claims",
    short: "We bill your insurer directly and handle the paperwork.",
  },
] as const;

// Services without dedicated landing pages (shown on homepage grid)
export const EXTRA_SERVICES = [
  { name: "Window Regulator Repair", short: "Stuck or fallen window? We replace regulators and motors." },
  { name: "Sunroof Glass", short: "Cracked or shattered sunroof glass replaced." },
  { name: "Trucks & Classic Cars", short: "18-wheelers, fleet vehicles, and classic car glass." },
] as const;
