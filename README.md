# Track Layout Creator + — Guide (MkDocs)

The complete user guide / wiki for **Track Layout Creator + v1.2.0**, built with
[MkDocs](https://www.mkdocs.org) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
theme.

## Quick start

```bash
pip install -r requirements.txt
mkdocs serve       # live preview at http://127.0.0.1:8000
```

To build the static site:

```bash
mkdocs build --strict   # output in site/
```

## Structure

```
├── mkdocs.yml                  # theme, palette, extensions, navigation
├── docs/
│   ├── index.md                # Home / landing page
│   ├── getting-started/        # Installation, first-track tutorial
│   ├── interface/              # Window overview, toolbar, sidebar tabs, preferences
│   ├── concepts/               # Track geometry, elevation, themes
│   ├── files/                  # Saving/loading, importing, exporting
│   ├── generators/             # Procedural builder, image vectorizer
│   ├── tips.md                 # Tips & techniques
│   ├── faq.md                  # FAQ
│   ├── assets/screenshots/     # Real app screenshots (auto-captured from v1.2.0)
│   ├── assets/icons/           # Toolbar tool icons (from the app itself)
│   ├── stylesheets/extra.css   # Translate button + screenshot frame styles
│   └── javascripts/translate.js# Header translate button (Google Translate)
```

## Features of this guide

- **Material theme** with an indigo primary / teal accent palette.
- **Light & dark mode** — follows the system preference, with a manual toggle
  in the header.
- **Translate button** in the header — machine-translates any page via Google
  Translate's `translate.goog` mirror (works once the site is hosted publicly;
  shows an explanatory note when running locally).
- **Real screenshots** — every screenshot was captured automatically from the
  actual v1.2.0 application running headlessly.
- All content was fact-checked against the v1.2.0 source code (defaults,
  slider ranges, file formats, generator parameters).

## Deploying to GitHub Pages

The app's **Help → Guide** menu opens
<https://daydrive7.github.io/tlc-plus-wiki/> — this project is that site.

The included workflow (`.github/workflows/ci.yml`) builds and deploys the site
automatically when pushed to the repository's default branch (enable
*Settings → Pages → Build and deployment → Source: GitHub Actions* once).

Manual alternative:

```bash
mkdocs build
# push site/ contents to the gh-pages branch, e.g. with mkdocs gh-deploy
```

## Notes on MkDocs versions

Built with MkDocs **1.6.1** and Material **9.7.7** (the current stable stack —
MkDocs 2.0 had been announced but not released at the time of writing, and its
rewritten theming/plugin system is not backwards compatible). Versions are
pinned in `requirements.txt` for reproducible builds.
