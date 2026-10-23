# Known limits in desktop v1.3.0

These limits affect how you save and validate a track. They are documented here so the guide does not imply a newer desktop feature or a complete session backup.

| Area | Limit | Practical workflow |
| --- | --- | --- |
| Native saves | `.trk5` omits decorations, references, history and several session controls | Keep TRK5 + TED + settings notes |
| TED import | Road nodes are reconstructed; node heights/banking reset | Keep the native geometry save |
| Decorations | Scenery-specific models; maximum 1,000 items | Choose scenery first and inspect count |
| Scenery switching | Confirming a different scenery clears placed decorations | Export before switching |
| GPS tracing | Simplifies projected coordinates into nodes | Inspect closure, noise and tight corners |
| Screenshots | Main menu says PostScript while normal output is PNG | Use the reported output filename |
| Classic light mode | Work in progress | Use Dark if contrast is inconsistent |
| Language | New strings may be incomplete; guide machine translation is unreviewed | Refer back to English tool names |
| Game use | Export does not transfer a course or restore online services | Validate with your own compatible GT6 workflow |

Older screenshots in this guide are explicitly labeled **v1.2.0**. They illustrate the shared editing workflow and do not show the new v1.3.0 controls. No desktop v1.4.0 features are documented here.

[Saving](files/saving-loading.md) · [Decorations](interface/decorations.md) · [Troubleshooting](troubleshooting.md)
