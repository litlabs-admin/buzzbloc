"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/content/company";

const { fields, interestOptions, button, privacy, success } = contact.form;

const fieldClass =
  "w-full rounded-sm border border-brand-950/15 bg-white p-s4 text-brand-950 shadow-subtle placeholder:text-slate-600";
const labelClass = "mb-s2 block";

/**
 * Enquiry form (DESIGN.md 4.10). UI only for now: it validates in the browser and then
 * shows the success message from the copy. Nothing is sent anywhere until the owner
 * chooses a destination, at which point onSubmit should post the FormData.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const interestRef = useRef<HTMLSelectElement>(null);

  // Preselect the service a CTA linked from (/contact?interest=websites). Done on the
  // element after mount so the page stays fully static and nothing shifts.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("interest");
    if (interestRef.current && interestOptions.some((option) => option.value === requested)) {
      interestRef.current.value = requested as string;
    }
  }, []);

  if (sent) {
    return (
      <p role="status" className="type-large">
        {success}
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-s7"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-s7 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {fields.name}
          </label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {fields.email}
          </label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-business" className={labelClass}>
            {fields.business}
          </label>
          <input
            id="contact-business"
            name="business"
            type="text"
            autoComplete="organization"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-website" className={labelClass}>
            {fields.website}
          </label>
          <input
            id="contact-website"
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-interest" className={labelClass}>
            {fields.interest}
          </label>
          <select
            id="contact-interest"
            name="interest"
            required
            ref={interestRef}
            defaultValue=""
            className={`${fieldClass} select-caret pr-10`}
          >
            <option value="" disabled />
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-area" className={labelClass}>
            {fields.area}
          </label>
          <input
            id="contact-area"
            name="area"
            type="text"
            autoComplete="postal-code"
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-goal" className={labelClass}>
          {fields.goal}
        </label>
        <textarea id="contact-goal" name="goal" rows={4} required className={fieldClass} />
      </div>

      <div className="flex flex-col gap-s3">
        <button
          type="submit"
          className="min-h-11 w-full cursor-pointer rounded-lg bg-ash-300 px-s6 py-s3 font-semibold text-brand-950 transition-colors duration-300 ease-[ease] hover:bg-ash-200"
        >
          {button}
        </button>
        <p className="type-small text-center text-fg-muted">
          {privacy.before}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-fg">
            {privacy.link}
          </Link>
          {privacy.after}
        </p>
      </div>
    </form>
  );
}
