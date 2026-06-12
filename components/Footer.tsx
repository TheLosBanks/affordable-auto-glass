import Link from "next/link";
import { BUSINESS, SERVICES } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-ink-950 pb-24 text-slate-300 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold text-white">Affordable Auto Glass &amp; Repair</p>
          <p className="mt-3 text-sm leading-relaxed">
            Local auto glass shop serving Worcester and Central Massachusetts
            with {BUSINESS.yearsInBusiness} years in business and{" "}
            {BUSINESS.yearsExperience} years of hands-on experience.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="mt-4 inline-block rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-700"
          >
            Call {BUSINESS.phone}
          </a>
        </div>
        <nav aria-label="Services" className="text-sm">
          <p className="mb-3 font-bold uppercase tracking-wider text-slate-500">Services</p>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <p className="mb-3 font-bold uppercase tracking-wider text-slate-500">Visit Us</p>
          <address className="not-italic leading-relaxed">
            {BUSINESS.address.street}
            <br />
            {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
          </address>
          <a
            href={BUSINESS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-semibold text-white underline underline-offset-4 hover:no-underline"
          >
            Get Directions
          </a>
          <p className="mt-4">
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">
              {BUSINESS.email}
            </a>
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-bold uppercase tracking-wider text-slate-500">Hours</p>
          <ul className="space-y-2">
            {BUSINESS.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-slate-400">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="mx-auto max-w-6xl px-4 text-xs text-slate-500 sm:px-6">
          © {new Date().getFullYear()} {BUSINESS.name} · {BUSINESS.address.city},{" "}
          {BUSINESS.address.state}
        </p>
      </div>
    </footer>
  );
}
