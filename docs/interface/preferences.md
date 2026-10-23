# Preferences & language

Open **Preferences** to change the interface and visible modules. Road width, camber and elevation controls live on the **Geometry** tab instead.

## Appearance and workspace

- **Light Mode (W.I.P) — classic TLC look** switches between Dark and Classic. Classic is an experimental light theme; some widgets may still look inconsistent.
- **UI Accent Colour** changes the interface accent.
- **Show TLC+ title in top bar** controls the title label.
- Sidebar-module options show/hide the procedural builder, Track Tracer and external path imports.
- **Show Elevation** on Map & Toggles controls the bottom profile panel; its visibility and height are remembered.
- The console-hiding preference applies on Windows. Keep the console visible when investigating errors.

## Update reminders

**Remind me about updates on startup** enables a background GitHub check. Disable it to avoid the startup check. The manual Update action can check again.

When a newer release is found, the app offers to open its page in a browser. The v1.3.0 checker does not install the update. Back up personal files and use [the update procedure](../getting-started/installation.md#updating-safely).

## Language

**File → Language** offers English, Polish, Spanish, Portuguese (Brazil/Portugal), French, German, Japanese and Russian. Restart when prompted. Coverage of newly added strings can vary by language.

This guide maintains English content. Its **Translate** button opens the current public page through Google Translate, a third-party service. Machine translation is optional and is not a reviewed guide localization. It cannot translate a local preview URL.

## Experimental Rally Circuit option

**Allow Circuit on Rally Stages (Exp.)** bypasses a generator guard. Keep it disabled for the normal point-to-point workflow. Turn **Circuit** off on Geometry before generating a Rally Stage.

## What preferences remember

The app writes UI choices to `config.json`, including `theme`, `accent_color`, `language`, `elev_height`, `hide_terminal`, `remind_updates_on_startup`, `show_title`, `show_elevation` and `trace_accuracy`.

This is not a track save. Module visibility and other session controls should be rechecked when launching. To reset a damaged configuration, close the app and **rename** `config.json` to keep a backup, then relaunch. [What TRK5 preserves →](../files/saving-loading.md#what-a-trk5-preserves)
