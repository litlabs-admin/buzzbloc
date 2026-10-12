"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/**
 * One FAQ entry (DESIGN.md 4.13). Built on <details> so the answer is in the HTML and
 * works without JavaScript; the script only animates the height, as Hatch does.
 */
export function FaqItem({ question, answer, joined }: { question: string; answer: string; joined: boolean }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);

  const onSummaryClick = (event: React.MouseEvent) => {
    const details = detailsRef.current;
    const panel = answerRef.current;
    if (!details || !panel) return;
    event.preventDefault();
    panel.ontransitionend = null;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (details.open) {
      setOpened(false);
      if (reduceMotion) {
        details.open = false;
        return;
      }
      panel.style.height = `${panel.scrollHeight}px`;
      void panel.offsetHeight;
      requestAnimationFrame(() => {
        panel.style.height = "0px";
      });
      panel.ontransitionend = () => {
        details.open = false;
        panel.ontransitionend = null;
      };
      return;
    }

    details.open = true;
    setOpened(true);
    if (reduceMotion) {
      panel.style.height = "auto";
      return;
    }
    panel.style.height = "0px";
    void panel.offsetHeight;
    requestAnimationFrame(() => {
      panel.style.height = `${panel.scrollHeight}px`;
    });
    panel.ontransitionend = () => {
      panel.style.height = "auto";
      panel.ontransitionend = null;
    };
  };

  return (
    <details
      ref={detailsRef}
      // Keeps the chip in step when the browser opens the item itself (find in page).
      onToggle={(event) => {
        if (event.currentTarget.open) {
          setOpened(true);
          if (answerRef.current && !answerRef.current.style.height) answerRef.current.style.height = "auto";
        }
      }}
      className={cn(
        "flex w-full flex-col overflow-clip bg-white p-4 md:p-6 lg:py-8 lg:pl-8 lg:pr-6",
        joined
          ? "border-b border-faq-rule first:rounded-t-md last:rounded-b-md last:border-b-0"
          : "rounded-md",
      )}
    >
      <summary
        onClick={onSummaryClick}
        className="-m-4 flex cursor-pointer list-none items-start justify-between gap-4 p-4 md:-m-6 md:p-6 lg:-my-8 lg:-ml-8 lg:-mr-6 lg:py-8 lg:pl-8 lg:pr-6"
      >
        <h3 className="text-faq font-bold leading-[1.2]">{question}</h3>
        <span
          className={cn(
            "-mt-[0.15em] flex size-8 flex-none items-center justify-center rounded-sm transition-colors duration-[250ms]",
            opened ? "bg-brand-950 text-white" : "bg-faq-chip",
          )}
        >
          <Icon
            name="chevron"
            className={cn("size-full transition-transform duration-[250ms] ease-[ease]", opened && "rotate-180")}
          />
        </span>
      </summary>
      <div ref={answerRef} className="overflow-clip transition-[height] duration-[400ms] ease-hatch">
        <p className="type-main max-w-[70ch] pt-s5">{answer}</p>
      </div>
    </details>
  );
}
