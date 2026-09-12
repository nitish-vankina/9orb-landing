import { Badge } from "@/components/ui/Badge";

/**
 * Product-style UI mockup of the Recovery Readiness dashboard.
 * Built from real components, not a static screenshot — meant to
 * plausibly evolve into an actual in-app screenshot later. Strictly
 * monochrome: state is carried by text and weight, never by color.
 */
export function ReadinessMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-base-700 bg-base-900">
      <div className="flex items-center justify-between border-b border-base-800 bg-base-850 px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full border border-base-500" />
          <span className="h-2 w-2 rounded-full border border-base-500" />
          <span className="h-2 w-2 rounded-full border border-base-500" />
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
            <Badge>Verified</Badge>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <span className="font-mono text-5xl font-semibold text-white">92</span>
            <span className="mb-1.5 text-sm text-ink-400">/ 100</span>
          </div>
          <div className="mt-4 h-px w-full bg-base-700">
            <div className="h-px w-[92%] bg-white" />
          </div>
          <p className="mt-3 text-xs text-ink-500">
            Backup, guardian, and drill health — last verified 3 days ago.
          </p>
        </div>

        <div className="bg-base-900 p-6">
          <span className="text-xs uppercase tracking-widest text-ink-500">
            Threat Monitoring
          </span>
          <p className="mt-4 text-sm text-white">No active critical findings</p>
          <p className="mt-3 text-xs leading-relaxed text-ink-500">
            3 wallets monitored across Bitcoin, Ethereum, and Solana.
          </p>
        </div>

        <div className="bg-base-900 p-6">
          <span className="text-xs uppercase tracking-widest text-ink-500">
            Recovery Paths
          </span>
          <div className="mt-4 flex items-end gap-2">
            <span className="font-mono text-2xl font-semibold text-white">2</span>
            <span className="pb-0.5 text-sm text-ink-400">viable</span>
          </div>
          <p className="mt-3 text-xs text-ink-500">Hardware backup · Guardian quorum</p>
        </div>

        <div className="bg-base-900 p-6">
          <span className="text-xs uppercase tracking-widest text-ink-500">
            Sovereign Recovery Kit
          </span>
          <p className="mt-4 text-sm text-white">Current</p>
          <p className="mt-3 text-xs text-ink-500">Regenerated after last wallet change.</p>
        </div>
      </div>
    </div>
  );
}
