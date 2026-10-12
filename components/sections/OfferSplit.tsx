import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Lines } from "@/components/ui/Lines";
import type { Cta } from "@/content/types";

/**
 * Text left, dark card right (DESIGN.md 4.10, pattern H). The card can hold a checklist,
 * a highlighted offer line, the button and a supporting line.
 */
export function OfferSplit({
  id,
  headline,
  body,
  listTitle,
  list,
  offerLine,
  cta,
  supporting,
  footnote,
}: {
  id?: string;
  headline: readonly string[];
  body?: string;
  listTitle?: string;
  list?: readonly string[];
  offerLine?: string;
  cta: Cta;
  supporting?: string;
  footnote?: string;
}) {
  return (
    <section id={id} className="py-sec">
      <div className="u-container-medium flex flex-col gap-sec-sm lg:flex-row lg:items-center lg:gap-sec">
        <div className="flex w-full flex-col items-start">
          <h2 className="type-h3 max-w-[20ch]">
            <Lines lines={headline} />
          </h2>
          {body ? (
            <>
              <div className="my-s8 h-px w-full bg-hairline" aria-hidden="true" />
              <p className="type-medium max-w-[50ch]">{body}</p>
            </>
          ) : null}
          {footnote ? <p className="type-disclaimer mt-s7 max-w-[60ch] text-fg-muted">{footnote}</p> : null}
        </div>

        <div
          data-theme="dark"
          className="flex w-full flex-col gap-s7 rounded-lg bg-brand-950 p-s8 lg:max-w-[26rem] lg:flex-none"
        >
          {list ? (
            <div>
              {listTitle ? <h3 className="type-h6 mb-s5">{listTitle}</h3> : null}
              <ul className="flex flex-col gap-s4">
                {list.map((item) => (
                  <li key={item} className="type-main flex items-start gap-s4">
                    <Icon name="circle-tick" className="mt-0.5 size-5 flex-none text-ash-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {offerLine ? <p className="type-h6">{offerLine}</p> : null}
          <Button href={cta.href} className="sm:w-full!">
            {cta.label}
          </Button>
          {supporting ? <p className="type-small text-center text-fg-muted">{supporting}</p> : null}
        </div>
      </div>
    </section>
  );
}
