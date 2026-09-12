const DEVICE_ITEMS = ["Private keys", "Seed material", "Encryption", "Transaction signing"];
const BOUNDARY_ITEMS = ["Public addresses", "Encrypted metadata", "Signed authorizations"];
const NINEORB_ITEMS = ["Monitoring", "Coordination", "Alerting", "Readiness scoring"];

function Block({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: "device" | "boundary" | "ninorb";
}) {
  const toneClasses = {
    device: "border-accent/40 bg-accent-soft/40",
    boundary: "border-base-700 bg-base-900/60",
    ninorb: "border-base-700 bg-base-900",
  }[tone];

  return (
    <div className={`w-full max-w-sm rounded-lg border p-5 ${toneClasses}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-ink-300">
        {label}
      </span>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ink-200">
            <span className="h-1 w-1 rounded-full bg-ink-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Arrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 py-2">
      <svg width="16" height="28" viewBox="0 0 16 28" fill="none" aria-hidden="true">
        <line x1="8" y1="0" x2="8" y2="20" stroke="#3E434C" strokeWidth="1.4" />
        <path d="M2 18l6 8 6-8" stroke="#3E434C" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-center text-[11px] leading-tight text-ink-500">{label}</span>
    </div>
  );
}

/**
 * Trust-boundary diagram: what stays on the user's device vs. what
 * 9orb's systems can see. The boundary itself is the point of the
 * diagram, not decoration.
 */
export function SovereignBoundaryDiagram() {
  return (
    <div className="flex flex-col items-center rounded-xl border border-base-800 bg-base-950 p-8 sm:p-10">
      <Block label="Your device" items={DEVICE_ITEMS} tone="device" />
      <Arrow label="only public / encrypted data crosses the boundary" />
      <Block label="Boundary" items={BOUNDARY_ITEMS} tone="boundary" />
      <Arrow label="9orb never sees secrets" />
      <Block label="9orb systems" items={NINEORB_ITEMS} tone="ninorb" />
    </div>
  );
}
