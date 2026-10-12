import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { legal } from "@/content/derived";
import { pageMetadata } from "@/lib/seo";

const page = legal.pages.cookies;

/** Placeholder until the real policy is supplied, so it is kept out of search indexes. */
export const metadata: Metadata = {
  ...pageMetadata(page.path, { title: page.title, description: legal.placeholderNotice }),
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return <LegalPage title={page.title} />;
}
