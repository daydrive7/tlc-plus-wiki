# Export a track or image

Export a **TED** for the final track, a **PGN** for raw polygon exchange, or a **screenshot** to show your work. Save a `.trk5` milestone before exporting.

## Export to TED

Choose **File → Export to TED** and select a destination; the default folder is `output/`. You need at least **two control nodes for a stage** or **three for a circuit**.

The exporter samples the road geometry, terrain/manual elevation and banking, generates road/checkpoint records, and writes supported decorations in the TED decoration table. Exported track length includes height (3D distance), so it can differ from the plan-view measurement.

The implementation includes compatibility choices such as removing road fragments below 0.1 m and writing track-width fields as road width / 2. These are implementation details, not a guarantee that every layout or game setup will accept the output.

### Check before exporting

- Confirm scenery, Circuit/open-stage mode, road width and start/pit position.
- Inspect intersections, short segments and tight corners; resolve canvas warnings where possible.
- Review the elevation graph with the intended manual-height and smoothing controls.
- Check decoration count, sides, variants and the active scenery.
- Save geometry as `.trk5`, then export TED to a new filename.

### Import and game compatibility

TED import is not a complete project restore: it reconstructs nodes and resets editable heights/banking. Keep your native save and settings notes. [Save limits →](saving-loading.md)

TLC+ exports files; it does **not** upload them to a PS3, restore GT6 online services or provide an in-game installation mechanism. Using a TED requires a separate workflow compatible with your own GT6 environment. No GT7 or other-game export is provided.

## Main-canvas screenshot

Click the toolbar's screenshot button, or **File → Export to PostScript**. Despite that menu label, **v1.3.0 normally saves a PNG** using a Save screenshot dialog. The default is a timestamped file under `img/`.

If screen capture fails, the app attempts a `.ps` PostScript fallback and reports the saved path. Keep the canvas visible and unobstructed for pixel capture. An image does not contain editable track data.

## Isometric export

Open **File → Draw isometric view**. Its image/export controls are separate from the main-canvas screenshot. The viewer's ++p++ action exports PostScript; use the reported destination and a compatible viewer/converter.

## Export polygon

**File → Export polygon** writes `.pgn`, a CSV-style point list. It carries per-node coordinates, radius, camber and curve information for geometry exchange. Global track settings and decorations are not included. Keep `.trk5` and `.ted` as appropriate rather than treating PGN as a complete project backup.

For missing output, launch the editor from a writable extracted folder and read the console/error message. [Troubleshooting →](../troubleshooting.md#an-export-fails-or-looks-wrong)
