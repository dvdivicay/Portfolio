# Donald V. Divicay Jr. — Portfolio

Personal portfolio for an **Embedded Software Engineer**, built with
[Next.js](https://nextjs.org/) (App Router) and statically exported for
**GitHub Pages**. Live at: `https://dvdivicay.github.io/Portfolio/`

## Tech stack

- **Next.js 15** (App Router, React 19, TypeScript)
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
npm run build    # outputs static site to ./out
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static site and publishes it to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**.

> The site is served from a project subpath, so `next.config.mjs` sets
> `basePath: "/Portfolio"` in production. If you rename the repo (or move to a
> `username.github.io` repo), update that value.

## Editing content

All copy/data lives in [`lib/data.ts`](lib/data.ts) — experience, projects,
skills, education, certs, awards, and social links. Edit there; the components
render from it.

## To do

- [ ] Add your resume PDF at `public/Donald-Divicay-Resume.pdf` (the Resume
      buttons link to it).
