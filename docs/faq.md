# FAQ

Answers to the questions that come up most often. If your question isn't here, the [GitHub repository](https://github.com/daydrive7/track-layout-creator-plus) is the place to ask it.

---

## Getting started

### What do I need to run TLC+?

Python 3.8 or newer, plus `Pillow` and `numpy`, on any Windows, macOS or Linux machine. Tkinter ships with the official Python installers on Windows and macOS; Linux users may need one extra package (`python3-tk` or equivalent). The bundled `run.bat` / `run.command` / `run.sh` launchers install the dependencies automatically — see [Installation](getting-started/installation.md).

### Is it free? What's the license?

Yes — MIT licensed, free to use, study, modify and redistribute. The project is a community enhancement (by daydrive7) of eran0004's original Track Layout Creator.

### Where are my files saved?

Everything stays inside the application folder: track projects in `savefiles/` (`.trk5`), TED exports in `output/`, PostScript screenshots in `img/`, polygon exchanges in `polygons/`, and your preferences in `config.json`. Nothing is written elsewhere, and nothing is uploaded anywhere.

### The window looks odd / fonts look wrong. What now?

TLC+ is designed around a dark theme with modern UI fonts. On Linux, font availability varies by distribution; installing a sans-serif font metrically similar to Segoe UI improves the look. If the window appears off-screen or too large, delete `config.json` (preferences reset) and relaunch — the window re-maximizes itself to the current screen.

---

## Tracks & editing

### Why is the status card's length different from the exported TED's length?

They measure different things. The status card shows the **plan-view (2D)** length of the smoothed centreline; the TED header stores the **3D length**, which includes every metre climbed and descended. On flat tracks they agree; on mountain stages the 3D figure runs higher. Both are correct.

### Why won't it let me set a smaller corner radius?

The interactive radius drag stops at **road width / 2 + 6 m**, the geometric limit below which the road surface self-intersects at the apex. Either widen the corner's surroundings, reduce the road width, or accept a 0-radius (sharp) corner and let corner rounding handle it.

### What do the blinking red/orange markers mean?

They are geometry warnings, not errors: a triangle marks a feature shorter than 14 m; a marked centre point marks a corner whose radius is under half the border width. Neither blocks exporting, but both correspond to conditions the official GT6 editor handles badly. See [Track Geometry](concepts/track-geometry.md#warnings-on-the-canvas).

### What's the difference between circular and Euler corners?

Circular arcs snap from straight to full curvature instantly; Euler spirals ramp curvature in and out progressively — like real racing circuits. Press ++e++ on a selection to toggle, or drag the flanking Euler handle dots. Gentle corners read fine either way; fast corners almost always feel better with Euler.

### How do I delete a node quickly?

With the **Pen tool** active, Shift-click the node. With any tool, select it and press ++delete++. Deleting a node simply reconnects the polygon through its neighbours.

### How do I move the start line / pit lane?

Geometry tab → **Start & Pit Line Logic**. With *Separate Pit/Start* off, one slider moves them together; tick it for independent **Start Line Shift** and **Pit Lane Offset** sliders. The magenta pit lane and PIT START marker on the canvas show exactly where the pit entry will be.

### Can I have more than one track open at a time?

No — one window, one project. To compare layouts, save both as `.trk5` and flip between them with ++ctrl+o++ (undo even survives the switch within a session).

---

## Elevation

### Does the track follow real terrain?

Yes — every theme's heightmap contains real terrain data, and the road samples it continuously. Manual heights (when enabled) are *offsets blended on top of* the terrain, not a replacement for it. The elevation graph shows the combined result.

### Why did my elevation change after switching themes?

Each theme is different terrain — switching re-samples the heightmap under your (unchanged) polygon. A road that sat perfectly on Eifel's hills can float above or cut into Andalusia's mountains. Always re-check the profile after a theme switch.

### How do I make a jump / crest?

Enable **Manual Height** on the Geometry tab, then give a node on a straight a positive height (+6 to +10 m reads well) with **Ramp** values around 0.4–0.6. The up- and down-ramps each take less than half a segment, producing a distinct crest. Full details in [Elevation & Terrain](concepts/elevation-terrain.md).

---

## Generators & imports

### Why can't I generate a Rally Stage? It shows an error.

Rally stages are point-to-point, but **Circuit** is currently checked on the Geometry tab — the generator refuses rather than produce broken start/pit logic. Either uncheck Circuit, or enable the experimental override in Preferences (at your own risk: the result is knowingly imperfect). Successful rally generation switches Circuit off automatically.

### The Image Vectorizer says "fewer than X points" — what's wrong with my image?

The tracer needs enough connected ink to follow. Common causes: dotted or broken lines (try Smart Fill mode), a low-contrast or dark photo (increase contrast), or an image cropped to nothing but labels (crop to just the circuit). Thick, high-contrast, tightly cropped track maps trace best — see [Image Vectorizer](generators/image-vectorizer.md#preparing-images-that-trace-well).

### Can I import a Google Maps screenshot / real circuit?

Yes — that's exactly what the Image Vectorizer is for. Centerline mode on a clean map screenshot usually gives a usable skeleton. For higher fidelity, import a GPX trace of the circuit as a reference and pen-trace over it.

### Does Import TED give me back the original project?

Not quite. **File → Import TED** reverse-engineers an *editable approximation*: corners and radii come back, but heights and banking are deliberately reset (reconstructed banking tends to produce geometry errors). For a lossless copy of your own work, always keep the `.trk5`.

---

## Exporting & GT6

### What exactly is a TED file?

The track format of the official **Track Path Editor** in *Gran Turismo 6* (PS3). TLC+ writes version-compatible files, including the header fields the game reads: 3D length, elevation difference, corner count, start/finish positions and the road/checkpoint tables.

### GT6's editor refuses my export. What do I check?

Walk the canvas for warnings first — features under 14 m (triangles) and radius/border violations (marked centres) are the usual offenders. Then confirm you have at least 2 nodes (3 with Circuit on), and that your theme matches the terrain you actually want. Clean canvas → re-export resolves the overwhelming majority of rejections.

### Why are the walls pinned to my road width?

By design. TLC+ writes the TED's track-width fields as **road width / 2**, which pins GT6's collision walls to the road you drew. Without this fix the game defaults to a 20 m box that traps the car off-track — one of the classic quirks of the original format.

### Where did my PostScript screenshot go?

`img/screen.ps` inside the application folder (isometric exports go to `resources/img/iso.ps`). It's a vector file — open it in a viewer that handles PostScript, or convert it to PDF/PNG with any converter.

### Can I export directly to GT7 / other games?

No — the TED format is GT6-specific. The generic way out is **Export polygon** (`.pgn`), a plain CSV you can transform for any other pipeline.

---

## The app itself

### How do I change the interface language?

**File → Language**, pick one of the nine translations, and restart when prompted. The choice is remembered in `config.json`. This guide has its own **Translate** button in the header for reading in any language.

### Does TLC+ update itself?

No. The update check compares version numbers against GitHub and opens the release page in your browser when something newer exists — nothing is ever downloaded or installed automatically. You can disable the startup check entirely in Preferences.

### Undo stopped responding — did I lose history?

History is unbounded and survives every operation, but it is memory-only: closing the app clears it, and loading a `.trk5` makes the loaded state the new baseline. If ++ctrl+z++ genuinely stops working mid-session, that's a bug worth reporting — attach the `.trk5` from *before* the problem.

### Is there a dark/light mode for the app?

The app itself is dark-only in v1.2.0 (the accent colour is configurable — Preferences → UI Accent Colour). This guide, on the other hand, follows your system preference and offers a manual toggle in the header.

### I found a bug or have an idea. Where do I go?

Open an issue at [github.com/daydrive7/track-layout-creator-plus](https://github.com/daydrive7/track-layout-creator-plus) — the `CONTRIBUTING.md` file describes what to include. A `.trk5` that reproduces the problem is worth a thousand words.
