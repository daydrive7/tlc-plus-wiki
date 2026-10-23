"""Validate local HTML targets and fragments, including raw HTML image links."""
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import unquote, urlsplit

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.path = set(), [], path
        self.feed(path.read_text(encoding="utf-8"))
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"): self.ids.add(attrs["id"])
        for key in ("href", "src"):
            if attrs.get(key): self.links.append(attrs[key])

root = Path(sys.argv[1] if len(sys.argv) > 1 else "site").resolve()
pages = {p.resolve(): Page(p) for p in root.rglob("*.html")}
errors = []
count = 0
for path, page in pages.items():
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc: continue
        # Absolute URLs refer to the production project prefix.
        target_path = unquote(url.path)
        if target_path.startswith("/tlc-plus-wiki/"):
            target = root / target_path.removeprefix("/tlc-plus-wiki/")
        elif target_path.startswith("/"):
            continue  # Theme 404 template uses origin-root links.
        else:
            target = path.parent / target_path if target_path else path
        target = target.resolve()
        if target.is_dir(): target = target / "index.html"
        count += 1
        if not target.exists():
            errors.append(f"{path.relative_to(root)}: missing {link}")
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f"{path.relative_to(root)}: missing fragment {link}")
if not (root / "search/search_index.json").exists(): errors.append("Missing search index")
if not pages: errors.append("No HTML pages found")
if errors:
    print("\n".join(errors))
    raise SystemExit(1)
print(f"PASS: {len(pages)} HTML pages; {count} local links/assets; search index present")
