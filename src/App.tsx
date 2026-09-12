import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Home } from './pages/Home'
import { ServiceDetail } from './pages/ServiceDetail'
import { SchoolManagement } from './pages/SchoolManagement'
import { PortfolioDetail } from './pages/PortfolioDetail'
import { Contact } from './pages/Contact'
import BlogHome from './pages/BlogHome'
import BlogArticle from './pages/BlogArticle'
import { NotFound } from './pages/NotFound'
import { CursorAura } from './components/Shared/CursorAura'
import { ScrollToTop } from './components/Shared/ScrollToTop'
import { ScrollProgress } from './components/Shared/ScrollProgress'

const App: React.FC = () => {
  return (
    <>
      <CursorAura />
      <ScrollProgress />
      <ScrollToTop />
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/school-management" element={<SchoolManagement />} />
            <Route path="/service/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/portfolio/:projectSlug" element={<PortfolioDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            {/* Any URL that matches nothing above. Every real route is listed in
                src/seo/routes.ts and prerendered, so the server only falls
                through to here for genuinely unknown paths. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App



