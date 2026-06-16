'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import MandalaDecor from './MandalaDecor';
import { WEDDING } from '../data/wedding';

export default function BlessingsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center section-pad overflow-hidden"
    >
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, #4A0E1A 0%, #2D0810 50%, #1A0508 100%)' }}
      />

      {/* Soft glowing radial */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,153,47,0.15) 0%, transparent 60%)' }}
      />

      {/* Large background mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <MandalaDecor size={700} opacity={0.12} />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center"
        >
          {/* Om symbol */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center relative"
              style={{
                background: 'radial-gradient(circle, rgba(201,153,47,0.25), rgba(74,14,26,0.5))',
                border: '2px solid rgba(201,153,47,0.6)',
                boxShadow: '0 0 50px rgba(201,153,47,0.4), 0 0 100px rgba(201,153,47,0.15)',
              }}
            >
              <span className="text-5xl" style={{ color: '#E8B84B', textShadow: '0 0 20px rgba(232,184,75,0.8)' }}>ॐ</span>
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{ border: '1px dashed rgba(201,153,47,0.4)', borderRadius: '50%' }}
              />
            </div>
          </motion.div>

          <p className="font-cinzel text-xs tracking-[0.35em] uppercase mb-4" style={{ color: '#C9992F' }}>
            {WEDDING.invocations.adinathEn}
          </p>

          <p className="font-cinzel text-[#C9992F] text-xs tracking-[0.5em] uppercase mb-4">
            — Sacred Blessings —
          </p>

          <h2 className="font-playfair section-title gold-text font-bold mb-2 text-center w-full">
            Jain Blessings
          </h2>
          <p className="font-cormorant italic text-base mb-8" style={{ color: '#F0D080', opacity: 0.75 }}>
            {WEDDING.invocations.mangalParinayEn}
          </p>

          {/* Main Jain quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-full max-w-2xl mx-auto p-8 md:p-12 rounded-sm mb-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(74,14,26,0.7), rgba(45,8,16,0.8))',
              border: '1px solid rgba(201,153,47,0.35)',
            }}
          >
            {/* Quote marks */}
            <div className="absolute top-4 left-6 font-great-vibes text-6xl text-[#C9992F] opacity-30 leading-none">"</div>
            <div className="absolute bottom-0 right-6 font-great-vibes text-6xl text-[#C9992F] opacity-30 leading-none">"</div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="font-cormorant text-base sm:text-lg text-[#E8B84B] italic leading-relaxed mb-4"
            >
              {WEDDING.jainShlokaEn}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="font-cormorant text-sm sm:text-base text-[#F0D080] opacity-85 mb-6 italic"
            >
              "All souls are mutually supportive of one another."
            </motion.p>

          </motion.div>

          {/* Secondary quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="w-full max-w-2xl mx-auto p-6 rounded-sm mb-8 text-center"
            style={{
              background: 'rgba(201,153,47,0.06)',
              border: '1px solid rgba(201,153,47,0.2)',
            }}
          >
            <p className="font-cormorant text-base sm:text-lg text-[#E8B84B] italic leading-relaxed mb-3">
              "Where there is love, there is the Divine presence."
            </p>
          </motion.div>

          {/* Blessings message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="font-cormorant text-lg md:text-xl text-[#F0D080] leading-relaxed opacity-85 max-w-xl mx-auto text-center">
              May this sacred union be blessed with eternal love, prosperity, and spiritual harmony.
              May {WEDDING.groom.name} and {WEDDING.bride.name} walk this beautiful journey together, hand in hand, for all eternity.
            </p>

            <div className="flex justify-center mt-8 gap-6">
              {['🪔', '🌸', '🙏', '🌸', '🪔'].map((icon, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0 + i * 0.1 }}
                  className="text-2xl"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(201,153,47,0.6))' }}
                >
                  {icon}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
