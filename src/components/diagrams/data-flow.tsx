const COL_NAVY = "#032572";
const COL_NAVY_DARK = "#021d5a";
const COL_NAVY_SOFT = "#e8eef9";
const COL_MUTED = "#6c757d";
const COL_BORDER = "#dee2e6";

type Step = { label: string; sub: string; tone: "soft" | "navy" | "dark" };

const steps: Step[] = [
  { label: "IoT Device", sub: "Meter · PoS · Sensor", tone: "soft" },
  { label: "SIM / eSIM", sub: "Multi-IMSI · SGP.32", tone: "soft" },
  { label: "Host MNO RAN", sub: "4G / NB-IoT / LTE-M", tone: "soft" },
  { label: "floLIVE Core", sub: "In-country · cloud-native", tone: "navy" },
  { label: "Local Breakout / APN", sub: "NDPR-aligned · static IP", tone: "navy" },
  { label: "Enterprise VPN / App", sub: "ipNX customer backend", tone: "dark" },
];

export function DataFlow() {
  const boxW = 140;
  const boxH = 90;
  const gap = 14;
  const totalW = steps.length * boxW + (steps.length - 1) * gap;
  const startX = (900 - totalW) / 2;
  const y = 140;

  return (
    <figure className="card-lift overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-sm sm:p-7">
      <figcaption className="mb-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
          Diagram · 03
        </div>
        <h4 className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--text)]">
          End-to-End IoT Data Flow
        </h4>
        <p className="mt-1 text-sm text-muted-foreground">
          Every packet from a Nigerian IoT device reaches the enterprise via a local
          breakout — keeping latency low and data sovereignty intact.
        </p>
      </figcaption>
      <svg
        role="img"
        aria-label="End-to-end IoT data flow from device to enterprise"
        viewBox="0 0 900 300"
        width="100%"
        style={{ display: "block" }}
      >
        {/* Background label bands */}
        <text
          x={startX + boxW + gap / 2 - 6}
          y={40}
          fontSize={11}
          fontWeight={700}
          fill={COL_MUTED}
          style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          Edge
        </text>
        <text
          x={startX + 3 * boxW + 2.5 * gap - 8}
          y={40}
          fontSize={11}
          fontWeight={700}
          fill={COL_NAVY}
          style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          floLIVE Platform
        </text>
        <text
          x={startX + 5 * boxW + 4.5 * gap - 28}
          y={40}
          fontSize={11}
          fontWeight={700}
          fill={COL_NAVY_DARK}
          style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          Consumer
        </text>

        {steps.map((s, i) => {
          const x = startX + i * (boxW + gap);
          const fill =
            s.tone === "soft" ? "#ffffff" : s.tone === "navy" ? COL_NAVY : COL_NAVY_DARK;
          const stroke = s.tone === "soft" ? COL_NAVY : "transparent";
          const labelColor = s.tone === "soft" ? COL_NAVY_DARK : "#ffffff";
          const subColor = s.tone === "soft" ? COL_MUTED : "rgba(255,255,255,0.8)";
          return (
            <g key={s.label}>
              <rect
                x={x}
                y={y}
                width={boxW}
                height={boxH}
                rx={12}
                fill={fill}
                stroke={stroke}
                strokeWidth={1.25}
              />
              <text
                x={x + boxW / 2}
                y={y + 40}
                textAnchor="middle"
                fontSize={13}
                fontWeight={700}
                fill={labelColor}
              >
                {s.label}
              </text>
              <text
                x={x + boxW / 2}
                y={y + 60}
                textAnchor="middle"
                fontSize={11}
                fill={subColor}
              >
                {s.sub}
              </text>
              {i < steps.length - 1 ? (
                <Arrow
                  x1={x + boxW + 2}
                  x2={x + boxW + gap - 2}
                  yMid={y + boxH / 2}
                />
              ) : null}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

function Arrow({ x1, x2, yMid }: { x1: number; x2: number; yMid: number }) {
  return (
    <g>
      <line x1={x1} y1={yMid} x2={x2 - 4} y2={yMid} stroke={COL_NAVY} strokeWidth={1.5} />
      <polygon
        points={`${x2 - 6},${yMid - 4} ${x2 - 6},${yMid + 4} ${x2 + 1},${yMid}`}
        fill={COL_NAVY}
      />
    </g>
  );
}
