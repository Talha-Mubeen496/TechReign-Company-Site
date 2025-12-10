import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface NavItem {
  id: string
  label: string
}

interface MobileMenuProps {
  open: boolean
  items: NavItem[]
  activeId: string
  onNavigate: (id: string) => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ open, items, activeId, onNavigate }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <>
      {/* Backdrop overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onNavigate(activeId)} // Close menu when backdrop is clicked
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20"
            style={{ top: '64px' }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 top-16 z-30 mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="rounded-3xl border border-white/15 bg-neutral-gray/90 backdrop-blur-2xl p-4 shadow-floating">
              <nav aria-label="Mobile">
                <ul className="space-y-2 text-sm font-medium text-text-secondary">
                  {items.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <motion.button
                        onClick={() => onNavigate(item.id)}
                        whileTap={{ scale: 0.95 }}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-200 active:scale-95 ${
                          activeId === item.id
                            ? 'bg-gradient-to-r from-accent-blue/20 to-accent-violet/20 text-text-primary border border-accent-blue/30'
                            : 'hover:bg-white/10'
                        }`}
                      >
                        <span className="font-medium">{item.label}</span>
                        {activeId === item.id && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-accent-blue to-accent-violet"
                          >
                            <span className="h-2 w-2 rounded-full bg-white" />
                          </motion.span>
                        )}
                        {activeId !== item.id && (
                          <motion.span
                            initial={{ x: -5, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="text-white/40"
                          >
                            →
                          </motion.span>
                        )}
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}



