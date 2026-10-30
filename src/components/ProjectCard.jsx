import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import ProjectStatus from "./ProjectStatus";
import ProjectVisual from "./ProjectVisual";
import TechIcon from "./TechIcon";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/50 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-2xl hover:shadow-brand-500/5">
      <div className="relative">
        <ProjectVisual
          project={project}
          className="aspect-[16/9] w-full"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />

        <span className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-ink-950/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          Project {project.number}
        </span>

        <span className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-ink-950/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
          Featured
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ProjectStatus status={project.status} />
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xl font-bold tracking-tight text-white">
          <Link
            href={`/projects/${project.slug}`}
            className="transition hover:text-brand-200"
          >
            {project.title}
          </Link>
          {project.banglaTitle ? (
            <span className="text-base font-medium text-slate-400">
              {project.banglaTitle}
            </span>
          ) : null}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-medium text-slate-300"
            >
              <TechIcon name={tech} size={14} />
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-2 text-xs font-semibold text-brand-200 transition hover:border-brand-400/50 hover:bg-brand-400/20"
          >
            View case study
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Live demo
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
