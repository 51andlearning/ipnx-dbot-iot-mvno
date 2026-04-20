type Props = {
  kicker?: string;
  title: string;
  lede?: string;
  className?: string;
};

export function SectionHeading({ kicker, title, lede, className = "" }: Props) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      {kicker ? (
        <div className="mb-4 inline-block rounded-full bg-[color:var(--accent-light)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-[color:var(--text)] sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
