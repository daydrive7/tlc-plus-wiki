# TLC+ Desktop Wiki

User documentation for **Track Layout Creator + desktop v1.3.0**, built with MkDocs Material. The canonical guide URL remains <https://daydrive7.github.io/tlc-plus-wiki/> so the released app's Help → Guide link continues to work once Pages is enabled and a deployment succeeds.

## Build and review

```sh
python -m venv .venv
# Activate the environment for your OS, then:
python -m pip install -r requirements.txt
node --test tests/translate.test.cjs
python -m mkdocs build --strict
python scripts/check_site.py site
python -m mkdocs serve
```

Use the local URL printed by MkDocs, including `/tlc-plus-wiki/`. Built HTML is in `site/`. Serve this folder over HTTP for working search; browser restrictions can prevent search when opening files directly.

## Review before launch

See [REVIEW.md](REVIEW.md) for scope, evidence, remaining manual checks and the launch procedure. This overhaul targets v1.3.0 only. Do not describe development builds or TLC+ Web as this desktop release.

The source is English. Optional Google Translate links are unreviewed machine translation and make no request until followed. System fonts keep the guide independent of a font CDN. All 20 application screenshots are fresh desktop v1.3.0 captures. [Screenshot provenance](SCREENSHOTS.md) records the capture accommodations and image processing.

## CI and Pages

Pull requests build the guide, validate internal links/fragments/assets, test translation URLs and upload an HTML review artifact. They **do not deploy**. Main-branch pushes and main-branch manual runs publish only after the same checks pass.

An owner must enable **Settings → Pages → Build and deployment → Source: GitHub Actions**. The previous August deployment failed with a Pages 404 because this was not enabled; a successful local build alone cannot fix that repository setting. `configure-pages` now checks it before publication.

Keep the existing canonical URL and public audience. Do not substitute another hosting service for the app's hard-coded guide URL. [GitHub custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

The dependency pins retain the repository's MkDocs 1.6.1 / Material 9.7.7 stack. Avoid changing documentation tooling during the content review without a separate need.
