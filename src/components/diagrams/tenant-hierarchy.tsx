const COL_NAVY = "#032572";
const COL_NAVY_DARK = "#021d5a";
const COL_NAVY_SOFT = "#e8eef9";
const COL_MUTED = "#6c757d";
const COL_BORDER = "#dee2e6";

type NodeDef = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  tone: "accent" | "navy" | "soft" | "outline";
};

const nodes: NodeDef[] = [
  { x: 350, y: 30, w: 200, h: 70, title: "ipNX IoT", sub: "MVNO owner — CMP master tenant", tone: "accent" },
  { x: 140, y: 180, w: 200, h: 70, title: "Distributor A", sub: "Regional wholesale", tone: "navy" },
  { x: 560, y: 180, w: 200, h: 70, title: "Distributor B", sub: "Sector-vertical wholesale", tone: "navy" },
  { x: 40, y: 330, w: 170, h: 64, title: "Reseller / SI", sub: "Integrator", tone: "soft" },
  { x: 230, y: 330, w: 170, h: 64, title: "Reseller / SI", sub: "Device OEM", tone: "soft" },
  { x: 470, y: 330, w: 170, h: 64, title: "Reseller / SI", sub: "Fintech partner", tone: "soft" },
  { x: 670, y: 330, w: 200, h: 64, title: "ipNX direct enterprise", sub: "Named accounts", tone: "soft" },
  { x: 50, y: 450, w: 150, h: 56, title: "End fleet", sub: "~5k SIMs", tone: "outline" },
  { x: 230, y: 450, w: 150, h: 56, title: "End fleet", sub: "~20k SIMs", tone: "outline" },
  { x: 480, y: 450, w: 150, h: 56, title: "End fleet", sub: "~12k SIMs", tone: "outline" },
  { x: 680, y: 450, w: 180, h: 56, title: "End fleet", sub: "~50k SIMs", tone: "outline" },
];

const links: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [0, 6],
  [3, 7],
  [4, 8],
  [5, 9],
  [6, 10],
];

function toneFill(t: NodeDef["tone"]) {
  if (t === "accent") return COL_NAVY_DARK;
  if (t === "navy") return COL_NAVY;
  if (t === "soft") return COL_NAVY_SOFT;
  return "#ffffff";
}
function toneStroke(t: NodeDef["tone"]) {
  return t === "outline" ? COL_BORDER : "transparent";
}
function toneTitleColor(t: NodeDef["tone"]) {
  if (t === "accent" || t === "navy") return "#ffffff";
  if (t === "soft") return COL_NAVY_DARK;
  return COL_NAVY_DARK;
}
function toneSubColor(t: NodeDef["tone"]) {
  if (t === "accent" || t === "navy") return "rgba(255,255,255,0.78)";
  return COL_MUTED;
}

export function TenantHierarchy() {
  return (
    <figure className="card-lift overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-sm sm:p-7">
      <figcaption className="mb-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
          Diagram · 04
        </div>
        <h4 className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--text)]">
          Multi-Tier Tenant Hierarchy (B2B2X)
        </h4>
        <p className="mt-1 text-sm text-muted-foreground">
          The CMP's cascading account model lets ipNX resell IoT connectivity to
          distributors, integrators and OEMs — each with their own white-label portal,
          users, pricing, and end-customer fleets.
        </p>
      </figcaption>
      <svg
        role="img"
        aria-label="Multi-tier tenant hierarchy for B2B2X wholesale"
        viewBox="0 0 900 540"
        width="100%"
        style={{ display: "block" }}
      >
        {/* Tier labels */}
        {[
          { y: 65, t: "Tier 1 · Master tenant" },
          { y: 215, t: "Tier 2 · Distributors" },
          { y: 362, t: "Tier 3 · Resellers / SIs / OEMs" },
          { y: 478, t: "Tier 4 · End customers" },
        ].map((b) => (
          <text
            key={b.t}
            x={890}
            y={b.y}
            textAnchor="end"
            fontSize={11}
            fontWeight={700}
            fill={COL_MUTED}
            style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}
          >
            {b.t}
          </text>
        ))}
        {/* Links */}
        {links.map(([a, b]) => {
          const na = nodes[a];
          const nb = nodes[b];
          const x1 = na.x + na.w / 2;
          const y1 = na.y + na.h;
          const x2 = nb.x + nb.w / 2;
          const y2 = nb.y;
          return (
            <path
              key={`${a}-${b}`}
              d={`M ${x1},${y1} C ${x1},${(y1 + y2) / 2} ${x2},${(y1 + y2) / 2} ${x2},${y2}`}
              fill="none"
              stroke={COL_NAVY}
              strokeOpacity={0.35}
              strokeWidth={1.25}
            />
          );
        })}
        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx={10}
              fill={toneFill(n.tone)}
              stroke={toneStroke(n.tone)}
              strokeWidth={1}
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + (n.sub ? n.h / 2 - 4 : n.h / 2 + 4)}
              textAnchor="middle"
              fontSize={14}
              fontWeight={700}
              fill={toneTitleColor(n.tone)}
            >
              {n.title}
            </text>
            {n.sub ? (
              <text
                x={n.x + n.w / 2}
                y={n.y + n.h / 2 + 16}
                textAnchor="middle"
                fontSize={11}
                fill={toneSubColor(n.tone)}
              >
                {n.sub}
              </text>
            ) : null}
          </g>
        ))}
      </svg>
    </figure>
  );
}
