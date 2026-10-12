import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/Button";
import type { Cta } from "@/content/types";

type Card = { label: string; title: string; text: string; cta: Cta; image: StaticImageData };

/** Three image cards under a centred heading (DESIGN.md 4.5, pattern C as a static grid). */
export function ServiceCards({
  id,
  headline,
  cards,
}: {
  id?: string;
  headline: string;
  cards: readonly Card[];
}) {
  return (
    <section id={id} className="py-sec">
      <div className="u-container">
        <h2 className="type-h3 mx-auto max-w-[27ch] text-center">{headline}</h2>
        <ul className="mt-s12 grid gap-s5 md:grid-cols-3">
          {cards.map((card) => (
            <li key={card.cta.href}>
              <article
                data-theme="dark"
                className="group relative flex h-full min-h-[22rem] flex-col justify-between gap-s8 overflow-hidden rounded-sm bg-ash-300 p-s7"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 48rem) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
                <div className="relative">
                  <p className="type-small font-semibold">{card.label}</p>
                  <h3 className="type-h5 mt-s4">{card.title}</h3>
                </div>
                <div className="relative flex flex-col items-start gap-s5">
                  <p className="type-main">{card.text}</p>
                  <Button
                    href={card.cta.href}
                    variant="link"
                    className="static! after:absolute after:inset-0 after:content-['']"
                  >
                    {card.cta.label}
                  </Button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
