import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { OfferCards } from "@/components/sections/OfferCards";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { pricing } from "@/content/company";
import { headings, meta } from "@/content/derived";
import { guaranteeFootnote } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "/pricing";

export const metadata: Metadata = pageMetadata(path, meta[path]);

export default function PricingPage() {
  return (
    <>
      <Hero content={pricing.hero} />
      <OfferCards
        headline={meta[path].title}
        headingLevel="sr"
        cards={pricing.cards}
        footnote={guaranteeFootnote}
      />
      <Faq faqs={pricing.faqs} variant="joined" heading={headings.commonQuestions} />
      <ClosingCta headline={pricing.closing.headline} cta={pricing.closing.cta} />
      <JsonLd data={breadcrumbJsonLd(meta[path].title, path)} />
    </>
  );
}
