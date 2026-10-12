import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SplitIntro } from "@/components/sections/SplitIntro";
import { ColumnPanel } from "@/components/sections/ColumnPanel";
import { DarkShape } from "@/components/sections/DarkShape";
import { StepsAccordion } from "@/components/sections/StepsAccordion";
import { OfferSplit } from "@/components/sections/OfferSplit";
import { Statement } from "@/components/sections/Statement";
import { DarkBand } from "@/components/sections/DarkBand";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import * as page from "@/content/get-leads";
import { images } from "@/content/images";
import { meta } from "@/content/derived";
import { guaranteeFootnote } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const path = "/get-leads";

export const metadata: Metadata = pageMetadata(path, meta[path]);

export default function GetLeadsPage() {
  return (
    <>
      <Hero content={page.hero} story />
      <SplitIntro headline={page.customer.headline} body={page.customer.body} />
      <ColumnPanel headline={page.whatTheyGet.headline} items={page.whatTheyGet.items} />
      <DarkShape id="how-it-works">
        <StepsAccordion
          headline={page.howItWorks.headline}
          steps={page.howItWorks.steps}
          scenes={[
            {
              name: "checklist",
              labels: ["", "Your services", "Area", "Customer requirements", "Available appointment times"],
            },
            "ad",
            {
              name: "messages",
              labels: ["Leads enter GoHighLevel", "Prompt SMS", "Email follow-up", "Booked into your calendar"],
            },
            "calendar",
          ]}
        />
      </DarkShape>
      <OfferSplit
        headline={page.pilot.headline}
        body={page.pilot.body}
        offerLine={page.pilot.offerLine}
        cta={page.pilot.cta}
        footnote={guaranteeFootnote}
      />
      <Statement headline={page.exclusivity.headline} body={page.exclusivity.body} image={images.photos[7]} />
      <DarkBand headline={page.afterPilot.headline} body={page.afterPilot.body} cta={page.afterPilot.cta} />
      <Faq faqs={page.faqs} />
      <ClosingCta
        headline={page.closing.headline}
        sub={page.closing.sub}
        cta={page.closing.cta}
        footnote={guaranteeFootnote}
      />
      <JsonLd
        data={[
          serviceJsonLd({ name: "Get Leads", description: meta[path].description, path }),
          breadcrumbJsonLd("Get Leads", path),
        ]}
      />
    </>
  );
}
