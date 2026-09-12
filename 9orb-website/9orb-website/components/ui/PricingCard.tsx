import { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export function PricingCard({
  name,
  price,
  cadence,
  description,
  features,
  cta,
  ctaHref,
  external,
  highlighted = false,
}: {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: ReactNode[];
  cta: string;
  ctaHref: string;
  external?: boolean;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-lg border p-6 ${
        highlighted
          ? "border-accent/50 bg-accent-soft/30"
          : "border-base-800 bg-base-900/40"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white">{name}</h3>
        {highlighted ? (
          <span className="rounded-full border border-accent/40 bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent-bright">
            Most capability
          </span>
        ) : null}
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-semibold text-white">{price}</span>
        {cadence ? <span className="text-sm text-ink-400">{cadence}</span> : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-400">{description}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-ink-200">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-accent-bright"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 10.5l3.5 3.5L16 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <Button
        href={ctaHref}
        external={external}
        variant={highlighted ? "primary" : "secondary"}
        className="mt-8 w-full"
      >
        {cta}
      </Button>
    </div>
  );
}
