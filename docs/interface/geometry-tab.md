# Geometry Tab

The **Geometry** tab is the control room of your track: every property that shapes the road, its racing lines and its start/pit logic lives here. The tab is organised into six sections, described below exactly in the order they appear. All sliders apply live — drag one and watch the canvas update.

![The Geometry tab with its six sections](../assets/screenshots/02-main-gp.png){ class="tlc-shot" }

## Road Geometry

Global properties of the road surface itself. Every value is shared by the whole track; per-corner overrides happen through node properties.

| Control | Range | Default | What it does |
|---|---|---|---|
| **Road width (m)** | 0.01 – 200, step 0.05 | 10 | Width of the drivable surface. Also sets the export's track width values and the minimum corner radius (`width / 2 + 6 m`). |
| **Max camber angle (°)** | 0 – 30, step 0.1 | 3 | Cap for the automatic banking applied to corners that don't carry a per-point override. |
| **Camber rate (°/m)** | 0.01 – 0.5, step 0.01 | 0.15 | How quickly banking transitions from level to full camber along the road, in degrees per metre. |
| **Camber axis** | −1 – 1, step 0.1 | 0 | The pivot of the banking: −1 fixes the inner edge, 0 the centreline, 1 the outer edge. Changes where elevation is "added" by banking in exports. |
| **Surface smoothing** | 0 – 1, step 0.05 | 1 | Blend between the raw terrain heights (0) and the smoothed profile (1) used by the exporter — smooths out jitter without flattening hills. |

A practical example: a tight karting track works well at a 6–8 m width with a 5° max camber; a fast Grand Prix layout is typically 10–13 m with the default 3°. The camber axis matters most on hairpins with high banking, where pivoting on the outer edge avoids the inner curb "digging into" the terrain.

## Track Scaling & Flags

| Control | Range | Default | What it does |
|---|---|---|---|
| **Number of sectors** | 2 – 10, step 1 | 4 | Stored in `.trk5` saves for your own reference; not used by the TED export itself. |
| **Road length factor** | 0.5 – 2.0, step 0.1 | 1 | Scales the 100 m base length of the mid-track road segments written into the TED file — a hidden fine-tune for how GT6 assembles the ribbon. |

Most builders never touch the road length factor; it exists for cases where a track exports slightly long or short versus the editor's plan-view measurement and needs a nudge to match a target length.

## Start & Pit Line Logic

Controls where the start line and pit lane sit along the lap. The panel changes shape depending on the first checkbox:

- **Separate Pit/Start unchecked** (default) — a single slider, **Start/Pit Alignment (m)**, from −2500 to 2500 in steps of 50, moves start line and pit lane together. Internally the start offset is pinned to −3 m and the slider drives the shared pit offset.
- **Separate Pit/Start checked** — two independent sliders appear: **Start Line Shift (m)** (−5000…5000, step 10) and **Pit Lane Offset (m)** (−5000…5000, step 50).

On circuits, the pit offset rotates the road split and the finish line around the lap, and a magenta pit lane with a **PIT START** marker is drawn on the canvas so you can see exactly where drivers enter the pits. Point-to-point tracks use a different start scheme altogether (see Road Modes below).

## Road Modes

Three checkboxes that define what *kind* of track you are building:

| Mode | Default | Effect |
|---|---|---|
| **Circuit** | :material-checkbox-marked: | Closes the loop. Enables lap logic, start/pit offsets and the checkpoint chain that wraps around to zero. Uncheck for point-to-point (sprint/rally) tracks. |
| **Narrow road** | :material-checkbox-blank-outline: | Switches mid-track road segments to the theme's narrow variants and reduces the border margin from 40 m to 16 m — for tight mountain roads and karting tracks. |
| **Short straight** | :material-checkbox-blank-outline: | Point-to-point tracks only: replaces the multi-block start zone with a single sprint-start block. |

The interplay between Circuit and the generators is deliberate: generating a **Rally Stage** while Circuit is checked is blocked with a clear explanation (unless you enable the experimental override in [Preferences](preferences.md)), because point-to-point stages simply don't close.

## Manual Height Controls

The on-ramp to the elevation editor, covered in depth on the [Elevation & Terrain](../concepts/elevation-terrain.md) page:

| Control | Range | Default | Meaning |
|---|---|---|---|
| **Enable Manual Height** | — | off | Activates per-node Z heights (set them in the Edit Point dialog or the elevation workflow). |
| **Ramp UP Transition (In)** | 0 – 1, step 0.05 | 1.0 | Fraction of a segment used to ease *into* a height change. |
| **Ramp DOWN Transition (Out)** | 0 – 1, step 0.05 | 1.0 | Fraction of a segment used to ease *out of* a height change. |

With both ramps at 1.0, height changes span their whole segment with smoothstep easing; smaller values concentrate the climb into a shorter stretch, letting you build distinct crests and compression zones.

## Other Tools

Three icon buttons that operate on the current selection — full behaviour in [Toolbar & Canvas Tools](toolbar.md#transform-tools):

- **Equip Rotate Tool** — rotate the selection around its centre (++r++).
- **Equip Scale Tool** — scale the selection around its centre (++s++).
- **Randomize Selected Nodes** — jitter selected nodes by up to ±25 m.

!!! tip "Where did Track Settings go?"
    If you are looking for road width, camber or start/pit alignment in a *settings dialog* — they are not there. TLC+ keeps all track settings in this sidebar tab so they are always one glance away while you edit. The in-app notice in Preferences says the same thing.
