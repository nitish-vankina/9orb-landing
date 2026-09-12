const CHAINS = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "SOL", name: "Solana" },
];

/**
 * Per-chain node topology summary card, styled like internal tooling
 * rather than marketing art.
 */
export function InfraTopologyMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-base-700 bg-base-900">
      <div className="flex items-center justify-between border-b border-base-800 px-5 py-3.5">
        <span className="text-sm font-medium text-white">Network connectivity</span>
        <span className="font-mono text-xs text-ink-500">internal</span>
      </div>
      <ul className="divide-y divide-base-800">
        {CHAINS.map((c) => (
          <li key={c.symbol} className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-11 items-center justify-center rounded border border-base-700 font-mono text-[10px] text-ink-300">
                {c.symbol}
              </span>
              <span className="text-sm text-ink-200">{c.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-soft" />
              <span className="text-xs text-ink-500">Connected</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
