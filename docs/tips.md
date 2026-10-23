# Practical track-building habits

## Choose scenery first

Scenery changes the terrain and available decoration models. Choose it before shaping elevation and placing objects. Export a decorated track before switching: confirming a different scenery clears placed decorations.

## Work in passes

1. **Layout:** establish straights, corner order and a clear start area.
2. **Corners:** adjust radii and Euler/circular behavior; remove redundant nodes.
3. **Elevation:** inspect terrain, then introduce manual heights and ramps gradually.
4. **Scenery:** add a few decorations before filling long sections.
5. **Review:** check warnings, start/pit positions, elevation and an isometric view.
6. **Save and export:** keep a TRK5, a TED and notes of session controls.

A clear canvas is a useful editing goal, but it does not guarantee that a track will behave correctly in your game setup.

## Use precise edits where they matter

Double-click a selected node or press ++enter++ to open Edit Point. For multi-selection, position edits use relative offsets while radius/camber/segment edits set values across the selection. Check which nodes are selected before applying a large edit.

Use ++c++ to centre the track, ++a++ to select all, ++e++ to toggle curve mode and ++r++ / ++s++ for transforms. The ++x++ / ++y++ keys constrain dragging; they are not mirror commands. [Controls →](interface/toolbar.md)

## Treat generators and tracers as starting points

After generating or tracing, inspect joins, tight corners and duplicated or noisy nodes. Higher GPS accuracy produces more detail, which is not always easier to edit. Start at 50%, then refine important sections manually.

To preserve an existing road, import a reference overlay instead of tracing a replacement. To rebuild it from GPS, use **Trace GPX/CSV**. [Compare imports →](files/importing.md)

## Keep elevation changes gradual

Inspect both the height profile and slope curve. Start with small height adjustments, then tune ramps while watching the combined terrain/manual result. The graph's ±30% gridlines are visual references, not a guarantee of acceptable drivability.

Before re-exporting a loaded TRK5, restore the intended manual-height enable, smoothing and ramp controls: these are not all preserved in that file. [Elevation →](concepts/elevation-terrain.md)

## Keep recoverable milestones

- Use a new TRK5 filename before experiments, imports and large transforms.
- Export a TED after decorating; TRK5 does not include decoration records.
- Keep source references and notes or screenshots of important controls.
- Back up personal folders outside the installation directory before updating.
- Reopen copies when testing imports or investigating a bug.

[Save-format limits →](files/saving-loading.md)
