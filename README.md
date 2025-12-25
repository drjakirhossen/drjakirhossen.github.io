# Dr. Md. Jakir Hossen - Academic Portfolio Website

Personal academic portfolio site built with Hugo Blox and Hugo. The site presents
biography, education, experience, publications, and other academic materials.

Live site (project Pages):
https://drjakirhossen.github.io/noble-aurora/

## Overview

- Owner: Dr. Md. Jakir Hossen, Associate Professor, Department of Robotics and Automation, Faculty of Engineering and Technology, Multimedia University (MMU), Melaka, Malaysia.
- Focus: academic profile, education, experience, research, and publications.
- Stack: Hugo Blox, Hugo, Tailwind CSS v4, Preact.

## Repository layout

- `content/`: site content (home, sections, publications, teaching, others).
- `config/_default/`: Hugo configuration (`hugo.yaml`, `params.yaml`, menus, languages).
- `assets/`: custom assets, including `assets/css/custom.css`.
- `layouts/`: template overrides.
- `static/`: static files copied as-is.
- `resources/`: Hugo build cache.
- `public/`: generated site output (build artifact).
- `.github/workflows/deploy.yml`: GitHub Pages build and deploy pipeline.

## Local development

Requirements:
- Hugo Extended (workflow uses 0.152.2).
- Node.js 20+
- pnpm (or npm)

Run:

```bash
pnpm install
pnpm run dev
```

Then open http://localhost:1313

## Build

```bash
pnpm run build
```

Output is generated in `public/`.

## Deployment (GitHub Pages)

This repo uses GitHub Actions (`.github/workflows/deploy.yml`) to build and deploy
to GitHub Pages. Ensure:

- Pages is enabled in the repo settings.
- Source is set to GitHub Actions.
- `baseURL` matches the Pages URL in `config/_default/hugo.yaml`.

For project Pages (repo not named `username.github.io`):

```
baseURL: 'https://drjakirhossen.github.io/noble-aurora/'
```

For a user site (repo named `drjakirhossen.github.io`):

```
baseURL: 'https://drjakirhossen.github.io/'
```

## Content updates

- Home sections: `content/_index.md`
- Experience: `content/experience.md`
- Teaching: `content/teaching/_index.md`
- Other pages: `content/others/_index.md`
- Publications: `content/publications/` (and related data in `data/` if used)

## License

See `LICENSE.md`.
