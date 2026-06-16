'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import MandalaDecor from './MandalaDecor';
import { WEDDING } from '../data/wedding';

const WHATSAPP_URL =
  'https://wa.me/918619036305?text=Hi%20Anmol%2C%20I%20want%20a%20wedding%20invitation%20website%20like%20this%20for%20my%20wedding.%20Please%20share%20the%20details.';

export default function ThankYouSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <section ref={ref} className="relative section-pad overflow-hidden min-h-[70dvh] sm:min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, #4A0E1A 0%, #2D0810 40%, #0D0306 100%)' }}
        />

        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(201,153,47,0.12) 0%, transparent 60%)' }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <MandalaDecor size={800} opacity={0.08} />
        </div>

        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13 + 10) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10 - i % 20, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#E8751A" opacity="0.6">
              <ellipse cx="8" cy="6" rx="3" ry="7" />
            </svg>
          </motion.div>
        ))}

        {[
          { x: '20%', y: '30%', size: 200 },
          { x: '80%', y: '60%', size: 150 },
          { x: '50%', y: '80%', size: 180 },
        ].map((light, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none rounded-full"
            style={{
              left: light.x,
              top: light.y,
              width: light.size,
              height: light.size,
              background: 'radial-gradient(circle, rgba(201,153,47,0.15) 0%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 1 }}
          />
        ))}

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <svg width="200" height="30" viewBox="0 0 200 30" fill="none">
                {[0, 40, 80, 120, 160, 200].map((x, i) => (
                  <circle key={i} cx={x} cy="15" r="2" fill="#C9992F" opacity={0.3 + i * 0.1} />
                ))}
                {[20, 60, 100, 140, 180].map((x, i) => (
                  <circle key={i} cx={x} cy="15" r="3" fill="#E8B84B" opacity="0.6" />
                ))}
                <line x1="0" y1="15" x2="200" y2="15" stroke="#C9992F" strokeWidth="0.5" />
                <path d="M100 4 L103 12 L112 12 L105 17.5 L108 26 L100 21 L92 26 L95 17.5 L88 12 L97 12 Z" fill="#E8B84B" />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="font-cinzel text-[#C9992F] text-xs tracking-[0.6em] uppercase mb-4">
                — With All Our Love —
              </p>
              <h2 className="font-playfair font-bold mb-4"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  background: 'linear-gradient(135deg, #C9992F, #F0D080, #E8B84B, #FFE580, #C9992F)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 0 20px rgba(201,153,47,0.4))',
                }}
              >
                Thank You
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-px w-28 bg-gradient-to-r from-transparent to-[#C9992F]" />
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-3xl"
              >❤️</motion.span>
              <div className="h-px w-28 bg-gradient-to-l from-transparent to-[#C9992F]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-10"
            >
              <p className="font-cormorant text-xl md:text-2xl text-[#F0D080] leading-relaxed italic mb-4">
                For Being Part Of Our Celebration
              </p>
              <p className="font-eb-garamond text-lg text-[#F0D080] opacity-80 leading-relaxed max-w-xl mx-auto">
                Your presence, blessings, and love make this occasion truly special.
                We are humbled and grateful to share this sacred moment with you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-10"
            >
              <p className="font-cinzel text-[#C9992F] text-sm tracking-[0.3em] uppercase mb-3">With Love</p>
              <h3 className="font-great-vibes leading-none"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#F0D080',
                  textShadow: '0 0 30px rgba(201,153,47,0.5)' }}>
                {WEDDING.groom.name}
              </h3>
              <div className="flex items-center justify-center gap-4 my-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9992F]" />
                <span className="text-2xl">❤️</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9992F]" />
              </div>
              <h3 className="font-great-vibes leading-none"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#F0D080',
                  textShadow: '0 0 30px rgba(201,153,47,0.5)' }}>
                {WEDDING.bride.name}
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.0 }}
              className="inline-block px-8 py-3 rounded-sm mb-10"
              style={{
                background: 'rgba(201,153,47,0.1)',
                border: '1px solid rgba(201,153,47,0.3)',
              }}
            >
              <p className="font-cinzel text-[#E8B84B] text-base sm:text-lg tracking-wide">{WEDDING.weekday}, {WEDDING.date}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 1 }}
              className="space-y-3"
            >
              <p className="font-eb-garamond text-[#E8B84B] text-lg italic opacity-80">
                ✦ Jai Jinendra ✦
              </p>
              <p className="font-cormorant text-[#C9992F] text-base opacity-60 tracking-wider">
                जय जिनेन्द्र
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="flex justify-center gap-4 mt-10"
            >
              {['🌸', '🪔', '✨', '🪔', '🌸'].map((icon, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="text-xl opacity-70"
                >
                  {icon}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact — simple footer line */}
      <footer
        className="py-2.5 px-4 sm:px-6 safe-bottom"
        style={{
          background: 'linear-gradient(to bottom, #0D0306, #060104)',
          borderTop: '1px solid rgba(201, 153, 47, 0.18)',
        }}
      >
        <p className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[10px] sm:text-[11px] leading-relaxed">
          <span className="font-cinzel tracking-[0.12em] uppercase" style={{ color: '#C9992F', opacity: 0.5 }}>
            Want a website like this for your wedding?
          </span>
          <span className="text-[#C9992F]/20 hidden sm:inline" aria-hidden>·</span>
          <span className="font-playfair font-semibold whitespace-nowrap" style={{ color: '#E8B84B' }}>
            Anmol Panchal
          </span>
          <span className="text-[#C9992F]/20" aria-hidden>·</span>
          <a
            href="tel:+918619036305"
            className="font-cormorant whitespace-nowrap hover:opacity-100 transition-opacity"
            style={{ color: '#F0D080', opacity: 0.75 }}
          >
            +91 86190 36305
          </a>
          <span className="text-[#C9992F]/20" aria-hidden>·</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-cinzel tracking-[0.15em] uppercase whitespace-nowrap hover:opacity-100 transition-opacity"
            style={{ color: '#25D366', opacity: 0.9 }}
          >
            WhatsApp
          </a>
        </p>
      </footer>
    </>
  );
}
