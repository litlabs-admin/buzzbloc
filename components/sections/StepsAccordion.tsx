"use client";

import Image, { type StaticImageData } from "next/image";
import { useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Lines } from "@/components/ui/Lines";
import type { TitledText } from "@/content/types";

/**
 * Big accordion (DESIGN.md 4.11, pattern I). One step open at a time, the first open on
 * load. Every answer stays in the HTML; closed answers collapse with a grid-row
 * transition. The visual on the right crossfades to the active step.
 */
export function StepsAccordion({
  headline,
  steps,
  visuals,
}: {
  headline: readonly string[];
  steps: readonly TitledText[];
  visuals: readonly StaticImageData[];
}) {
  const baseId = useId();
  const [active, setActive] = useState(0);
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
    <div className="u-container py-sec">
      <h2 className="type-h3 max-w-[20ch]">
        <Lines lines={headline} />
      </h2>

      <div className="mt-s12 grid items-start gap-gutter lg:grid-cols-2">
        <div className="flex flex-col gap-s8">
          {steps.map((step, index) => {
            const open = index === active;
            return (
              <div key={step.title} className="border-t border-hairline pt-s5">
                <h3>
                  <button
                    ref={(el) => {
                      buttons.current[index] = el;
                    }}
                    type="button"
                    id={`${baseId}-button-${index}`}
                    aria-expanded={open}
                    aria-controls={`${baseId}-panel-${index}`}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    className="flex w-full cursor-pointer items-start gap-3 text-left md:gap-16"
                  >
                    <span className="relative mt-[0.4rem] size-3 flex-none md:mt-2.5 md:size-[1.125rem]" aria-hidden="true">
                      <span className="absolute inset-0 m-auto h-[0.1625rem] w-full bg-current md:h-1" />
                      <span
                        className={cn(
                          "absolute inset-0 m-auto h-full w-[0.1625rem] bg-current transition-transform duration-300 ease-[ease] md:w-1",
                          open && "rotate-90",
                        )}
                      />
                    </span>
                    <span
                      className={cn(
                        "type-h4 transition-colors duration-[400ms] ease-[ease]",
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
                    <p className="type-main max-w-[60ch] pb-s2 pl-[1.7rem] pt-s7 md:pl-[5.4rem]">{step.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative hidden aspect-[16/10] lg:block" aria-hidden="true">
          {visuals.slice(0, steps.length).map((visual, index) => (
            <Image
              key={index}
              src={visual}
              alt=""
              fill
              sizes="(min-width: 62rem) 45vw, 0px"
              className={cn(
                "object-contain transition-opacity duration-[250ms] ease-[ease]",
                index === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
