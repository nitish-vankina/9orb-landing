/**
 * Full-width "bled" product screenshot beneath the homepage hero —
 * built from real markup so it can later be swapped for an actual
 * in-app screenshot without changing the layout around it.
 */
export function ProtectAppBleed() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
      <div className="relative h-[300px] overflow-hidden rounded-t-xl border border-b-0 border-base-800 bg-base-900 sm:h-[420px] md:h-[480px]">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="hidden w-56 shrink-0 border-r border-base-800 bg-base-850 px-4 py-5 sm:block">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <span className="flex h-5 w-5 items-center justify-center rounded-[5px] border border-base-600 font-mono text-[10px] text-accent-bright">
                9
              </span>
              9orb
              <svg width="10" height="10" viewBox="0 0 10 10" className="ml-auto text-ink-500" fill="none" aria-hidden="true">
                <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="mt-6 space-y-0.5">
              {["Readiness", "Wallets", "Findings", "Guardians", "Recovery kit"].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-md px-2 py-1.5 text-sm ${
                    i === 0 ? "bg-base-800 text-white" : "text-ink-400"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Main pane */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3 border-b border-base-800 px-5 py-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-warn" />
              <span className="font-mono text-xs text-ink-500">PRT-2291</span>
              <span className="text-sm text-white">Unlimited approval detected on wallet 0x8f2…4c1</span>
              <span className="ml-auto text-xs text-ink-500">2 / 3</span>
            </div>
            <div className="divide-y divide-base-800/70">
              {[
                { label: "Recovery Readiness", value: "92 / 100", tone: "text-signal-good" },
                { label: "Backup Health", value: "Verified", tone: "text-signal-good" },
                { label: "Guardian Health", value: "Not configured", tone: "text-ink-400" },
                { label: "Drill Health", value: "Verified 12d ago", tone: "text-signal-good" },
                { label: "Sovereign Recovery Kit", value: "Current", tone: "text-signal-good" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between px-5 py-3.5">
                  <span className="text-sm text-ink-300">{row.label}</span>
                  <span className={`font-mono text-xs ${row.tone}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base-950 to-transparent" />
      </div>
    </div>
  );
}
