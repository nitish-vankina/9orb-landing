import { Badge } from "@/components/ui/Badge";

export function ThreatFindingMockup() {
  const findings = [
    {
      chain: "ETH",
      title: "Unlimited token approval to unverified contract",
      detail: "Approval detected on wallet 0x8f2…4c1 for a contract not present in known-good registries.",
      severity: "warn" as const,
    },
    {
      chain: "SOL",
      title: "No active findings",
      detail: "Program and delegate authority checks passed on last scan.",
      severity: "good" as const,
    },
    {
      chain: "BTC",
      title: "No active findings",
      detail: "No high-confidence malicious-address matches on recent activity.",
      severity: "good" as const,
    },
  ];

  // Monochrome only: a filled marker means "needs attention", a hollow
  // marker means "clear". No color carries meaning here.
  const toneMap = {
    warn: { filled: true, label: "Needs review" },
    good: { filled: false, label: "Clear" },
  } as const;

  return (
    <div className="overflow-hidden rounded-xl border border-base-700 bg-base-900">
      <div className="flex items-center justify-between border-b border-base-800 px-5 py-3.5">
        <span className="text-sm font-medium text-white">Threat findings</span>
        <Badge>High-confidence only</Badge>
      </div>
      <ul className="divide-y divide-base-800">
        {findings.map((f, i) => (
          <li key={i} className="flex items-start gap-4 px-5 py-4">
            <span className="mt-1 flex h-6 w-10 shrink-0 items-center justify-center rounded border border-base-700 font-mono text-[10px] text-ink-400">
              {f.chain}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    toneMap[f.severity].filled ? "bg-white" : "border border-base-500"
                  }`}
                />
                <p className="truncate text-sm text-white">{f.title}</p>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-ink-500">{f.detail}</p>
            </div>
            <span className="shrink-0 text-xs text-ink-500">{toneMap[f.severity].label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
