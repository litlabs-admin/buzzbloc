import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/Button";
import { Lines } from "@/components/ui/Lines";
import type { Cta } from "@/content/types";

/** Image beside a single statement (DESIGN.md 4.9, pattern F). */
export function Statement({
  headline,
  body,
  cta,
  image,
}: {
  headline: readonly string[];
  body: string;
  cta?: Cta;
  image: StaticImageData;
}) {
  return (
    <section className="py-sec">
      <div className="u-container-small">
        <div className="grid items-center gap-s11 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-clip rounded-sm bg-ash-300 sm:aspect-[4/5]">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 30rem) 27rem, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="type-h4">
              <Lines lines={headline} />
            </h2>
            <p className="type-medium mt-s7">{body}</p>
            {cta ? (
              <div className="mt-s8 w-full">
                <Button href={cta.href}>{cta.label}</Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
