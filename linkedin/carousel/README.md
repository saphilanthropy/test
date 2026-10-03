# Carousels

A LinkedIn carousel is a **PDF uploaded as a document post**, which LinkedIn
renders as swipeable slides. It isn't a different kind of text — it's a different
artefact, so it needs rendering.

`render.mjs` turns a markdown deck into that PDF, plus PNG previews so you can
check the slides without opening anything.

```bash
node linkedin/carousel/render.mjs linkedin/carousel/EXAMPLE.md
```

Output lands next to the deck: `EXAMPLE.pdf` and `previews/EXAMPLE-NN.png`.
Flags: `--out <dir>` to write elsewhere, `--no-preview` to skip the PNGs.

**It exits non-zero if a slide overflows.** A clipped slide still renders and
still publishes — it just loses its last line to nobody's benefit. The check
catches that before it reaches your feed. If it fires, cut text; don't shrink the
type.

## Deck format

```markdown
---
title: The restricted funding trap
accent: "#0F4C5C"
footer: Sarah Ali · SA Philanthropy
---

> Kicker
# Big display line
Supporting line.

---

## Slide heading
Body text.

- A bullet
- Another bullet
```

| Marker | Renders as |
|---|---|
| `# ` | Display type — the cover line and the closing line |
| `## ` | Slide heading |
| `> ` | Kicker — small caps, accent colour, above a heading |
| `- ` | Bullet |
| plain | Body paragraph |
| `---` | Slide break |

`**bold**` and `*italic*` work inline. Straight quotes and `--` are converted to
proper typography automatically.

First slide renders as the **cover** (accent background), last as the **outro**
(accent background), everything between as body slides with a page number.

See `EXAMPLE.md` for a complete deck.

## Writing them

**8–12 slides.** The renderer caps at 15 and refuses fewer than 3. Past about a
dozen, people stop swiping before the payoff — which is where your point lives.

**Slide 1 is the entire gamble.** It's the thumbnail in the feed. If it doesn't
earn a swipe, nothing else on the deck exists. Same discipline as the 200-character
hook on a text post, with less room.

**One idea per slide.** If a slide needs a comma-spliced second thought, it's two
slides. Slides are cheap; attention isn't.

**Short lines.** Most people read these on a phone, at a swipe per second or two.
Write for a glance, not a paragraph.

**The last slide asks for something.** A question, a position, a next step. Don't
end on a summary — you've just spent ten slides making the point, don't restate it.

**The deck is not the post.** A carousel still needs accompanying post text, and
that text still needs its own hook, because the hook is what shows above the
document in the feed. Writing a great deck and lazy commentary wastes the deck.

## Design

The look is deliberately editorial — serif headings, off-white paper, one accent
colour, lots of air. Most LinkedIn carousels are bold-sans infographics that look
the same as each other. This doesn't.

Change `accent` per deck if you like, but keep it dark enough for white text to
sit on. To change the look across the board, edit the CSS in `render.mjs`.

## Publishing — read this before planning a carousel

**Document posts are harder to publish programmatically than text posts.**
A text share is one API call with a string. A document post requires uploading a
binary and registering it, which Zapier's standard LinkedIn "Create Share Update"
action does not do.

Realistically, expect to **upload the PDF by hand** — the agent drafts the deck,
renders it, shows you previews, and hands you the file to post. That's still most
of the work done, but it isn't one-click, and it may never be.

This hasn't been tested end to end, because no LinkedIn account is reachable from
the environment where it was built. Treat the manual path as the default and
anything better as a bonus.
