import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social image, used by every page. Colours are brand-950 and white (DESIGN.md 1.1). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0f281b",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>{site.name}</div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: -2 }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", width: 160, height: 16, borderRadius: 8, background: "#cff900" }} />
      </div>
    ),
    size,
  );
}
