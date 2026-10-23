---
hide:
  - toc
---

<div class="tlc-eyebrow">DESKTOP GUIDE · VERSION 1.3.0</div>

# Make your next great track.

Design a circuit, trace a real route, shape the elevation and add trackside scenery. This is the guide to **Track Layout Creator + for desktop**, from your first launch to a `.ted` export.

[Start building :material-arrow-right:](getting-started/first-track.md){ .md-button .md-button--primary }
[Download & install](getting-started/installation.md){ .md-button }

<div class="tlc-release" markdown>
**New in 1.3.0** · [Decorations](interface/decorations.md), [editable GPS tracing](generators/gps-tracing.md), camera tilt and Classic light mode. [See what changed →](releases.md)
</div>

![A Grand Prix layout in the TLC+ desktop editor](assets/screenshots/02-main-gp.png){ .tlc-shot }

*Earlier v1.2.0 interface shown. The v1.3.0 editor adds Decorations and Track Tracer controls.*

## What would you like to do?

<div class="grid cards" markdown>

-   :material-flag-checkered: **Build your first circuit**

    Generate a layout, adjust a corner, save the geometry and export your track.

    [Follow the walkthrough →](getting-started/first-track.md)

-   :material-map-marker-path: **Recreate a real route**

    Turn GPX or latitude/longitude CSV data into editable nodes, or keep it as a reference.

    [Trace a GPS path →](generators/gps-tracing.md)

-   :material-pine-tree: **Add trackside scenery**

    Place individual decorations, choose variants and fill a circuit at regular intervals.

    [Use the decoration editor →](interface/decorations.md)

-   :material-image-outline: **Trace a track map**

    Choose Centerline, Outline or Smart Fill for a clean image of a layout.

    [Trace an image →](generators/image-vectorizer.md)

-   :material-content-save-outline: **Keep your work safe**

    Understand what `.trk5`, `.ted` and `.pgn` preserve before closing the app.

    [Save, back up & reopen →](files/saving-loading.md)

-   :material-lifebuoy: **Solve a problem**

    Fix launch failures, missing controls, tracing issues and export problems.

    [Troubleshoot →](troubleshooting.md)

</div>

## A reliable workflow

**Choose scenery → build geometry → check elevation → save `.trk5` → decorate → export `.ted`.**

Keep both files: v1.3.0's `.trk5` serializer **does not save decorations**. A TED export preserves supported decoration records, but importing TED reconstructs the road and resets node heights/banking. [Read the save limits](files/saving-loading.md#what-a-trk5-preserves).

## Find your way around

Use the search box for a tool name, file extension or task. The [window overview](interface/overview.md) explains the workspace; [controls](interface/toolbar.md) lists gestures and shortcuts; [core concepts](concepts/track-geometry.md) explains the geometry behind the road.

This guide covers **desktop v1.3.0 only**. It does not describe TLC+ Web. English is the maintained guide language; optional machine translation opens Google Translate and is not a reviewed localization.

TLC+ builds on the original Track Layout Creator by **eran0004**, with the Plus project maintained by **daydrive7**. [Desktop releases](https://github.com/daydrive7/track-layout-creator-plus/releases) · [Report an app issue](https://github.com/daydrive7/track-layout-creator-plus/issues) · [Guide source](https://github.com/daydrive7/tlc-plus-wiki)
