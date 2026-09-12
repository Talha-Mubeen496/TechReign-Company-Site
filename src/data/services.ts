// Service names and one-line summaries. These are the <title> and meta
// description of each service page, so the prerender step reads them too.
// Rich page content (icons, features, FAQs) stays in ServiceDetail.tsx.

export interface ServiceMeta {
  title: string
  subtitle: string
}

export const serviceMeta: Record<string, ServiceMeta> = {
  'web-development': {
    title: 'Web Development',
    subtitle: 'Build high-performing websites and web applications with modern technologies',
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
