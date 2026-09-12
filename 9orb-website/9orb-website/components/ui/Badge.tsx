import { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "good" | "accent";
}) {
  const toneClasses = {
    neutral: "border-base-600 text-ink-300",
    good: "border-signal-good/30 text-signal-good bg-signal-good/10",
    accent: "border-accent/30 text-accent-bright bg-accent-soft",
  } as const;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
