import { contactHref } from "@/content/site";
import type { Faq, HeroContent, TitledText } from "@/content/types";

/** Copy source: "Get Leads" chapter of the copy document. Verbatim. */

export const hero: HeroContent = {
  label: "THE 15-LEAD PILOT",
  headline: ["What would 15 qualified opportunities", "do for your next month?"],
  sub: "Get 15 exclusive, pre-qualified leads in 30 days, booked into your calendar, or you don't pay.*",
  primary: { label: "Check My Area", href: contactHref("get-leads") },
  secondary: { label: "See How the Pilot Works", href: "#how-it-works" },
  supporting: "From £500. For eligible UK service businesses.",
};

export const customer = {
  headline: ["You've got room for more work.", "We'll help you find it."],
  body: [
    "A quiet calendar makes planning difficult. You can't build every month around hoping someone passes your name on.",
    "Our pilot gives you a focused way to test lead generation for your service, in your area, with a clear target and agreed qualification criteria.",
  ],
} as const;

export const whatTheyGet = {
  headline: ["Opportunities worth", "having a conversation about."],
  items: [
    {
      title: "Exclusive to your business",
      text: "Your leads are generated for you rather than sold to several competitors.",
    },
    {
      title: "Qualified against agreed criteria",
      text: "We define the service, location and information that make an enquiry count.",
    },
    {
      title: "Booked into your calendar",
      text: "Follow-up and booking help move qualified prospects towards a conversation.",
    },
    {
      title: "Easy to track",
      text: "See enquiries and appointments in your CRM, with a clear record of the pilot's progress.",
    },
  ] satisfies TitledText[],
} as const;

export const howItWorks = {
  headline: ["From someone scrolling", "to someone ready to speak."],
  steps: [
    {
      title: "01 - We agree what a good lead looks like",
      text: "Your services, area, customer requirements and available appointment times.",
    },
    {
      title: "02 - We launch your Meta campaign",
      text: "Ads and enquiry forms built around the work you want more of.",
    },
    {
      title: "03 - We qualify and follow up",
      text: "Leads enter GoHighLevel with prompt SMS and email follow-up.",
    },
    {
      title: "04 - You take the conversation forward",
      text: "Speak to the prospect, understand the job and make your offer.",
    },
  ] satisfies TitledText[],
} as const;

export const pilot = {
  headline: ["15 leads. 30 days.", "A clear test for your business."],
  body: "The pilot costs £500-£750, depending on the agreed setup. We set the qualification criteria, campaign budget and guarantee terms before launch.",
  offerLine: "15 exclusive, pre-qualified leads, booked into your calendar, or you don't pay.*",
  cta: { label: "Check Pilot Availability", href: contactHref("get-leads") },
} as const;

export const exclusivity = {
  headline: ["We won't run the same offer", "for your local competition."],
  body: "For the pilot, we work with one business in an agreed service category and region. We'll confirm whether your area is available before you start.",
} as const;

export const afterPilot = {
  headline: ["If it works for your business,", "build on it."],
  body: "Successful pilots can move into our £1,200 monthly growth package, adding Google Ads, ongoing CRM management, monthly content and reporting.",
  cta: { label: "Explore the Growth Package", href: "/marketing" },
} as const;

export const faqs: Faq[] = [
  {
    q: "What counts as a qualified lead?",
    a: "An enquiry that meets the service, location and other criteria agreed before the campaign starts.",
  },
  {
    q: "Are these guaranteed customers?",
    a: "No. They are qualified opportunities. Your sales conversation, pricing and service determine whether they become customers.",
  },
  {
    q: "How does the guarantee work?",
    a: "Your pilot agreement will define the target, qualifying bookings, your responsibilities and what \"you don't pay\" covers.",
  },
  {
    q: "Does it work for every service business?",
    a: "We assess your offer, area and capacity first. We only recommend the pilot where the setup makes sense.",
  },
  {
    q: "Is ad spend included?",
    a: "The proposal will clearly state the pilot fee and whether advertising spend is included or separate.",
  },
];

export const closing = {
  headline: ["Can you take on more work next month?"],
  sub: "Let's see whether the 15-Lead Pilot fits your business.",
  cta: { label: "Check My Area", href: contactHref("get-leads") },
} as const;
