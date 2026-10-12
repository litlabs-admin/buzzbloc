"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCED_MOTION);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

/**
 * Shared logic for sections that step through items on a timer (tabs, steps).
 *
 * How the loop works, so it stays predictable:
 *  - The timer is a CSS animation on a progress line (see ProgressLine). When that
 *    animation ends, `advance` moves to the next item. There is no separate JS timer,
 *    so the line on screen and the moment of change can never drift apart.
 *  - `running` is true only while the section is on screen. The line is paused while it
 *    is false, which means the first item starts when the visitor reaches the section,
 *    and scrolling away and back resumes from the same point.
 *  - `runKey` changes on every advance and every manual selection. It is used as a React
 *    key so the line and the illustration restart from zero each time.
 *  - Hover does nothing. Selecting an item by hand shows it and restarts its 5 seconds.
 *  - With reduced motion `animate` is false: nothing advances on its own.
 */
export function useAutoCycle(count: number, threshold = 0.3) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0);
  const [running, setRunning] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => true,
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting), { threshold });
    observer.observe(root);
    return () => observer.disconnect();
  }, [threshold]);

  const select = useCallback((index: number) => {
    setActive(index);
    setRun((value) => value + 1);
  }, []);

  const advance = useCallback(() => {
    setActive((current) => (current + 1) % count);
    setRun((value) => value + 1);
  }, [count]);

  return {
    rootRef,
    active,
    select,
    advance,
    /** Section is on screen. */
    running,
    /** Auto-advance is allowed (false under reduced motion). */
    animate: !reducedMotion,
    /** Unique per showing of an item; use as a React key to restart animations. */
    runKey: `${active}-${run}`,
  };
}
