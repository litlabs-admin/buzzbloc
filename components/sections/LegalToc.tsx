"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { ui } from "@/content/derived";

/** Clears the fixed header plus the scroll margin the sections scroll to. */
const ACTIVE_OFFSET = 130;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

/**
 * Sticky "On this page" list with scroll-spy, following the Chapeau reference
 * (components/insights/ArticleToc.tsx): the active section is the last one whose top
 * has passed the offset line, read from element positions so fast scrolls never skip.
 */
export function LegalToc({ items }: { items: readonly { id: string; label: string }[] }) {
  const activeId = useSyncExternalStore(
    subscribe,
    () => {
      let current = "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = item.id;
        else break;
      }
      return current;
    },
    () => "",
  );

  return (
    <nav aria-label={ui.onThisPage} className="hidden md:block">
      <div className="sticky top-28">
        <p className="type-disclaimer font-semibold uppercase tracking-[0.08em] text-fg-muted">{ui.onThisPage}</p>
        <ol className="mt-s5 flex flex-col gap-s3">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "location" : undefined}
                  className={cn(
                    "type-small block border-l-2 pl-s4 transition-colors duration-200",
                    active
                      ? "border-brand-950 font-medium text-fg"
                      : "border-transparent text-fg-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
