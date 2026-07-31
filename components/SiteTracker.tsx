"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Site-wide tracking: a page_view per route, and a call_click whenever any
// tap-to-call link is clicked. Uses sendBeacon so it survives the tel: navigation.
function beacon(type: string) {
  try {
    const body = new Blob([JSON.stringify({ type })], { type: "application/json" });
    if (!navigator.sendBeacon("/api/track", body)) {
      fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type }), keepalive: true });
    }
  } catch {
    /* never break the page over analytics */
  }
}

export default function SiteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    beacon("page_view");
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (link) beacon("call_click");
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
