# Tips & Techniques

A collection of workflows, habits and small tricks that separate smooth track-building sessions from frustrating ones. Nothing here is required reading — but everything here has been learned the hard way by someone.

## Start with the terrain, not the track

Pick your theme *before* investing in a layout. A track designed on Eifel Flat's gentle relief can become undriveable when moved onto Andalusia's mountains — the road tunnels through ridges or floats over valleys. If you must relocate late, expect to rework elevation, not just recentre the polygon. The one-click theme switch is safe for experimentation precisely because every switch re-samples terrain live: watch the elevation graph, not just the canvas, when you flip between themes.

## Build in passes, not all at once

Professional-feeling tracks rarely emerge from one editing session. A rhythm that works:

1. **Skeleton pass** — nodes only, no radii. Get the flow and the straights' proportions right; the polygon lines alone tell you if the layout reads.
2. **Radius pass** — corner by corner with corner labels on, giving each bend its character. This is where ++e++ (Euler mode) earns its keep on the fast corners.
3. **Elevation pass** — manual heights on straights and crests first, then finesse the corners' surroundings.
4. **Compliance pass** — clear every blinking warning. A clean canvas is the definition of "ready to export".
5. **Export & inspect** — isometric view, PostScript screenshot, or straight into GT6's editor.

## Keyboard-first editing

The bindings are designed so your hand never leaves the left of the keyboard: ++c++ recentre, ++a++ select all, ++e++ Euler toggle, ++f++ flip direction, ++r++/++s++ transform tools, ++ctrl+z++ the safety net. The single most underused one is ++f++ — driving a layout backwards often reveals that the "boring" half is actually the interesting half once corner order and elevation swap roles.

## Precision where it matters

Drag for speed, dialogs for truth. The Edit Point dialog (double-click a node) edits by *relative offset across the whole selection* for position and absolutely for radius/camber/segments — making it the fastest way to give six corners identical 60 m radii, or to nudge a cluster exactly 25 m east. Combine with ++x++/++y++ axis constraints when dragging: constrain first, then drag freely along one axis.

## Making tracks that *feel* fast

A handful of geometry habits that translate into perceived speed in GT6:

- **Longest straight where the pit entry is** — the export's "home straight length" comes from your longest straight; place it where the lap starts.
- **Euler corners on fast bends** (segments 2–4) — progressive turn-in reads as confidence at speed.
- **One signature corner, not ten** — a single well-elevated, well-cambered hero corner (per-point camber with the camber tool) is memorable; ten banked corners are noise.
- **Camber axis on the centreline (0)** for most corners; pivot on the outer edge only for hairpins where you deliberately want the inside to "drop away".
- **Vary straights deliberately** — three similar-length straights in a row feel synthetic; make one clearly the longest.

## Elevation without tears

- **Sculpt with the graph, verify with the cursor.** Plant distance cursors in the elevation graph at crests and braking zones; the canvas centres there, and you can check sightlines from the driver's perspective.
- **Ramps ≈ 0.4–0.6 for events, 1.0 for flow.** Low ramp values make distinct crests/dips; full ramps make waves.
- **Keep the slope curve inside ±30 %.** The gridlines mark the sensible envelope — anything steeper is a wall with delusions of being a road.
- **Manual heights are offsets, not absolutes.** They blend onto terrain, so a "+8 m crest" on a hillside is a crest on a hillside. Read the combined curve in the graph, not just your typed numbers.

## Generator-assisted hand-building

The generators are seed-makers, not oracles:

- Generate the *nearest* archetype, keep the good half, delete the rest, and extend by hand.
- **Chaos** at low node counts is a motif machine — one interesting esses-complex per roll.
- After any generation, immediately re-radius the corners you care about; the archetype defaults are a starting point, not a verdict.
- **Randomize Selected Nodes** on a too-regular stretch of your *own* track breaks symmetry better than careful manual nudging.

## Reference-driven fidelity

Recreating a real circuit? Import its GPX as a reference, scale one known straight to its true length, then pen-trace. Check your progress by hiding **Reference Path** periodically — if the layout still reads as the real circuit with the reference off, you've captured its character rather than copying its outline.

## Housekeeping

- **Timestamped saves are free** — ++ctrl+s++ at every milestone and never lose a good idea.
- **Keep `savefiles/`, `output/` and `polygons/` under version control or cloud sync** — they are plain data files, perfect for it.
- **Prune your node count.** If a straight has more than two nodes on it, you probably have leftovers from an edit; Shift-delete them with the pen and the polygon gets cleaner to work with.
- **Before reporting a bug**, reproduce it from a fresh `.trk5` load — it isolates whether the problem is in the project or the program, and it is the first thing anyone will ask you for.
