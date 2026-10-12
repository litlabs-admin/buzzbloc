import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";
import { meta, ui } from "@/content/derived";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

// Only the headline face is preloaded. The others load on demand with font-display: swap,
// which keeps the hero image first in the queue on slow connections.
const instrument = localFont({
  variable: "--font-instrument",
  display: "swap",
  preload: false,
  src: [
    { path: "./fonts/InstrumentSans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/InstrumentSans-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/InstrumentSans-700.woff2", weight: "700", style: "normal" },
  ],
});

const instrumentCondensed = localFont({
  variable: "--font-instrument-condensed",
  display: "swap",
  src: [{ path: "./fonts/InstrumentSansCondensed-700.woff2", weight: "700", style: "normal" }],
});

const instrumentSemi = localFont({
  variable: "--font-instrument-semi",
  display: "swap",
  preload: false,
  src: [
    { path: "./fonts/InstrumentSansSemiCondensed-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSansSemiCondensed-700.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: meta["/"].title, template: `%s | ${site.name}` },
  description: meta["/"].description,
  applicationName: site.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0f281b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${instrument.variable} ${instrumentCondensed.variable} ${instrumentSemi.variable}`}
    >
      <body className="flex min-h-svh flex-col overflow-x-clip">
        <a
          href="#main"
          className="type-small fixed left-s3 top-s3 z-[1100] -translate-x-[200%] rounded-xs border border-brand-950 bg-white p-s3 text-brand-950 focus:translate-x-0"
        >
          {ui.skipLink}
        </a>
        <SiteNav />
        <main id="main" tabIndex={-1} className="flex flex-1 flex-col outline-none">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      </body>
    </html>
  );
}
