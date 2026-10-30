import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, MapPin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import ResumeButton from "./ResumeButton";
import SocialLinks from "./SocialLinks";

export default function Hero({ hasPhoto, hasResume }) {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -top-40 right-0 h-[34rem] w-[34rem] rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {siteConfig.availability}
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">
            Hello, I&apos;m
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl xl:text-6xl">
            {siteConfig.name.split(" ")[0]}{" "}
            <span className="text-gradient">
              {siteConfig.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-200 sm:text-2xl">
            {siteConfig.role}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {siteConfig.heroIntro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-400 px-6 py-3.5 text-sm font-bold text-ink-950 shadow-lg shadow-brand-500/20 transition hover:bg-brand-300"
            >
              View My Projects
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <ResumeButton
              hasResume={hasResume}
              label="Download Resume"
              variant="secondary"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <SocialLinks socials={siteConfig.socials} />

            <span
              className="hidden h-6 w-px bg-white/10 sm:block"
              aria-hidden="true"
            />

            <span className="inline-flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={16} className="text-brand-300" aria-hidden="true" />
              {siteConfig.location}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] animate-fade-up [animation-delay:120ms] lg:justify-self-end">
          <div
            className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-brand-400/25 via-blue-500/10 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute -right-4 top-10 hidden h-24 w-24 rounded-3xl border border-brand-400/20 bg-brand-400/[0.04] sm:block"
            aria-hidden="true"
          />

          <div className="relative rounded-[2.25rem] bg-gradient-to-br from-brand-400/50 via-white/10 to-blue-500/25 p-px shadow-2xl shadow-black/40">
            <div className="rounded-[calc(2.25rem-1px)] bg-ink-900 p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-[#eef4f8]">
                {hasPhoto ? (
                  <Image
                    src={siteConfig.profileImage}
                    alt={`Portrait of ${siteConfig.name}`}
                    fill
                    preload
                    sizes="(min-width: 1280px) 416px, (min-width: 1024px) 36vw, (min-width: 640px) 416px, 88vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-950 px-4 text-center">
                    <span className="text-6xl font-bold text-brand-400">
                      {siteConfig.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  </div>
                )}

                <div
                  className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-ink-950/5"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-ink-900/95 px-4 py-2 text-xs font-medium text-slate-300 shadow-xl shadow-black/30 backdrop-blur sm:left-6 sm:translate-x-0">
            <Code2 size={15} className="text-brand-300" aria-hidden="true" />
            React · Next.js · Node.js
          </div>
        </div>
      </div>
    </section>
  );
}
