"use client";

import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold hover:text-brand-600"
          >
            {item.q}
            <span className="text-xl leading-none text-slate-400">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
