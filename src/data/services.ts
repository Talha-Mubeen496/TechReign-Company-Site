// Service names and one-line summaries. These are the <title> and meta
// description of each service page, so the prerender step reads them too.
// Rich page content (icons, features, FAQs) stays in ServiceDetail.tsx.
//
// Object order is display order: it drives the footer links, the related
// services on each service page, and the sitemap.

export interface ServiceMeta {
  title: string
  subtitle: string
  /** Overrides the default "<title> Services — TechReign Digital Studio" page title. */
  seoTitle?: string
  /** Overrides the meta description, which otherwise falls back to the subtitle. */
  seoDescription?: string
}

export const serviceMeta: Record<string, ServiceMeta> = {
  'web-development': {
    title: 'Web Development',
    subtitle: 'Build high-performing websites and web applications with modern technologies',
  },
  // The studio's main service. The slug uses the full product name because
  // that is what people search for; /service/ghl and /ghl redirect here
  // (see netlify.toml).
  'gohighlevel': {
    title: 'GoHighLevel (GHL)',
    subtitle: 'GoHighLevel setup, workflow automation and funnels, built to capture, nurture and convert your leads',
    seoTitle: 'GoHighLevel (GHL) Setup & Automation Services — TechReign Digital Studio',
    seoDescription:
      'GoHighLevel (GHL) setup and automation for agencies and local businesses: CRM pipelines, funnels, workflows, calendars and SaaS mode, built and ready to use.',
  },
  'seo': {
    title: 'SEO',
    subtitle: 'Boost your search engine rankings and organic visibility',
  },
  'graphics-3d-designing': {
    title: 'Graphics and 3D Designing',
    subtitle: 'Create stunning visual designs and 3D models that bring your brand to life',
  },
  'video-editing': {
    title: 'Video Editing',
    subtitle: 'Transform raw footage into compelling video content',
  },
  'social-media-handling': {
    title: 'Social Media Handling',
    subtitle: 'Manage and grow your social media presence strategically',
  },
  'web-3': {
    title: 'Web3',
    subtitle: 'Navigate the decentralized web with blockchain solutions',
  },
}
