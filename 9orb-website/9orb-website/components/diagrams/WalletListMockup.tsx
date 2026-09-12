const WALLETS = [
  { label: "Hardware wallet", chain: "BTC", status: "Verified" },
  { label: "Ledger — primary", chain: "ETH", status: "Verified" },
  { label: "Hot wallet", chain: "SOL", status: "Monitored" },
];

export function WalletListMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-base-700 bg-base-900 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-base-800 px-5 py-3.5">
        <span className="text-sm font-medium text-white">Connected wallets</span>
        <span className="text-xs text-ink-500">Read-only</span>
      </div>
      <ul className="divide-y divide-base-800">
        {WALLETS.map((w) => (
          <li key={w.label} className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-sm text-white">{w.label}</p>
              <p className="mt-0.5 font-mono text-[11px] text-ink-500">{w.chain}</p>
            </div>
            <span className="rounded-full border border-base-700 px-2.5 py-1 text-xs text-ink-300">
              {w.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
