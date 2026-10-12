import { Icon } from "@/components/ui/Icon";
import { contact } from "@/content/company";
import { outcome } from "@/content/home";
import { whatTheyGet } from "@/content/get-leads";

const { fields, interestOptions, button } = contact.form;
const steps = outcome.points.map((point) => point.title);
const bookedTitle = whatTheyGet.items[2].title;
const BOOKED_CELL = 7;

/**
 * Hero illustration built in CSS (no images). It loops through the story the copy asks
 * for: a website, an incoming enquiry and a calendar booking. Every word shown comes
 * from the copy (contact form labels, the three outcome points, "Booked into your
 * calendar"), and no figures or names are shown.
 *
 * Motion lives in globals.css under ".story". The loop never pauses; hovering only lifts the
 * card under the pointer. With reduced motion the finished state is shown without animation.
 * Decorative, so hidden from assistive technology.
 */
export function HeroStory() {
  return (
    <div
      aria-hidden="true"
      data-theme="light"
      className="story relative hidden aspect-square h-[min(32rem,62svh)] flex-none select-none lg:block"
    >
      {/* 1. The website */}
      <div className="story-site absolute left-[6%] top-0 w-[66%]">
        <div className="story-card rounded-3xl bg-slate-50 p-s5 shadow-widget">
          <div className="flex items-center gap-s2">
            <span className="size-2 rounded-full bg-grey-300" />
            <span className="size-2 rounded-full bg-grey-300" />
            <span className="size-2 rounded-full bg-grey-300" />
            <span className="ml-s3 h-2 flex-1 rounded-full bg-grey-200" />
          </div>
          <div className="mt-s4 flex flex-col gap-s2">
            <span className="h-3 w-[70%] rounded-full bg-brand-950" />
            <span className="h-3 w-[45%] rounded-full bg-brand-950" />
          </div>
          <div className="mt-s4 flex flex-col gap-s3">
            {[fields.name, fields.email].map((label, index) => (
              <div key={label}>
                <p className="type-disclaimer text-fg-muted">{label}</p>
                <div className="story-field mt-s1 flex h-7 items-center rounded-sm border border-hairline bg-white px-s3">
                  <span
                    className={`story-typed h-1.5 origin-left rounded-full bg-ash-300 ${index === 0 ? "w-[45%]" : "story-typed-2 w-[65%]"}`}
                  />
                </div>
              </div>
            ))}
            <div className="relative">
              <div className="story-press type-disclaimer flex h-8 items-center justify-center gap-s3 rounded-lg bg-brand-950 font-semibold text-white">
                {button}
                <Icon name="arrow" className="size-3" />
              </div>
              <svg
                viewBox="0 0 16 16"
                className="story-cursor absolute left-[62%] top-[45%] size-5 drop-shadow"
              >
                <path d="M2 1.5 13 7.2 8.3 8.4 6.9 13.2Z" fill="#fff" stroke="#0f281b" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The enquiry arrives */}
      <div className="story-enquiry absolute right-0 top-[44%] w-[52%]">
        <div className="story-card rounded-2xl bg-white p-s5 shadow-widget">
          <div className="flex items-start gap-s3">
            <span className="relative flex size-8 flex-none items-center justify-center rounded-sm bg-brand-950 p-s3 text-white">
              <Icon name="paper" className="size-full" />
              <span className="story-ping absolute -right-1 -top-1 size-2.5 rounded-full bg-lime" />
            </span>
            <p className="type-small font-semibold leading-tight">{fields.interest}</p>
          </div>
          <div className="mt-s4 flex flex-wrap gap-s2">
            {interestOptions.slice(0, 3).map((option, index) => (
              <span
                key={option.value}
                className={
                  index === 2
                    ? "story-chip type-disclaimer rounded-full bg-lime px-s3 py-s1 font-medium"
                    : "type-disclaimer rounded-full bg-slate-100 px-s3 py-s1"
                }
              >
                {option.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. The booking */}
      <div className="story-calendar absolute bottom-[9%] left-0 w-[46%]">
        <div data-theme="dark" className="story-card rounded-2xl bg-brand-950 p-s5 shadow-widget">
          <p className="type-small font-semibold leading-tight">{bookedTitle}</p>
          <div className="mt-s4 grid grid-cols-5 gap-s2">
            {Array.from({ length: 10 }, (_, index) =>
              index === BOOKED_CELL ? (
                <span
                  key={index}
                  className="story-slot flex h-6 items-center justify-center rounded-xs bg-lime text-brand-950"
                >
                  <svg viewBox="0 0 16 16" className="story-tick size-3.5">
                    <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              ) : (
                <span key={index} className="h-6 rounded-xs bg-brand-800" />
              ),
            )}
          </div>
        </div>
      </div>

      {/* Story steps with progress */}
      <ol data-theme="dark" className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-s3">
        {steps.map((step, index) => (
          <li key={step} className={`story-step story-step-${index + 1}`}>
            <span className="block h-0.5 overflow-hidden rounded-full bg-white/25">
              <span className="story-bar block h-full w-full origin-left bg-lime" />
            </span>
            <span className="type-disclaimer mt-s2 block font-semibold">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
