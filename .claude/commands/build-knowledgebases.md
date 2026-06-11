---
description: Build/refresh a markdown knowledgebase for each client from Gmail, Slack, Asana & QuickBooks
---

# Build per-client knowledgebases

You are running a recurring maintenance task. Your job is to (re)build a markdown
knowledgebase for **each client**, one file per client under `knowledgebases/`,
synthesizing everything we know from our connected tools and history.

Work autonomously. Do not stop to ask the user questions unless a connected tool
is unauthorized/unavailable and there is no reasonable fallback. This task is
expected to run unattended on a schedule.

## Sources (in priority order)
1. **Gmail** — `mcp__Gmail__search_threads`, `mcp__Gmail__get_thread`
2. **Slack** — `mcp__Slack__slack_search_public_and_private`, `slack_read_thread`, `slack_search_channels`
3. **Asana** — `mcp__Asana__asana_typeahead_search`, `asana_search_tasks`, `asana_get_projects_for_workspace`, `asana_get_task`
4. **QuickBooks** — `mcp__Intuit_QuickBooks__qbo_contact_search_customer`, `qbo_sales_get_invoices`, `qbo_accounting_get_ar_aging_detail`
5. **Google Calendar** (for roster inference only) — `mcp__Google_Calendar__list_events`

> If a tool's schema isn't loaded, load it first with `ToolSearch` using
> `select:<tool_name>` before calling it.

## Step 1 — Infer the client roster (Gmail + Calendar)
The client list is **not** maintained anywhere explicit — derive it each run:

1. Pull recent Gmail threads (`search_threads`, e.g. `newer_than:180d`) and recent
   Calendar events (`list_events`, last ~90 days).
2. Extract external participants (exclude our own domain `sarahaliphilanthropy.com`
   and common noreply/automated senders, newsletters, and vendors like Google,
   Slack, Intuit, etc.).
3. Group contacts by **email domain** → each external organization is a candidate
   client. Count interactions (threads + meetings) per org.
4. Keep organizations with **meaningful, recurring** contact (heuristic: ≥3
   interactions across email/calendar, or an existing file in `knowledgebases/`).
   When unsure whether something is a real client vs. a one-off vendor, include it
   but mark `Status: prospective` so a human can confirm.
5. Reconcile with existing files in `knowledgebases/` so previously-tracked clients
   are always refreshed even if quiet this period.

Produce a working roster of `{Org name, primary domain, key contacts}`.

## Step 2 — Gather per client
For each client in the roster, collect (be efficient — summarize, don't dump):
- **Gmail:** search `from:` / `to:` the client's domain & contacts; summarize key
  threads, decisions, and anything awaiting our reply.
- **Slack:** search the org name and contact names; note relevant channels and
  recent notable threads.
- **Asana:** typeahead/search for the org & contacts; list active projects, open
  tasks (assignee + due), and the latest status update.
- **QuickBooks:** look up the customer; capture outstanding balance, open/overdue
  invoices, and recent payments.

If a source has nothing for a client, write "_No records found._" under that
section rather than omitting it.

## Step 3 — Write the knowledgebase file
- One file per client: `knowledgebases/<client-slug>.md` (slug = lowercase,
  hyphenated org name, e.g. `acme-foundation.md`).
- Follow the structure in `knowledgebases/_TEMPLATE.md` exactly.
- Set `Last refreshed:` to today's date and fill `Sources synced:` with the
  sources that actually returned data.
- **Update in place**: if the file exists, preserve human-added notes under
  "Risks & Notes" and "Open Items" — merge, don't blow away. Refresh the
  data-derived sections (Timeline, Gmail, Slack, Asana, Financials).
- Regenerate `knowledgebases/INDEX.md`: a table of all clients with Status, Last
  refreshed, outstanding AR, and # open action items.

## Step 4 — Commit, push, PR
1. Commit to branch `claude/peaceful-brown-5n1dbr` with a message like
   `Refresh client knowledgebases (<date>)` summarizing how many clients were
   added/updated.
2. `git push -u origin claude/peaceful-brown-5n1dbr` (retry on network errors with
   exponential backoff).
3. If no PR exists for the branch, open a **draft** PR. If one exists, just push to
   it.

## Guardrails
- **Privacy:** these files contain sensitive client data. Keep them in this repo
  only; never send client data to any external service or post it in PR comments.
- **No side effects:** this task is read-only against all external tools. Never
  send emails/Slack messages, create Asana tasks, or modify QuickBooks records.
- **Be concise:** summarize. A knowledgebase is a briefing, not an archive dump.
- **Idempotent:** running twice in a row should produce ~no diff beyond the
  refresh date and genuinely new activity.
