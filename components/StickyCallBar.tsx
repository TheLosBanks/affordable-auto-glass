import { BUSINESS } from "@/lib/business";
import { PhoneIcon } from "./Header";

// Mobile-only sticky bottom bar: one tap to call, one tap to the quote form.
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex items-center justify-center gap-2 bg-brand-600 py-4 text-base font-bold text-white"
      >
        <PhoneIcon className="h-5 w-5" />
        Call Now
      </a>
      <a
        href="/#quote"
        className="flex items-center justify-center gap-2 py-4 text-base font-bold text-ink-950"
      >
        Free Quote
      </a>
    </div>
  );
}
