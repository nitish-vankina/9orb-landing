const STAGES = [
  { title: "Chain nodes", detail: "Bitcoin, Ethereum, and Solana network participants" },
  { title: "Data ingestion", detail: "Normalized, chain-specific event and state streams" },
  { title: "Processing", detail: "Chain-specific decoding, indexing, and enrichment" },
  { title: "9orb systems", detail: "Monitoring, readiness, and internal research pipelines" },
];

/**
 * Vertical pipeline diagram: nodes → ingestion → processing → internal
 * systems. Communicates real systems engineering without fabricating
 * scale metrics (uptime %, node counts, etc.).
 */
export function InfrastructurePipelineDiagram() {
  return (
    <div className="rounded-xl border border-base-800 bg-base-950 p-8 sm:p-10">
      <div className="flex flex-col">
        {STAGES.map((stage, i) => (
          <div key={stage.title}>
            <div className="flex items-start gap-4 rounded-lg border border-base-800 bg-base-900/50 px-5 py-4">
              <span className="font-mono text-xs text-ink-500">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-sm font-medium text-white">{stage.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-500">{stage.detail}</p>
              </div>
            </div>
            {i < STAGES.length - 1 ? (
              <div className="flex justify-start pl-[26px]">
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
                  <line x1="8" y1="0" x2="8" y2="16" stroke="#2A2E35" strokeWidth="1.4" />
                  <path d="M2 14l6 7 6-7" stroke="#2A2E35" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
