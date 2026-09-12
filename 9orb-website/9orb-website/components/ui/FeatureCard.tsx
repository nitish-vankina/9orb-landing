import { ReactNode } from "react";

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
}) {
  return (
    <div className="group rounded-lg border border-base-800 bg-base-900/40 p-5 transition-colors duration-150 hover:border-base-600 hover:bg-base-900">
      {icon ? (
        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-base-700 text-ink-200">
          {icon}
        </div>
      ) : null}
      <h3 className="text-sm font-medium text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{description}</p>
    </div>
  );
}
