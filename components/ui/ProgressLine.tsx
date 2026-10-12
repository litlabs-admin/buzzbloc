import { cn } from "@/lib/cn";

/**
 * The 5 second timer for auto-advancing sections (see lib/useAutoCycle.ts). It fills from
 * left to right and calls `onDone` when full. Give it a `key` that changes for each item
 * so it restarts. When `animate` is false it is simply a full, static line.
 */
export function ProgressLine({
  animate,
  running,
  onDone,
  className,
}: {
  animate: boolean;
  running: boolean;
  onDone: () => void;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      onAnimationEnd={(event) => {
        // Ignore animations bubbling up from anything else.
        if (event.target === event.currentTarget) onDone();
      }}
      style={animate ? { animationPlayState: running ? "running" : "paused" } : undefined}
      className={cn("block origin-left bg-current", animate && "tab-progress", className)}
    />
  );
}
