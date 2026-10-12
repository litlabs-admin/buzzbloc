import { Hero } from "@/components/sections/Hero";
import { site } from "@/content/site";

/** 404 page. Wording is functional only; it reuses the homepage link label from the nav. */
export default function NotFound() {
  return (
    <Hero
      content={{
        label: "404",
        headline: ["Page not found."],
        sub: site.tagline,
        primary: { label: site.name, href: "/" },
      }}
    />
  );
}
