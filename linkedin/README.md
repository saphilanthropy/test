# LinkedIn posting

A reusable task that drafts a LinkedIn post in Sarah's voice, shows it for
approval, and publishes it once approved.

## Files

| File | What it's for |
|---|---|
| `VOICE.md` | Voice, themes, and the hard "never" list. **Edit this by hand.** |
| `ideas.md` | Idea queue the task pulls from when run without a topic. |
| `posts/` | Archive of every post — published, approved, or awaiting approval. |
| `../.claude/commands/linkedin-post.md` | The task definition itself. |

## Using it

```
/linkedin-post                          # pulls the top idea from ideas.md
/linkedin-post the trouble with restricted funding
/linkedin-post https://example.org/report   # react to something
```

It drafts, shows the exact final text, and **waits**. Nothing is published until
you say so. Revisions each need their own approval — approving one draft doesn't
approve the next one.

## Before the first run

1. **Edit `VOICE.md`.** It's currently inferred, not confirmed. Rewriting the
   "Voice" and "Never" sections in your own words is the single biggest
   improvement you can make to the drafts.
2. **Add a few ideas to `ideas.md`**, or just pass topics directly.
3. **Set up a publishing route** (below).

## Publishing route

No LinkedIn connector is installed, so the task resolves a route at runtime.
In preference order:

1. **A LinkedIn connector**, if one gets added — the cleanest option. Check
   claude.ai connector settings for a LinkedIn integration that supports organic
   posts (not just LinkedIn Ads).
2. **Zapier** — connected to this workspace already, and its catalog includes
   LinkedIn's "Create Share Update". This needs LinkedIn authorized inside
   Zapier, and the first run needs you present to approve the tool call.
3. **Neither available** — the task saves the approved text to `posts/` and hands
   it to you to paste. Still useful; just not one-click.

⚠️ If you use Zapier, check which LinkedIn account is connected. Zapier can post
to company pages as well as personal profiles, and posting to the wrong one isn't
quietly fixable. The task is instructed to confirm this before publishing.

## Scheduling

You can attach this to a scheduled trigger the same way `/build-knowledgebases`
is scheduled — but note it behaves differently unattended: **a scheduled run
drafts and saves, it never publishes.** There's nobody there to approve, and
publishing to a public profile isn't something to do unsupervised.

A reasonable pattern: schedule a weekly draft, review the queued drafts when
convenient, publish the good ones.

## Client confidentiality

This task is explicitly walled off from `knowledgebases/`. Those files hold
confidential client data — threads, contracts, AR, risk notes — and a LinkedIn
post is the most public thing this repo produces. The task is instructed not to
read them, and not to name clients or use client numbers without your explicit
say-so in the moment.

If a post genuinely needs a client detail, the task will tell you rather than
anonymize its way around it — "a foundation I worked with" is still identifiable
to anyone close to the work.
