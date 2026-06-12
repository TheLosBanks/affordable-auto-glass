import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="Affordable Auto Glass & Repair home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Affordable Auto Glass & Repair"
            className="h-11 w-auto sm:h-12"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex" aria-label="Primary">
          <Link href="/#services" className="hover:text-brand-600">Services</Link>
          <Link href="/#reviews" className="hover:text-brand-600">Reviews</Link>
          <Link href="/#service-area" className="hover:text-brand-600">Service Area</Link>
          <Link href="/#faq" className="hover:text-brand-600">FAQ</Link>
          <Link href="/#quote" className="hover:text-brand-600">Free Quote</Link>
        </nav>
        <a
          href={BUSINESS.phoneHref}
          className="flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
        >
          <PhoneIcon />
          <span className="hidden sm:inline">{BUSINESS.phone}</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>
    </header>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}
