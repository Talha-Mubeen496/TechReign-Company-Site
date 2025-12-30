import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '../components/Navigation/Header'
import { Footer } from '../components/Footer/Footer'

// Category data with images - Add your image paths here
const categoryData: Record<string, { title: string; tag: string; images: string[] }> = {
  'logo-design': {
    title: 'Graphics and 3D',
    tag: 'GRAPHICS AND 3D',
    images: ['/graphics/img1.jpeg', '/graphics/img2.jpeg', '/graphics/img3.jpeg' 
      , '/graphics/img4.jpeg', '/graphics/img15.jpg' , '/graphics/img6.jpeg',  
      '/graphics/img18.jpg', '/graphics/img10.jpg', '/graphics/img11.jpg', '/graphics/img12.jpg',
      '/graphics/img13.jpg', '/graphics/img9.jpeg', '/graphics/img19.png','/graphics/img20.png', '/graphics/img21.png', '/graphics/img21.webp', '/graphics/img22.webp',
      '/graphics/img23.webp', '/graphics/img24.webp', '/graphics/img25.jpg', '/graphics/img26.png', '/graphics/img27.webp'
    ], 
  },
  'web-development': {
    title: 'Web Development',
    tag: 'WEB DEVELOPMENT',
    images: ['/web/web1.webp','/web/1.jpg','/web/2.jpg','/web/3.jpg','/web/4.jpg','/web/5.jpg',
    '/web/6.jpg','/web/7.jpg','/web/8.jpg','/web/9.jpg','/web/10.jpg','/web/11.jpg','/web/12.jpg',
    '/web/13.jpg', '/web/14.jpg','/web/15.jpg', '/web/16.jpg', '/web/17.jpg', '/web/18.jpg', '/web/19.jpg',
    '/web/20.jpg', '/web/21.jpg', '/web/22.jpg', '/web/23.jpg', '/web/24.jpg', '/web/25.jpg'
    ], 
  },
  'branding': {
    title: 'Branding',
    tag: 'BRANDING',
    images: ['/branding/img1.jpg','/branding/img2.jpg','/branding/img3.jpg',
      '/branding/img4.jpg','/branding/img5.jpg','/branding/img6.jpg', '/branding/img7.jpg', '/branding/img8.jpg',
    '/branding/img9.jpg' ,'/branding/img10.jpg' , '/branding/img11.jpg' , '/branding/img12.jpg', '/branding/img13.png'], 
  },
  'web3': {
    title: 'Web3',
    tag: 'WEB3',
    images: ['/web3/1.jpg', '/web3/2.webp', '/web3/3.webp', '/web3/4.webp', '/web3/5.webp', '/web3/6.webp', '/web3/7.webp', '/web3/8.webp', '/web3/9.webp'], 
  },
}

export const PortfolioDetail: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>()
  const navigate = useNavigate()
  
  // Lightbox state
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [projectSlug])
  
  // Ensure page is visible immediately
  useEffect(() => {
    document.body.style.opacity = '1'
  }, [])

  const category = projectSlug ? categoryData[projectSlug] : null
  
  // Check if this is a web development or e-commerce category (full-page screenshots)
  const isWebCategory = projectSlug === 'web-development' || projectSlug === 'web3'

  // Open lightbox
  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
    // For web categories, start at full size (no zoom needed)
    setZoom(isWebCategory ? 1 : 1)
    setPosition({ x: 0, y: 0 })
    document.body.style.overflow = 'hidden'
  }

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImageIndex(null)
    setZoom(1)
    setPosition({ x: 0, y: 0 })
    document.body.style.overflow = 'unset'
  }

  // Navigate images
  const nextImage = () => {
    if (category && selectedImageIndex !== null) {
      const nextIndex = (selectedImageIndex + 1) % category.images.length
      setSelectedImageIndex(nextIndex)
      setZoom(1)
      setPosition({ x: 0, y: 0 })
    }
  }

  const prevImage = () => {
    if (category && selectedImageIndex !== null) {
      const prevIndex = selectedImageIndex === 0 ? category.images.length - 1 : selectedImageIndex - 1
      setSelectedImageIndex(prevIndex)
      setZoom(1)
      setPosition({ x: 0, y: 0 })
    }
  }

  // Zoom controls
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.5, 4))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.5, 1))
    if (zoom <= 1) {
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleResetZoom = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  // Mouse drag for panning when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (selectedImageIndex !== null) {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.1 : 0.1
      const newZoom = Math.max(1, Math.min(4, zoom + delta))
      setZoom(newZoom)
      if (newZoom <= 1) {
        setPosition({ x: 0, y: 0 })
      }
    }
  }

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return

      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
        case '+':
        case '=':
          handleZoomIn()
          break
        case '-':
          handleZoomOut()
          break
        case '0':
          handleResetZoom()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImageIndex, category])

  if (!category) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden text-text-primary">
        <div
          className="fixed inset-0 w-screen h-screen -z-50 pointer-events-none"
          style={{
            background: '#030617',
            backgroundImage: `
              radial-gradient(circle at 15% 20%, rgba(95, 108, 255, 0.25), transparent 45%),
              radial-gradient(circle at 80% 0%, rgba(38, 208, 200, 0.35), transparent 40%),
              linear-gradient(135deg, #030617 0%, #18113a 55%, #0b2f55 100%)
            `,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)',
          }}
          aria-hidden="true"
        />
        <Header />
        <main className="relative w-full overflow-x-hidden pt-20 md:pt-24">
          <section className="section-padding">
            <div className="container-max text-center">
              <h1 className="primary-heading">Category Not Found</h1>
              <p className="mt-4 text-lg text-white/80">
                The category you are looking for does not exist.
              </p>
              <Link
                to="/#portfolio"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-110"
              >
                <ArrowLeft size={16} /> Back to Portfolio
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  const hasImages = category.images && category.images.length > 0

  return (
    <div className="min-h-screen w-full overflow-x-hidden text-text-primary">
      {/* Background is handled by body::before in style.css - removed duplicate */}
      <Header />

      <main className="relative w-full overflow-x-hidden pt-20 md:pt-24">
        <section className="section-padding">
          <div className="container-max">
            {/* Back Button */}
            <div>
              <button
                onClick={() => {
                  navigate('/#portfolio')
                  // Wait for navigation, then scroll
                  setTimeout(() => {
                    const el = document.getElementById('portfolio')
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80
                      window.scrollTo({ top: y, behavior: 'smooth' })
                    }
                  }, 100)
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-white mb-8"
              >
                <ArrowLeft size={16} />
                Back to Portfolio
              </button>
            </div>

            {/* Hero Section */}
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider">
                  {category.tag}
                </span>
              </div>
              <h1 className="primary-heading mb-4">{category.title}</h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Explore our collection of {category.title.toLowerCase()} projects and designs.
              </p>
            </div>

            {/* Image Gallery */}
            {hasImages ? (
              <div className="mx-auto max-w-7xl" style={{ isolation: 'isolate' }}>
                {/* Web Development & E-commerce: Full-page screenshot layout */}
                {isWebCategory ? (
                  <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                    {category.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="glass-card overflow-hidden p-0 group cursor-pointer"
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openLightbox(index)}
                        style={{ willChange: 'transform' }}
                        initial={{ opacity: 1 }}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-white/10 to-white/5">
                          {/* Show top portion of website as preview */}
                          <div className="relative w-full h-full">
                            <img
                              src={image}
                              alt={`${category.title} - Project ${index + 1}`}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              style={{ willChange: 'transform' }}
                              loading="lazy"
                              decoding="async"
                            />
                            {/* Gradient overlay to indicate there's more content */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
                          </div>
                          
                          {/* Scroll indicator */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                            <div className="flex flex-col items-center gap-1">
                              <div className="h-6 w-0.5 bg-white/60 rounded-full animate-pulse" />
                              <div className="h-4 w-0.5 bg-white/40 rounded-full" />
                              <div className="h-2 w-0.5 bg-white/20 rounded-full" />
                            </div>
                            <p className="text-xs text-white/80 font-medium">Scroll to view full page</p>
                          </div>

                          {/* Hover overlay with action */}
                          <motion.div 
                            className="absolute inset-0 bg-black/40 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div 
                              className="flex flex-col items-center gap-3"
                              initial={{ scale: 0.9, y: 10 }}
                              whileHover={{ scale: 1, y: 0 }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                              <div className="rounded-full bg-white/20 backdrop-blur-md p-4 border border-white/30">
                                <Maximize2 size={32} className="text-white" />
                              </div>
                              <p className="text-sm font-medium text-white">View Full Page</p>
                            </motion.div>
                          </motion.div>

                          {/* Project info at top */}
                          <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                            <div className="rounded-full bg-black/60 backdrop-blur-sm px-4 py-2">
                              <p className="text-xs font-medium text-white">Project {index + 1}</p>
                            </div>
                            <div className="rounded-full bg-green-500/20 backdrop-blur-sm px-3 py-1.5 border border-green-400/30">
                              <p className="text-xs font-medium text-green-300">Live Preview</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  /* Graphics and Branding: Grid layout */
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="glass-card overflow-hidden p-0 group cursor-pointer"
                        whileHover={{ y: -4 }}
                        onClick={() => openLightbox(index)}
                        initial={{ opacity: 1 }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={image}
                            alt={`${category.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="rounded-full bg-black/50 backdrop-blur-sm p-3">
                              <Maximize2 size={24} className="text-white" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="mx-auto max-w-2xl">
                <div className="glass-card p-12 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
                    <ImageIcon size={32} className="text-white/60" />
                  </div>
                  <h2 className="secondary-heading mb-4">No Images Yet</h2>
                  <p className="text-white/80 mb-6">
                    Images for this category will be displayed here. Add your images to the{' '}
                    <code className="px-2 py-1 rounded bg-white/10 text-accent-teal text-sm">
                      categoryData
                    </code>{' '}
                    object in <code className="px-2 py-1 rounded bg-white/10 text-accent-teal text-sm">PortfolioDetail.tsx</code>
                  </p>
                  <div className="mt-8 p-6 rounded-lg bg-white/5 border border-white/10 text-left">
                    <p className="text-xs text-white/60 mb-2 font-mono">How to add images:</p>
                    <ol className="text-sm text-white/80 space-y-2 list-decimal list-inside">
                      <li>Place your images in the <code className="px-1 py-0.5 rounded bg-white/10">public/images</code> folder</li>
                      <li>Open <code className="px-1 py-0.5 rounded bg-white/10">src/pages/PortfolioDetail.tsx</code></li>
                      <li>Find the <code className="px-1 py-0.5 rounded bg-white/10">categoryData</code> object</li>
                      <li>Add image paths to the <code className="px-1 py-0.5 rounded bg-white/10">images</code> array</li>
                      <li>Example: <code className="px-1 py-0.5 rounded bg-white/10">images: ['/images/logo-1.jpg', '/images/logo-2.jpg']</code></li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mx-auto max-w-3xl text-center mt-12">
              <div className="glass-card p-12">
                <h2 className="secondary-heading mb-4">Interested in Our Work?</h2>
                <p className="text-white/80 mb-8">
                  Let's discuss how we can help bring your {category.title.toLowerCase()} project to life.
                </p>
                <button
                  onClick={() => {
                    sessionStorage.setItem('selectedService', category.title)
                    navigate('/#contact')
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-magenta px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-110"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && category && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 backdrop-blur-sm"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {category.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Zoom Controls - Only show for non-web categories */}
            {!isWebCategory && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-white/10 p-2 backdrop-blur-sm">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleZoomOut()
                  }}
                  className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={20} />
                </button>
                <span className="px-3 text-sm text-white min-w-[60px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleZoomIn()
                  }}
                  className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={20} />
                </button>
                {zoom > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleResetZoom()
                    }}
                    className="ml-2 rounded-full bg-white/10 px-3 py-2 text-xs text-white transition hover:bg-white/20"
                    aria-label="Reset zoom"
                  >
                    Reset
                  </button>
                )}
              </div>
            )}

            {/* Image Counter */}
            {category.images.length > 1 && (
              <div className="absolute top-4 left-4 z-50 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                {selectedImageIndex + 1} / {category.images.length}
              </div>
            )}

            {/* Image Container */}
            {isWebCategory ? (
              /* Web Screenshots: Full size, scrollable */
              <div
                className="absolute inset-0 overflow-y-auto overflow-x-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-center min-h-full py-4 px-4">
                  <motion.img
                    ref={imageRef}
                    key={selectedImageIndex}
                    src={category.images[selectedImageIndex]}
                    alt={`${category.title} - Image ${selectedImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-auto max-w-full object-contain select-none"
                    draggable={false}
                    decoding="async"
                  />
                </div>
              </div>
            ) : (
              /* Regular Images: Zoomable */
              <div
                className="absolute inset-0 flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
                onWheel={handleWheel}
              >
                <motion.img
                  ref={imageRef}
                  key={selectedImageIndex}
                  src={category.images[selectedImageIndex]}
                  alt={`${category.title} - Image ${selectedImageIndex + 1}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: zoom, opacity: 1, x: position.x, y: position.y }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-full max-h-full object-contain select-none"
                  style={{
                    cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  draggable={false}
                  decoding="async"
                />
              </div>
            )}

            {/* Instructions */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 text-center text-sm text-white/60 backdrop-blur-sm px-4 py-2 rounded-full bg-white/5">
              {isWebCategory ? (
                <p>Scroll down to view full page • ESC to close</p>
              ) : (
                <>
                  <p className="hidden md:block">Scroll to zoom • Drag to pan • ESC to close</p>
                  <p className="md:hidden">Pinch to zoom • Drag to pan • Tap X to close</p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
