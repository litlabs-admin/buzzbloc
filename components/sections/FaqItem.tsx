"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import type { Faq } from "@/content/types";

/** Short pause before a hovered question opens, so passing over the list does nothing. */
const OPEN_DELAY = 90;
/** Short pause before closing after the pointer leaves the list. */
const CLOSE_DELAY = 160;

/**
 * FAQ list (DESIGN.md 4.13 and 6.10). All items start collapsed and at most one is open.
 *
 * Why the state lives here and not in CSS :hover: when an item opens or closes, the items
 * below it move. With plain :hover that movement puts a different item under a cursor
 * that has not moved, which opens it, which moves things again. So:
 *  - Mouse: only real pointer movement over a question or answer selects that item
 *    (after OPEN_DELAY). Layout moving under a still cursor changes nothing.
 *    Leaving the list closes the open item (after CLOSE_DELAY).
 *  - Touch and pen: a tap opens the item; tapping it again closes it.
 *  - Keyboard: Enter or Space toggles the focused item.
 * Every answer is always in the HTML; opening is a CSS grid-row transition (.faq-item).
 */
export function FaqList({ faqs, joined }: { faqs: readonly Faq[]; joined: boolean }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);
  const timer = useRef<number | undefined>(undefined);
  /** What the running timer will open (an index), close (null), or undefined when idle. */
  const pending = useRef<number | null | undefined>(undefined);
  const lastPointer = useRef<string>("mouse");

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const cancel = () => {
    window.clearTimeout(timer.current);
    pending.current = undefined;
  };

  const request = (target: number | null, delay: number) => {
    if (pending.current === target) return;
    cancel();
    pending.current = target;
    timer.current = window.setTimeout(() => {
      pending.current = undefined;
      setOpen(target);
    }, delay);
  };

  return (
    <div
      className={cn("flex w-full flex-col", !joined && "gap-2")}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") request(null, CLOSE_DELAY);
      }}
    >
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div
            key={faq.q}
            data-open={isOpen}
            onPointerMove={(event) => {
              if (event.pointerType !== "mouse") return;
              if (isOpen) cancel();
              else request(index, OPEN_DELAY);
            }}
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
                aria-expanded={isOpen}
                aria-controls={panelId}
                onPointerDown={(event) => {
                  lastPointer.current = event.pointerType;
                }}
                onClick={(event) => {
                  cancel();
                  // A mouse click opens (hover already does); touch, pen and keyboard toggle.
                  const mouseClick = event.detail > 0 && lastPointer.current === "mouse";
                  setOpen((current) => (mouseClick ? index : current === index ? null : index));
                }}
                className="flex min-h-11 w-full cursor-pointer items-start justify-between gap-4 p-4 text-left md:p-6 lg:py-7 lg:pl-8 lg:pr-6"
              >
                <span className="faq-question text-faq font-bold leading-[1.2]">{faq.q}</span>
                <span className="faq-chip -mt-[0.15em] flex size-8 flex-none items-center justify-center rounded-sm">
                  <Icon name="chevron" className="size-full" />
                </span>
              </button>
            </h3>
            <div id={panelId} className="faq-answer">
              <div>
                <p className="type-main max-w-[70ch] px-4 pb-4 md:px-6 md:pb-6 lg:pb-7 lg:pl-8 lg:pr-6">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
