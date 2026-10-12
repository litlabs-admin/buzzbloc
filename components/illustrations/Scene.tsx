import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { contact } from "@/content/company";
import { sceneLabels } from "@/content/derived";
import { primaryLinks } from "@/content/site";

/**
 * Small illustrations drawn with HTML and CSS only (DESIGN.md 6.11). Each scene plays
 * once when it mounts; the tabs and steps components remount the active scene every
 * 5 seconds, which makes the section loop.
 *
 * The words inside a scene come from the copy document. Defaults are in
 * content/derived.ts (sceneLabels); an item can pass its own `labels`. Scenes never
 * show figures, names or results.
 *
 * Animation classes (sc-*) live in globals.css. `d(seconds)` sets a start delay.
 * A parent with data-running="false" holds every scene on its first frame.
 */
export type SceneName =
  | "browser"
  | "phone"
  | "pages"
  | "form"
  | "search"
  | "pipeline"
  | "messages"
  | "calendar"
  | "checklist"
  | "ad";

/** A scene on its own, or a scene with the words it should show. */
export type SceneSpec = SceneName | { name: SceneName; labels: readonly string[] };

const d = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;
const label = "type-disclaimer font-semibold leading-tight";

function Bar({ className, style }: { className?: string; style?: CSSProperties }) {
  return <span style={style} className={cn("block h-2 rounded-full bg-grey-200", className)} />;
}

function Card({
  className,
  children,
  ...rest
}: { className?: string; children: ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className={cn("rounded-2xl bg-white p-s5 text-brand-950 shadow-widget", className)}>
      {children}
    </div>
  );
}

function Tick({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 16 16" style={style} className={cn("size-3.5 flex-none", className)}>
      <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cursor({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 16 16" style={style} className={cn("size-5 drop-shadow", className)}>
      <path d="M2 1.5 13 7.2 8.3 8.4 6.9 13.2Z" fill="#fff" stroke="#0f281b" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

/** Browser bar with the site's own navigation labels. */
function SiteBar() {
  return (
    <div className="flex items-center gap-s4">
      <span className="font-condensed text-small font-bold leading-none">BuzzBloc</span>
      <span className="flex flex-1 items-center justify-end gap-s4">
        {primaryLinks.map((link) => (
          <span key={link.href} className="type-disclaimer text-fg-muted">
            {link.label}
          </span>
        ))}
      </span>
    </div>
  );
}

function Pill({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <span
      style={style}
      className={cn("inline-flex h-7 items-center gap-s3 rounded-lg px-s4", label, className)}
    >
      {children}
    </span>
  );
}

const scenes: Record<SceneName, (labels: readonly string[]) => ReactNode> = {
  /** A website page: navigation, headline and enquiry button. Labels: [headline, button]. */
  browser: ([headline, button]) => (
    <Card data-theme="light" className="sc-in w-[86%] bg-slate-50">
      <SiteBar />
      <div className="mt-s5 grid grid-cols-[1.3fr_1fr] items-center gap-s5">
        <div className="flex flex-col items-start gap-s3">
          <p className="sc-in type-h6" style={d(0.3)}>
            {headline}
          </p>
          <Bar className="sc-in w-[80%]" style={d(0.8)} />
          <Pill className="sc-pop mt-s2 bg-lime" style={d(1.8)}>
            {button}
            <Icon name="arrow" className="size-3" />
          </Pill>
        </div>
        <span className="sc-in h-28 rounded-lg bg-ash-200" style={d(1)} />
      </div>
    </Card>
  ),

  /** The same page on a phone, in front of the wide layout. Labels: [headline, button]. */
  phone: ([headline, button]) => (
    <div data-theme="light" className="relative flex h-full w-full items-center justify-center">
      <Card className="sc-in absolute left-[5%] top-[16%] w-[60%] bg-slate-50 opacity-80">
        <SiteBar />
        <span className="mt-s4 block h-20 rounded-lg bg-slate-100" />
      </Card>
      <div
        className="sc-in relative ml-[40%] flex h-[90%] w-[10.5rem] flex-col gap-s3 rounded-[1.5rem] border-4 border-brand-950 bg-white p-s3 text-brand-950 shadow-widget"
        style={d(0.3)}
      >
        <span className="mx-auto h-1.5 w-10 rounded-full bg-brand-950" />
        <span className="sc-in h-12 flex-none rounded-lg bg-ash-200" style={d(0.7)} />
        <p className="sc-in font-semi text-main font-bold leading-[1.1] tracking-[-0.02em]" style={d(1)}>
          {headline}
        </p>
        <Bar className="sc-in w-[70%]" style={d(1.3)} />
        <Pill className="sc-pop mt-auto justify-center bg-lime" style={d(1.9)}>
          {button}
        </Pill>
      </div>
    </div>
  ),

  /** A set of service pages, one brought to the front. Labels: [left, right, front]. */
  pages: ([left, right, front]) => (
    <div data-theme="light" className="relative h-[84%] w-[84%]">
      {[
        { title: left, pos: "left-0 top-[8%] -rotate-6", delay: 0.2 },
        { title: right, pos: "right-0 top-[8%] rotate-6", delay: 0.5 },
      ].map((page) => (
        <Card key={page.pos} className={cn("sc-in absolute w-[50%] bg-slate-50", page.pos)} style={d(page.delay)}>
          <p className="type-small font-semibold text-fg-muted">{page.title}</p>
          <span className="mt-s3 block h-14 rounded-sm bg-slate-100" />
          <Bar className="mt-s3 w-[85%]" />
        </Card>
      ))}
      <Card className="sc-pop absolute left-1/2 top-[20%] w-[54%] -translate-x-1/2" style={d(1)}>
        <p className="type-h6">{front}</p>
        <span className="mt-s3 block h-14 rounded-sm bg-ash-200" />
        <Bar className="sc-in mt-s3 w-[90%]" style={d(1.6)} />
        <Bar className="sc-in mt-s2 w-[60%]" style={d(1.8)} />
        <span className="sc-pop mt-s4 flex h-6 w-10 items-center justify-center rounded-lg bg-lime" style={d(2.3)}>
          <Icon name="arrow" className="size-3.5" />
        </span>
      </Card>
    </div>
  ),

  /** The contact form is filled in, sent and confirmed. Uses the contact page copy. */
  form: () => (
    <Card data-theme="light" className="sc-in relative w-[68%] bg-slate-50">
      {[
        { text: contact.form.fields.name, delay: 0.4 },
        { text: contact.form.fields.email, delay: 1.1 },
      ].map((field) => (
        <div key={field.text} className="mb-s4">
          <p className="type-disclaimer text-fg-muted">{field.text}</p>
          <div className="mt-s1 flex h-8 items-center rounded-sm border border-hairline bg-white px-s3">
            <Bar className="sc-grow-x w-[60%] bg-ash-300" style={d(field.delay)} />
          </div>
        </div>
      ))}
      <div className="relative">
        <Pill className="sc-press w-full justify-center bg-brand-950 text-white" style={d(2.4)}>
          {contact.form.button}
          <Icon name="arrow" className="size-3" />
        </Pill>
        <Cursor className="sc-cursor absolute left-[62%] top-[40%]" style={d(1.8)} />
      </div>
      <Pill className="sc-pop absolute -right-6 -top-4 h-9 bg-lime shadow-widget" style={d(2.9)}>
        <Tick />
        {sceneLabels.formSent}
      </Pill>
    </Card>
  ),

  /** A search and its results, the first picked out. Labels: [query, result, result, result]. */
  search: ([query, ...results]) => (
    <Card data-theme="light" className="sc-in w-[78%] bg-slate-50">
      <div className="flex h-9 items-center gap-s3 rounded-full border border-hairline bg-white px-s4">
        <Icon name="cross-hair" className="size-4 flex-none" />
        <span className="sc-type type-small font-semibold">{query}</span>
      </div>
      <div className="mt-s4 flex flex-col gap-s3">
        {results.slice(0, 3).map((result, index) => (
          <div
            key={result}
            className={cn("sc-in rounded-lg bg-white p-s4", index === 0 && "sc-outline")}
            style={d(1.2 + index * 0.25)}
          >
            <p className={cn(label, index > 0 && "text-fg-muted")}>{result}</p>
            <Bar className="mt-s2 w-[85%]" />
          </div>
        ))}
      </div>
    </Card>
  ),

  /** An enquiry moves across the pipeline. Labels: [stage, stage, stage]. */
  pipeline: (stages) => (
    <div data-theme="light" className="relative w-[92%] text-brand-950">
      <div className="sc-in grid grid-cols-3 gap-s3">
        {stages.slice(0, 3).map((stage, column) => (
          <div key={stage} className="flex h-48 flex-col gap-s3 rounded-xl bg-white/95 p-s3 shadow-widget">
            <p className={label}>{stage}</p>
            <span className="h-8 rounded-sm bg-slate-100" />
            {column < 2 ? <span className="h-8 rounded-sm bg-slate-100" /> : null}
          </div>
        ))}
      </div>
      <div className="sc-travel absolute bottom-s3 left-0 w-1/3 px-s3" style={d(0.6)}>
        <div className="flex h-9 items-center gap-s3 rounded-sm bg-brand-950 px-s3 shadow-widget">
          <span className="sc-pulse size-2 flex-none rounded-full bg-lime" />
          <Bar className="w-full bg-brand-800" />
        </div>
      </div>
    </div>
  ),

  /** Follow-up messages ending in a confirmation. Labels: [message, message, message, confirmation]. */
  messages: ([first, second, third, done]) => (
    <div data-theme="light" className="flex w-[74%] flex-col gap-s3 text-brand-950">
      <Card className="sc-in w-[70%] self-start rounded-bl-xs" style={d(0.2)}>
        <p className={label}>{first}</p>
        <Bar className="mt-s2 w-[70%]" />
      </Card>
      <div className="sc-in w-[64%] self-end rounded-2xl rounded-br-xs bg-brand-950 p-s5 text-white shadow-widget" style={d(1.1)}>
        <p className={label}>{second}</p>
        <Bar className="mt-s2 w-[60%] bg-brand-800" />
      </div>
      <Card className="sc-in w-[58%] self-start rounded-bl-xs" style={d(2)}>
        <p className={label}>{third}</p>
      </Card>
      <Pill className="sc-pop h-9 self-end rounded-full bg-lime shadow-widget" style={d(2.9)}>
        <Tick />
        {done}
      </Pill>
    </div>
  ),

  /** A slot in the diary is taken. Labels: [title, note]. */
  calendar: ([title, note]) => (
    <div className="sc-in w-[72%] rounded-2xl bg-brand-950 p-s6 text-white shadow-widget ring-1 ring-white/15">
      <div className="flex items-center justify-between gap-s4">
        <p className="type-small font-semibold leading-tight">{title}</p>
        <span className="sc-pulse size-2.5 flex-none rounded-full bg-lime" />
      </div>
      <div className="mt-s5 grid grid-cols-5 gap-s2">
        {Array.from({ length: 10 }, (_, index) =>
          index === 7 ? (
            <span key={index} className="sc-lime flex h-8 items-center justify-center rounded-sm text-brand-950" style={d(1.4)}>
              <Tick className="sc-pop" style={d(1.8)} />
            </span>
          ) : (
            <span key={index} className="sc-in h-8 rounded-sm bg-brand-800" style={d(0.2 + index * 0.05)} />
          ),
        )}
      </div>
      {note ? (
        <p className="sc-in type-disclaimer mt-s5 flex items-center gap-s3 text-ash-200" style={d(2.3)}>
          <Tick className="text-lime" />
          {note}
        </p>
      ) : null}
    </div>
  ),

  /** Items are checked off one by one. Labels: [title, item, item, ...]; the title may be empty. */
  checklist: ([title, ...items]) => (
    <Card data-theme="light" className="sc-in w-[70%] bg-slate-50">
      {title ? <p className="type-h6 mb-s5">{title}</p> : null}
      <ul className="flex flex-col gap-s4">
        {items.slice(0, 4).map((item, index) => (
          <li key={item} className="flex items-center gap-s4">
            <span className="sc-lime flex size-6 flex-none items-center justify-center rounded-full" style={d(0.6 + index * 0.7)}>
              <Tick className="sc-pop" style={d(0.8 + index * 0.7)} />
            </span>
            <span className="type-small font-semibold leading-tight">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  ),

  /** An advert whose button gets clicked. Labels: [headline, button]. */
  ad: ([headline, button]) => (
    <Card data-theme="light" className="sc-in relative w-[60%]">
      <div className="flex items-center gap-s3">
        <span className="flex size-8 flex-none items-center justify-center rounded-full bg-brand-950 font-condensed text-small font-bold text-white">
          B
        </span>
        <div className="flex flex-1 flex-col gap-s2">
          <span className={label}>BuzzBloc</span>
          <Bar className="w-[30%]" />
        </div>
      </div>
      <div className="sc-in relative mt-s4 flex h-28 items-end overflow-hidden rounded-lg bg-ash-200 p-s4" style={d(0.5)}>
        <span className="absolute -right-6 -top-6 size-24 rounded-full bg-ash-300" />
        <p className="sc-in relative font-semi text-large font-bold leading-[1.1] tracking-[-0.02em]" style={d(0.9)}>
          {headline}
        </p>
      </div>
      <div className="relative mt-s4 flex items-center justify-between gap-s4">
        <Bar className="w-[35%]" />
        <Pill className="sc-press bg-lime" style={d(2.4)}>
          {button}
          <Icon name="arrow" className="size-3" />
        </Pill>
        <Cursor className="sc-cursor absolute right-[8%] top-[45%]" style={d(1.8)} />
      </div>
      <span className="sc-pop absolute -right-3 -top-3 flex size-9 items-center justify-center rounded-full bg-brand-950 text-lime shadow-widget" style={d(2.9)}>
        <Tick className="size-4" />
      </span>
    </Card>
  ),
};

export function Scene({ spec, className }: { spec: SceneSpec; className?: string }) {
  const name = typeof spec === "string" ? spec : spec.name;
  const labels = typeof spec === "string" ? sceneLabels.defaults[name] : spec.labels;
  return (
    <div aria-hidden="true" className={cn("flex h-full w-full select-none items-center justify-center", className)}>
      {scenes[name](labels)}
    </div>
  );
}
