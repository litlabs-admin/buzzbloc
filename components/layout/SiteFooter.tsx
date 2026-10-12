import Link from "next/link";
import { cn } from "@/lib/cn";
import { footerGroups, legalLinks, site } from "@/content/site";
import { ui } from "@/content/derived";

const linkClass =
  "type-small inline-block border-b border-transparent py-s2 text-fg-muted transition-colors duration-200 ease-in-out hover:border-fg hover:text-fg";

/** Footer (DESIGN.md 4.15). Below md the link groups sit in a two-column grid. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-theme="dark" className="mx-edge mb-edge rounded-lg bg-brand-950">
      <h2 className="sr-only">{ui.footer}</h2>
      <div className="u-container flex flex-col gap-s8 pb-s11 pt-sec-sm lg:flex-row lg:justify-between">
        <div className="flex flex-col items-start gap-s6">
          <Link
            href="/"
            aria-label={ui.homeLink}
            className="font-condensed text-h5 font-bold leading-none tracking-[-0.02em]"
          >
            {site.name}
          </Link>
          <p className="type-small text-fg-muted">{site.tagline}</p>
        </div>

        <nav aria-label={ui.footer} className="grid grid-cols-2 gap-s6 md:grid-cols-4 lg:min-w-[36rem]">
          {footerGroups.map((group) => {
            const wide = group.links.length > 6;
            return (
              <div key={group.title} className={cn(wide && "col-span-2")}>
                <h3 className="type-large mb-s4 font-bold">{group.title}</h3>
                <ul className={cn(wide && "columns-2 gap-s6")}>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="u-container flex flex-col gap-s4 pb-s5 pt-s4 md:flex-row md:items-center md:justify-between">
        <p className="type-small text-fg-muted">
          &copy; {year} {site.name}
        </p>
        <ul className="flex flex-wrap gap-x-s8 gap-y-s2">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
