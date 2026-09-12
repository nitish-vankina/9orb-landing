import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/lib/config";

const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Protect", href: "/protect" },
      { label: "Pricing", href: "/protect/pricing" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Company", href: "/company" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Status", href: "#" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-base-800 bg-base-950">
      <div className="mx-auto w-full max-w-content px-6 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Security software, blockchain infrastructure, and proprietary
              digital-asset research.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium uppercase tracking-widest text-ink-500">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-base-800 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 9orb. All rights reserved.</p>
          <p>
            9orb Protect is non-custodial software. 9orb does not hold customer
            keys or assets. Contact:{" "}
            <a href={`mailto:${siteConfig.generalContactEmail}`} className="text-ink-400 hover:text-white">
              {siteConfig.generalContactEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
