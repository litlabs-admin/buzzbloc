import Image from "next/image";
import { cn } from "@/lib/cn";
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
 * With the story illustration, from the nav breakpoint (1120px) the hero is exactly one
 * screen tall (DESIGN.md 6.1): its height is the viewport minus the outer inset, and the
 * headline also scales with viewport height. Below that, and on heroes without the
 * illustration, it takes its natural height and the illustration sits under the text.
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
        className={cn(
          "shape bg-brand-950",
          story &&
            "nav:flex nav:h-[calc(100svh-var(--spacing-edge)*2)] nav:max-h-[56rem] nav:min-h-[35rem] nav:items-center",
        )}
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

        <div className={cn("u-container pb-sec pt-[calc(var(--spacing-sec)+4rem)]", story && "nav:pb-s8 nav:pt-[5.5rem]")}>
          <div className="flex flex-col gap-s10 nav:flex-row nav:items-center nav:justify-between nav:gap-[42px]">
            <div className="flex w-full max-w-[47rem] flex-col items-start gap-s8">
              <div className="flex flex-col items-start gap-s5">
                {content.label ? <Eyebrow>{content.label}</Eyebrow> : null}
                <h1
                  className={
                    variant === "home"
                      ? "type-h2 max-w-[20ch] text-balance nav:text-[min(var(--text-h2),11svh)]"
                      : "type-h3 max-w-[24ch] nav:text-[min(var(--text-h3),9.5svh)]"
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
              {content.supporting ? <p className="type-small -mt-s3 sm:-mt-s5">{content.supporting}</p> : null}
            </div>

            {story ? <HeroStory /> : null}
          </div>
        </div>
      </section>
    </div>
  );
}
