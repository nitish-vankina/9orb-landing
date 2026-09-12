/**
 * Restrained hero visualization: an abstract network / infrastructure
 * topology rendered in SVG. Intentionally not decorative — it reads as
 * nodes, links, and telemetry rather than generic "crypto" art.
 */
export function HeroNetworkViz() {
  const nodes = [
    { x: 80, y: 60 }, { x: 220, y: 40 }, { x: 360, y: 90 },
    { x: 500, y: 50 }, { x: 640, y: 100 }, { x: 140, y: 170 },
    { x: 300, y: 200 }, { x: 460, y: 180 }, { x: 600, y: 220 },
    { x: 40, y: 250 }, { x: 220, y: 280 }, { x: 400, y: 260 },
    { x: 560, y: 300 }, { x: 700, y: 230 },
  ];

  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7], [7, 8],
    [4, 8], [5, 9], [6, 10], [10, 11], [11, 12], [12, 13], [8, 13],
    [2, 6], [7, 11],
  ];

  return (
    <div className="relative mx-auto aspect-[16/7] w-full max-w-4xl overflow-hidden rounded-xl border border-base-800 bg-base-900/40 mask-fade-x">
      <svg
        viewBox="0 0 740 340"
        className="h-full w-full"
        role="img"
        aria-label="Abstract diagram of interconnected infrastructure nodes"
      >
        <g stroke="rgba(76,123,255,0.22)" strokeWidth="1">
          {edges.map(([a, b], i) => {
            const na = nodes[a];
            const nb = nodes[b];
            if (!na || !nb) return null;
            return (
              <line
                key={i}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
              />
            );
          })}
        </g>
        <g stroke="rgba(122,160,255,0.55)" strokeWidth="1.4" fill="none">
          {edges.slice(0, 6).map(([a, b], i) => {
            const na = nodes[a];
            const nb = nodes[b];
            if (!na || !nb) return null;
            return (
              <line
                key={`p-${i}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                strokeDasharray="4 240"
                className="animate-dash"
                style={{ animationDelay: `${i * 0.9}s` }}
              />
            );
          })}
        </g>
        {nodes.map((n, i) => (
          <g key={i} className="animate-pulse-soft" style={{ animationDelay: `${(i % 6) * 0.35}s` }}>
            <circle cx={n.x} cy={n.y} r={i % 5 === 0 ? 4 : 2.5} fill="#0C0D10" stroke="#4C7BFF" strokeWidth="1.2" />
          </g>
        ))}
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-900 via-transparent to-transparent" />
    </div>
  );
}
