# portfolio

My personal portfolio website, built with [Astro](https://astro.build) and deployed to GitHub Pages at **https://hey-shub.github.io/portfolio/**.

## Requirements

Node.js **22.23.4 or newer** (pinned in `.node-version`; `fnm` / `nvm` pick it up automatically).

## Commands

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Start the dev server at `localhost:4321/portfolio/` |
| `npm run build`   | Build the static site into `dist/`             |
| `npm run preview` | Serve the production build locally             |

## Editing content

- **Name, bio, links, résumé:** `src/consts.ts`
- **Projects:** add a Markdown file to `src/content/projects/` — each one becomes a card on the home page and its own page at `/projects/<file-name>/`. Front matter fields are defined in `src/content.config.ts`.
- **Colors and typography:** `src/styles/global.css` (light and dark themes follow the visitor's system setting).
- **Static files** (favicon, résumé PDF, images): `public/`

## Deployment

Every push to `main` builds and deploys the site via `.github/workflows/deploy.yml`. In the repo's **Settings → Pages**, the source must be set to **GitHub Actions**.

If you move to a custom domain, update `site` in `astro.config.mjs` and remove `base`.
