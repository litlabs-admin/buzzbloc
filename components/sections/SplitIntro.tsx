import type { ReactNode } from "react";
import { Lines } from "@/components/ui/Lines";

/**
 * Heading with supporting paragraphs (DESIGN.md 4.7, pattern E header). Children render
 * below the text inside the same section, for example a PointsPanel.
 */
export function SplitIntro({
  id,
  headline,
  body,
  children,
}: {
  id?: string;
  headline: readonly string[];
  body: readonly string[];
  children?: ReactNode;
}) {
  return (
    <section id={id} className="py-sec">
      <div className="u-container">
        <div className="grid gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="type-h3 max-w-[20ch]">
              <Lines lines={headline} />
            </h2>
            <div className="type-medium mt-s8 flex max-w-[50ch] flex-col gap-s4 lg:mt-s10">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        {children ? <div className="mt-s10">{children}</div> : null}
      </div>
    </section>
  );
}
