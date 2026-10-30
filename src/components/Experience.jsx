import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle2 } from "lucide-react";
import { experience, experienceIntro } from "@/data/portfolio";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-white/10 bg-ink-900/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Experience, built one project at a time."
          description="I am at the beginning of my professional journey. Until I add real roles here, this section shows the project work that has taught me the most."
        />

        {experience.length > 0 ? (
          <ol className="relative mt-10 max-w-4xl space-y-6">
            <span
              className="absolute bottom-3 left-[7px] top-3 w-px bg-white/10"
              aria-hidden="true"
            />

            {experience.map((item, index) => (
              <li key={`${item.role}-${index}`} className="relative pl-8">
                <span
                  className="absolute left-0 top-6 h-3.5 w-3.5 rounded-full border-2 border-ink-950 bg-brand-400 ring-2 ring-brand-400/20"
                  aria-hidden="true"
                />

                <article className="rounded-2xl border border-white/10 bg-ink-950/50 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                      {item.period}
                    </span>
                    {item.location ? (
                      <span className="text-xs text-slate-500">
                        {item.location}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {item.company}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.responsibilities?.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-400"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-brand-400"
                          aria-hidden="true"
                        />
                        {responsibility}
                      </li>
                    ))}
                  </ul>

                  {item.tech?.length ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <div className="mt-10 rounded-3xl border border-brand-400/20 bg-gradient-to-br from-brand-400/[0.07] via-ink-950/40 to-transparent p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-400/10 text-brand-300">
                <Briefcase size={21} aria-hidden="true" />
              </div>
              <span className="rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3 py-1 text-xs font-semibold text-emerald-300">
                Open to opportunities
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Looking for my first professional role
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              {experienceIntro}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group rounded-2xl border border-white/10 bg-ink-950/50 p-4 transition hover:border-brand-400/30 hover:bg-brand-400/[0.04]"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-brand-200">
                    {project.title}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-500">
                    {project.tagline}
                  </p>
                </Link>
              ))}
            </div>

            <Link
              href="/#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-brand-200"
            >
              Explore all projects
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
