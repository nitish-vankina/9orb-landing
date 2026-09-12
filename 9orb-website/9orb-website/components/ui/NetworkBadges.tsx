const NETWORKS = [
  { name: "Bitcoin", symbol: "BTC" },
  { name: "Ethereum", symbol: "ETH" },
  { name: "Solana", symbol: "SOL" },
] as const;

export function NetworkBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {NETWORKS.map((n) => (
        <div
          key={n.symbol}
          className="flex items-center gap-2 rounded-md border border-base-700 bg-base-900/60 px-3 py-1.5 text-sm text-ink-200"
        >
          <span className="font-mono text-xs text-accent-bright">{n.symbol}</span>
          <span className="text-ink-400">{n.name}</span>
        </div>
      ))}
    </div>
  );
}
