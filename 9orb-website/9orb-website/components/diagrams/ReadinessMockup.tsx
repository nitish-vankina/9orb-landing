import { Badge } from "@/components/ui/Badge";

/**
 * Product-style UI mockup of the Recovery Readiness dashboard.
 * Built from real components, not a static screenshot — meant to
 * plausibly evolve into an actual in-app screenshot later.
 */
export function ReadinessMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-base-700 bg-base-900 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-base-800 bg-base-850 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-signal-bad/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-warn/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-good/70" />
        </div>
        <span className="font-mono text-xs text-ink-500">protect.9orb.com</span>
        <span className="w-12" aria-hidden="true" />
      </div>

      <div className="grid gap-px bg-base-800 sm:grid-cols-2">
        <div className="bg-base-900 p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-ink-500">
              Recovery Readiness
            </span>
            <Badge tone="good">Verified</Badge>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <span className="font-mono text-5xl font-semibold text-white">92</span>
            <span className="mb-1.5 text-sm text-ink-400">/ 100</span>
          </div>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-base-800">
            <div className="h-full w-[92%] rounded-full bg-signal-good" />
          </div>
          <p className="mt-3 text-xs text-ink-500">
            Backup, guardian, and drill health — last verified 3 days ago.
          </p>
        </div>

        <div className="bg-base-900 p-6">
          <span className="text-xs uppercase tracking-widest text-ink-500">
            Threat Monitoring
          </span>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal-good" />
            <span className="text-sm text-white">No active critical findings</span>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-ink-500">
            3 wallets monitored across Bitcoin, Ethereum, and Solana.
          </p>
        </div>

        <div className="bg-base-900 p-6">
          <span className="text-xs uppercase tracking-widest text-ink-500">
            Recovery Paths
          </span>
          <div className="mt-4 flex items-center gap-2">
            <span className="font-mono text-2xl font-semibold text-white">2</span>
            <span className="text-sm text-ink-400">viable</span>
          </div>
          <p className="mt-3 text-xs text-ink-500">Hardware backup · Guardian quorum</p>
        </div>

        <div className="bg-base-900 p-6">
          <span className="text-xs uppercase tracking-widest text-ink-500">
            Sovereign Recovery Kit
          </span>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal-good" />
            <span className="text-sm text-white">Current</span>
          </div>
          <p className="mt-3 text-xs text-ink-500">Regenerated after last wallet change.</p>
        </div>
      </div>
    </div>
  );
}
