# Frequently asked questions

## Which TLC+ does this guide cover?

**Desktop v1.3.0**, the Python/Tkinter editor. TLC+ Web is a separate application with different controls and file behavior. [Release overview →](releases.md)

## Where is the application download?

Use the attachment under Assets on the [v1.3.0 release page](https://github.com/daydrive7/track-layout-creator-plus/releases/tag/v1.3.0), not the automatic Source code archives. [Installation →](getting-started/installation.md)

## Does the Windows launcher install Python?

The v1.3.0 `run.bat` detects Python and can install missing libraries. If Python itself is missing, it asks you to install it. Older guide instructions described a different launcher.

## Why did my decorations disappear after reopening a TRK5?

The v1.3.0 TRK5 serializer omits decorations. Keep a native save for geometry **and a TED export for supported decoration records**. TED import reconstructs the road; it is not a full project recovery mechanism. [Save limits →](files/saving-loading.md#what-a-trk5-preserves)

## Can GPS data become an editable track?

Yes. Use **Track Tracer → Trace GPX/CSV**. The similarly named External Path Imports buttons only draw an overlay. [GPS tracing →](generators/gps-tracing.md)

## Does Trace Accuracy affect images?

No. The 50–100% control affects GPX/CSV tracing. Image tracing uses Centerline, Outline or Smart Fill. [Track Tracer controls →](interface/generators-tab.md)

## Why did the scenery switch clear decorations?

Models belong to scenery-specific catalogs. The app asks before switching; confirming clears placed items. Export first and choose scenery before decorating. [Decorations →](interface/decorations.md)

## Why is the exported length different?

Plan-view length and final 3D road length measure different paths. Exported heights add distance. Recheck manual-height and smoothing controls when comparing exports.

## Is TED import lossless?

No. **File → Import TED** reconstructs editable corners/radii and reads supported decorations, but node heights and banking reset. Preserve your TRK5 and important settings separately. [Import routes →](files/importing.md)

## Is there a light theme?

Yes: **Preferences → Light Mode (W.I.P)** selects Classic. It remains experimental in v1.3.0. The wiki's own light/dark switch is independent.

## Why does Export to PostScript save a PNG?

That is the retained File menu label in v1.3.0. The main-canvas implementation normally saves PNG and attempts PostScript if capture fails. The isometric viewer has separate export behavior. [Exporting →](files/exporting.md)

## Can I send a TED directly to GT6 or GT7?

The editor writes a GT6-format file. It does not provide console transfer, online sharing services or a GT7 importer. Use a separate compatible GT6 workflow and validate the result in your setup.

## Does the editor auto-save or install updates?

Do not rely on automatic track recovery. Save milestone files before closing. The v1.3.0 update checker opens release information; it does not install updates automatically.

## Where can I report a problem?

For app behavior, use [desktop issues](https://github.com/daydrive7/track-layout-creator-plus/issues). For incorrect guide text or broken wiki links, use [wiki issues](https://github.com/daydrive7/tlc-plus-wiki/issues). Include the app version, operating system, exact steps, error text and a small reproducing file when appropriate. [Troubleshooting →](troubleshooting.md)
