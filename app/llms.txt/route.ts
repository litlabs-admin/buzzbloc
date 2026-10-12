import * as home from "@/content/home";
import { about, pricing } from "@/content/company";
import { meta } from "@/content/derived";
import { servicePages } from "@/content/services";
import { site } from "@/content/site";

export const dynamic = "force-static";

const url = (path: string) => new URL(path, site.url).toString();
const link = (label: string, path: string, note: string) => `- [${label}](${url(path)}): ${note}`;

/** llms.txt: a plain summary of BuzzBloc and its key pages, built only from copy lines. */
export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.tagline}`,
    "",
    about.hero.sub,
    home.outcome.body[1],
    "",
    "## Main offers",
    link("Websites", "/websites", meta["/websites"].description),
    link("Social Media Management", "/social-media-management", servicePages[0].hero.sub),
    link("Get Leads", "/get-leads", meta["/get-leads"].description),
    link("Marketing Team", "/marketing", meta["/marketing"].description),
    "",
    "## Supporting services",
    ...servicePages.slice(1).map((page) => link(page.name, `/${page.slug}`, page.hero.sub)),
    "",
    "## Pricing",
    ...pricing.cards.map((card) => `- ${card.name}: ${card.price}. ${card.text.replace(/\*$/, "")}`),
    "",
    "## Company",
    link("About", "/about", meta["/about"].description),
    link("Pricing", "/pricing", meta["/pricing"].description),
    link("FAQs", "/faqs", meta["/faqs"].description),
    link("Resources", "/resources", meta["/resources"].description),
    link("Contact", "/contact", meta["/contact"].description),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
