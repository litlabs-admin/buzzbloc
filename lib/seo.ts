import type { Metadata } from "next";
import { company, site } from "@/content/site";
import { ui } from "@/content/derived";
import type { Faq } from "@/content/types";

/** Per-page metadata: title, description, canonical, Open Graph and Twitter card. */
export function pageMetadata(path: string, meta: { title: string; description: string }): Metadata {
  const isHome = path === "/";
  const fullTitle = isHome ? meta.title : `${meta.title} | ${site.name}`;
  return {
    title: isHome ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      locale: "en_GB",
      title: fullTitle,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: meta.description,
    },
  };
}

const abs = (path: string) => new URL(path, site.url).toString();

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    slogan: site.tagline,
    areaServed: "GB",
    // Emitted only once the owner supplies them (see content/site.ts).
    ...(company.legalName ? { legalName: company.legalName } : {}),
    ...(company.email ? { email: company.email } : {}),
    ...(company.phone ? { telephone: company.phone } : {}),
    ...(company.social.length ? { sameAs: [...company.social] } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: site.locale,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function serviceJsonLd(args: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: abs(args.path),
    areaServed: "GB",
    provider: { "@id": `${site.url}/#organization` },
  };
}

export function faqJsonLd(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a.replace(/^\*/, "") },
    })),
  };
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.breadcrumbHome, item: abs("/") },
      { "@type": "ListItem", position: 2, name, item: abs(path) },
    ],
  };
}
