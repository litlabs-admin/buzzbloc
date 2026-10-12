import { images } from "@/content/images";
import { contactHref } from "@/content/site";
import type { Faq, HeroContent, OfferCard, TabItem } from "@/content/types";

/** Copy source: "Marketing Team" chapter of the copy document. Verbatim. */

export const hero: HeroContent = {
  label: "YOUR MARKETING TEAM, FULLY MANAGED",
  headline: ["You didn't start a business", "to become its marketing department."],
  sub: "Get one team to manage your ads, organise your enquiries and keep your marketing moving while you run the business.",
  primary: { label: "Meet My Marketing Team", href: contactHref("marketing") },
  secondary: { label: "See What's Included", href: "#included" },
  supporting: "£1,200/month. No long-term contract.",
};

export const outcome = {
  headline: ["More opportunities.", "Fewer things on your to-do list."],
  body: [
    "Running ads, checking enquiries and coordinating suppliers takes time you could spend with customers.",
    "BuzzBloc brings the work together. Your campaigns, CRM and follow-up are managed as one system, with one team responsible for keeping it moving.",
  ],
} as const;

export const featureSection = {
  headline: ["Here's what we take off your plate."],
  items: [
    {
      title: "Meta Ads",
      text: "Reach potential customers with campaigns built around your offer. We handle creative, copy, targeting and ongoing adjustments.",
      icon: "scale-up",
      photo: images.photos[4],
      overlay: images.ui.voice,
    },
    {
      title: "Google Ads",
      text: "Show up when people search for your services. We manage keywords, ads and budgets around relevant enquiries.",
      icon: "cross-hair",
      photo: images.photos[5],
      overlay: images.ui.sms,
    },
    {
      title: "GoHighLevel CRM",
      text: "Keep your leads in order. See new enquiries, conversations and booked appointments in one pipeline.",
      icon: "paper",
      photo: images.photos[6],
      overlay: images.ui.list,
    },
    {
      title: "Automated Follow-Up",
      text: "Give prospects a prompt next step. Texts, emails and booking links keep enquiries moving when you're busy.",
      icon: "triple-arrow",
      photo: images.photos[7],
      overlay: images.ui.flow,
    },
    {
      title: "Monthly Social Content",
      text: "Keep your online presence current. Regular content supports your services and gives prospects more context about your business.",
      icon: "book",
      photo: images.photos[8],
      overlay: images.ui.workspace,
    },
    {
      title: "Reporting & Review",
      text: "Understand where the money is going. Review campaign activity, enquiries and next steps with your team.",
      icon: "double-tick",
      photo: images.photos[4],
      overlay: images.ui.flow,
    },
  ] satisfies TabItem[],
} as const;

export const control = {
  headline: ["You'll know what we're doing", "and why we're doing it."],
  body: "We agree the services you want to promote, the audience you want to reach and the budget you're comfortable with. Then we manage the work and review the results with you.",
} as const;

export const packageSection = {
  headline: ["Your growth team.", "£1,200 a month."],
  included: [
    "Meta and Google Ads management",
    "GoHighLevel CRM management",
    "SMS and email follow-up automations",
    "Monthly social content",
    "Reporting call",
    "Agreed regional exclusivity for eligible businesses",
  ],
  cta: { label: "Talk Through My Plan", href: contactHref("marketing") },
  supporting: "No long-term contract.",
} as const;

export const additions = {
  headline: "Add more when the business needs it.",
  cards: [
    {
      name: "SEO",
      price: "£400-£800/month extra",
      text: "Improve your service pages and local search visibility.",
    },
    {
      name: "Website or landing page",
      price: "£750-£1,500 one-off",
      text: "Give campaign traffic a clearer route to an enquiry.",
    },
    {
      name: "Reviews & Reactivation",
      price: "£200-£400/month extra",
      text: "Request customer reviews and reconnect with past enquiries.",
    },
  ] satisfies OfferCard[],
} as const;

export const faqs: Faq[] = [
  {
    q: "Is the advertising budget included in £1,200?",
    a: "We'll set out the management fee and advertising budget separately in your proposal.",
  },
  {
    q: "Can you work with our current accounts?",
    a: "We'll review your existing ad accounts and CRM before agreeing the setup.",
  },
  {
    q: "Do I have to learn GoHighLevel?",
    a: "We manage the setup and automations. We'll show you how to view and handle your opportunities.",
  },
  {
    q: "Is SEO included in the core package?",
    a: "SEO is an optional addition to the latest £1,200 package.",
  },
];

export const closing = {
  headline: ["Your business already has an owner.", "Now give it a marketing team."],
  cta: { label: "Meet BuzzBloc", href: contactHref("marketing") },
} as const;
