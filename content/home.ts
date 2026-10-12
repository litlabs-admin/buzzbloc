import { images } from "@/content/images";
import { contactHref } from "@/content/site";
import type { Faq, HeroContent, OfferCard, TitledText } from "@/content/types";

/** Copy source: "Homepage" chapter of the copy document. Verbatim. */

export const hero: HeroContent = {
  label: "YOUR BUSINESS. OUR MARKETING TEAM.",
  headline: ["We bring you business.", "You get on with running it."],
  sub: "Websites that turn visitors into enquiries. Marketing managed for you. Qualified leads booked into your calendar.",
  primary: { label: "Find My Next Customers", href: contactHref() },
  secondary: { label: "Explore Our Services", href: "#services" },
  supporting: "Built for UK businesses with room to grow.",
};

export const serviceCards = {
  headline: "What does your business need next?",
  cards: [
    {
      label: "Websites",
      title: "A website that brings in enquiries.",
      text: "Give customers a clear reason to choose you and an easy way to get in touch.",
      cta: { label: "Explore Websites", href: "/websites" },
      image: images.photos[0],
    },
    {
      label: "Social Media Management",
      title: "Keep showing up without finding time to post.",
      text: "Your content planned, designed and published while you run the business.",
      cta: { label: "Explore Social Media", href: "/social-media-management" },
      image: images.photos[5],
    },
    {
      label: "Get Leads",
      title: "More opportunities in your calendar.",
      text: "Exclusive, qualified leads for service businesses ready to take on more work.",
      cta: { label: "Explore Lead Generation", href: "/get-leads" },
      image: images.photos[7],
    },
  ],
} as const;

export const outcome = {
  headline: ["You're good at what you do.", "More people should know it."],
  body: [
    "You've built the business. You know how to look after customers. But finding the next one can still feel like starting from scratch.",
    "BuzzBloc connects your website, advertising and follow-up so there's a clear path from finding your business to contacting you.",
  ],
  points: [
    { title: "Get found", text: "Put your business in front of people looking for what you offer." },
    { title: "Get enquiries", text: "Give interested customers a clear next step." },
    { title: "Get your time back", text: "Let us manage the marketing while you focus on the work." },
  ] satisfies TitledText[],
} as const;

export const features = {
  headline: ["Let us handle the jobs", "you never have time for."],
  sub: "Start with one service or bring your marketing together. We handle the setup and the ongoing work.",
  eyebrow: "DONE FOR YOU",
  linkLabel: "Learn More",
  cards: [
    {
      title: "Social Media Management",
      text: "Keep your business visible with content planned, designed and published for you.",
      href: "/social-media-management",
      photo: images.photos[5],
      overlay: images.ui.sms,
    },
    {
      title: "Google and Meta Ads",
      text: "Reach the right people with campaigns built, managed and improved by our team.",
      href: "/marketing",
      photo: images.photos[1],
      overlay: images.ui.messages,
    },
    {
      title: "Qualified Lead Generation",
      text: "Give your calendar more opportunities with exclusive leads for your service and area.",
      href: "/get-leads",
      photo: images.photos[0],
      overlay: images.ui.chat,
    },
    {
      title: "Local SEO",
      text: "Help customers find your services when they search nearby.",
      href: "/seo",
      photo: images.photos[6],
      overlay: images.ui.list,
    },
    {
      title: "CRM and Follow Up",
      text: "Keep enquiries organised and give every prospect a clear next step.",
      href: "/crm-follow-up",
      photo: images.photos[7],
      overlay: images.ui.flow,
    },
    {
      title: "Review Management",
      text: "Make it easier for customers to share their experience and build confidence in your business.",
      href: "/review-management",
      photo: images.photos[4],
      overlay: images.ui.voice,
    },
    {
      title: "Database Reactivation",
      text: "Reconnect with past enquiries and customers who may be ready to hear from you again.",
      href: "/database-reactivation",
      photo: images.photos[3],
      overlay: images.ui.dropdown,
    },
    {
      title: "Remarketing",
      text: "Stay in front of visitors who showed interest but left before getting in touch.",
      href: "/remarketing",
      photo: images.photos[2],
      overlay: images.ui.messages,
    },
    {
      title: "Websites and Landing Pages",
      text: "Give customers a clear reason to choose you and a simple way to enquire.",
      href: "/websites",
      photo: images.photos[8],
      overlay: images.ui.workspace,
    },
  ],
} as const;

export const managed = {
  headline: ["You don't need another tool to learn.", "You need someone to handle it."],
  body: "We set up the campaigns, connect the systems and keep improving the work. You get a team to speak to, a clear view of your enquiries and fewer marketing tasks on your list.",
  cta: { label: "Meet Your Marketing Team", href: "/marketing" },
} as const;

export const howItWorks = {
  headline: ["A simple start. A clear plan."],
  steps: [
    { title: "01 - Tell us where you want to grow", text: "We'll talk through your services, customers and capacity." },
    { title: "02 - We put the right pieces in place", text: "Your website, campaigns or lead-generation setup, built around your goal." },
    { title: "03 - You focus on the opportunities", text: "We manage the marketing and review what's working with you." },
  ] satisfies TitledText[],
} as const;

export const offer = {
  headline: "Start with the help you need.",
  cards: [
    {
      name: "Websites",
      price: "From £750 one-off",
      text: "A professional website built to explain your services and generate enquiries.",
      cta: { label: "Discuss My Website", href: contactHref("websites") },
    },
    {
      name: "Your Marketing Team",
      price: "£1,200/month",
      text: "Managed Meta and Google Ads, CRM, follow-up, monthly content and reporting.",
      cta: { label: "Explore the Package", href: "/marketing" },
    },
    {
      name: "The 15-Lead Pilot",
      price: "From £500",
      text: "15 exclusive, pre-qualified leads in 30 days, booked into your calendar, or you don't pay.*",
      cta: { label: "Check My Area", href: contactHref("get-leads") },
    },
  ] satisfies OfferCard[],
} as const;

export const faqs: Faq[] = [
  {
    q: "Can I start with just one service?",
    a: "Yes. Start with a website, marketing package or lead pilot. We'll recommend what fits your business.",
  },
  {
    q: "Who is BuzzBloc for?",
    a: "UK businesses that want more enquiries and help managing their marketing. Our lead pilot is designed for eligible service businesses.",
  },
  {
    q: "Do I need to manage the campaigns?",
    a: "We handle campaign setup and ongoing management. You provide the business knowledge and handle sales conversations.",
  },
  {
    q: "Is there a long-term marketing contract?",
    a: "The £1,200 monthly marketing package has no long-term contract. We'll explain the cancellation terms before you start.",
  },
];

export const closing = {
  headline: ["Ready to spend more time serving customers", "and less time finding them?"],
  sub: "Tell us what you want to grow. We'll show you where to start.",
  cta: { label: "Let's Talk", href: contactHref() },
} as const;
