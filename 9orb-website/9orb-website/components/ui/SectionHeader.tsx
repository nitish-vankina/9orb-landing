import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-ink-500">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-[28px] font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-ink-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
