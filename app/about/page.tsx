import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SplitIntro } from "@/components/sections/SplitIntro";
import { ColumnPanel } from "@/components/sections/ColumnPanel";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { about } from "@/content/company";
import { headings, meta } from "@/content/derived";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "/about";

export const metadata: Metadata = pageMetadata(path, meta[path]);

export default function AboutPage() {
  return (
    <>
      <Hero content={about.hero} />
      <SplitIntro headline={about.believe.headline} body={about.believe.body} />
      <ColumnPanel headline={[headings.howWeWork]} items={about.howWeWork} />
      <ClosingCta headline={about.closing.headline} cta={about.closing.cta} />
      <JsonLd data={breadcrumbJsonLd(meta[path].title, path)} />
    </>
  );
}
