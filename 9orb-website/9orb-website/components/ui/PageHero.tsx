import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  visual,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-base-800 bg-grid bg-base-950">
      <div className="pointer-events-none absolute inset-0 mask-fade-b bg-gradient-to-b from-accent-soft/40 via-transparent to-transparent" />
      <Container className="relative py-20 sm:py-28">
        {eyebrow ? (
          <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent-bright">
            <span className="h-1 w-1 rounded-full bg-accent-bright" aria-hidden="true" />
            {eyebrow}
          </div>
        ) : null}
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-300">
            {description}
          </p>
        ) : null}
        {actions ? <div className="mt-9 flex flex-wrap items-center gap-3">{actions}</div> : null}
        {visual ? <div className="mt-16">{visual}</div> : null}
      </Container>
    </section>
  );
}
