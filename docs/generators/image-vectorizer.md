# Image Vectorizer

The Image Vectorizer turns a picture of a track into an editable polygon. Give it a track map — a scan of a paper sketch, a screenshot of a circuit map, an aerial photo — and it converts the ink into nodes with corner radii, ready for the usual editing tools. It lives on the [Generators tab](../interface/generators-tab.md), behind the **Trace Image** button.

Accepted inputs: **PNG, JPG, JPEG, WebP, BMP and GIF** (the section's description text says PNG/GIF out of historical brevity — the dialog accepts all six).

![The Image Vectorizer section with its three modes](../assets/screenshots/04-sidebar-generators.png){ class="tlc-shot" }

## The three trace modes

### Centerline (Drivable) — the default

Extracts the *drivable middle line* of a drawn track: the line a pen would follow staying exactly between the edges. The pipeline binarises the image (threshold auto-derived from its mean brightness, with polarity detection so dark-on-light and light-on-dark maps both work), walks the ink with an inertia-guided directional walker, and falls back to Zhang–Suen skeleton traversal for ambiguous regions. This mode is what you want for essentially every normal track map — the result lands on the canvas already looking like a road.

### Outline (Shape)

Traces the **outer boundary** of the shape with a Moore-neighbour boundary walk. Use it when your input is a filled silhouette (a lake shape, a stadium footprint, an island) rather than a drawn line, or when you explicitly want the *edge* of a wide blob as your centreline guide.

### Smart Fill (TSP)

The wildcard. It sub-samples the ink down to at most 1500 points, then chains them with a nearest-neighbour travelling-salesman heuristic — effectively "connect the dots in a sensible driving order." It is the fallback for imagery where neither a centerline nor a clean outline exists: scattered waypoints, dotted rally-route maps, or abstract shapes. Expect more cleanup work than with the other modes.

## The shared pipeline

Whatever the mode, the trace is followed by the same finishing passes:

1. **Simplification** — iterative Ramer–Douglas–Peucker with a per-mode tolerance (tightest for centerline, loosest for outline), collapsing hundreds of raw pixels into a meaningful handful of nodes.
2. **Scale normalization** — the trace is scaled to a **1000 m target size**, so a 200-pixel-wide napkin sketch and a 4000-pixel satellite crop both arrive at comparable physical dimensions. Fine-tune size afterwards by selecting all and scaling, or by scaling the whole polygon with the scale tool.
3. **Node quality filters** — minimum node spacing of 35 m and an angle filter of 8° remove redundant collinear points, so you get corner nodes, not a dotted line.
4. **Auto-closing** — if the two endpoints land within 15 % of the target size, the loop is closed automatically (and circuit mode switched on).

Every recovered node arrives with a default 40 m radius, global camber and circular curve mode — sane starting values you are expected to re-radius to taste.

## What can go wrong

The vectorizer validates its own output and refuses to produce garbage. If you see an error, it will be one of:

- **Less than 50 ink pixels** — the picture essentially contains no track. Check that you selected the right file and that the track lines are actually visible.
- **Fewer than 5 raw path points** — the trace could not follow a path (a common case: a dotted or extremely thin/broken line). Try Smart Fill mode, or thicken the lines in any image editor.
- **Fewer than 3 final nodes** after simplification — the ink traced, but the shape was too simple or noisy to keep. Usually fixed by a different mode or a cleaner input.

On success you get a summary like *“Vectorized (centerline)! 42 nodes.”* and the polygon lands centred on the canvas, undo included.

## Preparing images that trace well

- **High contrast, thick lines.** A black track on white paper photographed in even light beats a stylised map with gradients and labels.
- **Crop tightly.** Legends, scale bars and title text become ink the tracer will try to follow — crop to just the circuit.
- **One obvious line.** Centerline mode wants a single connected route. Overlapping variant lines (corner cutbacks drawn as alternatives) confuse it — pick one, erase the other.
- **Closed for circuits, open for stages.** The auto-closer triggers on proximity, so leave a visible gap if you *want* a point-to-point result — and close the loop in the drawing if you want a circuit.
- **Resolution beats cleanliness.** The pipeline normalises scale anyway; a large blurry image usually traces better than a small crisp one.

## From trace to track

A vectorized track is a *starting sketch*: radii default to 40 m everywhere, elevation follows the theme terrain, and GT6-specific constraints (14 m minimum feature length, radius vs. border width) have not been checked yet. The standard finishing sequence is:

1. Press ++c++ to see the whole thing, then walk the lap with corner labels on.
2. Re-radius the important corners (right-drag, or the Edit Point dialog for exact values).
3. Fix any blinking warnings — merges, spacing, radius violations.
4. Sculpt elevation, set start/pit logic, and export like any hand-built track.
