import Image from "next/image";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqItem } from "@/components/sections/FaqItem";
import { images } from "@/content/images";
import { headings } from "@/content/derived";
import { contactHref } from "@/content/site";
import { faqJsonLd } from "@/lib/seo";
import type { Faq as FaqEntry } from "@/content/types";

/**
 * FAQ section (DESIGN.md 4.13, pattern L) with FAQPage structured data.
 * "photo" shows the image card beside the list; "joined" is the compact single list.
 */
export function Faq({
  faqs,
  variant = "photo",
  heading = headings.faqs,
  footnote,
}: {
  faqs: readonly FaqEntry[];
  variant?: "photo" | "joined";
  heading?: string;
  footnote?: string;
}) {
  const joined = variant === "joined";

  return (
    <div className="py-edge">
      <section className="shape texture-light">
        <div className="u-container py-sec">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:justify-between">
            <div className={cn("flex w-full flex-col gap-8", !joined && "lg:order-last lg:max-w-[48rem]")}>
              <h2 className="type-h3">{heading}</h2>
              <div className={cn("flex w-full flex-col", !joined && "gap-2")}>
                {faqs.map((faq) => (
                  <FaqItem key={faq.q} question={faq.q} answer={faq.a} joined={joined} />
                ))}
              </div>
              {footnote ? <p className="type-disclaimer max-w-[80ch] text-fg-muted">{footnote}</p> : null}
            </div>

            {joined ? null : (
              <div
                data-theme="dark"
                className="relative isolate flex h-64 flex-none flex-col justify-end overflow-clip rounded-lg bg-ash-300 p-4 sm:p-6 lg:h-auto lg:max-h-[32rem] lg:min-h-[20rem] lg:w-[34.25rem] lg:max-w-[44%]"
              >
                <Image
                  src={images.faqPhoto}
                  alt=""
                  fill
                  sizes="(min-width: 62rem) 34rem, 100vw"
                  className="-z-10 object-cover"
                />
                <div className="flex w-full flex-col items-start gap-6 rounded-md border border-white/30 bg-black/35 p-4 backdrop-blur-[0.75rem] sm:p-6">
                  <h3 className="type-h5">{headings.faqCardTitle}</h3>
                  <Button href={contactHref()} variant="link">
                    {headings.faqCardCta}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <JsonLd data={faqJsonLd(faqs)} />
    </div>
  );
}
