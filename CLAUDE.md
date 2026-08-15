# Repository guide

This repo holds Sarah's automated working tasks. Two areas, deliberately kept
apart:

1. **`knowledgebases/`** — per-client knowledgebases synthesized from connected
   tools (Gmail, Slack, Asana, Google Drive). Confidential, internal.
2. **`linkedin/`** — drafting and publishing public LinkedIn posts.

## Layout
- `knowledgebases/` — one markdown file per client, plus `INDEX.md` and `_TEMPLATE.md`.
- `.claude/commands/build-knowledgebases.md` — the reusable task that builds/refreshes them.
- `linkedin/` — `VOICE.md`, `ideas.md`, and the `posts/` archive.
- `.claude/commands/linkedin-post.md` — the reusable task that drafts and publishes.

## The knowledgebase task
- Run with `/build-knowledgebases`, or attach it to a scheduled trigger in Claude
  Code on the web (weekly recommended).
- The client roster is inferred from Gmail + Google Calendar each run.
- The task is **read-only** against all external tools — it never sends messages,
  creates tasks, or modifies records.
- Human-added notes under "Risks & Notes" and "Open Items" in each client file are
  preserved across refreshes; data sections are regenerated.

## The LinkedIn task
- Run with `/linkedin-post [topic]`. See `linkedin/README.md`.
- It is the **only** task here that writes to an external service. Everything it
  publishes is public and permanent-ish.
- **Nothing is published without Sarah approving the exact final text**, every
  time, including after each revision. Run unattended (scheduled trigger), it
  drafts and saves but never publishes.
- Voice and the hard "never" list live in `linkedin/VOICE.md`, edited by hand.

## The wall between the two
`knowledgebases/` is confidential client material; LinkedIn is public. The
LinkedIn task must never read from `knowledgebases/`, name a client, or use
client numbers — including paraphrased or anonymized. Keep them separate.

## Conventions
- Client filenames are lowercase, hyphenated org names (`acme-foundation.md`).
- Keep client data in this repo only; never transmit it to external services.
