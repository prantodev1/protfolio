# Pranto Chandro — Developer Portfolio

A dark, responsive portfolio built with Next.js (App Router), React, Tailwind CSS v4, and
`lucide-react`. The home page covers About, Skills, Education, Projects, and Contact, and each
of the two featured projects links to its own case study at `/projects/[slug]`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production check:

```bash
npm run lint
npm run build
npm start
```

## What's inside

```
src/
  app/
    layout.js            meta tags, Navbar + Footer, skip link
    page.js              home page section composition
    globals.css          Tailwind v4 import + theme tokens + motion rules
    not-found.js         custom 404
    icon.svg             favicon (PC monogram)
    projects/[slug]/page.js   project case studies
  components/            Navbar, Hero, About, Skills, Education, Experience,
                         Projects, ProjectCard, ProjectVisual, Contact, Footer,
                         SectionHeading, ResumeButton, SocialLinks, Logo,
                         TechIcon, BrandIcons, ProjectStatus
  data/
    portfolio.js         your personal content (edit this first)
    projects.js          project records + lookup helpers
  lib/assets.js          server-only "does this file exist?" helper
```

## Assets

The site has all the files it needs. Replace an asset in place and rebuild; no code
change is required unless you change a filename.

| File | Where it appears |
| --- | --- |
| `public/pranto.png` | Hero portrait. Keep the filename or update `profileImage` in `src/data/portfolio.js`. |
| `public/resume.pdf` | "Download CV" / "Download Resume" buttons. A copy of `public/Pranto_Chandro_Paul_Resume.pdf`; update `siteConfig.resumePath` if you rename it. |
| `public/fit-log.jpeg` | FitLog card + case study |
| `public/bazar-dor.jpeg` | Bazar Dor card + case study |

Project thumbnails are 16:9 and render through `next/image` with a 16:9 frame.
Image paths live in `src/data/projects.js` if you use different filenames.

## Personalize the content

Everything editable is in `src/data/portfolio.js`:

- **Contact** — email, GitHub, LinkedIn, and LeetCode are configured. `phone` and `whatsapp`
  remain `null` and stay hidden until filled in. Add more profiles to `socials`; entries with
  `href: null` are skipped.
- **Education** — one entry is configured: BSc in Computer Science and Engineering at Sonargaon
  University, 2024–2028. Edit the degree, institution, field, or details in `education`; add more
  entries to the array for additional qualifications. A `placeholder: true` entry shows an
  "editable placeholder" badge.
- **Experience** — `experience` is an empty array, so the section honestly says you are looking
  for your first role and highlights three projects. Add real roles to `experience` and the
  timeline renders automatically (shape is documented in the file).
- **Skills** — grouped into Frontend, Backend, Database, and Tools. Icons and official brand
  colors come from `src/components/TechIcon.jsx`; edit the skill names in `skillGroups`.
- **Site URL** — set `siteUrl` (for example `https://your-domain.com`) after deploying so
  Open Graph metadata resolves absolute URLs.

Projects live in `src/data/projects.js`. The site features FitLog and Bazar Dor. Each record
needs `slug`, `number`, `title`, `tagline`, `description`, `purpose`, `status`, `category`,
`accent`, `monogram`, `image`, `imageAlt`, `tech`, `liveUrl`, `githubUrl`, `overview`,
`features`, `challenges`, and `improvements`. `banglaTitle` is optional. Use `null` for a live
URL that does not exist — the UI then shows "Not published yet" instead of a dead link. Adding a
record automatically creates its page, card, and related-project links.

## Notes

- `lucide-react` 1.x no longer ships brand logos, so GitHub/LinkedIn/Facebook icons are inline
  SVGs in `src/components/BrandIcons.jsx`.
- Motion respects `prefers-reduced-motion`, and every interactive element has a visible focus ring.
- The site is intentionally JavaScript/JSX only — no TypeScript, no test suite.
