'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',       href: '#hero'       },
  { label: 'Invitation', href: '#invitation' },
  { label: 'Couple',     href: '#couple'     },
  { label: 'Ceremonies', href: '#ceremonies' },
  { label: 'Schedule',   href: '#schedule'   },
  { label: 'Venue',      href: '#venue'      },
  { label: 'Family',     href: '#family'     },
  { label: 'Blessings',  href: '#blessings'  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 safe-top"
        style={{
          background: scrolled
            ? 'rgba(12,2,5,0.95)'
            : 'rgba(18,3,6,0.88)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(201,153,47,0.18)',
          transition: 'background 0.3s ease',
        }}
      >
        <a
          href="#hero"
          className="font-great-vibes text-xl sm:text-2xl leading-none shrink-0"
          style={{ color: '#E8B84B', textShadow: '0 0 16px rgba(201,153,47,0.5)' }}
        >
          Avinash &amp; Nidhi
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.slice(3).map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link font-cinzel text-[10px] xl:text-[11px] tracking-[0.28em] uppercase"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div
            className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.25em] hidden sm:block"
            style={{ color: '#C9992F', opacity: 0.75 }}
          >
            12 · 07 · 2026
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-sm cursor-pointer"
            style={{
              background: 'rgba(201,153,47,0.12)',
              border: '1px solid rgba(201,153,47,0.35)',
              color: '#E8B84B',
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/70 lg:hidden"
              onClick={close}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(88vw,320px)] lg:hidden flex flex-col safe-top safe-bottom"
              style={{
                background: 'linear-gradient(180deg, #2D0810 0%, #1A0508 100%)',
                borderLeft: '1px solid rgba(201,153,47,0.3)',
                boxShadow: '-8px 0 40px rgba(0,0,0,0.6)',
              }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: '1px solid rgba(201,153,47,0.2)' }}
              >
                <span className="font-cinzel text-[10px] tracking-[0.35em] uppercase" style={{ color: '#C9992F' }}>
                  Menu
                </span>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="w-9 h-9 flex items-center justify-center rounded-sm cursor-pointer"
                  style={{ color: '#E8B84B', border: '1px solid rgba(201,153,47,0.3)' }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Om + Sanskrit */}
              <div className="px-5 py-5 text-center" style={{ borderBottom: '1px solid rgba(201,153,47,0.12)' }}>
                <span className="font-eb-garamond text-3xl block mb-1" style={{ color: '#E8B84B' }}>ॐ</span>
                <p className="font-eb-garamond text-xs tracking-widest" style={{ color: '#C9992F', opacity: 0.8 }}>
                  ॥ शुभ विवाह ॥
                </p>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={close}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-sm mb-1 font-cinzel text-xs tracking-[0.25em] uppercase transition-colors"
                    style={{ color: '#F0D080', borderBottom: '1px solid rgba(201,153,47,0.08)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#E8B84B'; e.currentTarget.style.background = 'rgba(201,153,47,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#F0D080'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span className="text-[#C9992F] opacity-50 text-[10px]">{String(i + 1).padStart(2, '0')}</span>
                    {label}
                  </motion.a>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-5 py-5 text-center" style={{ borderTop: '1px solid rgba(201,153,47,0.2)' }}>
                <p className="font-great-vibes text-2xl mb-1" style={{ color: '#E8B84B' }}>Avinash &amp; Nidhi</p>
                <p className="font-cinzel text-[9px] tracking-[0.3em]" style={{ color: '#C9992F', opacity: 0.6 }}>
                  12 JULY 2026 · NIWAI
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
