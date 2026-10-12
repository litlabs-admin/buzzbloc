import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Lines } from "@/components/ui/Lines";
import { images } from "@/content/images";
import type { Cta } from "@/content/types";

/**
 * Closing call to action (DESIGN.md 4.14, pattern M): dark container, heading and button
 * left, the Hatch monitor image right, bleeding off the bottom edge as on Hatch. Related links and a footnote are optional.
 */
export function ClosingCta({
  headline,
  sub,
  cta,
  related,
  relatedHeading,
  footnote,
}: {
  headline: readonly string[];
  sub?: string;
  cta: Cta;
  related?: readonly Cta[];
  relatedHeading?: string;
  footnote?: string;
}) {
  return (
    <div className="pb-edge pt-edge">
      <section data-theme="dark" className="shape bg-brand-950">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={images.ctaBg} alt="" fill sizes="100vw" className="object-cover" />
          <div className="section-gradient absolute inset-0" />
        </div>

        <div className="u-container grid items-center gap-s12 py-sec lg:grid-cols-[0.87fr_1fr] lg:pb-0 lg:pt-sec-sm">
          <div className="flex flex-col items-start lg:pb-sec">
            <h2 className="type-h3 max-w-[24ch]">
              <Lines lines={headline} />
            </h2>
            {sub ? <p className="type-medium mt-s7 max-w-[50ch]">{sub}</p> : null}
            <div className="mt-s8 w-full">
              <Button href={cta.href}>{cta.label}</Button>
            </div>
            {related?.length ? (
              <div className="mt-s10 w-full border-t border-hairline pt-s6">
                {relatedHeading ? <h3 className="type-large font-bold">{relatedHeading}</h3> : null}
                <ul className="mt-s4 flex flex-wrap gap-x-s8 gap-y-s3">
                  {related.map((link) => (
                    <li key={link.href}>
                      <Button href={link.href} variant="link">
                        {link.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {footnote ? <p className="type-disclaimer mt-s8 max-w-[60ch] text-fg-muted">{footnote}</p> : null}
          </div>

          <div className="hidden self-end lg:block">
            <Image
              src={images.ctaMonitor}
              alt=""
              sizes="(min-width: 62rem) 50vw, 0px"
              className="mt-14 h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
