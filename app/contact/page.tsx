import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Lines } from "@/components/ui/Lines";
import { JsonLd } from "@/components/ui/JsonLd";
import { contact } from "@/content/company";
import { meta } from "@/content/derived";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const path = "/contact";

export const metadata: Metadata = pageMetadata(path, meta[path]);

/** Contact page (DESIGN.md 4.10, pattern H): headline left, form in the dark card right. */
export default function ContactPage() {
  return (
    <>
      <section className="pb-sec pt-page-top">
        <div className="u-container-medium flex flex-col gap-sec-sm lg:flex-row lg:items-start lg:gap-sec">
          <div className="flex w-full flex-col items-start lg:sticky lg:top-28">
            <h1 className="type-h2 max-w-[20ch]">
              <Lines lines={contact.hero.headline} />
            </h1>
            <div className="my-s8 h-px w-full bg-hairline" aria-hidden="true" />
            <p className="type-medium max-w-[50ch]">{contact.hero.sub}</p>
          </div>
          <div data-theme="dark" className="w-full rounded-lg bg-brand-950 p-s8 lg:max-w-[34rem] lg:flex-none">
            <ContactForm />
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumbJsonLd(meta[path].title, path)} />
    </>
  );
}
