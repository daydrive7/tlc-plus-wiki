# Screenshot provenance — desktop v1.3.0

All 20 PNG assets were captured on Windows on 23 October 2026 from the released desktop v1.3.0 archive. The archive SHA-256 is `b662d4b20f0ca829fe23b3dc1feb8b3b4fd3faa658a0da2aa59901a3c45cea21`.

The screenshots contain real application pixels. Processing is limited to lossless cropping of the temporary native frame or a relevant dialog/control area and PNG compression. No controls, track geometry or output were painted into the images.

## Capture environment

A separate scratch copy was used. Only capture accommodations were added: an OS window title so automation could identify the empty-title window; a normal native frame in place of `overrideredirect`; a 1440×1000 starting client area; and a longer menu-dismiss timer so transient menus could be photographed. Dialog OS titles were set for identification. The extra native frame/title is cropped from the delivered assets. Editor, generator, decoration and export logic were unchanged. User working files and the desktop release repository were not modified.

Track Tracer was enabled through Preferences. Generator examples were created with the app's own controls. A sample node height of 20 m was applied through Edit Point and Manual Height was enabled. Decorations → Fill Track placed 35 trees in the sample Eifel circuit.

`19-gps-tracing.png` is a focused capture of the Track Tracer controls; it does not claim a completed GUI GPX import. The native file picker could not be reliably targeted, so that flow remains in owner acceptance checks. The sample GPX/CSV routes were verified separately with the released tracing service.

Generator screenshots intentionally retain geometry warnings. They illustrate editor states and are not proof of in-game compatibility. The helper's cursor indicator may be visible in some captures.

`docs/assets/screenshots/manifest.json` records dimensions, crop rectangles and SHA-256 hashes. Raw full-window captures remain in this task's scratch workspace for audit; they are not part of the published guide.
