# Themes & Road Types

A **theme** in TLC+ is more than a colour scheme: it selects the real-world terrain heightmap, the contour rendering, *and* an entire table of GT6 road building blocks — start zones, sprint blocks, mid-track straights (normal and narrow), and the line types used for start and finish lines. Choosing a theme is therefore the very first decision of any project, because it determines what the exported TED physically drives on.

## The four themes

| Theme | Terrain | Character |
|---|---|---|
| ![Death Valley](../assets/screenshots/11-theme-menu.png){: style="width:220px;border-radius:4px"} **Death Valley** | 6 000 × 6 000 m, ±204 m | Desert basin-and-range; wide open spaces with sudden ridges. |
| **Eifel** | 12 000 × 12 000 m, ±295 m | Rolling German hills — the classic all-rounder. |
| **Andalusia** | 7 000 × 7 000 m, ±646 m | Rugged Spanish mountains; the most extreme elevation. |
| **Eifel Flat** *(default)* | 12 000 × 12 000 m, ±166 m | Gentle Eifel relief — forgiving for first tracks. |

Switch themes from the **Theme** menu in the title bar. The polygon is untouched, but the terrain beneath it changes, so always re-check the elevation profile after switching. Eifel Flat internally reuses Eifel's road data with a flattened heightmap — the two are siblings, not separate families.

## What a theme provides

Every theme carries a table of road building blocks that the exporter assembles into the finished track:

**Start zones (circuits).** A specific sequence of start blocks — for example, Andalusia uses a 200+300+200 m build-up, Death Valley uses six blocks totalling 800 m, and the Eifel family uses six 100 m blocks. These set the character of the launch straight.

**Sprint blocks (point-to-point).** Separate `startsprint` and `endsprint` block sets replace the circuit start zone when Circuit mode is off. The **Short straight** checkbox (Geometry tab) substitutes a single-block sprint start — a classic rally-style launch.

**Mid-track roads.** Each theme defines its normal 100 m mid-road plus a set of narrow variants. With **Narrow road** checked, mid-track segments cycle through three 50 m narrow variants — the road visually and physically narrows, and the border margin drops from 40 m to 16 m.

**Start/finish line types.** Each theme names which line entries from its table are used for the circuit start line, the point-to-point start line and the P2P finish line, along with placement factors — e.g. Death Valley uses line type 2 at factor 0.88 for circuits, while Eifel uses type 3 at 0.95.

## Start & pit behaviour per track type

**Circuits** get the theme's start blocks, the start/pit offsets from the Geometry tab, and a pit lane drawn in magenta with a **PIT START** marker whenever the pit offset is non-zero. The finish line rotates with the pit offset so the final sector timing stays honest.

**Point-to-point tracks** (Circuit unchecked) use the sprint start/end blocks, stop placing wrap-around checkpoints 1000 m before the end, and ignore circuit-only settings. Rally stages additionally pin Circuit mode off automatically — with an experimental override available in Preferences.

## Choosing a theme for your project

- **First track / learning** — Eifel Flat. The gentle terrain keeps elevation complications away while you learn the polygon tools.
- **Flowing GP circuit** — Eifel. Long natural valleys invite fast, sweeping combinations.
- **Rally or hillclimb stage** — Andalusia. Huge elevation makes every stage a mountain road; pair with point-to-point mode.
- **Speedway / oval racing** — Death Valley or Eifel Flat. Flat-ish terrain suits constant-radius racing without surprise crests.

!!! info "Terrain is fixed per theme"
    The heightmaps are bundled binary data sampled from real terrain — you cannot paint custom terrain. If a location's relief doesn't suit your layout, your tools are manual heights (which sit on top of terrain), the surface smoothing slider, or switching themes entirely.

## Theme-specific quirks worth knowing

- The Eifel theme's road table is shared with **Eifel Flat**, so a track that exports correctly on one transfers cleanly to the other — only the terrain changes.
- Andalusia's ±646 m range means the elevation graph's vertical scale can dwarf manual heights; zoom your attention to the numbers rather than the curve amplitude.
- On any theme, the exporter deletes road segments shorter than 0.1 m regardless of settings — a guard against a division-by-zero crash on real PS3 hardware. Keep the canvas free of the short-feature warnings and this rule will never bite you.
