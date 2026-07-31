import { NextResponse } from "next/server";

// Forwards client events (page_view, call_click) to the central tracker on the
// CRM, server-side so the shared token never reaches the browser. Best-effort.
export async function POST(request: Request) {
  let type = "";
  try {
    type = ((await request.json())?.type || "").toString().slice(0, 80);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!type) return NextResponse.json({ ok: false }, { status: 400 });

  const url = process.env.CRM_TRACK_URL;
  const token = process.env.INGEST_TOKEN;
  if (url && token) {
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-ingest-token": token },
        body: JSON.stringify({ source: "affordable-auto-glass", type }),
      });
    } catch {
      // best-effort: never break the page over analytics
    }
  }
  return NextResponse.json({ ok: true });
}
