import { Code2, Database, Server, Wrench } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import TechIcon, { getTechColor } from "./TechIcon";

const groupIconMap = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-white/10 bg-ink-900/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I use to turn ideas into working interfaces."
          description="A full-stack toolkit for building responsive interfaces, connecting APIs, and shipping reliable projects."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const GroupIcon = groupIconMap[group.icon] ?? Code2;
            const isSingle = group.skills.length === 1;

            return (
              <article
                key={group.title}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-950/50 p-6 transition duration-300 hover:border-brand-400/25 hover:bg-ink-950/70 sm:p-7"
              >
                <GroupIcon
                  size={150}
                  strokeWidth={1}
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-8 -right-6 -z-10 text-white/[0.035]"
                />

                <div className="relative flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-300 transition group-hover:border-brand-400/30 group-hover:bg-brand-400/10">
                    <GroupIcon size={21} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid flex-1 grid-cols-2 content-center gap-2.5">
                  {group.skills.map((skill) => {
                    const color = getTechColor(skill);

                    return (
                      <li
                        key={skill}
                        className={`group/skill flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-400/[0.07] ${
                          isSingle ? "col-span-2" : ""
                        }`}
                      >
                        <span
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-ink-950/60 transition duration-300 group-hover/skill:scale-105"
                          style={{
                            backgroundColor: `${color}12`,
                            borderColor: `${color}33`,
                          }}
                        >
                          <TechIcon name={skill} size={19} />
                        </span>
                        <span className="truncate text-xs font-medium text-slate-300 transition group-hover/skill:text-white">
                          {skill}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-auto pt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {String(group.skills.length).padStart(2, "0")}{" "}
                  {group.skills.length === 1 ? "technology" : "technologies"}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
