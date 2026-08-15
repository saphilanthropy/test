---
description: Draft a LinkedIn post in Sarah's voice, get approval, then publish it
---

# Post to LinkedIn

You are drafting and publishing a LinkedIn post **as Sarah Ali** (Sarah Ali
Philanthropy). The output is public and permanent-ish — treat it accordingly.

**The hard rule of this task:** a post is only published after Sarah has seen the
exact final text and approved it. Never publish an unapproved draft, and never
publish a revision she hasn't seen. Everything else here is craft; this is the
line.

## Inputs
Invoked as `/linkedin-post [topic or link]`.

- **Topic given** → write about that.
- **No topic given** → open `linkedin/ideas.md`, pick the strongest unused idea
  (top of the queue unless something else is clearly more timely), and say which
  one you picked and why before drafting.
- **Queue empty and no topic** → don't invent a topic from thin air. Offer 3–4
  angles drawn from Sarah's stated themes in `linkedin/VOICE.md` and ask her to
  pick.

## Step 1 — Ground yourself
Read these every run, they are the source of truth for voice and repetition:

1. `linkedin/VOICE.md` — voice, themes, hard "never do this" list.
2. `linkedin/posts/` — the archive of everything already published. Skim the last
   ~10 so you don't repeat a hook, a story, or a stat she's already used. Recency
   matters more than volume here.
3. `linkedin/ideas.md` — the idea queue.

## Step 2 — Sourcing rules (read this before you write a word)

> **Never source post content from `knowledgebases/`.** Those files are
> confidential client data — email threads, contracts, AR, internal risk notes.
> They exist for internal briefing only, and `CLAUDE.md` forbids transmitting
> them anywhere. A LinkedIn post is the single most public thing in this repo.
> Do not read them for this task, do not paraphrase them, do not use them to
> "check a detail."

Also off-limits without Sarah explicitly saying yes in this session:
- **Naming a client**, current or former — even flatteringly, even if the
  engagement is public knowledge.
- **Numbers tied to a client** — grant sizes, budgets, headcount, outcomes.
- **Anything from a private room** — a meeting, a DM, a board conversation.
- **Anyone's likeness or quote** without permission.

What you *can* draw on: Sarah's own opinions and experience, publicly published
material (reports, articles, her own prior posts), general sector knowledge, and
anything she hands you directly in the prompt.

If a genuinely good post needs a client detail, write the version that works
without it. If it can't work without it, say so and propose a different angle —
don't quietly anonymize a real client into "a foundation I worked with." That's
still identifiable to anyone close to the work.

## Step 3 — Draft
Write for LinkedIn specifically, not generic prose.

**Structure**
- **Hook (first 1–2 lines).** LinkedIn truncates around 200 characters behind a
  "…see more". The hook has to earn the click on its own. No throat-clearing, no
  "I've been thinking a lot lately about…".
- **Body.** Short paragraphs, one idea each, blank line between. Dense blocks
  don't get read on mobile.
- **Landing.** A point of view, not a summary. If it ends with a question, make
  it a real one she'd actually want answered — not "thoughts? 👇".

**Length.** 900–1,600 characters is the working range. The platform limit is
3,000 — treat that as a wall, not a target. Shorter is usually stronger.

**Craft**
- Concrete over abstract. One specific example beats three general claims.
- No invented statistics, dates, or quotes. Ever. If you cite a figure, it must
  come from a source you can name, and you name it in the post.
- Hashtags: 0–3, at the end, real ones. No `#leadership #growth #mindset` spray.
- Emoji sparingly if at all — match what the archive shows she actually does.
- Links: LinkedIn suppresses reach on posts with external links. If there's a
  link, flag that tradeoff to Sarah and offer the first-comment alternative.

**Voice.** `linkedin/VOICE.md` governs. If the archive and the voice file
disagree, the archive wins — that's what she actually publishes — and mention
the drift so the file can be corrected.

## Step 4 — Self-check before showing her
Run the draft against this list and fix what fails. Don't show her a draft you
already know has a problem.

- [ ] Nothing traceable to a client, a private conversation, or `knowledgebases/`
- [ ] Every factual claim is either sourced or safely hers to assert
- [ ] Hook works standing alone at ~200 characters
- [ ] Doesn't repeat a hook or story from the last ~10 archived posts
- [ ] Sounds like her, not like LinkedIn's house style
- [ ] Under 3,000 characters

## Step 5 — Approval gate
Show Sarah:
1. The **exact final text**, verbatim, in a code block — what you'd publish,
   character for character.
2. Character count.
3. One line on the angle you took.
4. Anything you're unsure about — a claim you couldn't source, a name you'd want
   permission for, a link tradeoff.

Then **stop and wait.** Do not publish on this turn.

- She approves → Step 6.
- She asks for changes → revise, show the new full text, wait again. Every
  revision gets its own approval; approval doesn't carry forward.
- Ambiguous response ("nice", "sure, looks good I guess") → treat as *not*
  approved and ask plainly whether to publish.

If this task is ever run unattended (a scheduled trigger, a headless run) there
is no one to approve. In that case: do Steps 1–4, save the draft per Step 7 as
`status: awaiting-approval`, and stop. **A scheduled run must never publish.**

## Step 6 — Publish
The tooling for this is not fixed — no LinkedIn connector is installed in this
repo's environment, and MCP tool names change between sessions. Resolve the route
at runtime rather than assuming:

1. **Look for a direct LinkedIn tool.** Search with `ToolSearch` for
   `linkedin post share` and check for anything that creates an organic post
   (a "share update" / "create post" action). If a connector has been added since
   this file was written, use it.
2. **Otherwise try Zapier**, which is the intended route. The Zapier MCP server's
   tools are UUID-prefixed and the prefix changes — find them by keyword
   (`zapier discover actions`), then:
   - `discover_zapier_actions({ app: "LinkedIn" })` to find the share action
   - `enable_zapier_action(...)` if it isn't enabled yet
   - `inspect_zapier_actions(...)` for the exact parameter schema
   - `execute_zapier_write_action(...)` to post
   Confirm the connected LinkedIn account is Sarah's personal profile before
   executing — Zapier can also be connected to company pages, and posting to the
   wrong one is not quietly fixable.
3. **If neither route is available** — no connector, Zapier not authorized, or
   the call needs an approval nobody can give — do not treat that as failure and
   do not retry blindly. Save the approved post per Step 7 with
   `status: approved-not-published`, hand Sarah the final text ready to paste,
   and tell her plainly which route was missing and what would enable it.

Post exactly the approved text. Not a tightened version, not a fixed typo you
spotted on the way — the approved text.

## Step 7 — Archive
Every post, published or not, gets a file: `linkedin/posts/YYYY-MM-DD-<slug>.md`

```markdown
---
date: 2026-08-15
status: published | approved-not-published | awaiting-approval
url: <permalink, once published>
source: <idea queue | topic given in prompt | link>
---

<the exact post text>

---
**Notes:** angle taken, anything deliberately left out, follow-ups.
```

Then:
- Mark the idea used in `linkedin/ideas.md` (strike it through, keep it — the
  history is useful for spotting repetition).
- Commit to branch `claude/linkedin-posting-agent-5mdhkp` with a message like
  `Add LinkedIn post: <short title>`, push, and open a **draft** PR if none is
  open for the branch.
- The archive is not optional. It's the only thing standing between this agent
  and posting the same idea twice in a month.

## Guardrails, restated
- **Approval before publish.** No exceptions, no implied approval, no
  "she said yes to something similar last week."
- **No client data.** `knowledgebases/` is off-limits to this task entirely.
- **One post per run.** Don't batch-publish. If she wants a series, draft the
  series, approve individually, space them out.
- **Publishing is one-way.** Deleting a LinkedIn post doesn't unsend a
  notification, an email digest, or someone's screenshot. When in doubt, ask
  rather than post.
