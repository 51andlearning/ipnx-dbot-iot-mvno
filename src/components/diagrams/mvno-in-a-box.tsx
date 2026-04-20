const COL_NAVY = "#032572";
const COL_NAVY_DARK = "#021d5a";
const COL_NAVY_SOFT = "#e8eef9";
const COL_TEXT = "#212529";
const COL_MUTED = "#6c757d";
const COL_BORDER = "#dee2e6";

type Node = { x: number; y: number; label: string; sub: string };

const nodes: Node[] = [
  { x: 450, y: 60, label: "CMP", sub: "Multi-tenant console" },
  { x: 720, y: 120, label: "Core", sub: "Cloud-native 2G–5G" },
  { x: 780, y: 290, label: "SIM", sub: "Branded physical SIM" },
  { x: 720, y: 460, label: "eSIM", sub: "SGP.32 · RSP" },
  { x: 450, y: 520, label: "APN", sub: "Dedicated + branded" },
  { x: 180, y: 460, label: "BSS / OSS", sub: "Billing · OCS · CRM" },
  { x: 120, y: 290, label: "Portal", sub: "White-labelled" },
  { x: 180, y: 120, label: "Multi-IMSI", sub: "Multi-network resilience" },
];

export function MvnoInABox() {
  const cx = 450;
  const cy = 290;
  return (
    <figure className="card-lift overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-sm sm:p-7">
      <figcaption className="mb-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
          Diagram · 02
        </div>
        <h4 className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--text)]">
          MVNO in a Box — What ipNX Gets
        </h4>
        <p className="mt-1 text-sm text-muted-foreground">
          Eight turnkey components orbiting the ipNX IoT brand, delivered on day one —
          no CapEx, no infrastructure build, no orchestration effort.
        </p>
      </figcaption>
      <svg
        role="img"
        aria-label="MVNO in a Box components orbiting the ipNX IoT brand"
        viewBox="0 0 900 600"
        width="100%"
        style={{ display: "block" }}
      >
        {/* Orbit ring */}
        <circle
          cx={cx}
          cy={cy}
          r={210}
          fill="none"
          stroke={COL_NAVY_SOFT}
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
        {/* Connector lines */}
        {nodes.map((n) => (
          <line
            key={`l-${n.label}`}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke={COL_BORDER}
            strokeWidth={1}
          />
        ))}
        {/* Center brand disc */}
        <g>
          <circle cx={cx} cy={cy} r={90} fill={COL_NAVY} />
          <text
            x={cx}
            y={cy - 8}
            textAnchor="middle"
            fontSize={22}
            fontWeight={800}
            fill="#ffffff"
            style={{ letterSpacing: "-0.01em" }}
          >
            ipNX IoT
          </text>
          <text
            x={cx}
            y={cy + 18}
            textAnchor="middle"
            fontSize={11}
            fill="rgba(255,255,255,0.75)"
            style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}
          >
            MVNO · Nigeria
          </text>
        </g>
        {/* Component nodes */}
        {nodes.map((n) => (
          <g key={n.label}>
            <rect
              x={n.x - 90}
              y={n.y - 34}
              width={180}
              height={68}
              rx={12}
              fill="#ffffff"
              stroke={COL_NAVY}
              strokeWidth={1.25}
            />
            <text
              x={n.x}
              y={n.y - 10}
              textAnchor="middle"
              fontSize={14}
              fontWeight={700}
              fill={COL_NAVY_DARK}
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={n.y + 10}
              textAnchor="middle"
              fontSize={11}
              fill={COL_MUTED}
            >
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
