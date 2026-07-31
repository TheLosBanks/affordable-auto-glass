import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/business";

// Quote requests email the shop via Resend when RESEND_API_KEY +
// QUOTE_TO_EMAIL are set; otherwise they log to the function console so the
// form still works on preview deployments.
export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  // Honeypot field: real users never see it, bots fill it. Pretend success.
  if ((body.company || "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").slice(0, 200).trim();
  const phone = (body.phone || "").slice(0, 50).trim();
  const service = (body.service || "").slice(0, 100).trim();
  const vehicle = (body.vehicle || "").slice(0, 200).trim();
  const message = (body.message || "").slice(0, 2000).trim();

  if (!name || !phone || !service) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;

  if (apiKey && to && from) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Quote request: ${service} from ${name}`,
        text: [
          `New quote request from ${BUSINESS.name} website`,
          ``,
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Service: ${service}`,
          `Vehicle: ${vehicle || "n/a"}`,
          ``,
          `Message:`,
          message || "n/a",
        ].join("\n"),
      }),
    });
    if (!res.ok) {
      console.error("[quote] resend error", res.status, await res.text());
      return NextResponse.json({ error: "send failed" }, { status: 502 });
    }
  } else {
    console.log("[quote] (no email configured)", { name, phone, service, vehicle, message });
  }

  // Record the quote submission to the central tracker (best-effort).
  const trackUrl = process.env.CRM_TRACK_URL;
  const trackToken = process.env.INGEST_TOKEN;
  if (trackUrl && trackToken) {
    try {
      await fetch(trackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-ingest-token": trackToken },
        body: JSON.stringify({ source: "affordable-auto-glass", type: "quote_submit" }),
      });
    } catch {
      /* never fail a quote over analytics */
    }
  }

  return NextResponse.json({ ok: true });
}
