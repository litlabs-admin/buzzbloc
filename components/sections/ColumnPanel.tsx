import { cn } from "@/lib/cn";
import { Lines } from "@/components/ui/Lines";
import type { TitledText } from "@/content/types";

const columns: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

/**
 * Bordered column panel (DESIGN.md 4.6, pattern D). Two columns from sm, one row from lg.
 * With `numbered`, each column shows its position, as the service "How it works" steps do.
 */
export function ColumnPanel({
  id,
  headline,
  items,
  numbered = false,
}: {
  id?: string;
  headline: readonly string[];
  items: readonly TitledText[];
  numbered?: boolean;
}) {
  return (
    <section id={id} className="py-sec">
      <div className="u-container">
        <h2 className="type-h3 max-w-[20ch]">
          <Lines lines={headline} />
        </h2>
        <ol
          className={cn(
            "mt-s11 grid gap-y-s10 rounded-2xl border border-hairline py-s9 sm:grid-cols-2",
            columns[items.length] ?? "lg:grid-cols-3",
            !numbered && "list-none",
          )}
        >
          {items.map((item, index) => (
            <li
              key={item.title}
              className="flex flex-col items-center px-s5 text-center lg:border-r lg:border-hairline lg:last:border-r-0"
            >
              {numbered ? (
                <span className="type-h4 mb-s5 text-fg-faded" aria-hidden="true">
                  {index + 1}
                </span>
              ) : null}
              <h3 className="type-h6">{item.title}</h3>
              <p className="type-main mt-s4 max-w-[36ch]">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
