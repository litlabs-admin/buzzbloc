"use client";

import { useId, useRef } from "react";
import { cn } from "@/lib/cn";
import { Lines } from "@/components/ui/Lines";
import { ProgressLine } from "@/components/ui/ProgressLine";
import { Scene, type SceneSpec } from "@/components/illustrations/Scene";
import { useAutoCycle } from "@/lib/useAutoCycle";
import type { TitledText } from "@/content/types";

/**
 * Steps accordion (DESIGN.md 4.11 and 6.11, pattern I). One step is open at a time.
 * Step one starts when the section scrolls into view; each step shows for 5 seconds
 * (the lime line below it is the timer), then the next opens, looping back to the first.
 * Choosing a step opens it and restarts its 5 seconds. Hover does nothing.
 * Timing logic is in lib/useAutoCycle.ts. Every answer stays in the HTML.
 * Sized to fit one screen on desktop; the illustration is hidden below lg.
 */
export function StepsAccordion({
  headline,
  steps,
  scenes,
}: {
  headline: readonly string[];
  steps: readonly TitledText[];
  scenes: readonly SceneSpec[];
}) {
  const baseId = useId();
  const { rootRef, active, select, advance, running, animate, runKey } = useAutoCycle(steps.length, 0.4);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = steps.length - 1;
    const next =
      event.key === "ArrowDown"
        ? (index + 1) % steps.length
        : event.key === "ArrowUp"
          ? (index + last) % steps.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    buttons.current[next]?.focus();
  };

  return (
    <div ref={rootRef} data-running={running} className="u-container py-sec">
      <h2 className="type-h3 max-w-[34ch]">
        <Lines lines={headline} />
      </h2>

      <div className="mt-s10 grid items-center gap-gutter lg:grid-cols-2">
        <div className="flex flex-col border-t border-hairline">
          {steps.map((step, index) => {
            const open = index === active;
            return (
              <div key={step.title} className="relative border-b border-hairline py-s5">
                {open ? (
                  <ProgressLine
                    key={runKey}
                    animate={animate}
                    running={running}
                    onDone={advance}
                    className="absolute inset-x-0 -bottom-px z-10 h-0.5 text-lime"
                  />
                ) : null}
                <h3>
                  <button
                    ref={(el) => {
                      buttons.current[index] = el;
                    }}
                    type="button"
                    id={`${baseId}-button-${index}`}
                    aria-expanded={open}
                    aria-controls={`${baseId}-panel-${index}`}
                    onClick={() => select(index)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    className="flex w-full cursor-pointer items-start gap-s5 text-left md:gap-s8"
                  >
                    <span className="relative mt-[0.45rem] size-3 flex-none md:size-4" aria-hidden="true">
                      <span className="absolute inset-0 m-auto h-[0.1625rem] w-full bg-current" />
                      <span
                        className={cn(
                          "absolute inset-0 m-auto h-full w-[0.1625rem] bg-current transition-transform duration-300 ease-[ease]",
                          open && "rotate-90",
                        )}
                      />
                    </span>
                    <span
                      className={cn(
                        "type-h5 transition-colors duration-[400ms] ease-[ease]",
                        open ? "text-fg" : "text-fg-faded",
                      )}
                    >
                      {step.title}
                    </span>
                  </button>
                </h3>
                <div
                  id={`${baseId}-panel-${index}`}
                  role="region"
                  aria-labelledby={`${baseId}-button-${index}`}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-[400ms] ease-[ease]",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="type-medium max-w-[52ch] pl-[calc(0.75rem+var(--spacing-s5))] pt-s4 md:pl-[calc(1rem+var(--spacing-s8))]">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden h-[min(21rem,46svh)] lg:block">
          <Scene key={runKey} spec={scenes[active % scenes.length]} />
        </div>
      </div>
    </div>
  );
}
