"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/**
 * One FAQ entry (DESIGN.md 4.13). Collapsed by default.
 *  - Pointer devices: the item opens while hovered and closes when the pointer leaves.
 *  - Touch devices: tapping the question toggles it.
 *  - Keyboard: focusing the question opens it; Enter or Space pins it open.
 * The answer is always in the HTML. Opening is a CSS grid-row transition, styled in
 * globals.css under ".faq-item".
 */
export function FaqItem({ question, answer, joined }: { question: string; answer: string; joined: boolean }) {
  const panelId = useId();
  const [pinned, setPinned] = useState(false);

  const onClick = (event: React.MouseEvent) => {
    // On hover-capable devices a mouse click does nothing, so leaving always collapses.
    // event.detail is 0 for keyboard activation, which still toggles.
    const hoverDevice = window.matchMedia("(hover: hover)").matches;
    if (hoverDevice && event.detail > 0) return;
    setPinned((value) => !value);
  };

  return (
    <div
      data-open={pinned}
      onMouseLeave={() => setPinned(false)}
      className={cn(
        "faq-item w-full bg-white",
        joined
          ? "border-b border-faq-rule first:rounded-t-md last:rounded-b-md last:border-b-0"
          : "rounded-md",
      )}
    >
      <h3>
        <button
          type="button"
          aria-expanded={pinned}
          aria-controls={panelId}
          onClick={onClick}
          className="flex w-full cursor-pointer items-start justify-between gap-4 p-4 text-left md:p-6 lg:py-7 lg:pl-8 lg:pr-6"
        >
          <span className="faq-question text-faq font-bold leading-[1.2]">{question}</span>
          <span className="faq-chip -mt-[0.15em] flex size-8 flex-none items-center justify-center rounded-sm">
            <Icon name="chevron" className="size-full" />
          </span>
        </button>
      </h3>
      <div id={panelId} className="faq-answer">
        <div>
          <p className="type-main max-w-[70ch] px-4 pb-4 md:px-6 md:pb-6 lg:pb-7 lg:pl-8 lg:pr-6">{answer}</p>
        </div>
      </div>
    </div>
  );
}
