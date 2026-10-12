import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import type { OfferCard } from "@/content/types";

/**
 * Priced offer cards (DESIGN.md 7.2, composed from pattern K). Sits in a light textured
 * container. An optional footnote explains any asterisk in the card text.
 */
export function OfferCards({
  id,
  headline,
  headingLevel = "h2",
  cards,
  footnote,
}: {
  id?: string;
  headline?: string;
  /** Use "sr" to keep a heading for assistive technology without showing it. */
  headingLevel?: "h2" | "sr";
  cards: readonly OfferCard[];
  footnote?: string;
}) {
  return (
    <div className="py-edge">
      <section id={id} className="shape texture-light">
        <div className="u-container py-sec">
          {headline ? (
            <h2 className={cn(headingLevel === "sr" ? "sr-only" : "type-h3 mb-s11 max-w-[20ch]")}>{headline}</h2>
          ) : null}
          <ul className="grid gap-s5 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li key={card.name}>
                <article className="flex h-full flex-col items-start rounded-lg bg-white p-s8">
                  <h3 className="type-h6">{card.name}</h3>
                  <p className="type-h4 mt-s5">{card.price}</p>
                  <p className="type-main mt-s4 text-fg-muted">{card.text}</p>
                  {card.cta ? (
                    <div className="mt-auto w-full pt-s8">
                      <Button href={card.cta.href}>{card.cta.label}</Button>
                    </div>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
          {footnote ? <p className="type-disclaimer mt-s5 max-w-[80ch] text-fg-muted">{footnote}</p> : null}
        </div>
      </section>
    </div>
  );
}
