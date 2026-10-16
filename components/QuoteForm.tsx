"use client";

import { useState } from "react";
import { BUSINESS, SERVICES, EXTRA_SERVICES } from "@/lib/business";

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.name),
  ...EXTRA_SERVICES.map((s) => s.name),
  "Not sure / something else",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-2xl font-extrabold">Got it, we&apos;ll call you back fast.</p>
        <p className="mt-3 text-slate-600">
          Need help right now? Call{" "}
          <a href={BUSINESS.phoneHref} className="font-bold text-brand-600">
            {BUSINESS.phone}
          </a>{" "}
          and we&apos;ll quote you over the phone.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Honeypot: hidden from humans; bots that fill it get silently dropped */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="rounded-lg border border-slate-300 px-3.5 py-3 text-base font-normal outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Phone
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="rounded-lg border border-slate-300 px-3.5 py-3 text-base font-normal outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            placeholder="(508) 555-0123"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-semibold">
        Email <span className="font-normal text-slate-500">(optional)</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          className="rounded-lg border border-slate-300 px-3.5 py-3 text-base font-normal outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
          placeholder="you@example.com"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold">
          Service needed
          <select
            name="service"
            required
            defaultValue=""
            className="rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-base font-normal outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Vehicle (year, make, model)
          <input
            name="vehicle"
            className="rounded-lg border border-slate-300 px-3.5 py-3 text-base font-normal outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            placeholder="2019 Honda CR-V"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-semibold">
        <span>
          VIN or license plate <span className="font-normal text-slate-500">(optional)</span>
        </span>
        <input
          name="vinPlate"
          autoCapitalize="characters"
          autoComplete="off"
          spellCheck={false}
          aria-describedby="vin-plate-hint"
          className="rounded-lg border border-slate-300 px-3.5 py-3 text-base font-normal uppercase outline-none placeholder:normal-case focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
          placeholder="1HGCM82633A004352 or 1ABC23 MA"
        />
        <span id="vin-plate-hint" className="grid gap-1 text-sm font-normal text-slate-600">
          <span>
            For a faster quote, add your full VIN or your plate number and state. It tells us
            exactly which glass fits your vehicle.
          </span>
          <span>
            <strong className="font-semibold text-slate-700">VIN:</strong>{" "}all 17 characters,
            e.g. 1HGCM82633A004352. Find it on the driver&apos;s side dashboard by the
            windshield or on your registration.
          </span>
          <span>
            <strong className="font-semibold text-slate-700">Plate:</strong>{" "}plate number, then
            state, e.g. 1ABC23 MA
          </span>
        </span>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        Anything else we should know?
        <textarea
          name="message"
          rows={3}
          className="rounded-lg border border-slate-300 px-3.5 py-3 text-base font-normal outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
          placeholder="Crack is about 6 inches, passenger side. Hoping for mobile service in Auburn."
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-brand-600 px-6 py-4 text-base font-bold text-white transition hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request My Free Quote"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm font-semibold text-red-600">
          Something went wrong, please call {BUSINESS.phone} instead.
        </p>
      )}
      <p className="text-center text-xs text-slate-500">
        No spam, no obligation. We usually respond within business hours the same day.
      </p>
    </form>
  );
}
