# Saving & Loading

TLC+'s native project format is **`.trk5`** — a compact binary file that stores the entire editable project: every control node with its six properties, plus all sidebar settings. This page covers the format, the legacy formats the loader still understands, and the practical details of the save/load workflow.

## Saving

**File → Save track** or ++ctrl+s++ opens a save dialog defaulting to the `savefiles/` folder inside the application directory, with the filename pre-filled as a timestamp — `20260826_154200.trk5` — so no two saves collide. The written file contains:

- A 36-byte header starting with the `TRK5` magic, the theme's scenery index, and packed integers for every project setting (road width ×20, max camber ×10, camber rate ×100, sectors, road length factor ×10, the short-straight and narrow-road flags, the camber axis, circuit state and the start/pit offsets).
- One record per control node: X, Y, Z, radius, camber and segments — six 32-bit floats each.

Everything about the project is therefore reconstructible except two things: the undo history and any loaded reference path, which are session state and intentionally not persisted.

!!! tip "Version your work"
    Because saves are timestamped and cheap (a few KB), press ++ctrl+s++ at every milestone. The undo history is memory-only, so a crash mid-session is otherwise unrecoverable — and "before/after" files are the only way to compare layouts later.

## Loading

**File → Load track** or ++ctrl+o++ shows a file filter for `*.trk*` and reads any of the five generations of the format:

| Format | Node record | Notes |
|---|---|---|
| **`.trk5`** (current) | 6 floats: x, y, z, radius, camber, segments | Full project including heights and settings. |
| **`.trk4`** | 6 floats, wider header | Previous generation; loads transparently. |
| **`.trk3`** | 5 floats (no height) | Heights default to 0. |
| **`.trk2`** | 4 floats (x, −y, radius, camber) | Legacy y-axis flip handled automatically. |
| **`.trk`** | 3 floats (x, −y, radius) | The original era; camber defaults to global. |

When a `.trk5` is loaded, the sidebar settings snap to the stored values — road width, camber rules, flags, offsets and all — so the project reopens exactly as it was saved. Loading replaces the current polygon entirely (with an undo snapshot taken first, so ++ctrl+z++ restores what you had open).

## What is *not* a save

Two other file types are easy to confuse with project saves:

- **`.ted`** exports are *final* track files for GT6 — importing them back ([Importing](importing.md)) recovers an approximation, not the original project. Always keep the `.trk5`.
- **`.pgn`** polygon files are bare point lists without any settings — handy for exchanging raw geometry, but you lose every slider value.

## Workflow patterns

**Iterating on a design.** Save before every experiment (new file each time — the timestamps do it for you). If an experiment disappoints, load the previous file, or just undo within the session.

**Collaborating.** Send collaborators the `.trk5`; it round-trips losslessly. If they only need to look, a PostScript screenshot from `img/` or the isometric viewer is lighter than a file they might not be able to open.

**Migrating old projects.** Old `.trk`–`.trk4` files from the original Track Layout Creator ecosystem open directly — load, then immediately **Save As** a fresh `.trk5` to upgrade them. Heights and banking didn't exist in the oldest formats, so expect those fields to start at zero/global.

!!! warning "Save early, save often"
    Closing the app — via ✕, File → Quit, or an OS shutdown — does not prompt about unsaved work. The only auto-persisted things are preferences (`config.json`) and the elevation panel height. Your track is your responsibility; ++ctrl+s++ is one keystroke.
