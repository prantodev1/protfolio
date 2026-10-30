import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { projects } from "@/data/projects";
import { GitHubIcon } from "./BrandIcons";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const github = siteConfig.socials.find(
    (social) => social.icon === "github",
  )?.href;

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="Two featured builds, examined in detail."
            description="A fitness planner and a Bangla market price platform. Each case study covers the problem, the key features, the stack, and what I would improve next."
          />

          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-brand-400/40 hover:bg-brand-400/[0.06] hover:text-brand-200 md:self-auto"
            >
              <GitHubIcon size={17} />
              More on GitHub
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
