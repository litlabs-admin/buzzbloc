import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqsPage } from "@/content/company";
import { meta } from "@/content/derived";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "/faqs";

export const metadata: Metadata = pageMetadata(path, meta[path]);

export default function FaqsPage() {
  return (
    <>
      <Hero content={faqsPage.hero} />
      <Faq faqs={faqsPage.questions} variant="joined" />
      <ClosingCta headline={faqsPage.closing.headline} cta={faqsPage.closing.cta} />
      <JsonLd data={breadcrumbJsonLd(meta[path].title, path)} />
    </>
  );
}
