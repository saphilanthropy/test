# Client Knowledgebases

This directory holds one markdown **knowledgebase per client**, automatically
built and refreshed from our connected tools and history:

- **Gmail** — email threads, decisions, open replies
- **Slack** — relevant channels and notable threads
- **Asana** — active projects, open tasks, status updates
- **QuickBooks** — customer record, outstanding AR, invoices, payments

The client roster is **inferred each run** from Gmail + Google Calendar activity
(frequent external organizations), reconciled with the files already here.

## Files
- `INDEX.md` — auto-generated roll-up of every client (status, last refreshed, AR, open actions).
- `<client-slug>.md` — one file per client. Slug = lowercase, hyphenated org name.
- `_TEMPLATE.md` — the canonical structure each client file follows. Blueprint only; not a real client.

## How it's built
A reusable task definition lives at `.claude/commands/build-knowledgebases.md`.

**Run on demand:** invoke `/build-knowledgebases` in a Claude Code session.

**Run on a schedule (recommended):** create a scheduled trigger in Claude Code on
the web pointing at this repo, with the task prompt:

> Run the `/build-knowledgebases` task.

A weekly cadence (e.g. Monday mornings) keeps each knowledgebase current without
manual effort. See https://code.claude.com/docs/en/claude-code-on-the-web for how
to configure scheduled triggers.

## Editing by hand
You can add context directly to any client file under **"Risks & Notes"** and
**"Open Items & Action Items"** — the refresh task merges (does not overwrite)
those sections. Data-derived sections are regenerated each run.

## Privacy
These files contain sensitive client data and live in this repository only. The
refresh task is read-only against all external tools and never transmits client
data off-repo.
