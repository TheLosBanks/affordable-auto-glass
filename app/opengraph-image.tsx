import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/business";

export const alt = "Windshield Repair & Replacement in Worcester, MA | Affordable Auto Glass & Repair";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0d1320",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            fontWeight: 700,
            color: "#f8b4c0",
          }}
        >
          {`${BUSINESS.rating.value} stars on Google · ${BUSINESS.rating.count} reviews`}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 76,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            maxWidth: 1000,
          }}
        >
          Windshield Repair & Replacement in Worcester, MA
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#cbd5e1" }}>
          Same-day service · Insurance accepted · Mobile service
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#d31637",
              borderRadius: 12,
              padding: "20px 36px",
              fontSize: 36,
              fontWeight: 900,
            }}
          >
            {`Call ${BUSINESS.phone}`}
          </div>
          <div style={{ fontSize: 28, color: "#94a3b8" }}>
            Affordable Auto Glass & Repair
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
