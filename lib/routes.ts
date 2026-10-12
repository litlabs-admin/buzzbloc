import { servicePages } from "@/content/services";

/** Every indexable route, used by the sitemap and llms.txt. Legal placeholders are excluded. */
export const mainRoutes = ["/", "/websites", "/social-media-management", "/get-leads", "/marketing"] as const;

export const companyRoutes = ["/about", "/pricing", "/contact", "/faqs", "/resources"] as const;

export const supportingServiceRoutes = servicePages
  .map((page) => `/${page.slug}`)
  .filter((path) => !mainRoutes.includes(path as (typeof mainRoutes)[number]));

export const indexableRoutes = [...mainRoutes, ...supportingServiceRoutes, ...companyRoutes];
