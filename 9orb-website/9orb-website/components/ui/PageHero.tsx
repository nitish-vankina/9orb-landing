import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  actions,
  visual,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Small right-aligned line next to the description, e.g. "New  Docs →". */
  meta?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <section className="border-b border-base-800 bg-base-950">
      <Container className="pb-16 pt-16 sm:pb-20 sm:pt-24">
        {eyebrow ? (
          <div className="mb-5 text-xs font-medium uppercase tracking-widest text-ink-500">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="max-w-4xl text-balance text-[44px] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-[68px]">
          {title}
        </h1>
        {description || meta ? (
          <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            {description ? (
              <p className="max-w-lg text-balance text-base leading-relaxed text-ink-400 sm:text-[17px]">
                {description}
              </p>
            ) : (
              <span />
            )}
            {meta ? <div className="shrink-0 text-sm text-ink-300">{meta}</div> : null}
          </div>
        ) : null}
        {actions ? <div className="mt-9 flex flex-wrap items-center gap-3">{actions}</div> : null}
      </Container>
      {visual ? <div>{visual}</div> : null}
    </section>
  );
}
