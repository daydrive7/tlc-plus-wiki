# Desktop v1.3.0 wiki review

Prepared 23 October 2026. **Candidate for owner validation; not a launch approval.**

## Scope

- Rebuilt the home/start flow, installation, first-track tutorial, save/export guidance, preferences, FAQ and troubleshooting.
- Added decoration editing, editable GPX/CSV tracing, release overview and known limits.
- Kept existing detailed geometry/elevation/generator references, correcting affected v1.3.0 statements and labeling older screenshots.
- Fixed translation URL generation, keyboard dismissal/focus, local-preview behavior and the guide-source edit link.
- Added pull-request checks and review artifacts; retained the exact URL used by the desktop app.
- No v1.4.0 or TLC+ Web features.

## Evidence used

The v1.3.0 release metadata at <https://github.com/daydrive7/track-layout-creator-plus/releases/tag/v1.3.0> was checked on 23 October 2026. Its attachment is `Track.Layout.Creator.+.7z`, published 4 September 2026.

Verified archive SHA-256:
`b662d4b20f0ca829fe23b3dc1feb8b3b4fd3faa658a0da2aa59901a3c45cea21`

Extracted source checks include `SaveTrack` / `LoadTrack`, `construct_TED_data`, `importDecorationsFromTed`, `generateTrackFromGPXCSV`, `exportScreen`, launcher scripts, UI widgets and `save_config`. The released `GUIDE_URL` remains `https://daydrive7.github.io/tlc-plus-wiki/`.

The public app README is older than several release details; the verified release source takes precedence for these corrections. Notably, native saves omit decorations and some controls, screenshots normally use PNG, the sectors slider is removed, and the Windows launcher does not install Python.

The failed deployment at <https://github.com/daydrive7/tlc-plus-wiki/actions/runs/33032135246> built successfully but its deploy job returned 404 and explicitly requested enabling Pages. Repository metadata also reported `has_pages: false` during this audit.

## Owner acceptance checks

- [ ] Read the home page and complete the first-track tutorial in desktop v1.3.0.
- [ ] Install from the release attachment on each OS you intend to claim as tested; this change has not performed fresh OS installation tests.
- [ ] Follow Decorations: place, move, change variant/side, fill, export TED and import a copy.
- [ ] Trace a known GPX and lat/lon CSV; check open/closed detection and accuracy behavior.
- [ ] Save/reopen a TRK5 copy and verify the documented omissions and elevation controls.
- [ ] Try the main screenshot and isometric export; check the actual formats and output paths.
- [ ] Review desktop/mobile readability, light/dark mode, search, navigation and keyboard access.
- [ ] Approve the use of labeled v1.2.0 screenshots, or replace them with verified v1.3.0 captures.
- [ ] Validate exported TEDs with your supported GT6 workflow. No in-game test is claimed here.

## Launch only after acceptance

1. Enable **Settings → Pages → Source: GitHub Actions** in this repository if still disabled. See <https://github.com/daydrive7/tlc-plus-wiki/settings/pages>.
2. Merge the reviewed candidate into `main`. The workflow builds, checks and deploys; a manual run on `main` can retry a failed publication after fixing settings.
3. Verify the deployment reports success and <https://daydrive7.github.io/tlc-plus-wiki/> loads.
4. Open a nested guide page and use search; then check **Help → Guide** from desktop v1.3.0.
5. Only after success, change any “guide unavailable” notice in the desktop repository. That separate repository is unchanged by this candidate.

The content candidate alone does not restore the live site. Pages enablement, a successful production deployment and the desktop launch check remain explicit acceptance gates.

## Verification completed for this candidate

- Strict MkDocs build passed on Windows with Python 3.13 and the pinned top-level documentation dependencies.
- Generated-page validation checked all 25 HTML pages, local links, fragments, raw HTML images and search-index presence.
- Both Node translation tests passed, including nested paths/query/fragments and local-preview rejection.
- Browser smoke checks passed for home, search → Decorations navigation, local Translate notice, Escape dismissal and light/dark switching.
- Executed the released `SaveTrack` function in an isolated harness: node Z persists; changing decoration/session-control state does not change its output.
- Executed the released GPS tracing service with synthetic closed/open routes and parsed the supplied GPX/CSV examples; circuit/stage detection matched the guide.

Fresh desktop GUI walkthroughs, mobile viewport testing, macOS/Linux installs, real-world data edge cases and in-game TED validation remain owner acceptance checks. The native automation helper did not expose the released app's blank-title borderless window, so no new desktop screenshots or GUI success are claimed.
