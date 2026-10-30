import { Compass, Sparkles } from "lucide-react";
import { about } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/10 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="About me"
            title={about.title}
            description="A little context about how I got here, what I care about, and where I am heading."
          />

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-400">
            <Sparkles
              size={18}
              className="mt-0.5 shrink-0 text-brand-300"
              aria-hidden="true"
            />
            <p>{about.interests}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-brand-400/20 bg-gradient-to-br from-brand-400/[0.08] via-ink-900/40 to-transparent p-6 sm:p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400/10 text-brand-300">
              <Compass size={22} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">
              Where I&apos;m heading
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              My goal is to become a professional full-stack web developer and
              grow into AI engineering. I am building that foundation one
              project, one API, and one careful detail at a time.
            </p>
          </div>

          <dl className="grid gap-3">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-slate-200">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
