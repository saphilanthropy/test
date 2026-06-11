# Repository guide

This repo maintains **per-client knowledgebases** synthesized from connected
tools (Gmail, Slack, Asana, QuickBooks, Google Drive).

## Layout
- `knowledgebases/` — one markdown file per client, plus `INDEX.md` and `_TEMPLATE.md`.
- `.claude/commands/build-knowledgebases.md` — the reusable task that builds/refreshes them.

## The knowledgebase task
- Run with `/build-knowledgebases`, or attach it to a scheduled trigger in Claude
  Code on the web (weekly recommended).
- The client roster is inferred from Gmail + Google Calendar each run.
- The task is **read-only** against all external tools — it never sends messages,
  creates tasks, or modifies records.
- Human-added notes under "Risks & Notes" and "Open Items" in each client file are
  preserved across refreshes; data sections are regenerated.

## Conventions
- Client filenames are lowercase, hyphenated org names (`acme-foundation.md`).
- Keep client data in this repo only; never transmit it to external services.
