#!/usr/bin/env bash
# Build, dash-strip, validate, render. Run from the repo root: bash decks/qa.sh
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DECK="$DIR/sa-philanthropy-capability.pptx"
SKILL="/root/.claude/skills/synced/5cf2246d-6dda-4ef8-b45a-55cb913767d8_56120ff2-314e-489b-913f-06bbd83f28dc/pptx"

echo "== build"
node "$DIR/build.js"

echo "== strip dash bullets from the slide master"
python3 - "$DECK" <<'PY'
import sys, zipfile, shutil, os
src = sys.argv[1]; tmp = src + ".tmp"
zin = zipfile.ZipFile(src)
with zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zout:
    for n in zin.namelist():
        d = zin.read(n)
        if n.endswith((".xml", ".rels")):
            t = d.decode("utf-8")
            t = t.replace('char="–"', 'char="•"').replace('char="—"', 'char="•"')
            d = t.encode("utf-8")
        zout.writestr(n, d)
zin.close(); shutil.move(tmp, src)

z = zipfile.ZipFile(src); em = en = 0
for n in z.namelist():
    if not n.endswith((".xml", ".rels")): continue
    t = z.read(n).decode("utf-8")
    if "—" in t or "–" in t: print("  DASH in", n)
    em += t.count("—"); en += t.count("–")
print(f"  em={em} en={en}")
assert em == 0 and en == 0, "dashes present, house rule violated"
PY

echo "== validate"
python3 "$SKILL/scripts/office/validate.py" "$DECK"

echo "== content greps"
python3 - "$DECK" <<'PY'
import sys, zipfile, re
z = zipfile.ZipFile(sys.argv[1])
text = " ".join(
    z.read(n).decode("utf-8")
    for n in z.namelist() if n.startswith("ppt/slides/slide") and n.endswith(".xml")
)
flat = re.sub(r"<[^>]+>", "", text)

# Word-boundary matching: a substring test flags "governance" for "NaN".
for pat, label in [(r"\blorem\b", "lorem"), (r"\bipsum\b", "ipsum"), (r"\bTODO\b", "TODO"),
                   (r"\[insert", "[insert"), (r"\bundefined\b", "undefined"),
                   (r"\bNaN\b", "NaN"), (r"\bx{3,}\b", "xxx")]:
    if re.search(pat, flat, re.I): print(f"  PLACEHOLDER: {label}")

# "SAP" is banned as a way of referring to the firm. The house-language slide
# quotes it once as the thing we do not say, which is the point of that row.
sap = re.findall(r"\bSAP\b(?!, or any abbreviation)", flat)
legal = flat.count("Sarah Ali Philanthropy Inc.")
print(f"  stray 'SAP': {len(sap)} (must be 0)")
print(f"  legal entity name: {legal} (must be 1, closing slide only)")
assert not sap, "SAP used to refer to the firm"
assert legal == 1, "legal entity name must appear exactly once"
PY

echo "== render"
cd "$DIR"
rm -f ./*.pdf ./slide-*.png
python3 "$SKILL/scripts/office/soffice.py" --headless --convert-to pdf "$DECK" >/dev/null 2>&1
python3 - <<'PY'
import pypdfium2 as pdfium, glob
pdf = pdfium.PdfDocument(glob.glob("*.pdf")[0])
for i in range(len(pdf)):
    pdf[i].render(scale=150/72).to_pil().save(f"slide-{i+1:02d}.png")
print(f"  rendered {len(pdf)} slides")
PY
echo "== done"
