# Troubleshooting

Start with the **complete desktop v1.3.0 release**, extracted into a writable folder. Save copies of your work before trying recovery steps.

## The editor will not start

1. Run the launcher from the extracted application folder, not inside the archive.
2. Read the console message. Confirm Python is installed and `python -m tkinter` (or `python3 -m tkinter`) opens a test window.
3. Install dependencies using that same Python interpreter: `python -m pip install -r requirements.txt`.
4. If the OS manages Python packages, use the [virtual-environment setup](getting-started/installation.md#manual-setup-in-a-virtual-environment).
5. Confirm `resources/` and `locales/` are present. Download the release attachment rather than the repository's Source code archive.

On Windows, the v1.3.0 launcher reports missing Python rather than installing it. A fresh terminal may be needed after installing Python.

## Controls or the elevation graph are missing

Check Preferences for hidden sidebar modules. Check **Map & Toggles → Show Elevation**, the sidebar toggle and the panel splitter. The title can also be hidden. Switch from experimental Classic light mode to Dark if contrast is poor.

For a damaged configuration, close TLC+, rename `config.json` to `config.backup.json`, then relaunch. This resets preferences while retaining a copy to inspect.

## A trace fails or produces an untidy layout

- For an image, crop away labels, improve contrast and choose a mode suited to the input. [Image preparation →](generators/image-vectorizer.md#preparing-images-that-trace-well)
- For GPS, use ordered latitude/longitude data and recognizable CSV headers. Try 50% accuracy before adding more nodes. [GPS tracing →](generators/gps-tracing.md)
- If you only see an overlay, you used External Path Imports. Choose **Trace GPX/CSV** to generate editable nodes.
- Review Circuit detection, start/end joins and corners after every trace. Save the original route separately.

## Decorations are missing or misplaced

TRK5 does not store decorations. Reopen a TED **copy** if one was exported, accepting that its road geometry is reconstructed. Check the active scenery, palette, placement tool and 1,000-item count. Replacing, reversing or heavily editing a road can change where existing items belong; inspect before export.

## An export fails or looks wrong

Ensure there are enough nodes: three for a circuit, two for a stage. Check road warnings, short segments, corner radii and start/pit positions. Confirm scenery, manual-height state and smoothing/ramp values. Try exporting to a new filename in a writable folder.

If the main screenshot capture fails, the app may save `.ps` rather than PNG. Read the success/error dialog for the actual path. A screen capture needs a visible canvas.

An exported TED is not proof of in-game compatibility. Preserve the rejected file, record the steps and validate with a separate GT6 workflow supported by your setup.

## Help → Guide does not open

The desktop app points to **[the TLC+ wiki](https://daydrive7.github.io/tlc-plus-wiki/)**. Copy that URL into a browser. v1.3.0 includes a clipboard fallback when browser opening raises an error; a browser silently refusing the request may not trigger that fallback.

If you get a website 404, the hosted guide is unavailable; reinstalling the desktop app will not fix hosting. The [wiki source](https://github.com/daydrive7/tlc-plus-wiki/tree/main/docs) remains readable on GitHub. Translation also requires a working public guide and internet access.

## Report a reproducible issue

Include desktop version **1.3.0**, OS, Python version, the action that failed, exact error text and the smallest example that reproduces it. Specify whether the problem concerns the app, a TED in your game workflow, or this guide. [App issues](https://github.com/daydrive7/track-layout-creator-plus/issues) · [Wiki issues](https://github.com/daydrive7/tlc-plus-wiki/issues)
