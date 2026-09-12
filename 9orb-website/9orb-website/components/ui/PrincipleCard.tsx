export function PrincipleCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div className="relative border-t border-base-800 py-6 first:border-t-0 md:border-t-0 md:border-l md:py-0 md:pl-6 md:first:pl-0">
      <span className="font-mono text-xs text-ink-500">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="mt-2 text-base font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-400">{description}</p>
    </div>
  );
}
