import { cn } from "@/lib/cn";

/** Lime pill label (DESIGN.md 4.2). The copy supplies its own capitals. */
export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <p
      className={cn(
        "type-small inline-flex items-center justify-center rounded-full bg-lime px-s4 py-s3 font-medium text-brand-950",
        className,
      )}
    >
      {children}
    </p>
  );
}
