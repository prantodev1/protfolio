<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio

Dark navy / cyan developer portfolio for Pranto Chandro. Single-page home route plus
`/projects/[slug]` case studies. JavaScript only — no TypeScript, tests, or CI.

## Commands

- `npm run dev` — Turbopack dev server on http://localhost:3000.
- `npm run build` then `npm start` — production build/serve. `build` is the only compile gate; there is no typecheck or test script.
- `npm run lint` — ESLint flat config over the repo; `npx eslint src/components/Hero.jsx` for one file.
- Use npm (`package-lock.json` is the only lockfile), despite README listing yarn/pnpm/bun.

## Layout

- `src/app/layout.js` wraps every route with `Navbar` + `Footer` (plus a skip link) and holds the site metadata.
- `src/app/page.js` composes the home sections: `Hero`, `About`, `Skills`, `Education`, `Experience`, `Projects`, `Contact`.
- Components live in `src/components/` (plural, at `src/` root). Do not recreate `src/app/component/`.
- Content lives in `src/data/`: `portfolio.js` (personal info, nav, skills, education, experience, socials) and `projects.js` (project records + `getProjectBySlug`/`getProjectSlugs`/`getRelatedProjects` helpers).
- `src/app/projects/[slug]/page.js` renders case studies from `projects.js`; unknown slugs call `notFound()` and land on `src/app/not-found.js`.
- Path alias `@/*` → `src/*` is configured in `jsconfig.json`; new files use it (`@/components/...`, `@/data/...`).
- Only `Navbar.jsx` and `ResumeButton.jsx` are client components (`"use client"`: menu state, Escape handling, IntersectionObserver, resume notice). Everything else is server-rendered.
- All nav links are hash anchors (`/#about`, `/#skills`, …) and every one has a matching section `id` on the homepage. Adding a section means adding the `id` and a `navItems` entry in `src/data/portfolio.js`.

## Toolchain quirks

- Tailwind v4 runs through a Turbopack loader rule in `next.config.mjs` (`@tailwindcss/turbopack`), not PostCSS. There is no `tailwind.config.*` or `postcss.config.*`. Theme tokens (`--color-ink-*`, `--color-brand-*`) live in the `@theme` block in `src/app/globals.css`; add custom colors there, not in a JS config.
- `cacheComponents: true` and `partialPrefetching: true` enable PPR: pages are dynamic by default, caching is opt-in via `use cache`, and route segment config such as `runtime`/`dynamicParams` is unsupported. Read `node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/cacheComponents.md` before adding data fetching or caching.
- `new Date()` during prerender throws "unstable value" — `Footer.jsx` wraps `getCopyrightYear()` in `"use cache"` for that reason. Use the same pattern for any other time-based value.
- `reactCompiler: true` — don't hand-write `useMemo`/`useCallback` in components; the compiler handles memoization at build time.
- `experimental.agentFeedback` is enabled, so `next dev` may also add a managed feedback block to this file. Never hand-edit or delete the `nextjs-agent-rules` / `nextjs-agent-feedback` blocks; `next dev` restores them as uncommitted churn.
- Next.js is 16.4.3; when in doubt consult the bundled docs, not older online examples.

## Assets and gotchas

- `src/lib/assets.js` exposes a server-only `hasPublicFile()` (`fs.existsSync` against `public/`). `page.js` and `layout.js` pass the results down so components can render placeholders instead of broken images/links.
- Project data is limited to two featured projects, FitLog and Bazar Dor. Their thumbnails are
  `public/fit-log.jpeg` and `public/bazar-dor.jpeg` (16:9); update `image` in `projects.js` if
  you rename them. `public/resume.pdf` is a byte-for-byte copy of
  `public/Pranto_Chandro_Paul_Resume.pdf` and is what `siteConfig.resumePath` points at; replace
  both or update the config path. The profile image and resume download resolve through
  `hasPublicFile()`.
- The hero portrait is `public/pranto.png`, set via `siteConfig.profileImage` in `src/data/portfolio.js`. Replacing the file keeps the same path; a different filename means updating that value.
- Brand icons (GitHub, LinkedIn, Facebook, LeetCode) are inline SVGs in `src/components/BrandIcons.jsx` because `lucide-react` 1.x no longer exports brand marks. Other lucide icons are fine.
- `siteConfig.phone`, `whatsapp`, `siteUrl` are still `null` until filled in; the UI hides what is not configured. Email, GitHub, LinkedIn, and LeetCode are set. Education is real content (BSc CSE, Sonargaon University, 2024–2028).
- Project links are taken from real public repos (`prantodev1`). Never add invented live URLs, stats, or repositories — use `null` for missing values.

## Conventions

- Styling is inline Tailwind utilities; palette is `ink-950/900/800` backgrounds, `brand-300/400/500` cyan accents, white headings, slate-muted body copy, rounded-3xl cards.
- Keep JS/JSX and the existing file/folder naming; don't introduce TypeScript or a new app structure unprompted.
- Personal content belongs in `src/data/portfolio.js`, project content in `src/data/projects.js` — not hardcoded in components.
- Verify with `npm run lint` then `npm run build`; both pass as of this writing.
