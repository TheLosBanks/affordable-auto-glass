import Link from "next/link";
import { BUSINESS, SERVICES, SITE_URL } from "@/lib/business";
import { PhoneIcon } from "./Header";
import QuoteForm from "./QuoteForm";
import Faq from "./Faq";

export type ServiceContent = {
  slug: string;
  h1: string;
  intro: string;
  sections: { h2: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
  serviceName: string;
  heroImage?: string;
};

const DEFAULT_HERO =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=70";

export default function ServicePage({ content }: { content: ServiceContent }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: content.serviceName,
        serviceType: content.serviceName,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: BUSINESS.serviceAreas.map((city) => ({
          "@type": "City",
          name: `${city}, MA`,
        })),
        url: `${SITE_URL}/${content.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const related = SERVICES.filter((s) => s.slug !== content.slug).slice(0, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={content.heroImage ?? DEFAULT_HERO}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className={`absolute inset-0 -z-10 ${content.heroImage ? "bg-ink-950/75" : "bg-ink-950/85"}`}
        />
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-16">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
            {BUSINESS.name} · Worcester, MA
          </p>
          <h1 className="mt-4 text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">
            {content.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {content.intro}
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
              className="flex items-center justify-center rounded-lg border border-white/25 px-7 py-4 text-lg font-bold transition hover:bg-white/10"
            >
              Get My Free Quote
            </a>
          </div>
          <p className="mt-6 text-sm font-semibold text-slate-400">
            ★ {BUSINESS.rating.value} on Google ({BUSINESS.rating.count} reviews) ·
            Same-day service available · Insurance accepted
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {content.sections.map((s) => (
          <section key={s.h2} className="mb-10">
            <h2 className="text-2xl font-black tracking-tight">{s.h2}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-slate-700">
                {p}
              </p>
            ))}
          </section>
        ))}

        <section className="mb-10 rounded-xl bg-brand-50 p-6">
          <h2 className="text-xl font-black tracking-tight">Service area</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            In-shop at {BUSINESS.address.street}, Worcester, MA, or mobile
            service at your home or workplace in{" "}
            {BUSINESS.serviceAreas.slice(0, -1).join(", ")}, and{" "}
            {BUSINESS.serviceAreas.at(-1)} and surrounding Central Massachusetts
            towns.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-3 font-bold text-white hover:bg-brand-700"
          >
            Call {BUSINESS.phone} for same-day service
          </a>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-5">
            <Faq items={content.faqs} />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-black tracking-tight">Related services</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {related.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="block rounded-lg border border-slate-200 p-4 text-sm font-bold transition hover:border-brand-600 hover:text-brand-600"
                >
                  {s.name} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <section id="quote" className="scroll-mt-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-black tracking-tight">
            Get your free quote
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Fastest: call{" "}
            <a href={BUSINESS.phoneHref} className="font-bold text-brand-600">
              {BUSINESS.phone}
            </a>
            . Or send the form and we&apos;ll call you back.
          </p>
          <div className="mt-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
