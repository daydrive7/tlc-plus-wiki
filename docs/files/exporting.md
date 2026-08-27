# Exporting

TLC+ produces three export flavours: the **`.ted`** track file that GT6 consumes, **PostScript** vector screenshots of the canvas and isometric view, and **`.pgn`** polygon data for lossless geometry exchange. Each is covered below, with the `.ted` pipeline explained in depth — it contains several deliberate GT6/PS3-specific behaviours worth knowing about.

## Export to TED — File → Export to TED

The flagship export writes a `.ted` file to `output/` (created if missing), named by timestamp like the project saves. You need at least **two control points — three in Circuit mode** — otherwise the export politely declines with a console message.

### What the pipeline does

1. **Rounds the corners** — the same Euler/circular geometry you see on the canvas is resampled into the final road path.
2. **Assembles the road** from the theme's building blocks: start blocks, then first/mid/final mid-road segments scaled by the **road length factor**, normalised to your track's length, and rotated by the pit offset on circuits. Segments shorter than **0.1 m are deleted** — a critical fix for a real division-by-zero crash on PS3 hardware.
3. **Samples heights** — terrain (through the surface-smoothing blend) plus manual heights and their ramps, with camber's vertical contribution added according to the camber axis.
4. **Spreads banking** — each corner's bank angle eases in and out across the adjoining road, never using more than half of the shorter neighbouring segment per side.
5. **Places checkpoints** at every full **1000 m of 3D distance** (with a midpoint fallback when a precise 1000 m position isn't available). Point-to-point tracks stop placing checkpoints 1000 m before the finish.
6. **Writes the 156-byte header** — identification, version, scenery, road width, **3D track length**, a PDI bit-packed timestamp, circuit flag, home straight length, elevation difference, corner count, start/finish line 3D positions and the offsets for every record table that follows.

### GT6-specific guarantees baked into every export

- **Track width values** (`m_trackwidth_a/b`) are written as **road width / 2** — this pins GT6's collision walls to the road you actually drew, instead of the default 20 m box that otherwise traps the car.
- Road records carry the correct **vpos/vlen 3D distances**, matching how the official editor measures the ribbon that includes height.
- The **decoration table** is written empty with its offsets reserved, keeping the file structurally identical to official ones.

### After the export

The `.ted` is ready for the official **GT6 Track Path Editor** on PS3 — from there it can be shared and driven. If the editor refuses a file, the usual culprits are visible on TLC+'s canvas beforehand: the short-feature warning triangles (features < 14 m) and radius/border warnings. Clean those up and export again.

!!! note "Plan-view vs 3D length"
    The status card's *Length* is plan-view; the TED header stores 3D length. A 4 000 m circuit with 60 m of cumulative climbing exports as roughly 4 060 m. Both numbers are correct — they just measure different things.

## Export to PostScript — File → Export to PostScript

Captures the canvas as **colour PostScript** to `img/screen.ps` inside the application folder (folder created on demand). PostScript is a vector format: infinitely scalable, print-ready, and the native output of Tk's canvas — which also means it is what the toolbar's **screenshot** button produces. For a social-media-friendly raster image, simply screenshot the window with your OS tools instead; for a crisp poster or print, the PostScript file is the better source.

The isometric viewer has its own PostScript export — press ++p++ inside it — written to `resources/img/iso.ps`.

## Export polygon — File → Export polygon

Writes a `.pgn` CSV (default folder `polygons/`), one line per node:

```text
x,y,z,radius,camber,segments,width
```

This is the lossless geometry interchange format: reload it later with **File → Import polygon**, post-process it with any script, or archive a layout's skeleton without its UI settings. Note that it carries the *polygon* — road width, camber rules and all other sidebar settings are not part of a `.pgn` (keep the `.trk5` for those).

## Choosing the right export

| Goal | Use |
|---|---|
| Drive the track in GT6 | **Export to TED** |
| Print or scale a 2D drawing | **Export to PostScript** |
| 3D preview image | Isometric viewer → ++p++ (PostScript) or an OS screenshot |
| Save/transfer editable geometry | **Export polygon** (`.pgn`) or better, **Save track** (`.trk5`) |
