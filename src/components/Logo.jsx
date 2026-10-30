import { siteConfig } from "@/data/portfolio";

// Personal monogram mark used in the navbar and footer. It follows the same
// cyan-to-blue identity as the favicon so the brand stays consistent.
export default function Logo({ className = "" }) {
  return (
    <span
      className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-200 via-brand-400 to-blue-600 p-px shadow-lg shadow-brand-500/20 transition duration-300 group-hover:shadow-brand-500/40 ${className}`}
      aria-hidden="true"
    >
      <span className="relative grid h-full w-full place-items-center overflow-hidden rounded-[11px] bg-ink-950">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.09] to-transparent" />
        <span className="relative bg-gradient-to-br from-brand-200 via-brand-300 to-blue-400 bg-clip-text text-[13px] font-black tracking-tight text-transparent">
          {siteConfig.initials}
        </span>
        <span className="absolute bottom-1 right-1 h-1 w-1 rounded-full bg-brand-300" />
      </span>
    </span>
  );
}
