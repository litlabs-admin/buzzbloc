"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Lines } from "@/components/ui/Lines";
import { ui } from "@/content/derived";
import type { TabItem } from "@/content/types";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCED_MOTION);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

/**
 * Autoplaying tabs (DESIGN.md 4.8). Panels crossfade over 0.6s; the active tab's line
 * fills over 5s and then advances. Autoplay stops on manual selection, while off screen
 * and when reduced motion is requested. All panels are in the HTML.
 *  - "split": text beside a 4:3 image (pattern E)
 *  - "photo": dark panel over a background photo (pattern G)
 */
export function FeatureTabs({
  id,
  headline,
  items,
  variant,
}: {
  id?: string;
  headline: readonly string[];
  items: readonly TabItem[];
  variant: "split" | "photo";
}) {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => true,
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const autoplay = !paused && !reducedMotion;

  const select = (index: number) => {
    setActive(index);
    setPaused(true);
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = items.length - 1;
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % items.length
        : event.key === "ArrowLeft"
          ? (index + last) % items.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    select(next);
    tabs.current[next]?.focus();
  };

  return (
    <div ref={rootRef} id={id} className="u-container py-sec">
      <h2 className="type-h3 max-w-[20ch]">
        <Lines lines={headline} />
      </h2>

      <div className="mt-s11 flex items-start justify-between gap-s6">
        <div
          role="tablist"
          aria-label={headline.join(" ")}
          className="no-scrollbar -mx-margin flex min-w-0 flex-1 gap-s9 overflow-x-auto px-margin lg:mx-0 lg:px-0"
        >
          {items.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                ref={(el) => {
                  tabs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${index}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${index}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  "relative flex flex-none cursor-pointer items-start gap-s4 pb-s6 transition-colors duration-200",
                  selected ? "text-fg" : "text-tab hover:text-tab-hover",
                )}
              >
                <Icon name={item.icon} className="mt-1 size-5 flex-none md:mt-[0.4rem]" />
                <span className="whitespace-nowrap font-semi text-tab-sm font-semibold lg:text-tab">{item.title}</span>
                {selected ? (
                  <span
                    key={autoplay ? "auto" : "manual"}
                    onAnimationEnd={() => setActive((current) => (current + 1) % items.length)}
                    style={{ animationPlayState: inView ? "running" : "paused" }}
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 w-full origin-left bg-current",
                      autoplay && "tab-progress",
                    )}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-pressed={!paused}
          onClick={() => setPaused((value) => !value)}
          className={cn(
            "type-small hidden h-[1.88rem] w-[5.63rem] flex-none cursor-pointer items-center justify-center gap-s3 rounded-sm bg-surface font-semibold transition-colors duration-200 hover:bg-surface-slate",
            !reducedMotion && "lg:flex",
          )}
        >
          <span className="sr-only">{ui.tabsToggle}: </span>
          <Icon name={paused ? "play" : "pause"} className="w-3 flex-none" />
          {paused ? ui.tabsPlay : ui.tabsPause}
        </button>
      </div>

      <div className="grid border-t border-hairline">
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <div
              key={item.title}
              role="tabpanel"
              id={`${baseId}-panel-${index}`}
              aria-labelledby={`${baseId}-tab-${index}`}
              aria-hidden={!selected}
              inert={!selected}
              className={cn(
                "col-start-1 row-start-1 pt-s5 transition-opacity duration-[600ms] ease-out",
                selected ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              {variant === "split" ? (
                <div className="flex flex-col gap-s8 lg:flex-row lg:items-center lg:gap-s11">
                  <div className="flex flex-col items-start lg:w-[46%]">
                    <Icon name={item.icon} className="size-12" />
                    <h3 className="type-h4 mb-s7 mt-s8">{item.title}</h3>
                    <p className="type-medium max-w-[60ch]">{item.text}</p>
                  </div>
                  <div className="relative aspect-[16/9] w-full overflow-clip rounded-lg bg-ash-300 lg:aspect-[4/3] lg:flex-1">
                    <Image
                      src={item.photo}
                      alt=""
                      fill
                      sizes="(min-width: 62rem) 50vw, 100vw"
                      className="object-cover"
                    />
                    <Image
                      src={item.overlay}
                      alt=""
                      fill
                      sizes="(min-width: 62rem) 50vw, 100vw"
                      className="object-contain object-right"
                    />
                  </div>
                </div>
              ) : (
                <div
                  data-theme="dark"
                  className="relative isolate flex flex-col gap-s8 overflow-clip rounded-lg bg-brand-950 px-margin py-s11 lg:flex-row lg:items-center lg:justify-between lg:gap-s11 lg:py-s9"
                >
                  <Image
                    src={item.photo}
                    alt=""
                    fill
                    sizes="100vw"
                    className="-z-20 object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden="true" />
                  <div className="w-full lg:max-w-[27.3rem]">
                    <h3 className="type-h4 mb-s7">{item.title}</h3>
                    <p className="type-medium max-w-[60ch]">{item.text}</p>
                  </div>
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-[18rem] flex-none lg:mx-0 lg:max-w-[22rem]">
                    <Image
                      src={item.overlay}
                      alt=""
                      fill
                      sizes="22rem"
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
