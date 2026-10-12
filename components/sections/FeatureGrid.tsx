import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Lines } from "@/components/ui/Lines";

type Card = {
  title: string;
  text: string;
  href: string;
  photo: StaticImageData;
  overlay: StaticImageData;
};

/**
 * Linked service cards (DESIGN.md 7.2): three columns on desktop, two on tablet, stacked
 * on mobile. Never a carousel, so every service stays visible.
 */
export function FeatureGrid({
  headline,
  sub,
  eyebrow,
  linkLabel,
  cards,
}: {
  headline: readonly string[];
  sub: string;
  eyebrow: string;
  linkLabel: string;
  cards: readonly Card[];
}) {
  return (
    <div className="py-edge">
      <section className="shape texture-light">
        <div className="u-container py-sec">
          <h2 className="type-h3 max-w-[20ch]">
            <Lines lines={headline} />
          </h2>
          <p className="type-medium mt-s8 max-w-[50ch]">{sub}</p>

          <ul className="mt-s11 grid gap-s5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li key={card.title}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-white">
                  <div className="relative aspect-[2/1] overflow-hidden bg-ash-300">
                    <Image
                      src={card.photo}
                      alt=""
                      fill
                      sizes="(min-width: 62rem) 33vw, (min-width: 30rem) 50vw, 100vw"
                      className="object-cover"
                    />
                    <Image
                      src={card.overlay}
                      alt=""
                      fill
                      sizes="(min-width: 62rem) 33vw, (min-width: 30rem) 50vw, 100vw"
                      className="object-contain object-right p-s3"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start p-s7">
                    <Eyebrow>{eyebrow}</Eyebrow>
                    <h3 className="type-h6 mt-s5">{card.title}</h3>
                    <p className="type-main mb-s6 mt-s4 text-fg-muted">{card.text}</p>
                    <Button
                      href={card.href}
                      variant="link"
                      className="static! mt-auto after:absolute after:inset-0 after:content-['']"
                    >
                      <span>
                        {linkLabel}
                        <span className="sr-only">: {card.title}</span>
                      </span>
                    </Button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
