# What makes LinkedIn posts work — evidence review

**Compiled:** 2026-10-03 · **Re-check:** every ~6 months, the platform moves fast

This is desk research, not a crawl of LinkedIn. Nobody can give you a ranked list
of the sector's top posts by engagement — see "What this isn't" at the bottom.

---

## Read the evidence quality first

Most published LinkedIn "algorithm data" comes from companies selling LinkedIn
tools. They have a commercial interest in the conclusion. Treat the numbers as
directional, not precise.

The least-worst source is **Richard van der Blom's Algorithm Insights report** —
7th edition, ~1.3 million posts, ~400,000 profiles. It's still sold as a product,
but the sample dwarfs everything else, and most other sources are quietly
re-reporting it.

**Where sources openly contradict each other, I've said so** rather than picking
the tidier number. The contradictions are themselves informative: they tell you
which "rules" are actually shaky.

A trap in the benchmark data: "engagement rate" isn't one metric. Some sources
compute it per impression, others per follower. A 3% rate under one definition
isn't comparable to 3% under the other, and almost nobody states which they used.
Be suspicious of any cross-source comparison, including the ones below.

---

## What holds up across sources

**1. Dwell time is now the dominant signal.**
2026 is the first year dwell time is reported as the primary quality signal,
ahead of comment volume. Posts holding attention ~60s+ show engagement rates
around 15.6%; posts under 3 seconds, around 1.2%. The threshold commonly cited
for "the algorithm pushes this wider" is ~30 seconds.

**Implication:** length and depth beat frequency. A post worth reading slowly
outperforms three posts worth skimming.

**2. The truncation point is the whole game.**
LinkedIn cuts the post at roughly 200 characters behind "…see more." Reported
drop-off at that decision point is **60–70% of potential readers**. Everything
after the hook only matters to the third who clicked.

**Implication:** the first two lines are not an introduction. They're the ask.

**3. External links in the post body suppress reach.**
Van der Blom's 1.3M-post sample: **18.8% drop in median reach** for a link in the
body. First-comment placement is the standard workaround.

**4. Early comments compound hard — and your own replies most of all.**
Comments in the first five minutes are reported to lift reach ~4.2x. Replying to
comments within the first 30 minutes is associated with ~64% more total comments
and ~2.3x more views than replying late or not at all.

**Implication:** this is the single biggest lever, and it is *not* automatable.
It's 20 minutes of your attention after posting. No drafting tool substitutes for it.

**5. Organic reach is down sharply year over year.**
Van der Blom reports average post views down ~50%, engagement down ~25%, follower
growth down ~59% against prior periods. Posting the same way as two years ago
produces visibly worse numbers through no fault of the content.

**Implication:** don't read a quiet post as a failed post. Judge against a recent
baseline, not memory.

---

## What's genuinely contested

| Claim | The disagreement |
|---|---|
| **Comment weight vs. likes** | Widely quoted as 8–15x. At least one source argues effective weight after quality scoring is closer to **~2x**. The 15x figure looks like folklore that got repeated into authority. |
| **Carousels vs. text-only** | Document carousels reportedly get 39% more reach / 30% more engagement than average, and 2–3x on some accounts. But among **top-5% profiles, text-only ranks second-highest at 1.26x reach** — those audiences come to read. Carousels were also "fading" in 2025 data before climbing back. This is account-dependent, not a universal ranking. |
| **Dwell threshold** | 30s in some sources, 60s in others. Directionally the same, precisely unknowable. |
| **Video** | Reported reach multiplier ~0.86x (below average) but "trending upward," with 30–90s captioned vertical favoured. Weak consensus. |

**How to use a contested claim:** treat it as a hypothesis to test on your own
account, not a rule to follow. Your archive in `posts/` is better evidence about
your audience than any of this.

---

## The philanthropy / fundraising layer

**Nonprofits are an above-average sector on LinkedIn.** Reported average
engagement ~3.0%, with construction, education and nonprofits among the highest
of any industry. The sector is not fighting uphill here.

**Roughly 2 posts per week is the reported sweet spot** for nonprofit engagement
rate (~3.58% at that cadence). Not daily. This aligns with the dwell-time finding
— fewer, better.

**Donors and funders use LinkedIn to vet people, not just organisations.**
Reported: 42% of US donors use LinkedIn to research nonprofits they might
support; 26% discover giving opportunities there. 78% of nonprofits now run
LinkedIn Pages, up from 49% in 2023 — so the *org* channel is crowded and
increasingly samey.

**Implication for a consultant specifically:** your personal profile is the
differentiated asset. Org pages are saturated; individual practitioner voices
aren't. The thing you have that a charity's comms team doesn't is a named person
with a track record who can say something unhedged.

**What the sector sources say resonates:** practitioner thought leadership,
specific success mechanics, and donor-psychology framing — donors decide
emotionally and justify logically, and want confidence that their generosity
*accomplishes something*, not reassurance that you care. Leaders posting from
personal profiles outperform the same content on an org page.

**Photos reportedly perform best for nonprofits specifically (3.4%)** — which sits
awkwardly against the general carousel finding. Another reason to test rather
than obey.

---

## What this changes for us

Checked against `VOICE.md` and `.claude/commands/linkedin-post.md`:

**Validated — keep as is:**
- Hook must work standing alone at ~200 characters. The 60–70% drop-off is the
  hardest number in this whole review.
- No external links in the body; first comment instead. Costs 18.8% reach.
- 900–1,600 characters, shorter-is-stronger. Consistent with dwell time rewarding
  density over padding.
- Specific over abstract; no manufactured engagement bait. Bait games comment
  *count*, which is exactly the signal being quality-scored down.

**Worth changing:**
- **Cadence target: ~2 posts/week.** Sector sweet spot, and it suits a drafting
  workflow with a human approval gate.
- **Document carousels — now built** (`--carousel`, see `carousel/README.md`).
  The reach case was strong enough to try. It is *not* settled that they beat
  text-only for an established personal voice, so treat the first 3–4 as
  experiments and compare against text posts in the archive before concluding.
  Note also that nonprofit-specific data favours photos (3.4%), which sits
  awkwardly against the general carousel finding — another reason to test.
- **Reconsider the "no emoji / no hashtag spray" strictness?** No — leave it.
  Nothing in this research contradicts it, and it's a voice decision, not a
  reach decision.

**Not automatable, and the highest-leverage thing on this page:**
Reply to comments within 30 minutes of posting. ~64% more comments, ~2.3x views.
The agent drafts; this part is yours. Consider only publishing when you have a
20-minute window afterwards.

---

## What this isn't

I did not crawl LinkedIn, and no tool here can. LinkedIn blocks automated
crawling in robots.txt, prohibits scraping in its User Agreement, and gates most
post content behind auth. No API — LinkedIn's own or any connector — exposes
"top posts by engagement" across a sector; the marketing APIs return your own
account's analytics only.

So this is published research synthesised, with source quality flagged. It is
weaker than real data on your own posts would be. Once `posts/` has 10+ entries
with recorded outcomes, that becomes the better evidence base, and this file
should be demoted to background.

---

## Sources

- [Richard van der Blom — 2026 LinkedIn Algorithm Report (Creator Science interview)](https://podcast.creatorscience.com/richard-van-der-blom-2/) — 1.3M posts, 7th edition
- [The state of LinkedIn in 2026, based on 1.3 million posts](https://www.iheart.com/podcast/1168-creator-science-with-jay-57467147/episode/307-richard-van-der-blom-the-state-of-linkedin-in-2026-based-on-data-from-13-million-posts-335566642)
- [LinkedIn Algorithm Data 2026: Dwell Time, Comments, Reach](https://meet-lea.com/en/blog/linkedin-algorithm-explained)
- [LinkedIn Dwell Time 2026: Hidden Metric for Visibility](https://meet-lea.com/en/blog/linkedin-dwell-time-hidden-metric)
- [The LinkedIn Algorithm in 2026: What Changed](https://www.viralbrain.ai/blog/linkedin-algorithm-2026-what-changed)
- [LinkedIn Algorithm 2026: Technical Deep Dive](https://www.teract.ai/resources/linkedin-algorithm-2026)
- [Best Performing Content on LinkedIn in 2026](https://authoredup.com/blog/best-performing-content-on-linkedin)
- [LinkedIn Content Formats: Which Types Get the Highest Reach in 2026?](https://www.conbersa.ai/learn/linkedin-content-formats-highest-reach-2026)
- [LinkedIn Post Types Compared: Text vs Carousel vs Video vs Poll](https://www.conbersa.ai/learn/linkedin-post-types-compared)
- [The Best LinkedIn Post Format in 2026 (1.2M posts)](https://magicpost.in/blog/best-linkedin-post-format)
- [2026 Social Media Statistics for Nonprofits — Nonprofit Tech for Good](https://www.nptechforgood.com/101-best-practices/social-media-statistics-for-nonprofits/)
- [Social media benchmarks 2026 — Hootsuite](https://blog.hootsuite.com/social-media-benchmarks/)
- [Average engagement rates for 12 industries — Hootsuite](https://blog.hootsuite.com/average-engagement-rate/)
- [LinkedIn Engagement Rate Benchmarks 2026 — Apaya](https://apaya.com/blog/social-media-benchmarks-linkedin)
- [Donors Are Vetting You on LinkedIn — Chronicle of Philanthropy](https://www.philanthropy.com/solutions/donors-are-vetting-you-on-linkedin-heres-how-to-win-them-over/)
- [LinkedIn for Nonprofits — Donorbox](https://donorbox.org/nonprofit-blog/linkedin-for-nonprofits)
- [6 Tips to Use LinkedIn in Your Major Donor Strategy](https://nonprofitfundraising.com/6-tips-to-use-linkedin-in-your-major-donor-strategy/)

> Several of these could only be read at search-result level — this environment's
> egress proxy blocked direct fetches to `philanthropy.com`, `hootsuite.com`,
> `nptechforgood.com` and `authoredup.com`. Figures attributed to those sources
> are second-hand and worth verifying before you lean on any single one.
