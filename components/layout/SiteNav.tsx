"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { companyLinks, navButton, primaryLinks, servicesDropdown, site } from "@/content/site";
import { headings, ui } from "@/content/derived";

/** Pages whose first section is light, so the bar starts with dark text. */
const LIGHT_TOP_ROUTES = ["/contact", "/privacy", "/terms", "/cookies"];
const SCROLL_THRESHOLD = 20;
const DESKTOP_QUERY = "(min-width: 70rem)";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const linkClass =
  "flex items-center gap-s3 rounded-sm px-s5 py-s3 transition-all duration-200 hover:bg-black/10";

/**
 * Site navigation (DESIGN.md 4.3). Transparent over the hero, solid and light after
 * 20px of scroll or while a menu is open. Desktop from 70rem, mobile menu below.
 */
export function SiteNav() {
  const pathname = usePathname();
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > SCROLL_THRESHOLD,
    () => false,
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    if (!dropdownOpen && !menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    const onPointer = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [dropdownOpen, menuOpen]);

  // Lock page scroll behind the mobile menu and close it if the viewport grows to desktop.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => media.matches && setMenuOpen(false);
    media.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = previous;
      media.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  const solid = scrolled || dropdownOpen || menuOpen;
  const theme = solid || LIGHT_TOP_ROUTES.includes(pathname) ? "light" : "dark";
  const isCurrent = (href: string) => pathname === href;

  return (
    <header
      ref={headerRef}
      data-theme={theme}
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] border-b border-hairline transition-[padding,background-color] duration-[250ms] ease-[ease]",
        solid ? "bg-slate-50 py-s3" : "py-s4 nav:py-s5",
      )}
    >
      <div className="u-container flex items-center justify-between gap-s8">
        <Link
          href="/"
          aria-label={ui.homeLink}
          onClick={closeAll}
          className="font-condensed text-h6 font-bold leading-none tracking-[-0.02em]"
        >
          {site.name}
        </Link>

        <nav aria-label={ui.mainNav} className="hidden flex-1 nav:block">
          <ul className="flex items-center">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeAll}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-controls="services-menu"
                onClick={() => setDropdownOpen((open) => !open)}
                className={cn(linkClass, "cursor-pointer", dropdownOpen && "bg-black/10")}
              >
                {headings.services}
                <Icon
                  name="caret"
                  className={cn("w-3 transition-transform duration-200 ease-[ease]", dropdownOpen && "rotate-180")}
                />
              </button>
            </li>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeAll}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden nav:block" onClick={closeAll}>
          <Button href={navButton.href}>{navButton.label}</Button>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? ui.menuClose : ui.menuOpen}
          onClick={() => {
            setDropdownOpen(false);
            setMenuOpen((open) => !open);
          }}
          className="flex size-11 flex-none cursor-pointer flex-col items-center justify-center gap-s2 rounded-sm bg-btn text-btn-fg nav:hidden"
        >
          <span
            className={cn(
              "h-[0.09375rem] w-3 bg-current transition-transform duration-200 ease-[ease]",
              menuOpen && "translate-y-[0.171875rem] -rotate-45",
            )}
          />
          <span
            className={cn(
              "h-[0.09375rem] w-3 bg-current transition-transform duration-200 ease-[ease]",
              menuOpen && "-translate-y-[0.171875rem] rotate-45",
            )}
          />
        </button>
      </div>

      {/* Desktop services dropdown */}
      <div
        id="services-menu"
        data-open={dropdownOpen}
        className="nav-dropdown absolute inset-x-0 top-full hidden nav:grid"
      >
        <div>
          <div data-theme="light" className="border-t border-hairline bg-slate-50 shadow-dropdown">
            <div className="u-container py-10">
              <ul className="grid grid-cols-3 gap-x-gutter gap-y-s3">
                {servicesDropdown.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      aria-current={isCurrent(item.href) ? "page" : undefined}
                      className="group flex items-center gap-s4 rounded-sm p-s3 transition-colors duration-[250ms] hover:bg-slate-100"
                    >
                      <span className="flex size-12 flex-none items-center justify-center rounded-sm bg-slate-100 p-s4 transition-all duration-[250ms] group-hover:bg-brand-950 group-hover:text-slate-50">
                        <Icon name={item.icon} className="size-full" />
                      </span>
                      <span className="flex flex-col gap-s1">
                        <span className="type-large font-bold">{item.label}</span>
                        <span className="type-small">{item.description}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        data-open={menuOpen}
        data-theme="light"
        className="nav-mobile-panel absolute inset-x-0 top-full h-dvh overflow-y-auto overscroll-contain bg-white pb-40 nav:hidden"
      >
        <nav aria-label={ui.mainNav} className="u-container flex flex-col gap-s8 pt-s7">
          <ul className="flex flex-col gap-s4">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeAll}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className="type-h3 block py-s2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services"
                onClick={() => setMobileServicesOpen((open) => !open)}
                className="type-h3 flex w-full cursor-pointer items-center justify-between gap-s4 py-s2 text-left"
              >
                {headings.services}
                <span className="flex h-5 w-6 flex-none items-center justify-center rounded-sm bg-brand-950 text-slate-50">
                  <Icon
                    name="caret"
                    className={cn("w-3 transition-transform duration-200 ease-[ease]", mobileServicesOpen && "rotate-180")}
                  />
                </span>
              </button>
              <ul id="mobile-services" hidden={!mobileServicesOpen} className="mt-s4 flex flex-col gap-s2">
                {servicesDropdown.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={closeAll} className="flex flex-col gap-s1 rounded-sm py-s3">
                      <span className="type-large font-bold">{item.label}</span>
                      <span className="type-small">{item.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeAll}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className="type-h3 block py-s2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-hairline pt-s5" onClick={closeAll}>
            <Button href={navButton.href}>{navButton.label}</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
