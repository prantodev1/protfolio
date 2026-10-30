export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}
