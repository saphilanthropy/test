// SA Philanthropy — Capability Reference (internal)
// Build: node decks/build.js
//
// Brand per the house deck skill, Section 10 (firm-authored decks):
//   Navy #0B1B34 (settled 27 Aug 2026) · Warm Cream #F4EFE7 · Burgundy #7A1F2B micro-accent only
//   Gold is retired. Do not reintroduce.
// Derived neutral tints (navy/cream blends, declared at delivery, not new brand colours):
//   MUTED_L #686F7C on cream · MUTED_D #9AA3AE on navy · CARD_L #E6E2DB
// Type: Inter. Separate installed family per weight, so no pptxgenjs bold flags (faux-bold risk).
// Editorial rules enforced: no em or en dashes anywhere, ranges written "to", UK English,
// "SA Philanthropy" in body, legal entity name once on the closing slide only, nothing under 15pt.
//
// Titles are styled explicitly rather than through placeholder inheritance: in QA the
// placeholder dropped both the weight and the colour, so dark-slide titles rendered
// near-black on navy. Explicit wins over tidy here.

const pptxgen = require('pptxgenjs')
const path = require('node:path')

const NAVY = '0B1B34'
const CREAM = 'F4EFE7'
const BURG = '7A1F2B'
const MUTED_L = '686F7C'
const MUTED_D = '9AA3AE'
const CARD_L = 'E6E2DB'

const F = { reg: 'Inter', semi: 'Inter SemiBold', bold: 'Inter Bold', xbold: 'Inter ExtraBold' }

const W = 13.333
const M = 0.85
const COL = W - M * 2

const pres = new pptxgen()
pres.layout = 'LAYOUT_WIDE'
pres.author = 'SA Philanthropy'
pres.company = 'SA Philanthropy'
pres.title = 'SA Philanthropy Capability Reference'
pres.theme = { headFontFace: F.xbold, bodyFontFace: F.reg }

pres.defineSlideMaster({ title: 'LIGHT', background: { color: CREAM } })
pres.defineSlideMaster({ title: 'DARK', background: { color: NAVY } })

// ---------------------------------------------------------------- helpers

// One large title, top left. No eyebrow above it, no section numbering.
const title = (slide, text, dark) =>
  slide.addText(text, {
    x: M, y: 0.62, w: COL, h: 1.0, margin: 0,
    fontFace: F.xbold, fontSize: 32, color: dark ? CREAM : NAVY,
    charSpacing: -0.2, valign: 'top', isTextBox: true,
  })

// The argument in plain words, directly under the title.
const thesis = (slide, text, dark) =>
  slide.addText(text, {
    x: M, y: 1.76, w: COL * 0.88, h: 0.9, margin: 0,
    fontFace: F.semi, fontSize: 18, color: dark ? CREAM : NAVY,
    lineSpacingMultiple: 1.26, valign: 'top', isTextBox: true,
  })

const pageNo = (slide, n, dark) =>
  slide.addText(String(n).padStart(2, '0'), {
    x: W - M - 0.8, y: 6.84, w: 0.8, h: 0.3, margin: 0,
    fontFace: F.reg, fontSize: 15, color: dark ? MUTED_D : MUTED_L,
    align: 'right', isTextBox: true,
  })

// Kept to a single rendered line so it never collides with content above.
const sourceLine = (slide, text, dark) =>
  slide.addText(text, {
    x: M, y: 6.84, w: COL - 1.1, h: 0.3, margin: 0,
    fontFace: F.reg, fontSize: 15, italic: true,
    color: dark ? MUTED_D : MUTED_L, valign: 'top', isTextBox: true,
  })

// Card: eyebrow label, then one or two short lines. Never a paragraph.
function card (slide, { x, y, w, h, label, body, dark }) {
  slide.addShape(pres.ShapeType.rect, {
    x, y, w, h, fill: { color: dark ? CREAM : CARD_L }, line: { type: 'none' },
  })
  slide.addText(label, {
    x: x + 0.3, y: y + 0.28, w: w - 0.6, h: 0.52, margin: 0,
    fontFace: F.bold, fontSize: 15, color: BURG, charSpacing: 1.0,
    valign: 'top', isTextBox: true,
  })
  slide.addText(body, {
    x: x + 0.3, y: y + 0.86, w: w - 0.6, h: h - 1.16, margin: 0,
    fontFace: F.reg, fontSize: 15, color: NAVY, lineSpacingMultiple: 1.22,
    valign: 'top', isTextBox: true,
  })
}

// Shared table styling. pad is [top, right, bottom, left] in points.
function table (slide, { head, body, y, colW, pad, dark }) {
  const rows = [head.map(t => ({
    text: t,
    options: {
      fontFace: F.bold, fontSize: 15, color: CREAM, fill: { color: NAVY },
      charSpacing: 1.0, margin: pad,
    },
  }))]
  body.forEach((r, i) => rows.push(r.map((t, c) => ({
    text: t,
    options: {
      fontFace: c === r.length - 1 ? F.semi : F.reg, fontSize: 15, color: NAVY,
      fill: { color: i % 2 ? CREAM : CARD_L }, margin: pad,
    },
  }))))
  slide.addTable(rows, { x: M, y, w: COL, colW, border: { type: 'none' } })
}

// ---------------------------------------------------------------- 01 cover

{
  const s = pres.addSlide({ masterName: 'DARK' })
  s.addText('SA PHILANTHROPY', {
    x: M, y: 0.78, w: COL, h: 0.35, margin: 0,
    fontFace: F.bold, fontSize: 16, color: CREAM, charSpacing: 2.4, isTextBox: true,
  })
  s.addText('Capability', {
    x: M, y: 2.08, w: COL, h: 0.95, margin: 0,
    fontFace: F.xbold, fontSize: 60, color: CREAM, charSpacing: -1.2, isTextBox: true,
  })
  s.addText('Reference', {
    x: M, y: 2.92, w: COL, h: 0.95, margin: 0,
    fontFace: F.xbold, fontSize: 60, color: CREAM, charSpacing: -1.2, isTextBox: true,
  })
  s.addShape(pres.ShapeType.rect, {
    x: M, y: 4.08, w: 1.15, h: 0.055, fill: { color: BURG }, line: { type: 'none' },
  })
  s.addText('What we do, who we do it for, and the proof we can stand behind.', {
    x: M, y: 4.42, w: COL * 0.66, h: 0.5, margin: 0,
    fontFace: F.reg, fontSize: 19, color: MUTED_D, isTextBox: true,
  })
  s.addText('Internal use only. Not for client distribution.', {
    x: M, y: 6.6, w: COL * 0.7, h: 0.35, margin: 0,
    fontFace: F.reg, fontSize: 15, color: MUTED_D, isTextBox: true,
  })
  s.addNotes(
    'Internal reference deck. It is not a client pitch, so it says things plainly that a client deck would soften.\n\n' +
    'Caveat to state up front: every performance figure in here comes from the published case studies on the website ' +
    'and still needs Sarah sign off before any of it goes into an external asset. Nothing here has been independently ' +
    'reverified against source reporting.\n\n' +
    'There is no logo on this cover because no logo master was available when this was built. Typographic cover by choice, not oversight.'
  )
}

// ---------------------------------------------------------------- 02 what we are

{
  const s = pres.addSlide({ masterName: 'LIGHT' })
  title(s, 'A SPECIALIST, NOT A GENERALIST AGENCY', false)
  thesis(s,
    'SA Philanthropy builds fundraising systems for organisations working across the United States, ' +
    'United Kingdom, Canada and Australia. The specialism is what makes the breadth credible.', false)

  const gap = 0.4
  const cw = (COL - gap * 3) / 4
  const cards = [
    ['FOUR MARKETS', 'US, UK, Canada and Australia, run as one programme.'],
    ['SYSTEMS, NOT CAMPAIGNS', 'Built to keep working after the engagement ends.'],
    ['EVIDENCE LED', 'Every recommendation carries a number or a test.'],
    ['PRACTITIONER VOICE', 'We publish what we know. It is how they find us.'],
  ]
  cards.forEach(([label, body], i) =>
    card(s, { x: M + i * (cw + gap), y: 3.35, w: cw, h: 2.35, label, body, dark: false }))

  pageNo(s, 2, false)
  s.addNotes(
    'The point of this slide is the second sentence. We are not claiming to be everything to everyone, and the ' +
    'specialism is what gives us the right to talk about the rest.\n\n' +
    'Four markets is a genuine differentiator for organisations running cross border programmes, because most agencies ' +
    'handle one market well and bolt the others on.'
  )
}

// ---------------------------------------------------------------- 03 the specialism

{
  const s = pres.addSlide({ masterName: 'DARK' })
  title(s, 'ISLAMIC PHILANTHROPY IS THE SPINE', true)
  thesis(s,
    'Zakat, Ramadan and Dhul Hijjah are not seasonal add ons. They are a distinct donor economy with its own ' +
    'compliance expectations, timing and trust signals.', true)

  const gap = 0.42
  const cw = (COL - gap * 2) / 3
  const cards = [
    ['COMPLIANCE', 'Governance, Shariah oversight, segregated accounting and distribution timelines.'],
    ['SEASONAL ARCHITECTURE', 'Ramadan and Dhul Hijjah planned as campaigns in their own right.'],
    ['SCHOLARLY SIGN OFF', 'Fiqh content routes to our reviewer first. We do not certify rulings ourselves.'],
  ]
  cards.forEach(([label, body], i) =>
    card(s, { x: M + i * (cw + gap), y: 3.35, w: cw, h: 2.3, label, body, dark: true }))

  pageNo(s, 3, true)
  sourceLine(s, 'Published engagements and the Zakat readiness checklist, sarahaliphilanthropy.com', true)
  s.addNotes(
    'This is the slide that separates us from a generalist fundraising agency, so it sits early.\n\n' +
    'Say the third card out loud when it comes up. We describe process, we do not assert rulings. That distinction ' +
    'protects the firm and it is also why organisations trust the compliance work.\n\n' +
    'Standing rule: anything touching Zakat, Khums, Sadaqah, Qurbani or inheritance routes to ARJ before it leaves the firm.'
  )
}

// ---------------------------------------------------------------- 04 four disciplines

{
  const s = pres.addSlide({ masterName: 'LIGHT' })
  title(s, 'FOUR DISCIPLINES, ONE OPEN QUESTION', false)
  thesis(s,
    'Our own published guidance says an agency claiming all four disciplines equally is describing an ambition, ' +
    'not a capability. Our case studies span all four. How we scope that claim is a decision we owe ourselves.', false)

  table(s, {
    head: ['DISCIPLINE', 'WHAT IT COVERS', 'MEASURED ON'],
    body: [
      ['Paid acquisition', 'Meta, search, programmatic', 'Cost per acquisition and ROAS'],
      ['Strategy and case', 'Feasibility, case for support', 'Qualified pipeline built'],
      ['Direct response', 'Email, SMS, monthly giving', 'Net revenue per donor'],
      ['Brand and creative', 'Positioning, message architecture', 'Lift to the channels above'],
    ],
    y: 3.55, colW: [3.1, 4.4, 4.13], pad: [11, 14, 11, 14], dark: false,
  })

  pageNo(s, 4, false)
  sourceLine(s, 'Source: How Do You Choose a Fundraising Agency, sarahaliphilanthropy.com', false)
  s.addNotes(
    'This slide exists because the tension is real and it is better named internally than discovered by a prospect.\n\n' +
    'Sarah has published that an agency claiming all four equally is overclaiming. Our results genuinely span all four. ' +
    'Both things are true. The honest resolution is probably to lead with the specialism and present the disciplines as ' +
    'depth inside it rather than as a four column menu, but that is a positioning decision for Sarah and Amir, not an assumption to build on.\n\n' +
    'Flag: do not reuse this slide in a client facing deck without resolving the question first.'
  )
}

// ---------------------------------------------------------------- 05 hero stat

{
  const s = pres.addSlide({ masterName: 'DARK' })
  title(s, 'THE NUMBER WE LEAD WITH', true)

  s.addShape(pres.ShapeType.rect, {
    x: M, y: 2.95, w: 5.05, h: 2.1, fill: { color: CREAM }, line: { type: 'none' },
  })
  s.addText('A$5.22M', {
    x: M, y: 3.42, w: 5.05, h: 1.2, margin: 0,
    fontFace: F.xbold, fontSize: 58, color: NAVY, align: 'center', charSpacing: -1.5, isTextBox: true,
  })
  s.addText(
    'raised in high net worth major gifts from 200 donors across the United States, United Kingdom and Canada, in a single fiscal year.',
    {
      x: M + 5.55, y: 3.05, w: COL - 5.55, h: 1.95, margin: 0,
      fontFace: F.semi, fontSize: 21, color: CREAM, lineSpacingMultiple: 1.3,
      valign: 'top', isTextBox: true,
    })

  pageNo(s, 5, true)
  sourceLine(s, 'Case study: international relief charity, 2025 to 26. Requires Sarah sign off.', true)
  s.addNotes(
    'One number, one meaning. Do not stack other statistics on this slide. Everything else lives on the next slide and in the appendix.\n\n' +
    'Why this number and not a bigger one: it is a structured moves management result rather than a campaign spike, which is ' +
    'the harder and more defensible thing to have done. It also carries the donor count, so the audience can see the average gift is real.\n\n' +
    'Caveat to say out loud: this is from the published case study and has not been reverified against source reporting for this deck.'
  )
}

// ---------------------------------------------------------------- 06 proof table

{
  const s = pres.addSlide({ masterName: 'LIGHT' })
  title(s, 'PROVEN ACROSS MARKETS AND MANDATES', false)

  table(s, {
    head: ['MANDATE', 'MARKETS', 'RESULT'],
    body: [
      ['Major gifts, moves management', 'US, UK, CA', 'A$5.22M from 200 donors'],
      ['Ramadan campaign', 'UK, US, CA', '$4.8M raised in 30 days'],
      ['Executive engagement', 'UK, US, CA, AU', '4.11x ROI in 90 days'],
      ['Integrated email, social and paid', 'CA, US, UK', '25.41x Canadian paid media ROI'],
      ['Monthly giving programme', 'International', '$1.3M annual recurring revenue'],
      ['Donation page testing', 'North America', '80% revenue lift, 90% recurring lift'],
    ],
    y: 2.32, colW: [4.95, 2.4, 4.28], pad: [10, 14, 10, 14], dark: false,
  })

  pageNo(s, 6, false)
  sourceLine(s, 'Published case studies, sarahaliphilanthropy.com/results. All figures require Sarah sign off.', false)
  s.addNotes(
    'Six mandates chosen to show range of discipline and range of market, not the six biggest numbers. ' +
    'The full set of sixteen is in the appendix.\n\n' +
    'If someone asks why the currencies are mixed: they are reported as the client reported them, which is the honest ' +
    'way to do it. Do not convert them into a single blended figure, because that invents a number nobody can source.'
  )
}

// ---------------------------------------------------------------- 07 house language

{
  const s = pres.addSlide({ masterName: 'DARK' })
  title(s, 'HOW WE TALK ABOUT THE WORK', true)
  thesis(s, 'House language. Not preferences. Every external asset is checked against these before it leaves the firm.', true)

  const pad = [9, 14, 9, 14]
  const rows = [[
    { text: 'WE SAY', options: { fontFace: F.bold, fontSize: 15, color: NAVY, fill: { color: CREAM }, charSpacing: 1.0, margin: pad } },
    { text: 'WE DO NOT SAY', options: { fontFace: F.bold, fontSize: 15, color: CREAM, fill: { color: BURG }, charSpacing: 1.0, margin: pad } },
  ]]
  const pairs = [
    ['SA Philanthropy', 'SAP, or any abbreviation'],
    ['Organisations and nonprofits', 'Donors, when we mean clients'],
    ['45 minute working session', 'Consultation'],
    ['90 day scale roadmap', 'Audit'],
    ['Ranges written with "to"', 'Dashes of any kind, anywhere'],
    ['UK English throughout', 'US spellings, except in sourced figures'],
  ]
  pairs.forEach(([a, b], i) => rows.push([
    { text: a, options: { fontFace: F.semi, fontSize: 15, color: NAVY, fill: { color: i % 2 ? CREAM : CARD_L }, margin: pad } },
    { text: b, options: { fontFace: F.reg, fontSize: 15, color: MUTED_L, fill: { color: i % 2 ? CREAM : CARD_L }, margin: pad } },
  ]))

  s.addTable(rows, { x: M, y: 3.05, w: COL, colW: [5.8, 5.83], border: { type: 'none' } })

  pageNo(s, 7, true)
  s.addNotes(
    'This is the slide the team will actually come back to, so it earns its place in the main flow rather than the appendix.\n\n' +
    'The client versus donor distinction is the one that slips most often in drafts. Our clients are organisations. ' +
    'Donors are who those organisations are trying to reach. Blurring it reads as though we do not know whose side we are on.\n\n' +
    'The no dashes rule is absolute and it includes the ones software inserts for you, so check generated documents before sending.'
  )
}

// ---------------------------------------------------------------- 08 content engine

{
  const s = pres.addSlide({ masterName: 'LIGHT' })
  title(s, 'THE WRITING IS HOW THEY FIND US', false)
  thesis(s,
    'Twenty published articles and eight gated toolkits, each written to answer a question an organisation is ' +
    'already searching for. Headlines are written as the question, not the topic.', false)

  const stats = [['20', 'published articles'], ['8', 'gated toolkits'], ['7', 'subject categories']]
  stats.forEach(([n, l], i) => {
    const x = M + i * 2.55
    s.addText(n, {
      x, y: 3.5, w: 2.3, h: 0.9, margin: 0,
      fontFace: F.xbold, fontSize: 46, color: NAVY, charSpacing: -1, isTextBox: true,
    })
    s.addText(l, {
      x, y: 4.42, w: 2.3, h: 0.4, margin: 0,
      fontFace: F.reg, fontSize: 15, color: MUTED_L, isTextBox: true,
    })
  })

  card(s, {
    x: M + 8.0, y: 3.35, w: COL - 8.0, h: 2.1, label: 'WHAT IT IS FOR',
    body: 'The toolkits capture the email. The articles earn the trust. Neither is the product.',
    dark: false,
  })

  pageNo(s, 8, false)
  sourceLine(s, 'sarahaliphilanthropy.com/blog and /resources, counted October 2026', false)
  s.addNotes(
    'Categories span strategy, Islamic philanthropy, major gifts, donor experience, paid media, operations and leadership.\n\n' +
    'The thing worth protecting here is the house headline pattern. Every article title is phrased as the question a ' +
    'prospect would type, not as a topic label. That is deliberate and it is why the content gets found.\n\n' +
    'Counts are as at October 2026 and will drift. Recount before reusing this slide.'
  )
}

// ---------------------------------------------------------------- 09 appendix

{
  const s = pres.addSlide({ masterName: 'LIGHT' })
  title(s, 'APPENDIX: THE REST OF THE RECORD', false)

  table(s, {
    head: ['MANDATE', 'RESULT'],
    body: [
      ['Dhul Hijjah search campaign and SEO rebuild', '5.39x ROAS, 137 keywords ranking'],
      ['Symbolic gift catalogue, holiday season', '27x ROAS, $534K raised'],
      ['Year end cross platform appeal', '$272K across 1,297 gifts'],
      ['Year end efficiency campaign', '30x ROAS, $270K revenue'],
      ['Year end appeal, smaller audience', '4x ROAS'],
      ['Evergreen acquisition programme', '6.2x ROAS across the year'],
      ['Thanksgiving SMS and email integration', '4x email revenue lift'],
      ['Lead generation, faith content', '10,668 leads, 5% lead to donor'],
      ['Lead generation, practical guide', '2,615 monthly leads'],
      ['Quiz and eBook funnel test', '184% lead to donor lift'],
    ],
    y: 1.78, colW: [7.2, 4.43], pad: [5, 14, 5, 14], dark: false,
  })

  pageNo(s, 9, false)
  sourceLine(s, 'Published case studies. Cost per lead figures require Sarah sign off.', false)
  s.addNotes(
    'Data lives here rather than in the main flow, which is the house rule.\n\n' +
    'Specific flag: the cost per lead figures behind the two lead generation rows, $2.73 and $3.43, are exactly the kind ' +
    'of number that has been questioned before. Do not quote either externally until Sarah has confirmed them.'
  )
}

// ---------------------------------------------------------------- 10 close

{
  const s = pres.addSlide({ masterName: 'DARK' })
  s.addText('Thank You', {
    x: M, y: 2.5, w: COL, h: 1.1, margin: 0,
    fontFace: F.xbold, fontSize: 56, color: CREAM, charSpacing: -1.2, isTextBox: true,
  })
  s.addShape(pres.ShapeType.rect, {
    x: M, y: 3.78, w: 1.15, h: 0.055, fill: { color: BURG }, line: { type: 'none' },
  })
  s.addText('Capability Reference', {
    x: M, y: 4.12, w: COL * 0.6, h: 0.45, margin: 0,
    fontFace: F.semi, fontSize: 20, color: CREAM, isTextBox: true,
  })
  s.addText('Presented by Sarah Ali Philanthropy Inc.', {
    x: M, y: 4.68, w: COL * 0.6, h: 0.45, margin: 0,
    fontFace: F.reg, fontSize: 17, color: MUTED_D, isTextBox: true,
  })
  s.addNotes(
    'Closing credit uses the full legal entity name. This is the only place in the deck it appears. ' +
    'Everywhere else the firm is SA Philanthropy.\n\n' +
    'Before this deck is reused for anything external: resolve the four disciplines question on slide 4, get Sarah sign off ' +
    'on every figure, and add the logo and cover photography that were not available when it was built.'
  )
}

// ---------------------------------------------------------------- write

const out = path.join(__dirname, 'sa-philanthropy-capability.pptx')
pres.writeFile({ fileName: out }).then(() => console.log('wrote', out))
