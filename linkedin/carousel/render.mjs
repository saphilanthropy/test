#!/usr/bin/env node
// Render a carousel deck (.md) to the PDF LinkedIn wants, plus PNG previews.
//
//   node linkedin/carousel/render.mjs <deck.md> [--out <dir>] [--no-preview]
//
// Output lands next to the deck: <name>.pdf and previews/<name>-NN.png
//
// Exits non-zero if any slide overflows its frame — a silently clipped slide is
// worse than a failed render, because it publishes looking fine to nobody.

import { readFileSync, mkdirSync, existsSync } from 'node:fs'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { createRequire } from 'node:module'

const SLIDE_W = 1080
const SLIDE_H = 1350 // 4:5 portrait — takes the most feed space LinkedIn allows
const MAX_SLIDES = 15
const MIN_SLIDES = 3

// Playwright lives in the global prefix here, not in a local node_modules.
function loadPlaywright () {
  const candidates = [
    import.meta.url,
    'file:///opt/node22/lib/node_modules/',
    'file:///usr/lib/node_modules/',
  ]
  for (const base of candidates) {
    try {
      return createRequire(base)('playwright')
    } catch { /* try the next one */ }
  }
  throw new Error(
    'Could not load playwright. Install it (npm i -g playwright) or set NODE_PATH ' +
    'to the directory holding it.'
  )
}

function parseArgs (argv) {
  const args = { deck: null, out: null, preview: true }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--out') args.out = argv[++i]
    else if (a === '--no-preview') args.preview = false
    else if (!a.startsWith('--')) args.deck = a
    else throw new Error(`Unknown flag: ${a}`)
  }
  if (!args.deck) throw new Error('Usage: render.mjs <deck.md> [--out <dir>] [--no-preview]')
  return args
}

function parseDeck (raw) {
  let body = raw.replace(/^﻿/, '').replace(/\r\n/g, '\n')
  const meta = { title: '', accent: '#0F4C5C', footer: '' }

  const fm = body.match(/^---\n([\s\S]*?)\n---\n/)
  if (fm) {
    for (const line of fm[1].split('\n')) {
      const m = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/)
      if (!m) continue
      meta[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '')
    }
    body = body.slice(fm[0].length)
  }

  const slides = body
    .split(/\n-{3,}\n/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(parseSlide)

  return { meta, slides }
}

function parseSlide (block) {
  const blocks = []
  let bullets = null

  for (const rawLine of block.split('\n')) {
    const line = rawLine.trim()
    if (!line) { bullets = null; continue }

    if (line.startsWith('- ')) {
      if (!bullets) { bullets = { type: 'bullets', items: [] }; blocks.push(bullets) }
      bullets.items.push(line.slice(2).trim())
      continue
    }
    bullets = null

    if (line.startsWith('## ')) blocks.push({ type: 'heading', text: line.slice(3).trim() })
    else if (line.startsWith('# ')) blocks.push({ type: 'display', text: line.slice(2).trim() })
    else if (line.startsWith('> ')) blocks.push({ type: 'kicker', text: line.slice(2).trim() })
    else blocks.push({ type: 'para', text: line })
  }
  return blocks
}

const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

// Straight quotes look amateur at display sizes. Applied after escaping, so it
// works on the entity forms esc() produces.
function typographic (s) {
  return s
    .replace(/--/g, '—')
    .replace(/&#39;(?=\d\d\b)/g, '’')                 // '26 → ’26
    .replace(/(\w)&#39;(\w)/g, '$1’$2')               // don't → don’t
    .replace(/&#39;/g, '’')
    .replace(/&quot;(?=\S)/g, '“')
    .replace(/&quot;/g, '”')
}

// Light inline markdown: **bold** and *italic*. Escape first, then wrap.
function inline (s) {
  return typographic(esc(s))
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|\W)\*(?!\s)(.+?)(?<!\s)\*(?=\W|$)/g, '$1<em>$2</em>')
}

function renderBlocks (blocks) {
  return blocks.map(b => {
    if (b.type === 'bullets') {
      return `<ul>${b.items.map(i => `<li>${inline(i)}</li>`).join('')}</ul>`
    }
    return `<p class="${b.type}">${inline(b.text)}</p>`
  }).join('\n')
}

function buildHtml ({ meta, slides }) {
  const last = slides.length - 1

  const slideHtml = slides.map((blocks, i) => {
    const kind = i === 0 ? 'cover' : i === last ? 'outro' : 'body'
    const showChrome = kind === 'body'
    return `
    <section class="slide ${kind}">
      <div class="content">${renderBlocks(blocks)}</div>
      ${showChrome ? `<footer class="chrome">
        <span class="who">${esc(meta.footer || '')}</span>
        <span class="num">${i + 1}/${slides.length}</span>
      </footer>` : ''}
      ${kind !== 'body' && meta.footer ? `<footer class="chrome solo">
        <span class="who">${esc(meta.footer)}</span>
      </footer>` : ''}
    </section>`
  }).join('\n')

  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(meta.title || 'Carousel')}</title>
<style>
  @page { size: ${SLIDE_W}px ${SLIDE_H}px; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --accent: ${esc(meta.accent)};
    --ink: #16191c;
    --paper: #faf8f4;
    --muted: #5d6066;
    --serif: 'Bitstream Charter', 'Liberation Serif', Georgia, serif;
    --sans: 'Liberation Sans', 'DejaVu Sans', Arial, sans-serif;
  }
  html, body { background: var(--paper); }
  .slide {
    position: relative; width: ${SLIDE_W}px; height: ${SLIDE_H}px;
    padding: 96px 92px 88px; background: var(--paper); color: var(--ink);
    display: flex; flex-direction: column; justify-content: center;
    break-after: page; overflow: hidden;
  }
  .slide:last-child { break-after: auto; }
  .content { display: flex; flex-direction: column; gap: 30px; }

  .display {
    font-family: var(--serif); font-size: 92px; line-height: 1.08;
    letter-spacing: -0.02em; font-weight: 700;
  }
  .heading {
    font-family: var(--serif); font-size: 62px; line-height: 1.15;
    letter-spacing: -0.015em; font-weight: 700;
  }
  .kicker {
    font-family: var(--sans); font-size: 26px; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);
  }
  .para { font-family: var(--sans); font-size: 38px; line-height: 1.5; color: #2b2f34; }
  ul { list-style: none; display: flex; flex-direction: column; gap: 22px; }
  li {
    font-family: var(--sans); font-size: 36px; line-height: 1.45;
    padding-left: 44px; position: relative; color: #2b2f34;
  }
  li::before {
    content: ''; position: absolute; left: 0; top: 0.58em;
    width: 20px; height: 4px; background: var(--accent);
  }

  .cover, .outro { background: var(--accent); color: #fff; }
  .cover .para, .outro .para, .cover li, .outro li { color: rgba(255,255,255,.88); }
  .cover .kicker, .outro .kicker { color: rgba(255,255,255,.72); }
  .outro li::before, .cover li::before { background: rgba(255,255,255,.65); }

  .chrome {
    position: absolute; left: 92px; right: 92px; bottom: 56px;
    display: flex; justify-content: space-between; align-items: baseline;
    font-family: var(--sans); font-size: 24px; color: var(--muted);
    letter-spacing: 0.02em;
  }
  .chrome.solo { color: rgba(255,255,255,.6); justify-content: flex-start; }
  .num { font-variant-numeric: tabular-nums; }
</style></head>
<body>${slideHtml}</body></html>`
}

async function main () {
  const args = parseArgs(process.argv.slice(2))
  const deckPath = resolve(args.deck)
  if (!existsSync(deckPath)) throw new Error(`No such deck: ${deckPath}`)

  const deck = parseDeck(readFileSync(deckPath, 'utf8'))
  const n = deck.slides.length

  if (n < MIN_SLIDES) throw new Error(`Deck has ${n} slide(s); need at least ${MIN_SLIDES}.`)
  if (n > MAX_SLIDES) {
    throw new Error(`Deck has ${n} slides; cap is ${MAX_SLIDES}. Longer decks lose people before the payoff.`)
  }

  const outDir = args.out ? resolve(args.out) : dirname(deckPath)
  const stem = basename(deckPath, extname(deckPath))
  const pdfPath = join(outDir, `${stem}.pdf`)
  mkdirSync(outDir, { recursive: true })

  const { chromium } = loadPlaywright()
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage({ viewport: { width: SLIDE_W, height: SLIDE_H } })
    await page.setContent(buildHtml(deck), { waitUntil: 'load' })

    // A slide whose content is taller than its frame gets silently clipped in
    // the PDF. Catch it here instead of on Sarah's feed.
    const overflowing = await page.evaluate(() =>
      Array.from(document.querySelectorAll('.slide')).flatMap((s, i) => {
        const c = s.querySelector('.content')
        const room = s.clientHeight - 96 - 88 - 40 // padding top/bottom + chrome
        return c.scrollHeight > room ? [{ slide: i + 1, over: c.scrollHeight - room }] : []
      })
    )

    await page.pdf({
      path: pdfPath,
      width: `${SLIDE_W}px`,
      height: `${SLIDE_H}px`,
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    })

    if (args.preview) {
      const pDir = join(outDir, 'previews')
      mkdirSync(pDir, { recursive: true })
      const els = await page.$$('.slide')
      for (let i = 0; i < els.length; i++) {
        await els[i].screenshot({
          path: join(pDir, `${stem}-${String(i + 1).padStart(2, '0')}.png`),
        })
      }
      console.log(`Previews: ${pDir}/${stem}-NN.png (${els.length})`)
    }

    console.log(`PDF: ${pdfPath} (${n} slides, ${SLIDE_W}x${SLIDE_H})`)

    if (overflowing.length) {
      console.error('\nOVERFLOW — these slides are clipped, cut their text:')
      for (const o of overflowing) console.error(`  slide ${o.slide}: ~${o.over}px too tall`)
      process.exitCode = 1
    }
  } finally {
    await browser.close()
  }
}

main().catch(err => { console.error(`render: ${err.message}`); process.exit(1) })
