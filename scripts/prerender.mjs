// Post-build step: write one static HTML file per route.
//
// Vite emits a single dist/index.html whose <head> is generic and whose <body>
// is empty until JavaScript runs. Crawlers can render JS but do so on a delay,
// and social scrapers (Facebook, LinkedIn, WhatsApp, Slack) never render at
// all — so every shared link previewed as a bare URL.
//
// This walks src/seo/routes.ts and writes one HTML file per route with that
// route's real title, description, canonical and Open Graph tags baked in.
// Netlify serves a matching static file in preference to the catch-all rule in
// netlify.toml, while the app keeps working exactly as before for client-side
// navigation.
//
// Files are flat (dist/contact.html), never folders (dist/contact/index.html).
// Netlify answers /contact with a 301 to /contact/ whenever it finds a folder
// index, which would send every page away from its own canonical URL and put
// a redirect behind every sitemap entry and internal link. A flat file is
// served at /contact with a 200, and /contact/ redirects back to /contact.
//
// It also regenerates sitemap.xml from the same list, so the sitemap can no
// longer drift from the routes that actually exist.

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const { routes, SITE_URL, SITE_NAME } = await import(
  new URL('../.seo-build/routes.js', import.meta.url).href
)

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const template = await readFile(join(dist, 'index.html'), 'utf8')

// Strip the build-time defaults so each route gets exactly one of each tag.
const stripped = template
  .replace(/^[ \t]*<title>[\s\S]*?<\/title>\r?\n?/m, '')
  .replace(/^[ \t]*<meta\s+(?:name|property)="(?:description|og:[^"]*|twitter:[^"]*)"[\s\S]*?\/>\r?\n?/gm, '')

if (stripped.includes('<title>')) {
  throw new Error('prerender: failed to strip the default <title> from dist/index.html')
}

const headFor = (route) => {
  const url = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)
  return [
    `    <title>${title}</title>`,
    `    <meta name="description" content="${description}" />`,
    `    <link rel="canonical" href="${url}" />`,
    `    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `    <meta property="og:type" content="${route.type}" />`,
    `    <meta property="og:url" content="${url}" />`,
    `    <meta property="og:title" content="${title}" />`,
    `    <meta property="og:description" content="${description}" />`,
    `    <meta property="og:image" content="${route.image}" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${title}" />`,
    `    <meta name="twitter:description" content="${description}" />`,
    `    <meta name="twitter:image" content="${route.image}" />`,
  ].join('\n')
}

let written = 0
for (const route of routes) {
  if (route.path !== '/' && route.path.endsWith('/')) {
    throw new Error(`prerender: route "${route.path}" must not end with a slash`)
  }
  const html = stripped.replace('</head>', `${headFor(route)}\n  </head>`)
  // '/' -> dist/index.html, '/contact' -> dist/contact.html, '/blog/x' -> dist/blog/x.html
  const outFile = route.path === '/' ? join(dist, 'index.html') : join(dist, `${route.path}.html`)
  await mkdir(dirname(outFile), { recursive: true })
  await writeFile(outFile, html, 'utf8')
  written += 1
}

// Served by netlify.toml for any path with no prerendered file, with a real 404
// status. Marked noindex so a mistyped or stale URL is never indexed as thin
// content; the app still boots and renders the NotFound page with navigation.
const notFoundHead = [
  '    <title>Page not found - TechReign Digital Studio</title>',
  '    <meta name="robots" content="noindex,follow" />',
].join('\n')
await writeFile(
  join(dist, '404.html'),
  stripped.replace('</head>', `${notFoundHead}\n  </head>`),
  'utf8',
)

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => {
    const url = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`
    return [
      '  <url>',
      `    <loc>${url}</loc>`,
      `    <lastmod>${route.lastmod}</lastmod>`,
      `    <priority>${route.priority}</priority>`,
      '  </url>',
    ].join('\n')
  }),
  '</urlset>',
  '',
].join('\n')

await writeFile(join(dist, 'sitemap.xml'), sitemap, 'utf8')

console.log(`prerender: wrote ${written} HTML files and sitemap.xml with ${routes.length} URLs`)
