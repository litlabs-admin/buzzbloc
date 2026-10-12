import { contactHref } from "@/content/site";
import type { Faq, HeroContent, TabItem, TitledText } from "@/content/types";

/** Copy source: "Websites" chapter of the copy document. Verbatim. */

export const hero: HeroContent = {
  label: "WEBSITES FOR UK BUSINESSES",
  headline: ["Your website should give people", "a reason to get in touch."],
  sub: "We build clear, professional websites that explain what you do, earn customers' trust and make the next step easy.",
  primary: { label: "Discuss My Website", href: contactHref("websites") },
  secondary: { label: "See What's Included", href: "#included" },
  supporting: "Website projects from £750.",
};

export const problem = {
  headline: ["They've clicked.", "Now give them a reason to stay."],
  body: [
    "A customer lands on your website with a few simple questions: Can you help me? Can I trust you? How do I contact you?",
    "We build your pages around answering those questions, with clear service information and a straightforward route to an enquiry.",
  ],
} as const;

export const benefits: TitledText[] = [
  {
    title: "Look like the business you've worked to build",
    text: "A professional design that reflects the quality of your services.",
  },
  {
    title: "Make your offer easy to understand",
    text: "Clear copy that explains what you do and why someone should choose you.",
  },
  {
    title: "Make contacting you effortless",
    text: "Visible calls to action, simple forms and booking options where needed.",
  },
];

export const featureSection = {
  headline: ["Everything your website needs", "to make a better first impression."],
  items: [
    {
      title: "Design that fits your business",
      text: "A consistent look built around your branding and services.",
      icon: "market",
      scene: "browser",
    },
    {
      title: "Made for mobile",
      text: "Pages that are easy to read and use on smaller screens.",
      icon: "scale-up",
      scene: "phone",
    },
    {
      title: "Clear service pages",
      text: "Help customers find the information relevant to them.",
      icon: "book",
      scene: "pages",
    },
    {
      title: "Enquiry forms & booking connections",
      text: "Give interested visitors a simple way to contact you.",
      icon: "paper",
      scene: "form",
    },
    {
      title: "SEO foundations",
      text: "Page titles, headings and structure that help search engines understand your site.",
      icon: "double-tick",
      scene: { name: "search", labels: ["SEO foundations", "Page titles", "Headings", "Structure"] },
    },
    {
      title: "Connected lead capture",
      text: "Send website enquiries into your agreed inbox or CRM.",
      icon: "swap",
      scene: "pipeline",
    },
  ] satisfies TabItem[],
} as const;

export const offer = {
  headline: ["A better website starts", "with a clear scope."],
  body: "Website and landing-page projects typically range from £750 to £1,500. We'll agree the pages, functionality and price before the build begins.",
  cta: { label: "Get My Website Quote", href: contactHref("websites") },
} as const;

export const process = {
  headline: ["From first conversation to launch."],
  steps: [
    { title: "Plan it", text: "We agree your goals, pages and the action visitors should take." },
    { title: "Build it", text: "We bring the design, copy and functionality together for your review." },
    { title: "Launch it", text: "We check the pages, forms and mobile experience before going live." },
  ] satisfies TitledText[],
} as const;

export const faqs: Faq[] = [
  {
    q: "Can you replace my existing website?",
    a: "Yes. We'll review what you have and agree what needs to change.",
  },
  {
    q: "Can you build a landing page for my ads?",
    a: "Yes. We can create a focused page for a specific service or campaign.",
  },
  {
    q: "Will the website connect to my CRM?",
    a: "We can include CRM connections in the scope, including GoHighLevel where appropriate.",
  },
  {
    q: "Are hosting and maintenance included?",
    a: "Your quote will explain the ongoing hosting and maintenance arrangements.",
  },
];

export const closing = {
  headline: ["Give your next customer", "a better first impression."],
  cta: { label: "Let's Build Your Website", href: contactHref("websites") },
} as const;
