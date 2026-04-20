const COL_NAVY = "#032572";
const COL_NAVY_DARK = "#021d5a";
const COL_NAVY_SOFT = "#e8eef9";
const COL_TEXT = "#212529";
const COL_MUTED = "#6c757d";
const COL_BORDER = "#dee2e6";
const COL_WHITE = "#ffffff";

type LayerProps = {
  y: number;
  title: string;
  items: string[];
  tone: "soft" | "mid" | "dark" | "outline";
};

function Layer({ y, title, items, tone }: LayerProps) {
  const fill =
    tone === "soft"
      ? COL_NAVY_SOFT
      : tone === "mid"
      ? COL_NAVY
      : tone === "dark"
      ? COL_NAVY_DARK
      : COL_WHITE;
  const stroke = tone === "outline" ? COL_BORDER : "transparent";
  const textColor = tone === "soft" || tone === "outline" ? COL_NAVY_DARK : COL_WHITE;
  const subColor = tone === "soft" || tone === "outline" ? COL_MUTED : "rgba(255,255,255,0.8)";

  return (
    <g>
      <rect
        x={40}
        y={y}
        width={820}
        height={60}
        rx={10}
        fill={fill}
        stroke={stroke}
        strokeWidth={1}
      />
      <text
        x={60}
        y={y + 26}
        fontSize={13}
        fontWeight={700}
        fill={textColor}
        style={{ letterSpacing: "0.02em" }}
      >
        {title}
      </text>
      <text x={60} y={y + 46} fontSize={11} fill={subColor}>
        {items.join(" · ")}
      </text>
    </g>
  );
}

export function PlatformArchitecture() {
  return (
    <figure className="card-lift overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-sm sm:p-7">
      <figcaption className="mb-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
          Diagram · 01
        </div>
        <h4 className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--text)]">
          floLIVE Platform Architecture
        </h4>
        <p className="mt-1 text-sm text-muted-foreground">
          The full stack, from IoT devices at the edge to the enterprises and OEMs that consume
          the connectivity — with the Connectivity Management Platform as the control plane.
        </p>
      </figcaption>
      <svg
        role="img"
        aria-label="floLIVE platform architecture stack diagram"
        viewBox="0 0 900 520"
        width="100%"
        style={{ display: "block" }}
      >
        <Layer
          y={20}
          title="Enterprise customers · OEMs · Device makers"
          items={["Buyers of ipNX IoT connectivity"]}
          tone="outline"
        />
        <ArrowDown x={450} y={82} />
        <Layer
          y={100}
          title="Self-service Portal · REST APIs · White-label Reseller Portal"
          items={["Branded as ipNX IoT", "Dashboards", "Rules & alerts"]}
          tone="soft"
        />
        <ArrowDown x={450} y={162} />
        <Layer
          y={180}
          title="Connectivity Management Platform (CMP)"
          items={["Multi-tenant", "Multi-tier", "SIM lifecycle", "Monitoring"]}
          tone="mid"
        />
        <ArrowDown x={450} y={242} />
        <Layer
          y={260}
          title="BSS / OSS · Online Charging (OCS) · Billing · eUICC (RSP)"
          items={["Real-time rating", "GSMA / SAS-approved", "Zero-touch SIM provisioning"]}
          tone="mid"
        />
        <ArrowDown x={450} y={322} />
        <Layer
          y={340}
          title="Cloud-native IoT Core Network"
          items={["2G", "3G", "4G", "NB-IoT", "LTE-M", "5G"]}
          tone="dark"
        />
        <ArrowDown x={450} y={402} />
        <Layer
          y={420}
          title="Multi-IMSI · Local Breakout (40+ PoPs) · Host-MNO Interconnect"
          items={["Data sovereignty", "Low latency", "Failover"]}
          tone="dark"
        />
        <ArrowDown x={450} y={482} />
        <Layer
          y={480}
          title="Host MNO radio networks · IoT devices at the edge"
          items={["MTN", "Airtel", "9mobile", "Glo", "…"]}
          tone="outline"
        />
      </svg>
    </figure>
  );
}

function ArrowDown({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x} y2={y + 16} stroke={COL_NAVY} strokeWidth={1.5} />
      <polygon points={`${x - 4},${y + 12} ${x + 4},${y + 12} ${x},${y + 18}`} fill={COL_NAVY} />
    </g>
  );
}
