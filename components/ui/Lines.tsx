/**
 * Renders a headline whose line breaks are set in the copy. Each line becomes its own
 * line from the md breakpoint up; below that the text flows naturally.
 */
export function Lines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={line} className="md:block">
          {line}
          {i < lines.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
