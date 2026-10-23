# Trace a GPX or CSV route

**Track Tracer → Trace GPX/CSV** turns a GPS path into editable road nodes in v1.3.0. It is separate from the **External Path Imports** buttons, which draw a reference overlay without rebuilding the road.

## Trace a route

1. Save your current geometry and export decorations first.
2. Open **Generators → Track Tracer**. Enable the module in Preferences if hidden.
3. Set **Trace Accuracy (%) - GPX/CSV**. Start at **50%**.
4. Click **Trace GPX/CSV** and select a `.gpx` or latitude/longitude `.csv` file.
5. Check the result and its Circuit setting: closed paths become circuits; open paths become point-to-point stages.
6. Inspect start/end joins, noisy points, sharp corners and the elevation profile. Save a new `.trk5` when satisfied.

Tracing **replaces the editable polygon**. Geometry undo is available within the session; saving first is still the reliable recovery step. Existing decorations may no longer align with a replacement road, so review or clear them deliberately.

## Accuracy

The slider covers **50–100% in steps of 5**. Higher accuracy retains more detail and normally produces more nodes. It does not correct a noisy GPS recording. Use a lower setting for manageable geometry, then refine important corners manually.

This control applies **only to GPX/CSV tracing**. Centerline, Outline and Smart Fill are image modes; they do not select a GPS tracing algorithm.

## Input data

GPX provides latitude/longitude points. CSV must include recognizable latitude and longitude columns, such as `lat` and `lon`:

```csv
lat,lon
50.3356,6.9475
50.3360,6.9482
50.3365,6.9490
```

Use ordered route points with decimal degrees. A coordinate list in local X/Y metres is not a lat/lon CSV. Extra CSV columns do not become editable height nodes: inspect the terrain and set heights in TLC+ separately.

The tracer projects the route into metres and simplifies it. It produces an approximation, not a survey-accurate copy of the original path.

## Overlay instead of rebuilding

Use **Import GPX Path** or **Import CSV Path** under **External Path Imports** to keep your current road and draw a reference. **Reference Path Scale (x)** resizes that overlay: `1.0` is the original projected size; `0.5` is half-size. It is not the trace-accuracy control and does not resize the existing editable polygon.

[Compare all import routes →](../files/importing.md)

## Try a sample route

Download the [sample GPX loop](../assets/examples/sample-loop.gpx){ download } or [sample CSV stage](../assets/examples/sample-stage.csv){ download }. These are synthetic coordinates for learning, not surveyed circuits. Save your current work, start at 50% accuracy and trace the sample. The loop should become a circuit; the stage should remain open.
