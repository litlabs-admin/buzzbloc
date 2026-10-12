import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Lines } from "@/components/ui/Lines";
import { HeroStory } from "@/components/sections/HeroStory";
import { images } from "@/content/images";
import type { HeroContent } from "@/content/types";

/**
 * Page hero (DESIGN.md 4.4, pattern A): dark rounded container, background photo with a
 * 50% overlay, copy left and the CSS story illustration right.
 *
 * From the lg breakpoint the hero is exactly one screen tall (DESIGN.md 6.1): its height
 * is the viewport minus the outer inset, and the headline also scales with viewport
 * height so nothing is cut off on short laptop screens. Below lg it takes its natural height.
 */
export function Hero({
  content,
  variant = "page",
  story = false,
}: {
  content: HeroContent;
  variant?: "home" | "page";
  story?: boolean;
}) {
  return (
    <div className="py-edge">
      <section
        data-theme="dark"
        className="shape bg-brand-950 lg:flex lg:h-[calc(100svh-var(--spacing-edge)*2)] lg:max-h-[56rem] lg:min-h-[35rem] lg:items-center"
      >
        <Image
          src={images.heroBg}
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="u-container pb-sec pt-[calc(var(--spacing-sec)+4rem)] lg:pb-s8 lg:pt-[5.5rem]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-[42px]">
            <div className="flex w-full max-w-[47rem] flex-col items-start gap-s8">
              <div className="flex flex-col items-start gap-s5">
                {content.label ? <Eyebrow>{content.label}</Eyebrow> : null}
                <h1
                  className={
                    variant === "home"
                      ? "type-h2 max-w-[20ch] text-balance lg:text-[min(var(--text-h2),11svh)]"
                      : "type-h3 max-w-[24ch] lg:text-[min(var(--text-h3),9.5svh)]"
                  }
                >
                  <Lines lines={content.headline} />
                </h1>
              </div>
              <p className="type-medium max-w-[50ch]">{content.sub}</p>
              {content.primary || content.secondary ? (
                <div className="flex w-full flex-wrap items-center gap-s7">
                  {content.primary ? <Button href={content.primary.href}>{content.primary.label}</Button> : null}
                  {content.secondary ? (
                    <Button href={content.secondary.href} variant="secondary">
                      {content.secondary.label}
                    </Button>
                  ) : null}
                </div>
              ) : null}
              {content.supporting ? <p className="type-small -mt-s5">{content.supporting}</p> : null}
            </div>

            {story ? <HeroStory /> : null}
          </div>
        </div>
      </section>
    </div>
  );
}
