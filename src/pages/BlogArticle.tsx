import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react'
import { useEffect } from 'react'
import { Header } from '../components/Navigation/Header'
import { Footer } from '../components/Footer/Footer'
import { blogPosts } from '../data/blogPosts'
import { Seo } from '../seo/Seo'


export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()
  
  // Scroll to top when article loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden text-text-primary">
        <Header />
        <main className="relative w-full overflow-x-hidden pt-20 md:pt-24">
          <section className="section-padding">
            <div className="container-max text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
              <p className="text-white/70 mb-8">The blog post you're looking for doesn't exist.</p>
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-teal to-accent-blue text-white font-medium hover:shadow-lg hover:shadow-accent-teal/25 transition-all duration-300"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  // Function to get correct image name for each slug
  const getImageName = (slug: string) => {
    const imageMap: { [key: string]: string } = {
      'web-development-companies-near-me': 'web1.webp',
      'tech-reign-rise-modern-digital-culture': 'tech.webp',
      'search-engine-optimization-2026': 'seo.webp',
      'graphic-design-passion-creativity-growth': 'graph2.avif',
      'logo-design-toolkit-pdf-human-useful': 'graph1.avif',
      'web3-new-internet-user-control': 'web3_2.webp'
    };
    return imageMap[slug] || 'default.webp';
  };

  // Schema for blog article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://tech-reign.com/thumbnail/" + getImageName(post.slug),
    "author": {
      "@type": "Organization",
      "name": "TechReign Team",
      "url": "https://tech-reign.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TechReign Digital Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tech-reign.com/logo.png"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://tech-reign.com/blog/${post.slug}`
    },
    "keywords": post.keywords.join(", "),
    "wordCount": post.content.split(" ").length,
    "timeRequired": `PT${post.readTime}M`
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tech-reign.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://tech-reign.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://tech-reign.com/blog/${post.slug}`
      }
    ]
  }

  // FAQ Schema for the article
  const getFAQSchema = () => {
    const faqData = {
      "Web Development Companies Near": [
        {
          "@type": "Question",
          "name": "What makes web development companies near me better than remote agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They offer local insight, faster communication, and a personal connection that remote agencies often lack."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a site with web development companies near me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most projects take a few weeks to a few months depending on size and features."
          }
        },
        {
          "@type": "Question",
          "name": "Are web development companies near me good for small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, they often specialize in helping local brands grow and compete online."
          }
        },
        {
          "@type": "Question",
          "name": "Do web development companies near me provide ongoing support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most of them do and that support can save you time and stress."
          }
        },
        {
          "@type": "Question",
          "name": "How do I find the best web development companies near me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check local reviews, look at portfolios, and talk to teams to see who feels like the right fit."
          }
        }
      ],
      "Tech Reign ": [
        {
          "@type": "Question",
          "name": "What is Tech Reign and why is it popular?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tech Reign is a modern tech platform known for its ease of use and strong user focus which makes it popular among people who want reliable digital tools."
          }
        },
        {
          "@type": "Question",
          "name": "How does TechReign help businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TechReign offers tools that streamline work improve organization and support growth which helps businesses run more smoothly."
          }
        },
        {
          "@type": "Question",
          "name": "Is Tech Reign suitable for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes Tech Reign is designed to be friendly and intuitive so beginners can start using it without feeling overwhelmed."
          }
        },
        {
          "@type": "Question",
          "name": "What makes TechReign different from other platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TechReign stands out because it listens to users values privacy and delivers consistent quality that builds trust."
          }
        },
        {
          "@type": "Question",
          "name": "Can Tech Reign grow with a user over time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tech Reign is built to scale with users as their needs change which makes it a long term solution rather than a temporary tool."
          }
        }
      ],
      "Search Engine Optimization": [
        {
          "@type": "Question",
          "name": "What is Search Engine Optimization in simple terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Search Engine Optimization is the process of making your website easier to find when people search for topics related to what you offer."
          }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO usually takes a few months to show strong results because search engines need time to notice and trust your content."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO better than paid ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO and paid ads serve different goals. Search Engine Optimization builds long term visibility while ads give quick exposure."
          }
        },
        {
          "@type": "Question",
          "name": "Do small businesses need Search Engine Optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes SEO helps small businesses compete by reaching people who are already looking for their services."
          }
        },
        {
          "@type": "Question",
          "name": "Can I do Search Engine Optimization on my own?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many people handle SEO themselves by learning the basics and focusing on quality content and a good user experience."
          }
        }
      ],
      "Graphic design is my passion": [
        {
          "@type": "Question",
          "name": "What does it mean when someone says graphic design is my passion?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It means they feel a deep personal connection to creating visuals and telling stories through design rather than just doing it as a job."
          }
        },
        {
          "@type": "Question",
          "name": "Can graphic design is my passion lead to a stable career?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes many designers build successful careers in branding, marketing, web design, and more by following their passion and developing strong skills."
          }
        },
        {
          "@type": "Question",
          "name": "How do you start when graphic design is my passion?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can start by learning basic tools, practicing simple projects, and studying good design to build confidence and experience."
          }
        },
        {
          "@type": "Question",
          "name": "Why do people say graphic design is my passion so often?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because design allows creative expression and problem solving at the same time, which feels very rewarding for many people."
          }
        },
        {
          "@type": "Question",
          "name": "Is graphic design is my passion enough to succeed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Passion is a great start, but success also comes from practice, learning, and staying open to feedback and growth."
          }
        }
      ],
      "Logo design": [
        {
          "@type": "Question",
          "name": "What is a logo design toolkit pdf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A logo design toolkit pdf is a digital guide that includes design rules, examples and resources to help you create strong logos."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I use a logo design toolkit pdf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can use a logo design toolkit pdf every time you work on a new brand or refresh an old one. It is useful at every stage."
          }
        },
        {
          "@type": "Question",
          "name": "Can beginners benefit from a logo design toolkit pdf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes beginners love a logo design toolkit pdf because it gives clear guidance and builds confidence fast."
          }
        },
        {
          "@type": "Question",
          "name": "Why do designers mention neapolitan 6th chords with logo design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neapolitan 6th chords are about tension and release which is similar to how visual balance works in logo design."
          }
        },
        {
          "@type": "Question",
          "name": "Is a logo design toolkit pdf enough to create a professional logo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A logo design toolkit pdf gives you a strong foundation. Your creativity and practice turn that foundation into something truly professional."
          }
        }
      ],
      "Web3 and the New Internet How People Are Taking Back Control": [
        {
          "@type": "Question",
          "name": "What is Web3 in simple terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web3 is a version of the internet where users own their data digital assets and identities instead of relying on big companies to control everything."
          }
        },
        {
          "@type": "Question",
          "name": "Is Web3 safe to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web3 can be safe if you understand how wallets and security work but users need to be careful about scams and protecting their private keys."
          }
        },
        {
          "@type": "Question",
          "name": "How does Web3 make money?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "People can earn through trading staking creating digital assets or building apps that run on Web3 networks."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need crypto to use Web3?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Web3 platforms use crypto for transactions but some are working on ways to make it easier for regular users to join without deep technical knowledge."
          }
        },
        {
          "@type": "Question",
          "name": "Will Web3 replace the current internet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web3 will likely exist alongside the current web for a long time but its ideas about ownership and decentralization are already shaping the future."
          }
        }
      ]
    };

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": (post.title as keyof typeof faqData) ? faqData[post.title as keyof typeof faqData] : []
    };
  };

  const faqSchema = getFAQSchema();

  return (
    <>
      <Seo path={`/blog/${post.slug}`} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen w-full overflow-x-hidden text-text-primary">
        <Header />
        
        <main className="relative w-full overflow-x-hidden pt-20 md:pt-24">
          {/* Article Header */}
          <section className="section-padding">
            <div className="container-max">
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <span>/</span>
                  <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                  <span>/</span>
                  <span className="text-white/80">{post.title}</span>
                </nav>

                {/* Back to Blog */}
                <Link 
                  to="/blog"
                  className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-blue transition-colors mb-6 group"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </Link>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 border border-accent-teal/40 text-accent-teal text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <User size={14} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Calendar size={14} />
                    {new Date(post.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Clock size={14} />
                    {post.readTime} min read
                  </div>
                </div>

                {/* Article Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  {post.title}
                </h1>

                {/* Article Excerpt */}
                <p className="text-xl text-white/90 leading-relaxed mb-12">
                  {post.excerpt}
                </p>

                {/* Social Share */}
                <div className="flex items-center gap-4 pb-8 border-b border-white/10">
                  <span className="text-white/60 text-sm">Share this article:</span>
                  <div className="flex gap-3">
                    <button className="p-2 rounded-lg bg-white/10 hover:bg-accent-teal/20 text-white/70 hover:text-accent-teal transition-colors">
                      <Share2 size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-white/10 hover:bg-accent-blue/20 text-white/70 hover:text-accent-blue transition-colors">
                      <Bookmark size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Article Content */}
          <section className="section-padding pt-0">
            <div className="container-max">
              <motion.div
                className="max-w-4xl mx-auto prose prose-invert prose-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div 
                  className="text-white/90 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mb-6 mt-8">$1</h1>')
                      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-4 mt-6">$1</h2>')
                      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mb-3 mt-4">$1</h3>')
                      .replace(/!\[([^\]]*)\]\(([^)]*)\)/g, '<img src="$2" alt="$1" class="w-full rounded-lg mb-6" loading="lazy" />')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-accent-teal font-semibold">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-white/80 italic">$1</em>')
                      .replace(/^- (.*$)/gim, '<li class="ml-4 mb-2 text-white/80">• $1</li>')
                      .replace(/\n\n/g, '</p><p class="mb-6">')
                      .replace(/^(.+)/g, '<p class="mb-6">$1</p>')
                  }}
                />
              </motion.div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="section-padding">
            <div className="container-max">
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {blogPosts
                    .filter(p => p.id !== post.id && p.category === post.category)
                    .slice(0, 2)
                    .map(relatedPost => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="group glass-card p-6 border border-white/10 hover:border-accent-teal/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(95,108,255,0.25)]"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2 py-1 rounded-full bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 border border-accent-teal/40 text-accent-teal text-xs font-medium">
                            {relatedPost.category}
                          </span>
                          <div className="flex items-center gap-1 text-white/60 text-xs">
                            <Clock size={12} />
                            {relatedPost.readTime} min
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-teal transition-colors duration-300">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="text-white/70 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </Link>
                    ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding">
            <div className="container-max">
              <motion.div
                className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center border border-white/10 shadow-[0_20px_60px_rgba(4,7,18,0.35)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Get expert help with web development, SEO, and design from the TechReign team.
                </p>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-teal to-accent-blue text-white font-medium hover:shadow-lg hover:shadow-accent-teal/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowLeft size={16} className="rotate-180" />
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}
