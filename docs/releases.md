# Desktop v1.3.0

This guide targets **v1.3.0**, published on **4 September 2026**. It does not cover development builds or TLC+ Web.

[Release and download](https://github.com/daydrive7/track-layout-creator-plus/releases/tag/v1.3.0){ .md-button .md-button--primary }

## What changed since v1.2.0?

| Feature | What you can do | Guide |
| --- | --- | --- |
| Decorations | Place scenery items, change variants/sides, fill a track and export supported records in TED | [Decorations](interface/decorations.md) |
| GPS tracing | Convert GPX/lat-lon CSV into an editable circuit or stage | [GPS tracing](generators/gps-tracing.md) |
| Trace accuracy | Adjust GPS detail from 50–100% | [Track Tracer](interface/generators-tab.md) |
| Isometric camera | Adjust vertical tilt while rotating the view | [Controls](interface/toolbar.md#isometric-viewer) |
| Workspace toggles | Hide the elevation graph or top-bar title | [Preferences](interface/preferences.md) |
| Classic light mode | Try the work-in-progress classic appearance | [Preferences](interface/preferences.md) |
| Guide fallback | Copy the guide URL if browser opening raises an error | [Troubleshooting](troubleshooting.md#help-guide-does-not-open) |

## Important corrections to older guide text

The release archive's `run.bat` requires an existing Python installation. Native TRK5 saves do not preserve decorations or every session control. The main-canvas screenshot normally saves PNG despite the File menu's PostScript label. The Number of sectors slider is absent; the legacy save field does not control checkpoint generation.

Keep these corrections in mind when using older screenshots or community instructions. [Known limits →](known-limits.md)
