'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import CountdownTimer from './CountdownTimer';
import MandalaDecor from './MandalaDecor';
import DiyaRow from './DiyaRow';
import HeroTopDecor from './HeroTopDecor';
import { WEDDING } from '../data/wedding';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const fgOpac = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pb-28 sm:pb-24 pt-16 sm:pt-20"
    >
      {/* ── Top wedding decoration (toran, drapes, garland) ── */}
      <HeroTopDecor />

      {/* ── Parallax background layer ── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        {/* Palace silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-72 opacity-25">
          <svg width="100%" height="288" viewBox="0 0 1400 288"
            preserveAspectRatio="xMidYMax meet" fill="none">
            {/* Base */}
            <rect x="0" y="260" width="1400" height="28" fill="#C9992F" opacity="0.12"/>
            {/* Main hall */}
            <rect x="450" y="110" width="500" height="178" fill="#C9992F" opacity="0.3"/>
            {/* Central dome */}
            <ellipse cx="700" cy="90" rx="90" ry="66" fill="#C9992F" opacity="0.4"/>
            <rect x="655" y="90" width="90" height="20" fill="#C9992F" opacity="0.5"/>
            {/* Side wings */}
            <rect x="300" y="150" width="160" height="138" fill="#C9992F" opacity="0.25"/>
            <rect x="940" y="150" width="160" height="138" fill="#C9992F" opacity="0.25"/>
            <ellipse cx="380" cy="142" rx="45" ry="32" fill="#C9992F" opacity="0.35"/>
            <ellipse cx="1020" cy="142" rx="45" ry="32" fill="#C9992F" opacity="0.35"/>
            {/* Far towers */}
            <rect x="130" y="190" width="55" height="98" fill="#C9992F" opacity="0.2"/>
            <rect x="1215" y="190" width="55" height="98" fill="#C9992F" opacity="0.2"/>
            <polygon points="130,190 157,158 185,190" fill="#C9992F" opacity="0.3"/>
            <polygon points="1215,190 1242,158 1270,190" fill="#C9992F" opacity="0.3"/>
            {/* Arches across main hall */}
            {[490,560,630,700,770,840,910].map((x,i)=>(
              <path key={i} d={`M${x} 288 L${x} 215 Q${x+25}195 ${x+50}215 L${x+50}288`}
                fill="#1A0508" opacity="0.55"/>
            ))}
            {/* Stars */}
            {Array.from({length:18},(_,i)=>(
              <circle key={i} cx={50+i*75} cy={15+(i%4)*18} r="1.5" fill="#E8B84B" opacity="0.6"/>
            ))}
          </svg>
        </div>
        {/* Horizon glow */}
        <div className="absolute bottom-0 left-0 right-0 h-56"
          style={{background:'radial-gradient(ellipse at 50% 100%,rgba(201,153,47,0.22) 0%,rgba(232,116,26,0.08) 45%,transparent 70%)'}}/>
      </motion.div>

      {/* ── Dark vignette ── */}
      <div className="absolute inset-0"
        style={{background:'radial-gradient(ellipse at 50% 25%,rgba(106,30,46,0.55) 0%,rgba(26,5,8,0.96) 70%)'}}/>

      {/* ── Mandalas ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[0.55] sm:scale-75 md:scale-100">
        <MandalaDecor size={620} opacity={0.07}/>
      </div>
      <div className="absolute top-12 right-8 pointer-events-none decor-desktop-only">
        <MandalaDecor size={190} opacity={0.11}/>
      </div>
      <div className="absolute bottom-24 left-8 pointer-events-none decor-desktop-only">
        <MandalaDecor size={170} opacity={0.11}/>
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: fgOpac }}
        className="relative z-10 w-full max-w-3xl mx-auto text-center px-4 sm:px-6"
      >
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="flex justify-center mb-5"
        >
          <svg width="220" height="36" viewBox="0 0 220 36" fill="none">
            <line x1="0" y1="18" x2="82" y2="18" stroke="#C9992F" strokeWidth="1"/>
            <line x1="138" y1="18" x2="220" y2="18" stroke="#C9992F" strokeWidth="1"/>
            {[16,36,56,76].map(x=><circle key={x} cx={x} cy="18" r="2" fill="#E8B84B" opacity="0.55"/>)}
            {[144,164,184,204].map(x=><circle key={x} cx={x} cy="18" r="2" fill="#E8B84B" opacity="0.55"/>)}
            <path d="M110 2 L116 14 L130 12 L120 20 L124 34 L110 26 L96 34 L100 20 L90 12 L104 14Z"
              fill="#C9992F" opacity="0.9"/>
            <circle cx="110" cy="18" r="4" fill="#FFE580"/>
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-cinzel text-[#C9992F] text-xs tracking-[0.5em] uppercase mb-5"
        >
          The Royal Wedding of
        </motion.p>

        {/* Names with couple illustration behind */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="relative py-5 sm:py-8 min-h-[min(60vw,340px)] sm:min-h-[min(48vw,380px)] flex flex-col items-center justify-center"
        >
          {/* Bride & groom illustration — behind names */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden
          >
            <div
              className="relative w-[min(88vw,480px)] sm:w-[min(72vw,520px)] aspect-[920/753]"
              style={{ mixBlendMode: 'screen', opacity: 0.88 }}
            >
              <Image
                src="/hero-couple.png"
                alt=""
                fill
                sizes="(max-width: 640px) 88vw, 520px"
                className="object-contain"
                style={{
                  filter: 'drop-shadow(0 6px 24px rgba(201,153,47,0.22)) brightness(1.02) saturate(1.05)',
                }}
                priority
              />
            </div>
          </div>

          <div
            className="relative z-10 w-full px-3 py-4 sm:py-5 rounded-lg"
            style={{
              background: 'radial-gradient(ellipse 90% 80% at 50% 50%, rgba(26,5,8,0.72) 0%, transparent 72%)',
            }}
          >
            <h1
              className="font-great-vibes gold-text-shimmer leading-none text-center block w-full"
              style={{
                fontSize: 'clamp(3.8rem,10vw,8rem)',
                lineHeight: 1.15,
                paddingBottom: '0.08em',
                marginTop: 'clamp(0.75rem, 2.5vh, 1.25rem)',
                filter: 'drop-shadow(0 2px 12px rgba(26,5,8,0.9)) drop-shadow(0 0 28px rgba(201,153,47,0.45))',
              }}
            >
              {WEDDING.groom.name}
            </h1>

            <div className="flex items-center justify-center gap-5 my-3">
              <motion.div
                className="h-px flex-1 max-w-[130px]"
                style={{ background: 'linear-gradient(to right,transparent,#C9992F)' }}
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.75, duration: 0.55 }}
              />
              <motion.span
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.85, type: 'spring', bounce: 0.6 }}
                className="text-3xl md:text-4xl drop-shadow-lg"
              >❤️</motion.span>
              <motion.div
                className="h-px flex-1 max-w-[130px]"
                style={{ background: 'linear-gradient(to left,transparent,#C9992F)' }}
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 0.75, duration: 0.55 }}
              />
            </div>

            <h1
              className="font-great-vibes gold-text-shimmer leading-none text-center block w-full"
              style={{
                fontSize: 'clamp(3.8rem,10vw,8rem)',
                lineHeight: 1.15,
                paddingBottom: '0.08em',
                filter: 'drop-shadow(0 2px 12px rgba(26,5,8,0.9)) drop-shadow(0 0 28px rgba(201,153,47,0.45))',
              }}
            >
              {WEDDING.bride.name}
            </h1>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="font-cormorant italic text-xl md:text-2xl mt-5 mb-2 tracking-wide"
          style={{ color: '#F0D080', opacity: 0.88 }}
        >
          ✦ Two Hearts, One Sacred Journey ✦
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
          className="font-cinzel text-lg tracking-[0.4em] mb-7"
          style={{ color: '#E8B84B' }}
        >
          {WEDDING.weekday}, {WEDDING.date}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-28 md:w-44" style={{background:'linear-gradient(to right,transparent,#C9992F)'}}/>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="#E8B84B">
            <path d="M11 1L13.5 8.5H21.5L15 12.5L17.5 20L11 16L4.5 20L7 12.5L0.5 8.5H8.5Z"/>
          </svg>
          <div className="h-px w-28 md:w-44" style={{background:'linear-gradient(to left,transparent,#C9992F)'}}/>
        </motion.div>

        {/* Countdown */}
        <CountdownTimer />

        {/* Diya row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-8"
        >
          <DiyaRow />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 11, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1.5 text-[#C9992F] opacity-60"
          >
            <span className="font-cinzel text-[10px] tracking-[0.35em] uppercase">Scroll</span>
            <svg width="18" height="11" viewBox="0 0 18 11" fill="none">
              <path d="M1 1L9 10L17 1" stroke="#C9992F" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
