"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Lines } from "@/components/ui/Lines";
import { ProgressLine } from "@/components/ui/ProgressLine";
import { Scene } from "@/components/illustrations/Scene";
import { useAutoCycle } from "@/lib/useAutoCycle";
import type { TabItem } from "@/content/types";

/**
 * Auto-advancing tabs (DESIGN.md 4.8 and 6.11). Each tab shows for 5 seconds, then the
 * next one fades in, looping for as long as the section is on screen. Nothing pauses on
 * hover and there is no play or pause control; choosing a tab shows it and the loop
 * carries on from there. Timing logic is in lib/useAutoCycle.ts.
 * Every panel's text is in the HTML. Sized to fit one screen on desktop.
 *  - "split": text beside the illustration on a light panel (pattern E)
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
  const { rootRef, active, select, advance, running, animate, runKey } = useAutoCycle(items.length);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  // Keep the active tab visible when the row is wider than the screen. Only the row
  // scrolls sideways; the page itself never moves.
  useEffect(() => {
    const tab = tabs.current[active];
    const row = tab?.parentElement;
    if (!tab || !row || row.scrollWidth <= row.clientWidth) return;
    row.scrollTo({ left: tab.offsetLeft - (row.clientWidth - tab.clientWidth) / 2, behavior: "smooth" });
  }, [active]);

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
    <div ref={rootRef} id={id} data-running={running} className="u-container py-sec">
      <h2 className="type-h3 max-w-[34ch]">
        <Lines lines={headline} />
      </h2>

      <div
        role="tablist"
        aria-label={headline.join(" ")}
        className="no-scrollbar relative -mx-margin mt-s9 flex gap-s9 overflow-x-auto border-b border-hairline px-margin lg:mx-0 lg:px-0"
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
                "relative flex flex-none cursor-pointer items-start gap-s4 pb-s5 transition-colors duration-200",
                selected ? "text-fg" : "text-tab hover:text-tab-hover",
              )}
            >
              <Icon name={item.icon} className="mt-1 size-5 flex-none" />
              <span className="whitespace-nowrap font-semi text-tab-sm font-semibold">{item.title}</span>
              {selected ? (
                <ProgressLine
                  key={runKey}
                  animate={animate}
                  running={running}
                  onDone={advance}
                  className="absolute bottom-0 left-0 h-0.5 w-full"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="grid pt-s6">
        {items.map((item, index) => {
          const selected = index === active;
          const scene = <Scene key={selected ? runKey : "idle"} spec={item.scene} />;
          return (
            <div
              key={item.title}
              role="tabpanel"
              id={`${baseId}-panel-${index}`}
              aria-labelledby={`${baseId}-tab-${index}`}
              aria-hidden={!selected}
              inert={!selected}
              className={cn(
                "col-start-1 row-start-1 transition-opacity duration-[600ms] ease-out",
                selected ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              {variant === "split" ? (
                <div className="grid items-center gap-s8 lg:grid-cols-[2fr_3fr] lg:gap-s11">
                  <div className="flex flex-col items-start">
                    <Icon name={item.icon} className="size-10" />
                    <h3 className="type-h4 mb-s5 mt-s6">{item.title}</h3>
                    <p className="type-medium max-w-[46ch]">{item.text}</p>
                  </div>
                  <div className="h-[17rem] overflow-clip rounded-lg bg-surface-grey sm:h-[20rem] lg:h-[min(22rem,48svh)]">
                    {scene}
                  </div>
                </div>
              ) : (
                <div
                  data-theme="dark"
                  className="relative isolate grid items-center gap-s8 overflow-clip rounded-lg bg-brand-950 px-margin py-s9 lg:grid-cols-[2fr_3fr] lg:gap-s11 lg:py-0"
                >
                  {item.photo ? (
                    <Image src={item.photo} alt="" fill sizes="100vw" className="-z-20 object-cover" />
                  ) : null}
                  <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />
                  <div>
                    <h3 className="type-h4 mb-s5">{item.title}</h3>
                    <p className="type-medium max-w-[46ch]">{item.text}</p>
                  </div>
                  <div className="h-[17rem] sm:h-[20rem] lg:h-[min(22rem,48svh)]">{scene}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
