import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          This page has not been built yet.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-400">
          The link may be incorrect, or the project page you are looking for
          does not exist. Let&apos;s get you back to something useful.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-400 px-6 py-3.5 text-sm font-bold text-ink-950 transition hover:bg-brand-300"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-brand-400/40 hover:bg-brand-400/10"
          >
            Browse projects
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
