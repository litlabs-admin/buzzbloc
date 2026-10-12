/**
 * Text the copy document does not supply directly. Everything here is assembled from
 * existing copy lines (page names, section labels, hero subheadings) and is kept in
 * one place so the owner can review and replace it.
 */

export const headings = {
  faqs: "FAQs",
  commonQuestions: "Common questions",
  whatWeHandle: "What we handle",
  howItWorks: "How it works",
  howWeWork: "How we work",
  relatedServices: "Related services",
  included: "Included",
  optionalAdditions: "Optional additions",
  resourceCategories: "Resource categories",
  services: "Services",
  /** FAQ photo card, taken from the FAQs page closing section. */
  faqCardTitle: "Still have a question?",
  faqCardCta: "Ask Our Team",
} as const;

export const ui = {
  skipLink: "Skip to main content",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  mainNav: "Main",
  footer: "Footer",
  onThisPage: "On this page",
  tabsPause: "Pause",
  tabsPlay: "Play",
  tabsToggle: "Automatic tab rotation",
  homeLink: "BuzzBloc home",
  breadcrumbHome: "Home",
} as const;

type Meta = { title: string; description: string };

/** Titles use the page name from the copy; descriptions are the hero subheadings. */
export const meta: Record<string, Meta> = {
  "/": {
    title: "BuzzBloc | We bring you business. You get on with running it.",
    description:
      "Websites that turn visitors into enquiries. Marketing managed for you. Qualified leads booked into your calendar.",
  },
  "/websites": {
    title: "Websites for UK Businesses",
    description:
      "We build clear, professional websites that explain what you do, earn customers' trust and make the next step easy.",
  },
  "/marketing": {
    title: "Your Marketing Team, Fully Managed",
    description:
      "Get one team to manage your ads, organise your enquiries and keep your marketing moving while you run the business.",
  },
  "/get-leads": {
    title: "Get Leads: The 15-Lead Pilot",
    description:
      "Get 15 exclusive, pre-qualified leads in 30 days, booked into your calendar, or you don't pay. Subject to eligibility, agreed qualification criteria and pilot terms.",
  },
  "/about": {
    title: "About BuzzBloc",
    description:
      "BuzzBloc helps UK businesses improve their websites, stay visible and generate relevant enquiries. We bring the work together so you have fewer suppliers to coordinate.",
  },
  "/pricing": {
    title: "Pricing",
    description:
      "Choose a focused project, a monthly marketing team or a lead-generation pilot. We agree the scope and costs before you start.",
  },
  "/contact": {
    title: "Contact",
    description:
      "Tell us whether you need a website, social media support, marketing management or more leads. We will help you work out the right starting point.",
  },
  "/faqs": {
    title: "Frequently Asked Questions",
    description: "Answers about our services, packages and how we work.",
  },
  "/resources": {
    title: "Resources",
    description:
      "Clear guides to websites, social media and lead generation, with ideas you can use in your business.",
  },
};

export const legal = {
  eyebrow: "Legal",
  placeholderNotice:
    "Placeholder. This page will be published once the registered business identity and the actual data and service practices have been supplied.",
  pages: {
    privacy: { title: "Privacy Policy", path: "/privacy" },
    terms: { title: "Terms", path: "/terms" },
    cookies: { title: "Cookie Policy", path: "/cookies" },
  },
  /** Section headings only. Body text is intentionally absent until real policies exist. */
  sections: ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5"],
  sectionBody: "Placeholder text. The policy wording for this section has not been supplied yet.",
} as const;
