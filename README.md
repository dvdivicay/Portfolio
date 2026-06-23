# Donald V. Divicay Jr. — Portfolio

My personal portfolio as an **Embedded Software Engineer** — firmware, low-level
drivers, and multi-sensor systems. Built with [Next.js](https://nextjs.org/)
(App Router) and statically exported for **GitHub Pages**.

🔗 Live: `https://dvdivicay.github.io/Portfolio/`

## Tech stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Static export** (`output: "export"`) — no server required
- **next/font** (Montserrat, Inter, JetBrains Mono) + [Devicon](https://devicon.dev/) logos
- Plain CSS with design tokens (theme: "Refined Earth")

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build    # outputs the static site to ./out
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static site and publishes it to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**.

> The site is served from a project subpath, so `next.config.mjs` sets
> `basePath: "/Portfolio"` in production. If I rename the repo (or move to a
> `username.github.io` repo), I update that value.

## Editing content

All copy and data live in [`lib/data.ts`](lib/data.ts) — experience, projects,
skills, education, certifications, awards, and social links. The components
render from there, so updating the site is just editing that file.
