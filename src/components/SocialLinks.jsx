import {
  FacebookIcon,
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
} from "./BrandIcons";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  leetcode: LeetCodeIcon,
};

export default function SocialLinks({
  socials = [],
  className = "",
  iconSize = 20,
}) {
  const configured = socials.filter((social) => social.href);

  if (configured.length === 0) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {configured.map((social) => {
        const Icon = iconMap[social.icon];

        if (!Icon) return null;

        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} (opens in a new tab)`}
              title={social.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-brand-400/10 hover:text-brand-300"
            >
              <Icon size={iconSize} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
