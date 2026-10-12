import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { SplitIntro } from "@/components/sections/SplitIntro";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { ColumnPanel } from "@/components/sections/ColumnPanel";
import { Faq } from "@/components/sections/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { getServicePage, servicePages } from "@/content/services";
import { headings } from "@/content/derived";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ service: string }> };

/** Only the service slugs in the copy exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((page) => ({ service: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const page = getServicePage(service);
  if (!page) return {};
  return pageMetadata(`/${page.slug}`, { title: page.name, description: page.hero.sub });
}

export default async function ServiceTemplatePage({ params }: Props) {
  const { service } = await params;
  const page = getServicePage(service);
  if (!page) notFound();

  const path = `/${page.slug}`;

  return (
    <>
      <Hero content={page.hero} story />
      <SplitIntro headline={page.outcome.headline} body={page.outcome.body} />
      <FeatureRows heading={headings.whatWeHandle} items={page.handle} note={page.offer} />
      <ColumnPanel headline={[headings.howItWorks]} items={page.steps} numbered />
      <Faq faqs={page.faqs} variant="joined" heading={headings.commonQuestions} />
      <ClosingCta
        headline={page.closing.headline}
        cta={page.closing.cta}
       
        related={page.related}
        relatedHeading={headings.relatedServices}
      />
      <JsonLd
        data={[
          serviceJsonLd({ name: page.name, description: page.hero.sub, path }),
          breadcrumbJsonLd(page.name, path),
        ]}
      />
    </>
  );
}
