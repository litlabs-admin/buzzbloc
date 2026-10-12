import { contactHref } from "@/content/site";
import type { Faq, HeroContent, OfferCard, TitledText } from "@/content/types";

/** Copy source: About, Pricing, Contact, FAQs and Resources chapters. Verbatim. */

export const about = {
  hero: {
    headline: ["A marketing team for people", "who already have a business to run."],
    sub: "BuzzBloc helps UK businesses improve their websites, stay visible and generate relevant enquiries. We bring the work together so you have fewer suppliers to coordinate.",
    primary: { label: "Talk to Our Team", href: contactHref() },
  } satisfies HeroContent,
  believe: {
    headline: ["Make the work clear. Make the next step easy."],
    body: [
      "Business owners should understand what their marketing is doing. We start with your services, customers and capacity, then agree the work that supports your next stage of growth.",
    ],
  },
  howWeWork: [
    { title: "Clear scope", text: "You know what is included before we begin." },
    { title: "Connected delivery", text: "Your website, campaigns and follow-up support the same customer journey." },
    { title: "Useful reporting", text: "Review enquiries and opportunities alongside campaign activity." },
    { title: "Practical support", text: "A team to speak to when your business or priorities change." },
  ] satisfies TitledText[],
  closing: {
    headline: ["Tell us what you want to grow next."],
    cta: { label: "Let's Talk", href: contactHref() },
  },
} as const;

export const pricing = {
  hero: {
    headline: ["Start with what your business needs."],
    sub: "Choose a focused project, a monthly marketing team or a lead-generation pilot. We agree the scope and costs before you start.",
    primary: { label: "Help Me Choose", href: contactHref() },
  } satisfies HeroContent,
  cards: [
    {
      name: "Websites and landing pages",
      price: "£750-£1,500 one-off",
      text: "Clear copy, professional design and agreed enquiry or booking functionality.",
      cta: { label: "Discuss My Website", href: contactHref("websites") },
    },
    {
      name: "Social Media Management",
      price: "Tailored monthly quote",
      text: "Content planning, branded posts, captions and agreed publishing schedule.",
      cta: { label: "Get My Social Plan", href: contactHref("social-media") },
    },
    {
      name: "15-Lead Pilot",
      price: "£500-£750 pilot",
      text: "15 exclusive, pre-qualified leads in 30 days, booked into your calendar, or you don't pay.*",
      cta: { label: "Check My Area", href: contactHref("get-leads") },
    },
    {
      name: "Marketing Team",
      price: "£1,200/month",
      text: "Meta and Google Ads, managed CRM and follow-up, monthly social content and reporting. No long-term contract.",
      cta: { label: "Meet My Team", href: "/marketing" },
    },
    {
      name: "SEO addition",
      price: "£400-£800/month extra",
      text: "Scope based on your website, services and local search needs.",
    },
    {
      name: "Reviews and reactivation addition",
      price: "£200-£400/month extra",
      text: "Selected workflows and campaigns agreed in your proposal.",
    },
  ] satisfies OfferCard[],
  faqs: [
    {
      q: "What extra costs should I expect?",
      a: "Your proposal explains advertising spend, software usage, messaging, hosting and any other agreed costs.",
    },
    { q: "Can I combine services?", a: "Yes. We recommend a scope based on your business goal." },
    {
      q: "What does the guarantee cover?",
      a: "*The pilot agreement defines eligibility, qualification criteria, qualifying bookings and the fee covered by the guarantee.",
    },
  ] satisfies Faq[],
  closing: {
    headline: ["A clear plan before you commit."],
    cta: { label: "Talk Through My Options", href: contactHref() },
  },
} as const;

export const contact = {
  hero: {
    headline: ["What would you like", "your business to do next?"],
    sub: "Tell us whether you need a website, social media support, marketing management or more leads. We will help you work out the right starting point.",
  },
  form: {
    fields: {
      name: "Name",
      email: "Work email",
      business: "Business name",
      website: "Website if available",
      interest: "What do you need help with?",
      area: "Service area or postcode",
      goal: "Tell us about your goal",
    },
    interestOptions: [
      { value: "websites", label: "Websites" },
      { value: "social-media", label: "Social Media" },
      { value: "get-leads", label: "Get Leads" },
      { value: "marketing", label: "Marketing" },
      { value: "other", label: "Other" },
    ],
    button: "Send My Enquiry",
    privacy: { before: "We will use your details to respond to your enquiry. Read our ", link: "Privacy Policy", after: "." },
    success: "Thanks for getting in touch. We will review your enquiry and contact you about the next step.",
    error: "Your enquiry could not be sent. Please try again.",
  },
} as const;

export const faqsPage = {
  hero: {
    headline: ["A few things you might want to know."],
    sub: "Answers about our services, packages and how we work.",
  } satisfies HeroContent,
  questions: [
    {
      q: "Can I start with one service?",
      a: "Yes. You can begin with a website, social media plan, marketing package or eligible pilot.",
    },
    {
      q: "Do you only work with trades?",
      a: "Our website and social services are aimed at UK businesses broadly. The lead pilot is assessed by service category and region.",
    },
    {
      q: "Do I need a new website to run ads?",
      a: "We review your current site first. A suitable existing page may work; otherwise we can scope a landing page.",
    },
    { q: "Is SEO included in £1,200/month?", a: "SEO is an optional addition." },
    {
      q: "Will you manage my social inbox?",
      a: "Only if community or inbox management is explicitly included in your scope.",
    },
    {
      q: "Are there long term contracts?",
      a: "The core marketing package has no long-term contract. Your agreement sets the cancellation terms.",
    },
    {
      q: "Is advertising spend included?",
      a: "The proposal specifies advertising spend separately from management fees.",
    },
    {
      q: "How do I get started?",
      a: "Tell us your services, goals and area. We will review what is needed and propose a scope.",
    },
  ] satisfies Faq[],
  closing: {
    headline: ["Still have a question?"],
    cta: { label: "Ask Our Team", href: contactHref() },
  },
} as const;

export const resources = {
  hero: {
    headline: ["Practical marketing advice", "for busy business owners."],
    sub: "Clear guides to websites, social media and lead generation, with ideas you can use in your business.",
  } satisfies HeroContent,
  categories: [
    { title: "Websites", text: "Help visitors understand your services and take the next step." },
    { title: "Social media", text: "Plan useful content and keep your business visible." },
    { title: "Lead generation", text: "Understand offers, qualification and booking journeys." },
    { title: "Marketing", text: "Connect campaigns, follow-up and reporting." },
  ] satisfies TitledText[],
  closing: {
    headline: ["Want help putting the plan into practice?"],
    cta: { label: "Talk to BuzzBloc", href: contactHref() },
  },
} as const;
