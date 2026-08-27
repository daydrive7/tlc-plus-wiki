# Track Geometry

Every track in TLC+ is a **control polygon**: an ordered list of nodes, each carrying six values — X, Y position, Z height, corner radius, camber and a segment count. The smooth road you see on the canvas (and the one exported to GT6) is computed *from* that polygon, never stored separately. Understanding this model explains almost every behaviour of the editor.

## Nodes and the control polygon

The polygon is drawn as blue nodes joined by straight grey lines (toggleable as **Control Polygon** on the Map & Toggles tab). Nodes are stored in order of driving direction; node 0 is the start point, and the polygon closes back onto itself in Circuit mode. Each node's index is printed next to it (toggle **Polygon Vertex ID Labels**) and matches the number shown in the Edit Point dialog, so "corner 7" is unambiguous between the canvas and the dialog.

A node is far more than a coordinate:

| Property | Meaning | Where to edit |
|---|---|---|
| **X, Y (m)** | Position on the theme's map | Drag on canvas, arrow keys, Edit Point dialog |
| **Z (m)** | Manual height (0 unless enabled) | Edit Point dialog |
| **Radius (m)** | Corner rounding; 0 = sharp corner | Right-drag on node, Edit Point dialog |
| **Camber (°)** | Banking override; −1 = follow global rules | Camber tool, Edit Point dialog |
| **Segments** | Curve type & quality for this corner (see below) | Euler handles, ++e++, Edit Point dialog |

## Corner rounding: Euler vs. circular

TLC+ renders each corner with one of two curve families, chosen by the node's **segments** value:

- **Segments = 1 — circular arc.** The corner becomes a single circular arc of the node's radius, tangent to both adjoining straights. Predictable, classic, and exactly what a compass-and-paper sketch means by "a corner".
- **Segments = 0 or 2–8 — Euler spiral pairs.** The corner is built from *pairs of Euler spirals* (clothoids): curvature ramps linearly from zero at the straight to the apex and back down again. More segments mean more spiral pairs and finer sampling. This is how real racing circuits are actually surveyed — curvature builds gradually instead of snapping from straight to full-radius.

Pressing ++e++ with a selection toggles nodes between the two families (0 ↔ 1). The two small dots that flank a selected node are its **Euler handles** — drag them to change the segment count in real time, clamped to the range 0–8.

!!! example "Why Euler matters"
    Picture a 90° corner of radius 50 m driven at speed. A circular arc asks the car for full cornering force *instantly* at turn-in. An Euler version of the same corner spends the first metres ramping up to that force, and the last metres releasing it — the classic entry-apex-exit flow. GT6's physics feel the difference too, which is why the app's default for generated tracks is segments = 1 for gentle corners but hairpins get special treatment.

### Hairpin auto-routing

When a corner's sweep angle exceeds 140° **and** its radius is between 10 m and 30 m, the geometry engine automatically switches to a dedicated **hairpin routing** mode. The corner is re-formed as a tight, compound bend rather than a naive near-U arc, which keeps hairpins from pinching the road surface through itself. You will notice this most on rally stages and karting tracks: 180° bends stay drivable instead of degenerating.

## Radius rules and limits

The radius you set on a node is honoured within physical limits. Two constraints apply automatically:

1. **Minimum radius = road width / 2 + 6 m.** Below this the road surface would self-intersect at the apex, so the interactive radius drag stops there. A warning marker appears if an imported or generated track violates a *border-width* variant of this rule (radius < border width / 2).
2. **Radius 0 means straight.** Setting a node's radius to zero makes it a pure polygon vertex — useful mid-straight, or when you want a visually sharp corner (GT6 interprets it as a very tight turn).

Right-dragging a node sweeps its radius smoothly; the current value appears on the node label while you drag. For exact numbers, the Edit Point dialog accepts any radius, clamped to the same minimum.

## Camber { #camber }

Banking in TLC+ comes in two layers:

**Global camber** (Geometry tab) applies to every corner that doesn't override it. Given a corner, the exporter computes the bank angle as the node's share of **Max camber angle (°)** scaled by the corner's curvature, then transitions into and out of that angle at **Camber rate (°/m)**. The **camber axis** chooses the pivot — inner edge (−1), centreline (0) or outer edge (+1) — which determines how banking shifts the road vertically in the exported 3D geometry.

**Per-point camber** overrides the global rules for a single corner. Set it with the [Camber tool](../interface/toolbar.md#camber) (drag vertically, 0–30° in 0.01°/px steps) or numerically in the Edit Point dialog. A value of **−1 — shown as `C Global` — returns the corner to global rules**; anything else is an absolute angle for that corner alone.

Transitions between bank angles are spread across the adjoining road segments — never more than half of the shorter neighbouring segment on each side — so banking always eases in and out rather than stepping.

## Measuring the track

The status card's **Length** is the *plan-view* length: straight distances plus `|radius × sweep angle|` for each rounded corner, computed after smoothing. **Corners** counts the rounded curves of the finished track. Both update live as you edit.

The exporter, however, stores the **3D length** in the TED header — the road resampled including every metre of climb and descent. On a mountain stage the 3D length can exceed the plan-view figure by a noticeable margin; this is expected, not a bug. Checkpoints are placed by 3D distance every full 1000 m for exactly this reason.

## Warnings on the canvas

Three geometric red flags are drawn directly on the track, blinking red/orange:

| Marker | Condition | Fix |
|---|---|---|
| Triangle | Straight or corner shorter than 14 m | Move nodes apart or delete clutter |
| Marked centre point | Corner radius < border width / 2 | Increase the radius or widen spacing |
| `!` on a label | Very sharp sweep relative to radius | Add segments (Euler) or relax the corner |

None of these block exporting — they are advisory. But the first two in particular correspond to conditions that make the official GT6 Track Path Editor misbehave, so a clean canvas is the professional standard to aim for.
