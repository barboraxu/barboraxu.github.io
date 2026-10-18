# Barbora Xu

An independent, static artist website built with Astro and deployed using GitHub Pages.

## Work on the website

Open this folder in Codex or your editor. Then:

```sh
npm ci
npm run dev
```

Open the local address printed by Astro (normally http://127.0.0.1:4321).

Useful requests for Codex:
- “Add a concert on 12 June 2027 in Helsinki, with this ticket URL …”
- “Update the biography using this text …”
- “Add this album and its listening link …”
- “Show me the changes locally before publishing.”

| What to change | File |
| --- | --- |
| Biography, contact, social links | `src/data/site.json` |
| Old Forest Echoes summary | `src/data/old-forest-echoes.json` |
| Concerts and residencies | `src/data/concerts.json` |
| Albums and videos | `src/data/music.json` |
| Photo captions and credits | `src/data/photos.json` |
| Page layout | `src/pages/` |
| Shared navigation and footer | `src/layouts/Base.astro` |
| Colors, fonts and spacing | `src/styles/global.css` |
| Photos | `public/images/` |

Concert dates use ISO `YYYY-MM-DD`. `endDate` is the final day of a residency or festival. `dateLabel` is what visitors see. Concerts move into the archive on the next scheduled daily build, based on the date in Helsinki. Add only confirmed dates.

For new photos, keep the original JPEG and a smaller WebP version. The optional `node scripts/prepare-images.mjs` regenerates WebPs using Sharp (included by Astro). Preserve photographer credits. Missing credits in the old gallery remain unassigned pending confirmation.

## Check and publish

```sh
npm run check
npm run build
```

In GitHub Desktop, add this existing local repository. Review changed files, commit to `main`, and Push origin. The GitHub Actions workflow builds and deploys the site. The Actions tab shows progress. A failed build leaves the last successful website online.

The GitHub Pages URL is https://barboraxu.github.io/.

## Custom domain migration

The Webflow website stays live on barboraxu.com until DNS is changed. See `migration/README.md` for the remaining cutover steps and content notes. No Webflow account, form endpoint, or script is needed to serve this site.

## Tools

Node 26, npm, Astro 7.4.0. No database or server needed. `npm run preview` serves a production build locally. If the Astro development server remains running, `npx astro dev stop` stops it.

## Images and search metadata

The canonical domain is `https://www.barboraxu.com`. The sitemap is generated at `/sitemap.xml`.
Run `node scripts/prepare-images.mjs` after adding original JPEGs to regenerate 480px, 800px and 1400px WebPs, image dimensions and the social preview. Pages use the shared `Photo.astro` component; original JPEGs remain available through explicit links.

The Instagram teaser loads only after pressing Play. It is shown on the homepage while an Old Forest Echoes event remains upcoming. The daily deployment updates this automatically.
