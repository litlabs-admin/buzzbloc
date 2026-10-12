import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SplitIntro } from "@/components/sections/SplitIntro";
import { FeatureTabs } from "@/components/sections/FeatureTabs";
import { Statement } from "@/components/sections/Statement";
import { OfferSplit } from "@/components/sections/OfferSplit";
import { OfferCards } from "@/components/sections/OfferCards";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import * as page from "@/content/marketing";
import { images } from "@/content/images";
import { headings, meta } from "@/content/derived";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const path = "/marketing";

export const metadata: Metadata = pageMetadata(path, meta[path]);

export default function MarketingPage() {
  return (
    <>
      <Hero content={page.hero} story />
      <SplitIntro headline={page.outcome.headline} body={page.outcome.body} />
      <FeatureTabs
        id="included"
        headline={page.featureSection.headline}
        items={page.featureSection.items}
        variant="photo"
      />
      <Statement headline={page.control.headline} body={page.control.body} image={images.photos[6]} />
      <OfferSplit
        headline={page.packageSection.headline}
        listTitle={headings.included}
        list={page.packageSection.included}
        cta={page.packageSection.cta}
        supporting={page.packageSection.supporting}
      />
      <OfferCards headline={page.additions.headline} cards={page.additions.cards} />
      <Faq faqs={page.faqs} />
      <ClosingCta headline={page.closing.headline} cta={page.closing.cta} />
      <JsonLd
        data={[
          serviceJsonLd({ name: "Marketing Team", description: meta[path].description, path }),
          breadcrumbJsonLd("Marketing Team", path),
        ]}
      />
    </>
  );
}
