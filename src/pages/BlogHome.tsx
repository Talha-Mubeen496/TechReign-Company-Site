import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Navigation/Header'
import { Footer } from '../components/Footer/Footer'

import { blogPosts } from '../data/blogPosts'
import { Seo } from '../seo/Seo'

export default function BlogHome() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Seo path="/blog" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "TechReign Blog",
          "description": "Expert insights on web development, SEO strategies, and design trends from TechReign Digital Studio.",
          "url": "https://tech-reign.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "TechReign Digital Studio",
            "url": "https://tech-reign.com",
            "logo": { "@type": "ImageObject", "url": "https://tech-reign.com/logo.png" }
          },
          "blogPost": blogPosts.map((post) => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "url": `https://tech-reign.com/blog/${post.slug}`,
            "datePublished": post.publishDate,
            "author": { "@type": "Organization", "name": post.author }
          }))
        })}</script>
      </Helmet>

      <div className="min-h-screen w-full overflow-x-hidden text-text-primary">
        <Header />
        
        <main className="relative w-full overflow-x-hidden pt-20 md:pt-24">
          {/* Hero Section */}
          <section className="section-padding">
            <div className="container-max">
              <motion.div
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="primary-heading mb-6">
                  <span className="block bg-gradient-to-r from-white via-accent-teal to-accent-blue bg-clip-text text-transparent animate-gradient">
                    TechReign Blog
                  </span>
                  <span className="block bg-gradient-to-r from-accent-violet via-accent-magenta to-accent-blue bg-clip-text text-transparent animate-gradient" style={{ animationDelay: '0.5s' }}>
                    Insights & Innovations
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
                  Expert insights on web development, SEO strategies, and cutting-edge design trends. 
                  Stay ahead with TechReign's industry-leading expertise.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="section-padding pt-2 pb-6">
              <div className="container-max">
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="secondary-heading text-center mb-6">Featured Articles</h2>
                </motion.div>
                
                <div className="grid gap-8 md:grid-cols-2">
                  {featuredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      className="group glass-card p-8 border border-white/10 hover:border-accent-teal/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(95,108,255,0.25)]"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 border border-accent-teal/40 text-accent-teal text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <Clock size={14} />
                          {post.readTime} min read
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-teal transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/80 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white/60 text-sm">
                          <User size={14} />
                          {post.author}
                          <Calendar size={14} />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        
                        <Link
                          to={`/blog/${post.slug}`}
                          className="flex items-center gap-2 text-accent-teal hover:text-accent-blue transition-colors duration-300 group-hover:translate-x-2 transform"
                        >
                          Read More
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Regular Posts Grid */}
          <section className="section-padding pt-2 pb-6">
            <div className="container-max">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="group glass-card p-6 border border-white/10 hover:border-accent-violet/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(198,92,245,0.25)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 rounded-full bg-gradient-to-r from-accent-violet/20 to-accent-magenta/20 border border-accent-violet/40 text-accent-violet text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-white/60 text-xs">
                        <Clock size={12} />
                        {post.readTime} min
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-violet transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-white/60">
                        <Calendar size={12} />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      
                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-accent-violet hover:text-accent-magenta transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="section-padding">
            <div className="container-max">
              <motion.div
                className="glass-card p-8 md:p-12 text-center border border-white/10 shadow-[0_20px_60px_rgba(4,7,18,0.35)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="secondary-heading mb-4">Stay Updated</h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Get the latest insights on web development, SEO, and design trends delivered straight to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-teal focus:outline-none"
                  />
                  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-teal to-accent-blue text-white font-medium hover:shadow-lg hover:shadow-accent-teal/25 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}
