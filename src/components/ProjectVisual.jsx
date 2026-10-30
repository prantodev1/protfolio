import Image from "next/image";
import { hasPublicFile } from "@/lib/assets";

const accentStyles = {
  cyan: {
    panel: "from-cyan-500/25 via-sky-500/10 to-ink-950",
    text: "text-cyan-300",
    glow: "bg-cyan-400/25",
  },
  emerald: {
    panel: "from-emerald-500/25 via-teal-500/10 to-ink-950",
    text: "text-emerald-300",
    glow: "bg-emerald-400/25",
  },
  violet: {
    panel: "from-violet-500/25 via-indigo-500/10 to-ink-950",
    text: "text-violet-300",
    glow: "bg-violet-400/25",
  },
  amber: {
    panel: "from-amber-500/25 via-orange-500/10 to-ink-950",
    text: "text-amber-300",
    glow: "bg-amber-400/25",
  },
};

export default function ProjectVisual({
  project,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  preload = false,
}) {
  const hasImage = hasPublicFile(project.image);
  const accent = accentStyles[project.accent] ?? accentStyles.cyan;

  return (
    <div className={`relative overflow-hidden bg-ink-800 ${className}`}>
      {hasImage ? (
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          preload={preload}
          sizes={sizes}
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accent.panel}`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div
            className={`absolute -right-12 -top-12 h-44 w-44 rounded-full ${accent.glow} blur-3xl`}
          />
          <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                {project.status}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Preview
              </span>
            </div>

            <div>
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-lg font-black ${accent.text}`}
              >
                {project.monogram}
              </div>
              <p className="mt-4 text-xl font-bold text-white">
                {project.title}
              </p>
              <p className="mt-1 max-w-xs text-sm leading-6 text-slate-400">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
        aria-hidden="true"
      />
      {!hasImage ? (
        <span className="sr-only">
          {project.title} preview placeholder. Add a screenshot at{" "}
          {project.image}.
        </span>
      ) : null}
    </div>
  );
}
