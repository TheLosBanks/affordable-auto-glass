import Link from "next/link";
import { BUSINESS, SERVICES, EXTRA_SERVICES, TRUST_BADGES } from "@/lib/business";
import { PhoneIcon } from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";

// TODO(Carlos): replace with a real photo of the shop / tech / van.
const HERO_PHOTO =
  "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da05?auto=format&fit=crop&w=1400&q=80";

const WHY_US = [
  {
    title: `${BUSINESS.yearsInBusiness} years in business`,
    body: "A real local shop on King St — not a national call center.",
  },
  {
    title: `${BUSINESS.yearsExperience} years of experience`,
    body: "Combined hands-on auto glass experience across our techs.",
  },
  {
    title: "Insurance accepted",
    body: "We work with major insurers and help with the paperwork.",
  },
  {
    title: "Price match guarantee",
    body: "Find a lower written quote? Bring it in — we'll match it.",
  },
  {
    title: "Lifetime warranty",
    body: "Workmanship guaranteed against leaks and defects for as long as you own the vehicle.",
  },
  {
    title: "Mobile service",
    body: "We come to your driveway or workplace across Central MA.",
  },
];

const HOME_FAQS = [
  {
    q: "Do you offer mobile auto glass service?",
    a: `Yes. We come to your home or workplace anywhere in the Worcester area — Worcester, Shrewsbury, Auburn, Holden, Millbury, Leicester, and surrounding towns. Mobile service is usually same-day or next-day.`,
  },
  {
    q: "Can you repair a chip instead of replacing the windshield?",
    a: "Often, yes. Chips smaller than a quarter and cracks under a few inches can usually be repaired in about 30 minutes, which is cheaper and keeps your factory glass. If the damage is in your line of sight or has spread, we'll tell you honestly that a replacement is the safer call.",
  },
  {
    q: "Do you replace side and rear windows?",
    a: "Yes — door glass, vent glass, quarter glass, and rear windshields with defroster lines. We also vacuum out the broken glass.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes. We work with major insurance providers, bill them directly, and help with the claim paperwork. In Massachusetts, glass coverage often means $0 or a low deductible out of pocket.",
  },
  {
    q: "How fast can I get service?",
    a: "Most jobs are same-day or next-day. Call before noon and we can usually fit you in the same day, in the shop or at your location.",
  },
  {
    q: "Is windshield replacement covered by insurance?",
    a: "If you carry comprehensive coverage, windshield damage is typically covered. Many Massachusetts policies include full glass coverage with no deductible. Call us with your insurer's name and we'll tell you what to expect before any work starts.",
  },
];

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="bg-ink-950 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Local shop · {BUSINESS.address.street}, Worcester
            </p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
              Windshield Repair &amp; Replacement in Worcester, MA
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Same-day and next-day auto glass service from a local shop with{" "}
              {BUSINESS.yearsInBusiness} years in business. Insurance accepted.
              Mobile service available.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-7 py-4 text-lg font-bold text-white transition hover:bg-brand-700"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
              <a
                href="#quote"
                className="flex items-center justify-center rounded-lg border border-white/25 px-7 py-4 text-lg font-bold text-white transition hover:bg-white/10"
              >
                Request Free Quote
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-300">
              {TRUST_BADGES.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <Check />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_PHOTO}
              alt="Technician installing a new windshield"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <div className="absolute -bottom-5 left-5 rounded-lg bg-white px-5 py-3.5 text-ink-950 shadow-lg">
              <p className="text-xl font-black">
                {BUSINESS.rating.value} ★{" "}
                <span className="text-sm font-bold text-slate-500">
                  · {BUSINESS.rating.count} Google reviews
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Fast service strip */}
      <section className="border-b border-slate-200 bg-brand-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="text-base font-bold sm:text-lg">
            Cracked windshield? Broken side window? Don&apos;t wait — it spreads.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="whitespace-nowrap rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-700"
          >
            Call now for same-day service
          </a>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          Auto glass services
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Every kind of vehicle glass — cars, trucks, 18-wheelers, and classics.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group rounded-xl border border-slate-200 p-6 transition hover:border-brand-600 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold group-hover:text-brand-600">
                {s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
              <p className="mt-4 text-sm font-bold text-brand-600">Learn more →</p>
            </Link>
          ))}
          {EXTRA_SERVICES.map((s) => (
            <div key={s.name} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
              <a href={BUSINESS.phoneHref} className="mt-4 block text-sm font-bold text-brand-600">
                Call for a quote →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why choose us */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Why Worcester drivers choose us
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w) => (
              <div key={w.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-extrabold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Rated {BUSINESS.rating.value} stars on Google
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              {BUSINESS.rating.count} reviews from real Worcester-area customers.
            </p>
          </div>
          <a
            href={BUSINESS.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-brand-600 px-6 py-3 font-bold text-brand-600 transition hover:bg-brand-600 hover:text-white"
          >
            Read our Google reviews
          </a>
        </div>
        {/* TODO(Carlos): paste 3–6 real Google reviews here (name, stars, text).
            Deliberately not shipping invented testimonials. */}
      </section>

      {/* 6. Insurance */}
      <section className="bg-ink-950 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:py-16">
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              Using insurance? We handle the paperwork.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              We work with major insurance providers and bill them directly. In
              Massachusetts, many policies include full glass coverage — which
              often means nothing out of pocket. Call us with your insurer&apos;s
              name and we&apos;ll walk you through it before any work starts.
            </p>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="justify-self-start whitespace-nowrap rounded-lg bg-brand-600 px-7 py-4 text-lg font-bold text-white hover:bg-brand-700 md:justify-self-end"
          >
            Ask about your coverage
          </a>
        </div>
      </section>

      {/* 7. Service area */}
      <section id="service-area" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Serving Worcester &amp; Central MA
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              In-shop service at {BUSINESS.address.street}, Worcester — or we
              come to you with mobile service across the area:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {BUSINESS.serviceAreas.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-semibold text-slate-700"
                >
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-brand-600 px-6 py-3 font-bold text-white hover:bg-brand-700"
              >
                Get Directions
              </a>
              <a
                href={BUSINESS.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 px-6 py-3 font-bold text-slate-700 hover:border-brand-600 hover:text-brand-600"
              >
                Find us on Google
              </a>
            </div>
          </div>
          <iframe
            title="Map to Affordable Auto Glass & Repair, 3 King St, Worcester MA"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${BUSINESS.name} ${BUSINESS.address.street} ${BUSINESS.address.city} ${BUSINESS.address.state}`,
            )}&output=embed`}
            className="h-72 w-full rounded-xl border border-slate-200"
            loading="lazy"
          />
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Common questions
          </h2>
          <div className="mt-8">
            <Faq items={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* 9. Final CTA + quote form */}
      <section id="quote" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Get a fast, free quote
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Fastest option: call{" "}
              <a href={BUSINESS.phoneHref} className="font-bold text-brand-600">
                {BUSINESS.phone}
              </a>{" "}
              and we&apos;ll quote you on the spot. Prefer not to call? Send the
              form and we&apos;ll get back to you the same business day.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2"><Check dark /> Same-day &amp; next-day appointments</li>
              <li className="flex items-center gap-2"><Check dark /> In-shop or mobile — your choice</li>
              <li className="flex items-center gap-2"><Check dark /> Insurance billed directly</li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}

function Check({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 flex-none ${dark ? "text-brand-600" : "text-brand-100"}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
