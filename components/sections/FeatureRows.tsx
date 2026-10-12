import type { TitledText } from "@/content/types";

/**
 * Feature rows for the service template (DESIGN.md 7.4): the big-accordion row style
 * with every row open, title left and description right, plus an optional offer note.
 */
export function FeatureRows({
  id,
  heading,
  items,
  note,
}: {
  id?: string;
  heading: string;
  items: readonly TitledText[];
  note?: string;
}) {
  return (
    <div className="py-edge">
      <section id={id} className="shape texture-light">
        <div className="u-container py-sec">
          <h2 className="type-h3">{heading}</h2>
          <ul className="mt-s10">
            {items.map((item) => (
              <li
                key={item.title}
                className="grid gap-s3 border-t border-hairline py-s7 lg:grid-cols-12 lg:items-baseline lg:gap-gutter"
              >
                <h3 className="type-h5 lg:col-span-5">{item.title}</h3>
                <p className="type-medium max-w-[60ch] lg:col-span-7">{item.text}</p>
              </li>
            ))}
          </ul>
          {note ? (
            <p className="type-large mt-s5 rounded-2xl border border-hairline bg-white p-s8">{note}</p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
