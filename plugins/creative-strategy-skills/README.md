# Creative Strategy Skills

A stack of 8 skills for building paid-social creative strategy — from brand
research through messaging angles, concepts, formats, and hooks. Installed from
[`motion-team/creative-strategy-skills`](https://github.com/motion-team/creative-strategy-skills)
via `npx skills add`, then packaged as a Claude Code plugin so the whole
organization can use them.

This directory is a Claude Code **plugin** (`creative-strategy-skills`),
distributed through the marketplace defined at the repo root
(`.claude-plugin/marketplace.json`, marketplace name `saphilanthropy-skills`).
The skills live under `skills/<name>/SKILL.md` and are auto-discovered when the
plugin is enabled. Skills are namespaced by the plugin — e.g.
`/creative-strategy-skills:hook-writing`.

## Using these org-wide

The marketplace + plugin are auto-enabled for **this** repo via
`.claude/settings.json` (`extraKnownMarketplaces` + `enabledPlugins`), so anyone
who opens and trusts this repo gets the skills with no manual install.

To make them available in **other** repos / for **other** teammates, either:

- **Per teammate / project** — add the marketplace once and enable the plugin:
  ```
  /plugin marketplace add saphilanthropy/test
  /plugin install creative-strategy-skills@saphilanthropy-skills
  ```
  (or copy the two settings keys above into that repo's `.claude/settings.json`).
- **Org-wide, zero-touch** — an admin deploys a managed settings file
  (`/etc/claude/managed-settings.json` on Linux,
  `/Library/Preferences/claude-managed-settings.json` on macOS) containing the
  same `extraKnownMarketplaces` + `enabledPlugins` entries. This force-enables
  the plugin for every user on every repo.

> The marketplace is sourced from GitHub (`saphilanthropy/test`), so it resolves
> only after these files land on the repo's **default branch**.

## The skills

| Skill | What it does |
| --- | --- |
| `brand-intake` | Structured brand intake interview + web research → brand context document. |
| `review-audit` | Mines customer reviews for VOC: pains, trigger moments, objections, transformations, standout language. |
| `creative-strategy-engine` | Maps pain/desire buckets, personas, and messaging angles by awareness stage. |
| `creative-mechanics` | Library of structural patterns for *how* an ad constructs meaning (the cognitive move). |
| `visual-formats` | 45+ visual ad formats with funnel-stage guidance and medium (video/static/both). |
| `hook-writing` | Writes high-converting, psychologically-driven hooks for paid + organic. |
| `hook-tactics` | Reference library of 35+ hook/headline tactic types — what each is and when to use it. |
| `hook-voice-patterns` | Swipe file of native, scroll-stopping hook templates. |

## How the skills work together

The stack works best as a creative workflow. You can run all of it in a single
conversation — keep building on what each step produces.

1. **Start with `brand-intake`** — for any new client or brand, run the intake
   and research first to build a brand context document. This gives every other
   skill the foundational context it needs.
2. **Use `review-audit`** — mine reviews to deeply understand customers: their
   pains, what finally made them buy, what almost stopped them, and the exact
   language they use to describe their use case and their transformation.
3. **Use `creative-strategy-engine`** — define pain/desire buckets, personas,
   and messaging angles, informed by what you found in the reviews (and by the
   brand context from `brand-intake`).
4. **Develop concepts with `creative-mechanics`** — choose a structural approach
   for how each ad will communicate its message visually.
5. **Choose format with `visual-formats`** — pick the production structure
   (video/static, format type) that best delivers the concept.
6. **Write hooks with `hook-writing`** — turn your messaging angles and concepts
   into opening lines tailored to each awareness stage.
7. **Refine with `hook-tactics` and `hook-voice-patterns`** — broaden your hook
   range or sharpen the native feel of the language.

### Quick reference

- Hooks say **what**, formats show **how**, mechanics define the **cognitive/
  emotional mechanism** that makes the concept land.
- `creative-mechanics` and `visual-formats` work in both directions — either can
  come first.
- `hook-tactics` defines the frame; `hook-writing` is the execution inside it.

> Skills run with full agent permissions — review their content before relying
> on them in client work.
