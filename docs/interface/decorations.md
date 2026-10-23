# Decorations

Desktop v1.3.0 adds trackside decorations and writes supported items into TED exports. The available models depend on the active scenery. Choose your scenery before placing items.

## Place and edit an item

1. Generate or draw a road.
2. Open **Decorations** and select a palette item.
3. Activate the **Decoration tool** in the toolbar.
4. Click beside the road to place an item. Placement follows distance along the track and its left/right side.
5. Drag an existing item to move it along the road. Right-click an item to delete it.

The palette includes scenery-specific trees, rocks, buildings, spectators, signs and other roadside objects. An item's 2D symbol is an editing aid, not a preview of its complete in-game model.

## Selected-item controls

| Control | Use |
| --- | --- |
| **Randomize Variant** | Cycle the selected item's available visual variants |
| **Flip Side** | Move the selected item to the other side of the road |
| **Delete Selected** | Remove the selected decoration |
| **Clear All Decorations** | Clear the placed decoration collection after confirmation |
| Decoration rotate / scale tools | Adjust the selected item's representation and supported properties |
| **Snap to 5 m grid** | Align placement along the track to 5 m steps |

The count shows placed items out of the **1,000-item limit**. Some palette choices have multiple variants; others do not.

## Fill a track

Choose a type, set **Fill interval (m)** and click **Fill Track**. The slider spans **10–500 m in 5 m steps**. Start with a large interval, inspect the result and reduce it if needed. Filling adds items until the track is covered or the limit is reached; check your existing count first.

Use sparse placement around junctions, start/pit areas and tight corners. The editor cannot establish how every model will look in every game setup.

## Scenery changes

Decorations belong to their scenery set. Selecting a different scenery with items placed asks for confirmation. **Confirming clears the items** because models cannot be carried safely between sets. Export the current decorated track before switching. Undo history includes decoration snapshots, but it is not a backup of all scenery and sidebar settings.

## Saving and reopening

!!! warning "Export a TED before closing"
    The v1.3.0 `.trk5` save function does **not** serialize decorations. Save geometry as `.trk5` and export a `.ted` for the supported decoration records. Keep both.

**File → Import TED** reads supported decorations back from the file, but reconstructs the road and resets node heights/banking. It does not restore the original complete editing session. Open a copy to check the import before replacing work. [File-format limits →](../files/saving-loading.md)

## If the tab or items are missing

Ensure you extracted the full v1.3.0 release, including `resources/decorationData.py`. Check that the scenery has the item you expect and that you are using the decoration tool rather than the node-selection tool. See [troubleshooting](../troubleshooting.md).
