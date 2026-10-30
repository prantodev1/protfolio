import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Target,
} from "lucide-react";
import {
  getProjectBySlug,
  getProjectSlugs,
  getRelatedProjects,
} from "@/data/projects";
import { GitHubIcon } from "@/components/BrandIcons";
import ProjectStatus from "@/components/ProjectStatus";
import ProjectVisual from "@/components/ProjectVisual";
import TechIcon, { getTechColor } from "@/components/TechIcon";

export function generateStaticParams() {
  return getProjectSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-12 sm:pt-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-brand-300"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to projects
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <ProjectStatus status={project.status} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Project {project.number}
                </span>
              </div>

              <h1 className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-4xl font-black tracking-tight text-white sm:text-5xl">
                {project.title}
                {project.banglaTitle ? (
                  <span className="text-2xl font-semibold text-slate-400 sm:text-3xl">
                    {project.banglaTitle}
                  </span>
                ) : null}
              </h1>

              <p className="mt-4 text-xl font-medium leading-8 text-slate-300">
                {project.tagline}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                {project.description}
              </p>

              <ul
                className="mt-6 flex flex-wrap gap-2"
                aria-label="Technologies used"
              >
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    <TechIcon name={tech} size={15} />
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-400 px-6 py-3.5 text-sm font-bold text-ink-950 shadow-lg shadow-brand-500/20 transition hover:bg-brand-300"
                  >
                    Live Demo
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : null}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-brand-400/40 hover:bg-brand-400/10"
                  >
                    <GitHubIcon size={17} />
                    GitHub Repository
                  </a>
                ) : null}
              </div>

              {!project.liveUrl ? (
                <p className="mt-3 text-xs text-slate-500">
                  A live demo is not published for this project yet.
                </p>
              ) : null}
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-400/20 via-blue-500/10 to-transparent blur-2xl"
                aria-hidden="true"
              />
              <ProjectVisual
                project={project}
                className="aspect-[16/9] rounded-[2rem] border border-white/10 shadow-2xl shadow-black/30"
                sizes="(min-width: 1024px) 560px, 100vw"
                preload
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-900/40 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.5fr_0.8fr] lg:gap-16">
          <div className="space-y-12">
            <div className="rounded-2xl border border-brand-400/20 bg-gradient-to-br from-brand-400/[0.08] via-ink-900/40 to-transparent p-6">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-400/10 text-brand-300">
                  <Target size={18} aria-hidden="true" />
                </span>
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                  Project purpose
                </h2>
              </div>
              <p className="mt-4 text-base leading-8 text-slate-300">
                {project.purpose}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                Overview
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400">
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                Key features
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-950/40 p-4 text-sm leading-6 text-slate-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-brand-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                Challenges and solutions
              </h2>
              <div className="mt-4 space-y-4">
                {project.challenges.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-ink-950/40 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-400/10 font-mono text-xs font-bold text-brand-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-slate-400">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                Potential improvements
              </h2>
              <ul className="mt-4 space-y-2.5">
                {project.improvements.map((improvement) => (
                  <li
                    key={improvement}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                  >
                    <Sparkles
                      size={16}
                      className="mt-1 shrink-0 text-brand-300"
                      aria-hidden="true"
                    />
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-ink-950/60 p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                Project details
              </h2>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </dt>
                  <dd className="mt-1.5">
                    <ProjectStatus status={project.status} />
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Category
                  </dt>
                  <dd className="mt-1.5 text-slate-300">{project.category}</dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Live demo
                  </dt>
                  <dd className="mt-1.5 text-slate-300">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-brand-300 transition hover:text-brand-200"
                      >
                        Open demo
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    ) : (
                      "Not published yet"
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Repository
                  </dt>
                  <dd className="mt-1.5 text-slate-300">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-brand-300 transition hover:text-brand-200"
                      >
                        View source
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    ) : (
                      "Not available"
                    )}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-950/60 p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                Technology stack
              </h2>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {project.tech.map((tech) => {
                  const color = getTechColor(tech);

                  return (
                    <li
                      key={tech}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2 text-xs font-medium text-slate-300"
                    >
                      <span
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-white/10"
                        style={{
                          backgroundColor: `${color}12`,
                          borderColor: `${color}33`,
                        }}
                      >
                        <TechIcon name={tech} size={16} />
                      </span>
                      <span className="min-w-0 truncate">{tech}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Link
              href="/#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white transition hover:border-brand-400/30 hover:bg-brand-400/[0.08]"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to projects
            </Link>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                Keep exploring
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                More featured work
              </h2>
            </div>

            <div className="mt-8 grid gap-5">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  href={`/projects/${related.slug}`}
                  className="group grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-brand-400/30 hover:bg-brand-400/[0.04] md:grid-cols-[minmax(0,0.9fr)_1.1fr]"
                >
                  <ProjectVisual
                    project={related}
                    className="aspect-[16/9] w-full"
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />

                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <ProjectStatus status={related.status} className="self-start" />
                    <h3 className="mt-4 flex flex-wrap items-baseline gap-x-2 text-2xl font-bold text-white transition group-hover:text-brand-200">
                      {related.title}
                      {related.banglaTitle ? (
                        <span className="text-lg font-medium text-slate-400">
                          {related.banglaTitle}
                        </span>
                      ) : null}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {related.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300">
                      View case study
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-brand-400/40 hover:bg-brand-400/[0.06] hover:text-brand-200"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                Back to all projects
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
