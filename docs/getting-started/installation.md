# Installation

TLC+ is a portable Python application — there is no installer, no registry entries and no compilation step. You download one archive, run a launcher script, and you are done. This page walks you through the setup on each platform and explains what gets installed along the way.

## System requirements

| Requirement | Details |
|---|---|
| **Operating system** | Windows, macOS or Linux |
| **Python** | 3.8 or newer (the launchers can install Python for you on Windows) |
| **Pillow** | Image vectorization and the window icon on macOS/Linux |
| **numpy** | Terrain heightmap sampling and geometry math |
| **Tkinter** | The GUI toolkit — bundled with official Python installers on Windows and macOS; on most Linux distributions it is a separate package |
| **Disk space** | ≈ 10 MB for the app and its bundled heightmap data |

The application is fully offline after installation. The only network features are the optional **Check for Updates** button and the **Help → Guide** menu item, both of which ask before opening a browser.

---

## Windows

1. Download `TrackLayoutCreatorPlus_1.2.0.7z` from the [latest release](https://github.com/daydrive7/track-layout-creator-plus/releases) and extract it with 7-Zip, WinRAR or Windows 11's built-in archive support.
2. Open the extracted `Track Layout Creator +` folder and double-click **`run.bat`**.

The launcher takes care of everything automatically:

1. It looks for an existing Python 3 installation.
2. If Python is missing, it downloads and installs **Python 3.11** for you.
3. It installs `Pillow` and `numpy` if they are not present.
4. It starts TLC+.

On subsequent launches, step 1–3 are skipped and the app starts instantly. Windows may show a "Windows protected your PC" SmartScreen prompt the first time because the script is unsigned — click **More info → Run anyway** if you trust the source.

!!! tip "Python from the Microsoft Store"
    If you installed Python from the Microsoft Store, `run.bat` will still find it, but in rare cases the store version's alias shim can interfere. If the launcher cannot find Python, download the official build from [python.org](https://www.python.org/downloads/) instead and tick **"Add python.exe to PATH"** during setup.

---

## macOS

1. Extract the downloaded `.7z` archive (for example with [The Unarchiver](https://theunarchiver.com/) or `brew install p7zip`).
2. In the `Track Layout Creator +` folder, **right-click `run.command` and choose Open** the first time, then confirm with *Open* in the dialog. This bypasses Gatekeeper, which does not recognise the unsigned script.
3. On every later launch you can simply double-click `run.command`.

The launcher verifies that Python 3 is available (from [python.org](https://www.python.org/downloads/macos/) or Homebrew's `brew install python`), installs `Pillow` and `numpy` if needed, and starts TLC+.

If you prefer the Terminal, you can also start the app directly:

```bash
cd "/path/to/Track Layout Creator +"
./run.command
# or
python3 TrackLayoutCreatorPlus.py
```

---

## Linux

Most distributions ship Tkinter separately from Python, so one extra package is usually needed. Install the set once with your package manager:

=== "Debian / Ubuntu"

    ```bash
    sudo apt install python3 python3-tk python3-pil python3-numpy
    ```

=== "Fedora"

    ```bash
    sudo dnf install python3 python3-tkinter python3-pillow python3-numpy
    ```

=== "Arch / Manjaro"

    ```bash
    sudo pacman -S python tk python-pillow python-numpy
    ```

Then make the launcher executable (only needed once) and run it:

```bash
cd "/path/to/Track Layout Creator +"
chmod +x run.sh
./run.sh
```

Alternatively, install the Python dependencies with pip and start the app manually:

```bash
pip install -r requirements.txt
python3 TrackLayoutCreatorPlus.py
```

---

## Verifying the installation

Whichever platform you are on, a successful launch looks like this: a dark-themed window opens maximized with the title **TRACK LAYOUT CREATOR +** in the upper-left corner, the toolbar floats over an empty terrain canvas on the left, and the status card in the lower-right reads `Scene: Eifel Flat`. If you see that, everything — including the heightmap data — loaded correctly.

![The TLC+ window immediately after a fresh start](../assets/screenshots/01-main-blank.png){ class="tlc-shot" }

!!! note "Where files are stored"
    TLC+ keeps everything next to the program folder: track saves go to `savefiles/`, TED exports to `output/`, PostScript screenshots to `img/`, and your preferences in `config.json`. Nothing is written outside the application directory.

---

## Updating

TLC+ checks for new releases in the background a few seconds after startup (see [Preferences](../interface/preferences.md) to disable this), and you can always trigger a check manually with the **Check for Updates** button in the title bar. The check only compares version numbers and opens the release page in your browser — nothing is downloaded or installed automatically. To update, simply download the new `.7z` from the [releases page](https://github.com/daydrive7/track-layout-creator-plus/releases) and extract it over (or next to) your old copy; your tracks in `savefiles/` are plain data files and carry over unchanged.
