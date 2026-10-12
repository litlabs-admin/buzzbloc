import type { TitledText } from "@/content/types";

/** Three divided columns on a grey panel (DESIGN.md 4.12, pattern K). */
export function PointsPanel({ items }: { items: readonly TitledText[] }) {
  return (
    <div className="rounded-lg bg-surface-grey px-s9 py-s8">
      <ul className="grid gap-s5 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="border-hairline max-lg:border-b max-lg:pb-s5 max-lg:last:border-b-0 max-lg:last:pb-0 lg:border-l lg:pl-s5 lg:text-center lg:first:border-l-0 lg:first:pl-0"
          >
            <h3 className="type-h5">{item.title}</h3>
            <p className="type-main mt-s4">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
