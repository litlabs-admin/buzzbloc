import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SplitIntro } from "@/components/sections/SplitIntro";
import { PointsPanel } from "@/components/sections/PointsPanel";
import { FeatureTabs } from "@/components/sections/FeatureTabs";
import { OfferSplit } from "@/components/sections/OfferSplit";
import { DarkShape } from "@/components/sections/DarkShape";
import { StepsAccordion } from "@/components/sections/StepsAccordion";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import * as page from "@/content/websites";
import { meta } from "@/content/derived";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const path = "/websites";

export const metadata: Metadata = pageMetadata(path, meta[path]);

export default function WebsitesPage() {
  return (
    <>
      <Hero content={page.hero} story />
      <SplitIntro headline={page.problem.headline} body={page.problem.body}>
        <PointsPanel items={page.benefits} />
      </SplitIntro>
      <div className="py-edge">
        <section className="shape texture-light">
          <FeatureTabs
            id="included"
            headline={page.featureSection.headline}
            items={page.featureSection.items}
            variant="split"
          />
        </section>
      </div>
      <OfferSplit headline={page.offer.headline} body={page.offer.body} cta={page.offer.cta} />
      <DarkShape>
        <StepsAccordion
          headline={page.process.headline}
          steps={page.process.steps}
          scenes={[
            { name: "checklist", labels: ["Plan it", "Your goals", "Pages", "The action visitors should take"] },
            "browser",
            "phone",
          ]}
        />
      </DarkShape>
      <Faq faqs={page.faqs} />
      <ClosingCta headline={page.closing.headline} cta={page.closing.cta} />
      <JsonLd
        data={[
          serviceJsonLd({ name: "Websites", description: meta[path].description, path }),
          breadcrumbJsonLd("Websites", path),
        ]}
      />
    </>
  );
}
