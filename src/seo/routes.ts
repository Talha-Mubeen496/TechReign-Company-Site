// The canonical list of every indexable URL on the site, with the head tags
// each one should serve.
//
// This module is deliberately free of React and JSX: `scripts/prerender.mjs`
// imports it after a small SSR build and writes one static HTML file per route,
// so crawlers and social scrapers get a real <title>, description and canonical
// without executing the app. Keep it importing plain data only.

import { blogPosts } from '../data/blogPosts'
import { serviceMeta } from '../data/services'
import { categoryData } from '../data/portfolio'

export const SITE_URL = 'https://tech-reign.com'
export const SITE_NAME = 'TechReign Digital Studio'
export const DEFAULT_IMAGE = `${SITE_URL}/logo.png`

export interface RouteMeta {
  /** Path as served, always with a leading slash and no trailing slash (except "/"). */
  path: string
  title: string
  description: string
  /** Open Graph type; "website" for everything except articles. */
  type: 'website' | 'article'
  image: string
  /** Last modified date (YYYY-MM-DD) used to build sitemap.xml. */
  lastmod: string
  /** Relative priority for sitemap.xml. */
  priority: string
}

const TODAY = new Date().toISOString().slice(0, 10)

const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'TechReign Digital Studio — Web Development, SEO & 3D Design',
    description:
      'TechReign Digital Studio builds high-converting websites, search-optimised content and premium 3D visuals. Web development, SEO, branding, video and Web3, delivered by one remote-first team.',
    type: 'website',
    image: DEFAULT_IMAGE,
    lastmod: TODAY,
    priority: '1.0',
  },
  {
    path: '/contact',
    title: 'Contact TechReign Digital Studio',
    description:
      'Start a project with TechReign Digital Studio. Tell us what you are building and we will map out a clear path to launch, usually within 24 hours.',
    type: 'website',
    image: DEFAULT_IMAGE,
    lastmod: TODAY,
    priority: '0.8',
  },
  {
    path: '/blog',
    title: 'Blog — TechReign Digital Studio',
    description:
      'Practical writing on web development, SEO, design and Web3 from the team at TechReign Digital Studio.',
    type: 'website',
    image: DEFAULT_IMAGE,
    lastmod: TODAY,
    priority: '0.9',
  },
  {
    path: '/service/school-management',
    title: 'SchoolAims — School Management System for Institutions',
    description:
      'SchoolAims is an all-in-one school management system covering attendance, fees, exams and parent communication. Built by TechReign Digital Studio.',
    type: 'website',
    image: `${SITE_URL}/SchoolAims/school_logo.png`,
    lastmod: TODAY,
    priority: '0.8',
  },
]

const serviceRoutes: RouteMeta[] = Object.entries(serviceMeta).map(([slug, meta]) => ({
  path: `/service/${slug}`,
  title: meta.seoTitle ?? `${meta.title} Services — TechReign Digital Studio`,
  description: meta.seoDescription ?? meta.subtitle,
  type: 'website',
  image: DEFAULT_IMAGE,
  lastmod: TODAY,
  priority: '0.8',
}))

const portfolioRoutes: RouteMeta[] = Object.entries(categoryData).map(([slug, category]) => ({
  path: `/portfolio/${slug}`,
  title: `${category.title} Portfolio — TechReign Digital Studio`,
  description: category.description,
  type: 'website',
  image: DEFAULT_IMAGE,
  lastmod: TODAY,
  priority: '0.6',
}))

const blogRoutes: RouteMeta[] = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  title: `${post.title} — TechReign Digital Studio`,
  description: post.excerpt,
  type: 'article',
  image: DEFAULT_IMAGE,
  lastmod: post.publishDate,
  priority: '0.7',
}))

export const routes: RouteMeta[] = [
  ...staticRoutes,
  ...serviceRoutes,
  ...portfolioRoutes,
  ...blogRoutes,
]

/** Lookup by path, used by the <Seo> component so the app and the prerendered
 *  HTML always emit identical head tags. */
export const routesByPath: Record<string, RouteMeta> = Object.fromEntries(
  routes.map((route) => [route.path, route]),
)

export const canonicalFor = (path: string) =>
  path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
