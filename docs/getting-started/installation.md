# Download & install

Download the **v1.3.0 release archive**, extract the complete folder, then run the launcher for your operating system. Keep `resources/`, `locales/` and the launchers beside `TrackLayoutCreatorPlus.py`.

[Download desktop v1.3.0 :material-download:](https://github.com/daydrive7/track-layout-creator-plus/releases/tag/v1.3.0){ .md-button .md-button--primary }

The release attachment is named **`Track.Layout.Creator.+.7z`**. Use the attached archive under **Assets**; GitHub's automatic “Source code” archives contain the repository, which does not include the complete desktop application.

## Requirements

| Component | Needed for |
| --- | --- |
| Windows, macOS or Linux | Desktop application |
| Python 3 with Tkinter | Running the editor; the project README lists Python 3.8+ |
| Pillow and NumPy | Image operations and terrain/geometry |
| A writable extracted folder | Preferences, saves and exports |
| An archive extractor supporting `.7z` | Extracting the release |

Install a supported Python 3 version for your operating system. Check Tkinter with `python -m tkinter` (or `python3 -m tkinter`); it should open a small test window. The launchers detect Python and install missing libraries. **The v1.3.0 Windows launcher does not download or install Python.**

## Windows

1. Extract the `.7z` into a writable folder such as your Documents folder.
2. Install Python if necessary, including Tkinter and the option to make Python available from a terminal.
3. Open the extracted **Track Layout Creator +** folder and double-click **`run.bat`**.
4. Allow the first dependency installation to finish. If the launcher fails, read its message before closing it.

If it says Python is missing, check `python --version` or `py -3 --version` in a terminal. If Windows redirects you to the Store, check the Python installation and app execution aliases. See [launch troubleshooting](../troubleshooting.md#the-editor-will-not-start).

## macOS

1. Install Python 3 with Tkinter and extract the complete release.
2. In Finder, open **`run.command`** using the system's Open command for a downloaded script you trust.
3. Alternatively, open a terminal in the extracted application folder and run:

```sh
chmod +x run.command
./run.command
```

If Tkinter is unavailable, use a Python installation that includes it. Dependency and operating-system support vary with your Python distribution.

## Linux

Install Python and Tkinter through your distribution. For Debian/Ubuntu, for example:

```sh
sudo apt install python3 python3-tk python3-venv
```

From the extracted application folder:

```sh
chmod +x run.sh
./run.sh
```

If your distribution blocks installation into the system Python, use the isolated setup below instead of forcing a system-wide pip install.

## Manual setup in a virtual environment

Run these commands **inside the extracted application folder**.

=== "Windows"

    ```powershell
    py -3 -m venv .venv
    .venv\Scripts\python.exe -m pip install -r requirements.txt
    .venv\Scripts\python.exe TrackLayoutCreatorPlus.py
    ```

=== "macOS / Linux"

    ```sh
    python3 -m venv .venv
    .venv/bin/python -m pip install -r requirements.txt
    .venv/bin/python TrackLayoutCreatorPlus.py
    ```

## Confirm a successful launch

The editor should show a canvas, toolbar, sidebar and track status. Open **Generators → Grand Prix (Fast & Flowing)** and check that a layout appears. Some modules and the elevation graph can be hidden in Preferences; their absence alone does not mean installation failed.

Editing works offline after dependencies are installed. Startup update reminders contact GitHub when enabled. Help → Guide opens the online wiki; optional translation also requires internet access.

## Updating safely

Back up your application folder, especially `savefiles/`, `output/`, `polygons/`, `img/`, `reference paths/` and `config.json`. Extract a new release into a **separate folder** and copy your personal files deliberately. Do not rely on extracting over an existing installation to preserve everything.

The v1.3.0 update checker can open a release page; it does not install a release automatically. After updating, open a **copy** of a saved track and check its scenery, geometry and export before moving your main work. [Save-format limits →](../files/saving-loading.md)
