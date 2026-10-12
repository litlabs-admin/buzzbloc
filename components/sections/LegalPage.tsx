import { Eyebrow } from "@/components/ui/Eyebrow";
import { LegalToc } from "@/components/sections/LegalToc";
import { legal } from "@/content/derived";

/**
 * Legal page layout (DESIGN.md 6.6), following the Chapeau policy page: centred intro,
 * then a sticky section list beside the document. The body is a labelled placeholder;
 * no policy wording is invented.
 */
export function LegalPage({ title }: { title: string }) {
  const sections = legal.sections.map((label, index) => ({
    id: `section-${index + 1}`,
    number: String(index + 1).padStart(2, "0"),
    label,
  }));

  return (
    <>
      <section className="pt-page-top">
        <div className="u-container flex flex-col items-center text-center">
          <Eyebrow>{legal.eyebrow}</Eyebrow>
          <h1 className="type-h2 mt-s5 max-w-[20ch]">{title}</h1>
          <p className="type-medium mt-s7 max-w-[50ch] rounded-lg border border-hairline bg-white p-s5">
            {legal.placeholderNotice}
          </p>
        </div>
      </section>

      <section className="py-sec">
        <div className="u-container">
          <div className="mx-auto grid max-w-[64rem] gap-s11 md:grid-cols-[220px_1fr]">
            <LegalToc items={sections.map(({ id, number, label }) => ({ id, label: `${number}. ${label}` }))} />
            <div className="min-w-0">
              {sections.map((section, index) => (
                <article
                  key={section.id}
                  id={section.id}
                  className={index > 0 ? "mt-s11 scroll-mt-28 border-t border-hairline pt-s11" : "scroll-mt-28"}
                >
                  <p className="type-small font-semibold text-brand-600">{section.number}</p>
                  <h2 className="type-h5 mt-s3">{section.label}</h2>
                  <p className="type-main mt-s5 max-w-[70ch] text-fg-muted">{legal.sectionBody}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
