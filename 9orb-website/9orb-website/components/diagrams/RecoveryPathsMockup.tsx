const PATHS = [
  { title: "Hardware backup", status: "Viable", freshness: "Verified 3 days ago" },
  { title: "Guardian quorum (2-of-3)", status: "Viable", freshness: "Drilled 12 days ago" },
  { title: "Sovereign Recovery Kit", status: "Current", freshness: "Regenerated on last change" },
];

export function RecoveryPathsMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-base-700 bg-base-900 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-base-800 px-5 py-3.5">
        <span className="text-sm font-medium text-white">Recovery paths</span>
        <span className="text-xs text-ink-500">Policy-aware</span>
      </div>
      <ul className="divide-y divide-base-800">
        {PATHS.map((p) => (
          <li key={p.title} className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-sm text-white">{p.title}</p>
              <p className="mt-0.5 text-xs text-ink-500">{p.freshness}</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs text-signal-good">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-good" />
              {p.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
