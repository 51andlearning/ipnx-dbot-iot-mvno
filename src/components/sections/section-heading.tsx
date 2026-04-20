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
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
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
