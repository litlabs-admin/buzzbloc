import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

type Variant = "primary" | "secondary" | "link";

const base =
  "group relative inline-flex items-center font-semibold leading-none sm:whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "min-h-11 w-full justify-center gap-4 rounded-lg border border-btn bg-btn px-6 py-2.5 text-btn-fg transition-all duration-200 hover:border-btn-hover hover:bg-btn-hover active:border-btn-active active:bg-btn-active sm:min-h-0 sm:w-auto",
  secondary:
    "min-h-11 w-full justify-center gap-4 rounded-lg border border-btn2 bg-btn2 px-6 py-2.5 text-btn2-fg transition-all duration-200 hover:border-btn2-hover hover:bg-btn2-hover sm:min-h-0 sm:w-auto",
  link: "gap-2.5 py-1 text-link transition-colors duration-200 hover:text-link-hover",
};

const chip: Record<Variant, string> = {
  primary: "",
  secondary: "",
  link: "bg-link text-link-icon transition-[background-color,transform] group-hover:bg-link-hover",
};

/**
 * Hatch button (DESIGN.md 4.1). Renders a link because every BuzzBloc CTA navigates.
 * The arrow chip slides 8px on hover and keyboard focus.
 */
export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      <span>{children}</span>
      <span
        className={cn(
          "flex h-5 w-6 flex-none items-center justify-center rounded-sm px-1 py-0.5 transition-transform duration-150 ease-[ease] group-hover:translate-x-2 group-focus-visible:translate-x-2",
          chip[variant],
        )}
      >
        <Icon name="arrow" className="h-4 w-4" />
      </span>
    </Link>
  );
}
