import type { IconName } from "@/components/ui/Icon";

/** Copy source: "Shared navigation and footer" in the copy document. */

export const site = {
  name: "BuzzBloc",
  url: "https://www.buzzbloc.agency",
  tagline: "We bring you business. You get on with running it.",
  locale: "en-GB",
} as const;

/**
 * Company details are not supplied yet. Leave a value as null until the owner
 * provides it: null fields are never rendered or emitted in structured data.
 */
export const company: {
  legalName: string | null;
  email: string | null;
  phone: string | null;
  addressLines: readonly string[] | null;
  social: readonly string[];
} = {
  legalName: null,
  email: null,
  phone: null,
  addressLines: null,
  social: [],
};

/** Every enquiry CTA goes to the contact page and carries the service of interest. */
export function contactHref(interest?: "websites" | "social-media" | "get-leads" | "marketing" | "other") {
  return interest ? `/contact?interest=${interest}` : "/contact";
}

export const primaryLinks = [
  { label: "Websites", href: "/websites" },
  { label: "Social Media", href: "/social-media-management" },
  { label: "Get Leads", href: "/get-leads" },
] as const;

export const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
] as const;

export const navButton = { label: "Let's Talk", href: contactHref() } as const;

export const servicesDropdown: readonly {
  label: string;
  description: string;
  href: string;
  icon: IconName;
}[] = [
  { label: "Marketing Team", description: "One team to manage your marketing", href: "/marketing", icon: "market" },
  { label: "Google Ads", description: "Reach people searching for your services", href: "/google-ads", icon: "cross-hair" },
  { label: "Meta Ads", description: "Generate enquiries on Facebook and Instagram", href: "/meta-ads", icon: "scale-up" },
  { label: "SEO", description: "Make your business easier to find locally", href: "/seo", icon: "double-tick" },
  { label: "CRM and Follow Up", description: "Keep opportunities organised", href: "/crm-follow-up", icon: "paper" },
  { label: "Review Management", description: "Make customer feedback easier to collect", href: "/review-management", icon: "circle-tick" },
  { label: "Database Reactivation", description: "Reconnect with past enquiries", href: "/database-reactivation", icon: "swap" },
  { label: "Remarketing", description: "Bring interested visitors back", href: "/remarketing", icon: "triple-arrow" },
  { label: "Landing Pages", description: "Give every campaign a clear destination", href: "/landing-pages", icon: "book" },
];

export const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Websites", href: "/websites" },
      { label: "Social Media", href: "/social-media-management" },
      { label: "Get Leads", href: "/get-leads" },
      { label: "Marketing Team", href: "/marketing" },
      { label: "Google Ads", href: "/google-ads" },
      { label: "Meta Ads", href: "/meta-ads" },
      { label: "SEO", href: "/seo" },
      { label: "CRM and Follow Up", href: "/crm-follow-up" },
      { label: "Review Management", href: "/review-management" },
      { label: "Database Reactivation", href: "/database-reactivation" },
      { label: "Remarketing", href: "/remarketing" },
      { label: "Landing Pages", href: "/landing-pages" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "Resources", href: "/resources" },
    ],
  },
] as const;

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
] as const;

/** Guarantee footnote from the Get Leads page. Shown wherever the pilot guarantee carries an asterisk. */
export const guaranteeFootnote =
  "*Subject to eligibility, agreed qualification criteria and pilot terms. The agreement must specify what the guarantee covers before publication.";
