import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ServiceDetail } from './pages/ServiceDetail'
import { PortfolioDetail } from './pages/PortfolioDetail'
import { CursorAura } from './components/Shared/CursorAura'
import { ScrollToTop } from './components/Shared/ScrollToTop'
import { ScrollProgress } from './components/Shared/ScrollProgress'

const App: React.FC = () => {
  return (
    <>
      <CursorAura />
      <ScrollProgress />
      <ScrollToTop />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/portfolio/:projectSlug" element={<PortfolioDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App



