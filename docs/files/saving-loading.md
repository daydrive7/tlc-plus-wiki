# Save, back up & reopen

Keep a **`.trk5` for editable road geometry**, a **`.ted` after decorating**, and a note of important elevation/session settings. In desktop v1.3.0, no single file restores the entire editing session.

## Save and load

**File → Save track** / ++ctrl+s++ opens a save dialog, normally under `savefiles/`. Choose a filename you can recognize and keep separate versions before major changes.

**File → Load track** / ++ctrl+o++ opens a track save and replaces the current polygon/settings. Save current work first. Loading is not a documented session-undo checkpoint: do not rely on Ctrl+Z to recover a previous project.

## What a TRK5 preserves

The v1.3.0 serializer writes a `TRK5` header and six values per node: X, Y, Z, radius, camber and curve segments. Its header records scenery, Circuit, road width, max camber, camber rate, road length factor, Short straight, camber axis, Narrow road, road flag and start/pit offsets, plus legacy fields.

| State | In `.trk5`? | What to do |
| --- | --- | --- |
| Nodes, radii, per-node Z/camber/curve mode | Yes | Keep the native save for editing |
| Track settings listed above | Yes, with numeric packing | Recheck fine values and offsets after loading |
| Decorations | **No** | Export TED before closing |
| Reference overlays | **No** | Keep the source GPX/CSV/TED and re-import |
| Undo/redo history and selection | **No** | Save milestone files |
| Manual-height enable, ramp controls, surface-smoothing blend | **No** | Record and restore these settings |
| Separate Pit/Start UI state | **No** | Recheck the toggle and loaded offsets |
| UI preferences | Separate `config.json` | Back up the config if needed |

Per-node Z values being present does not mean the manual-height feature is enabled after reopening. Check the Geometry tab and elevation profile before exporting again. Header settings are packed as integers/scaled integers; do not promise a byte-for-byte session round trip.

## Choose the right format

| Format | Purpose | Main limitation |
| --- | --- | --- |
| `.trk5` | Editable nodes and selected track settings | Omits decorations and session controls |
| `.ted` | Final road, sampled heights/banking and supported decorations | Import reconstructs road nodes; heights/banking reset |
| `.pgn` | Plain-text polygon interchange | Omits global settings, decorations and history |
| PNG / PostScript | Image of a view | Not editable track data |

Supported `.trk` through `.trk4` saves can also load. Older formats lack some fields; inspect the result and save a new `.trk5` under another name.

## Before closing or switching projects

1. Save a named `.trk5` milestone.
2. Export a TED if you placed decorations or need the final sampled road.
3. Note manual-height, ramp, smoothing and start/pit settings; a screenshot is useful.
4. Keep source references and confirm both output files exist.
5. Back up the folder outside the application directory before updating.

Do not rely on an unsaved-change prompt or automatic recovery. Avoid testing a reopened file over your only copy. See [exporting](exporting.md) and [known limits](../known-limits.md).
