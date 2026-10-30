import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import {
  FacebookIcon,
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
} from "./BrandIcons";
import SectionHeading from "./SectionHeading";

const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  leetcode: LeetCodeIcon,
};

export default function Contact() {
  const configuredSocials = siteConfig.socials.filter(
    (social) => social.href,
  );
  const github = configuredSocials.find(
    (social) => social.icon === "github",
  )?.href;
  const whatsappHref = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`
    : null;
  const emailHref = siteConfig.email
    ? `mailto:${siteConfig.email}?subject=${encodeURIComponent("Portfolio inquiry")}`
    : null;

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-ink-900/40 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something useful."
            description="I am open to junior frontend, React, and full-stack opportunities, as well as collaborative projects. If you have a role, an idea, or feedback, I would be glad to hear from you."
          />

          <ul className="mt-8 space-y-3">
            {siteConfig.email ? (
              <li>
                <a
                  href={emailHref}
                  aria-label={`Email ${siteConfig.email}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-400/30 hover:bg-brand-400/[0.04]"
                >
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-slate-200 group-hover:text-white">
                      {siteConfig.email}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-slate-500 transition group-hover:text-brand-300"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ) : null}

            {siteConfig.phone ? (
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-400/30 hover:bg-brand-400/[0.04]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-400/10 text-brand-300">
                    <Phone size={19} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Phone
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-slate-200 group-hover:text-white">
                      {siteConfig.phone}
                    </span>
                  </span>
                </a>
              </li>
            ) : null}

            {whatsappHref ? (
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-400/30 hover:bg-brand-400/[0.04]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-400/10 text-brand-300">
                    <MessageCircle size={19} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      WhatsApp
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-slate-200 group-hover:text-white">
                      Message me
                    </span>
                  </span>
                </a>
              </li>
            ) : null}

            <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-400/10 text-brand-300">
                <MapPin size={19} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Location
                </span>
                <span className="mt-0.5 block text-sm font-medium text-slate-200">
                  {siteConfig.location}
                </span>
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-ink-950/60 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white">Start a conversation</h3>

          {siteConfig.email ? (
            <a
              href={emailHref}
              aria-label={`Send an email to ${siteConfig.email}`}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-400 px-5 py-3 text-sm font-bold text-ink-950 transition hover:bg-brand-300"
            >
              Send an email
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : (
            <div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-4 text-sm leading-6 text-amber-100/80">
              Email and phone details are not published yet. For now, GitHub is
              the best way to reach me.
            </div>
          )}

          <div className="mt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Profiles
            </p>

            <ul className="mt-3 space-y-2">
              {configuredSocials.map((social) => {
                const Icon = socialIconMap[social.icon];

                if (!Icon) return null;

                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-brand-400/30 hover:bg-brand-400/[0.05] hover:text-white"
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon size={18} />
                        {social.label}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="text-slate-500 transition group-hover:text-brand-300"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {!siteConfig.email && github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-400/30 hover:bg-brand-400/[0.08]"
            >
              <GitHubIcon size={18} />
              Visit my GitHub
            </a>
          ) : null}

          <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-5 text-slate-500">
            {siteConfig.availability}. Feel free to reach out through any of
            the profiles above.
          </p>
        </div>
      </div>
    </section>
  );
}
