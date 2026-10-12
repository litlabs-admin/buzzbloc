import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/ui/Icon";

export type Cta = { label: string; href: string };

export type Faq = { q: string; a: string };

export type TitledText = { title: string; text: string };

export type HeroContent = {
  label?: string;
  headline: readonly string[];
  sub: string;
  primary?: Cta;
  secondary?: Cta;
  supporting?: string;
};

export type OfferCard = {
  name: string;
  price: string;
  text: string;
  cta?: Cta;
};

export type TabItem = TitledText & {
  icon: IconName;
  photo: StaticImageData;
  overlay: StaticImageData;
};

export type ServicePage = {
  slug: string;
  /** Short name used in navigation, breadcrumbs and structured data. */
  name: string;
  hero: HeroContent;
  outcome: { headline: readonly string[]; body: readonly string[] };
  handle: readonly TitledText[];
  steps: readonly TitledText[];
  offer: string;
  faqs: readonly Faq[];
  closing: { headline: readonly string[]; cta: Cta };
  related: readonly Cta[];
};
