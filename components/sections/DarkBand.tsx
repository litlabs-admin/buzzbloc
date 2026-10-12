import { Button } from "@/components/ui/Button";
import { Lines } from "@/components/ui/Lines";
import { DarkShape } from "@/components/sections/DarkShape";
import type { Cta } from "@/content/types";

/** Dark textured band with a heading, one paragraph and a button (DESIGN.md 7.3). */
export function DarkBand({ headline, body, cta }: { headline: readonly string[]; body: string; cta: Cta }) {
  return (
    <DarkShape>
      <div className="u-container flex flex-col items-start py-sec">
        <h2 className="type-h3 max-w-[20ch]">
          <Lines lines={headline} />
        </h2>
        <p className="type-medium mt-s8 max-w-[50ch]">{body}</p>
        <div className="mt-s8 w-full">
          <Button href={cta.href}>{cta.label}</Button>
        </div>
      </div>
    </DarkShape>
  );
}
