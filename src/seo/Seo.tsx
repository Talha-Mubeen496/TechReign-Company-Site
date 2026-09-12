import React from 'react'
import { Helmet } from 'react-helmet-async'
import { routesByPath, canonicalFor, SITE_NAME } from './routes'

interface SeoProps {
  /** Path as listed in routes.ts, e.g. "/service/seo". */
  path: string
}

/**
 * Renders the head tags for one route, read from the shared route manifest.
 *
 * scripts/prerender.mjs writes the same tags into the static HTML from the same
 * manifest, so the prerendered head and the client-rendered head can never
 * disagree. Pages add their own JSON-LD in a separate <Helmet>; react-helmet-async
 * merges them.
 *
 * A path that isn't in the manifest is an unknown URL, so it gets noindex rather
 * than a soft 404 that Google might index.
 */
export const Seo: React.FC<SeoProps> = ({ path }) => {
  const meta = routesByPath[path]

  if (!meta) {
    return (
      <Helmet>
        <title>Page not found - {SITE_NAME}</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>
    )
  }

  const url = canonicalFor(path)

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Helmet>
  )
}
