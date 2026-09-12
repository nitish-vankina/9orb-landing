"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

const NAV_LINKS = [
  { href: "/protect", label: "Protect" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/research", label: "Research" },
  { href: "/company", label: "Company" },
  { href: "/security", label: "Security" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-base-800 bg-base-950/85 backdrop-blur">
      <div className="relative mx-auto flex h-16 w-full max-w-content items-center justify-between px-6 md:px-8">
        <Logo />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 xl:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-150 ${
                pathname === link.href || pathname?.startsWith(link.href + "/")
                  ? "text-white"
                  : "text-ink-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={siteConfig.signInUrl}
            className="text-sm text-ink-300 transition-colors hover:text-white"
          >
            Sign In
          </a>
          <span className="h-4 w-px bg-base-700" aria-hidden="true" />
          <Button href={siteConfig.launchUrl} external variant="primary" size="md">
            Launch Protect
          </Button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-base-700 text-ink-200 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 5h14M2 9h14M2 13h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-base-800 bg-base-950 px-6 py-6 xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base text-ink-200 hover:bg-base-900 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 border-t border-base-800 pt-6">
            <Button href={siteConfig.signInUrl} external variant="secondary" className="w-full justify-center">
              Sign In
            </Button>
            <Button href={siteConfig.launchUrl} external variant="primary" className="w-full justify-center">
              Launch Protect
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
