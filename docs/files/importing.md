# Importing

TLC+ can pull geometry from four external sources, each answering a different need: reverse-engineering an existing TED, tracing real-world GPS data, reading raw point lists, and overlaying reference paths to draw over. All imports take an undo snapshot first — ++ctrl+z++ always undoes an import that replaced your polygon.

## Import TED (editable) — File → Import TED

Reverse-engineers a `.ted` file back into an **editable polygon**. The importer walks the TED's control points, reconstructs corner apex nodes from tangent intersections, and recovers each corner's radius from the CP centres. Straight-only control points are skipped, which keeps the recovered polygon clean.

What comes back:

- Every significant corner as an editable node (radius recovered, curve mode circular).
- The circuit flag, scenery theme and road width from the TED header.
- **Heights and banking reset to 0/Global** — deliberately, because reconstructed banking frequently produces geometry errors. The dialog says so with the node count: *"Recovered N editable nodes…"*.

A file that yields too few nodes (fewer than three) is rejected with an apology rather than an empty canvas. Use this import when you want to *remix* a finished track — new corners, new elevation — rather than merely view it.

## Import TED (static reference) — Generators tab

The Generators-tab variant draws the TED's centreline as a **non-editable overlay** instead. Your polygon is untouched; the imported line simply appears as guidance (toggle it with **Reference Path** on the Map & Toggles tab). Choose this when you want to redraw a track faithfully rather than mutate it — tracing over the overlay with the pen keeps your nodes clean while the reference guarantees fidelity.

## GPX import — Generators tab

Reads waypoints from a GPS exchange file (`.gpx`) — a cycling route, a dashcam track log, a mapped real circuit — and projects them onto the canvas:

- Waypoint lat/lon pairs are read namespace-agnostically, so files from Garmin, Strava, OpenStreetMap tools etc. all work.
- The projection is **azimuthal equidistant** centred on the route's bounding box — distances and shapes stay true near the centre at the scale of a race track.
- The result is a reference overlay in metres, with the Y axis flipped to match the editor's coordinate system.

The default import folder is `reference paths/` if present. Combined with the **Reference Path Scale (×)** slider (0.01–3.00), you can shrink a full-size Nordschleife GPS trace down to a karting-scale interpretation, or blow up a tight gymkhana layout into a full circuit.

## CSV path import — Generators tab

Reads a `.csv` file whose header row contains **latitude and longitude columns** — accepted names are `lat`/`latitude` and `lon`/`lng`/`longitude`, case-insensitive, in any column order. The points go through the same projection as GPX and land as a reference overlay.

```text
lat,lon,elevation,name
50.3356,6.9475,620,Karussell
50.3311,6.9490,605,Brünnchen
...
```

Extra columns (like elevation or names) are ignored — only the coordinates matter. Note that despite the button's label mentioning `.ted`, the file picker filters for CSV only; TED files go through the two dedicated TED imports.

## Polygon import — File → Import polygon

Loads a `.pgn` file — a plain CSV with one node per line:

```text
x,y,z,radius,camber,segments,width
-120.5,340.0,0,90,-1,1,-1
-80.0,410.5,4,55,-1,0,-1
...
```

Unlike every other import, this **replaces your polygon** with fully-specified editable nodes — it is the lossless counterpart of **File → Export polygon**, ideal for generating geometry in your own scripts (a spreadsheet, a Python notebook, a generative tool) and finishing it in TLC+. The `width` column is a per-node width hint recorded by the exporter (−1 when unused); the editor itself uses the global road width. The default folder is `polygons/`.

## Reference path workflow tips

- **Scale before you trace.** Adjust *Reference Path Scale* until a reference straight matches your intended real-world length — checking one known straight is faster than eyeballing the whole loop.
- **Toggle freely.** The overlay never participates in exports; hide it whenever it visually collides with your polygon.
- **Clear when done.** The dark-red **Clear Reference Path** button removes the overlay (and its memory cost) entirely.
- **One at a time.** Importing a new reference replaces the previous one — layering multiple references is not supported in v1.2.0.
