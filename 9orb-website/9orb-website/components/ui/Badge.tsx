import { ReactNode } from "react";

export function Badge({
  children,
  tone = "outline",
}: {
  children: ReactNode;
  /** solid = white fill, black text. outline = bordered, gray text. */
  tone?: "outline" | "solid";
}) {
  const toneClasses = {
    outline: "border-base-600 text-ink-300",
    solid: "border-transparent bg-white text-base-950",
  } as const;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
