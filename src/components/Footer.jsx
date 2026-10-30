import Link from "next/link";
import { ArrowUp, MapPin } from "lucide-react";
import { navItems, siteConfig } from "@/data/portfolio";
import { GitHubIcon } from "./BrandIcons";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCopyrightYear();
  const github = siteConfig.socials.find(
    (social) => social.icon === "github",
  )?.href;

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link
              href="/#home"
              className="group inline-flex items-center gap-3"
              aria-label={`${siteConfig.name} home`}
            >
              <Logo />
              <span className="text-sm font-bold text-white">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Building thoughtful web experiences with React, Next.js, and a
              lot of curiosity. Open to opportunities and good conversations.
            </p>

            <SocialLinks socials={siteConfig.socials} className="mt-5" />
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition hover:text-brand-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {github ? (
                <li>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-400 transition hover:text-brand-300"
                  >
                    <GitHubIcon size={16} />
                    GitHub
                  </a>
                </li>
              ) : null}

              {siteConfig.email ? (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-slate-400 transition hover:text-brand-300"
                  >
                    <span
                      className="h-1 w-1 rounded-full bg-brand-400/70"
                      aria-hidden="true"
                    />
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}

              <li className="inline-flex items-center gap-2 text-slate-400">
                <MapPin size={16} aria-hidden="true" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <p>Built with Next.js, React, and Tailwind CSS.</p>

          <Link
            href="/#home"
            className="inline-flex items-center gap-1.5 self-start text-slate-400 transition hover:text-brand-300 sm:self-auto"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
