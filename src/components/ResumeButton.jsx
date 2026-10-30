"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const variantClasses = {
  primary:
    "rounded-full bg-brand-400 px-6 py-3.5 text-sm font-bold text-ink-950 shadow-lg shadow-brand-500/20 hover:bg-brand-300",
  secondary:
    "rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white hover:border-brand-400/40 hover:bg-brand-400/10",
  nav: "rounded-lg border border-brand-400/30 bg-brand-400/10 px-4 py-2 text-sm font-semibold text-brand-300 hover:bg-brand-400/20",
};

export default function ResumeButton({
  hasResume,
  label = "Download CV",
  variant = "primary",
  className = "",
}) {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (!showNotice) return;

    const timer = window.setTimeout(() => setShowNotice(false), 7000);
    return () => window.clearTimeout(timer);
  }, [showNotice]);

  const classes = `inline-flex items-center justify-center gap-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${variantClasses[variant] ?? variantClasses.primary} ${className}`;

  if (hasResume) {
    return (
      <a
        href={siteConfig.resumePath}
        download="Pranto-Chandro-Paul-Resume.pdf"
        type="application/pdf"
        className={classes}
      >
        <Download size={18} aria-hidden="true" />
        {label}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowNotice((current) => !current)}
        className={classes}
      >
        <Download size={18} aria-hidden="true" />
        {label}
      </button>

      {showNotice ? (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-brand-400/30 bg-ink-800 p-4 text-sm text-slate-200 shadow-2xl shadow-black/40"
        >
          <div className="flex items-start gap-3">
            <p className="flex-1 leading-6">
              Resume not available yet. Add your PDF at{" "}
              <code className="rounded bg-black/30 px-1.5 py-0.5 text-xs text-brand-300">
                public{siteConfig.resumePath}
              </code>{" "}
              to enable this download.
            </p>
            <button
              type="button"
              onClick={() => setShowNotice(false)}
              aria-label="Dismiss resume notice"
              className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
