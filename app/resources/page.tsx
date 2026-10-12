import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ColumnPanel } from "@/components/sections/ColumnPanel";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { resources } from "@/content/company";
import { headings, meta } from "@/content/derived";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "/resources";

export const metadata: Metadata = pageMetadata(path, meta[path]);

/** Article cards are added only when real articles exist (copy: "Article listing instructions"). */
export default function ResourcesPage() {
  return (
    <>
      <Hero content={resources.hero} />
      <ColumnPanel headline={[headings.resourceCategories]} items={resources.categories} />
      <ClosingCta headline={resources.closing.headline} cta={resources.closing.cta} />
      <JsonLd data={breadcrumbJsonLd(meta[path].title, path)} />
    </>
  );
}
