type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  compact?: boolean;
};

export function SectionHeading({ eyebrow, title, description, compact = false }: SectionHeadingProps) {
  return (
    <div className={compact ? "max-w-2xl" : "max-w-3xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`mt-5 text-balance ${compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}>
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
