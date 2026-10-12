import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { SplitIntro } from "@/components/sections/SplitIntro";
import { PointsPanel } from "@/components/sections/PointsPanel";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Statement } from "@/components/sections/Statement";
import { DarkShape } from "@/components/sections/DarkShape";
import { StepsAccordion } from "@/components/sections/StepsAccordion";
import { OfferCards } from "@/components/sections/OfferCards";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";
import * as home from "@/content/home";
import { images } from "@/content/images";
import { meta } from "@/content/derived";
import { guaranteeFootnote } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/", meta["/"]);

export default function HomePage() {
  return (
    <>
      <Hero content={home.hero} variant="home" story />
      <ServiceCards id="services" headline={home.serviceCards.headline} cards={home.serviceCards.cards} />
      <SplitIntro headline={home.outcome.headline} body={home.outcome.body}>
        <PointsPanel items={home.outcome.points} />
      </SplitIntro>
      <FeatureGrid
        headline={home.features.headline}
        sub={home.features.sub}
        eyebrow={home.features.eyebrow}
        linkLabel={home.features.linkLabel}
        cards={home.features.cards}
      />
      <Statement
        headline={home.managed.headline}
        body={home.managed.body}
        cta={home.managed.cta}
        image={images.photos[3]}
      />
      <DarkShape>
        <StepsAccordion
          headline={home.howItWorks.headline}
          steps={home.howItWorks.steps}
          scenes={[
            { name: "messages", labels: ["Your services", "Your customers", "Your capacity", "A clear plan."] },
            "pages",
            "calendar",
          ]}
        />
      </DarkShape>
      <OfferCards headline={home.offer.headline} cards={home.offer.cards} footnote={guaranteeFootnote} />
      <Faq faqs={home.faqs} />
      <ClosingCta headline={home.closing.headline} sub={home.closing.sub} cta={home.closing.cta} />
    </>
  );
}
