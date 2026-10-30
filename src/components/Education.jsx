import { GraduationCap, PencilLine } from "lucide-react";
import { education } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="The academic foundation behind my development work, alongside the projects I build outside the classroom."
        />

        <ol className="relative mt-10 max-w-4xl space-y-6">
          <span
            className="absolute bottom-3 left-[7px] top-3 w-px bg-white/10"
            aria-hidden="true"
          />

          {education.map((item, index) => (
            <li key={`${item.degree}-${index}`} className="relative pl-8">
              <span
                className="absolute left-0 top-6 h-3.5 w-3.5 rounded-full border-2 border-ink-950 bg-brand-400 ring-2 ring-brand-400/20"
                aria-hidden="true"
              />

              <article
                className={`rounded-2xl border bg-white/[0.03] p-6 ${
                  item.placeholder
                    ? "border-dashed border-white/20"
                    : "border-white/10"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                    <GraduationCap size={15} aria-hidden="true" />
                    {item.period}
                  </span>

                  {item.placeholder ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-200">
                      <PencilLine size={12} aria-hidden="true" />
                      Editable placeholder
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 text-lg font-bold text-white">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  {item.institution}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.field}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.details}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
