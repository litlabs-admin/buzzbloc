import type { TitledText } from "@/content/types";

/** Three divided columns on a grey panel (DESIGN.md 4.12, pattern K). */
export function PointsPanel({ items }: { items: readonly TitledText[] }) {
  return (
    <div className="rounded-lg bg-surface-grey px-s9 py-s8">
      <ul className="grid gap-s5 md:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="border-hairline max-md:border-b max-md:pb-s5 max-md:last:border-b-0 max-md:last:pb-0 md:border-l md:pl-s5 md:text-center md:first:border-l-0 md:first:pl-0"
          >
            <h3 className="type-h5">{item.title}</h3>
            <p className="type-main mt-s4">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
