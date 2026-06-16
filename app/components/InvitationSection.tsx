'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WEDDING, FAMILY } from '../data/wedding';
import MandalaDecor from './MandalaDecor';

function GoldBand() {
  return (
    <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #6B1E2E, #C9992F, #F0D080, #C9992F, #6B1E2E)' }} />
  );
}

function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2 w-full">
      <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to right, transparent, #C9992F)' }} />
      <svg width="48" height="22" viewBox="0 0 48 22" fill="none">
        <ellipse cx="8" cy="13" rx="4.5" ry="8" fill="#C9992F" opacity="0.6" transform="rotate(-15 8 13)" />
        <ellipse cx="40" cy="13" rx="4.5" ry="8" fill="#C9992F" opacity="0.6" transform="rotate(15 40 13)" />
        <circle cx="24" cy="9" r="5" fill="#E8B84B" />
        <circle cx="24" cy="9" r="2.5" fill="#FFE580" />
      </svg>
      <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to left, transparent, #C9992F)' }} />
    </div>
  );
}

function PortraitIcon({ role }: { role: 'Groom' | 'Bride' }) {
  return (
    <div className="relative mx-auto w-[min(88px,24vw)] aspect-[6/7] mb-3">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 180 210" fill="none" aria-hidden>
        <rect x="5" y="5" width="170" height="200" rx="6" stroke="#C9992F" strokeWidth="2" fill="rgba(74,14,26,0.5)" />
        <rect x="13" y="13" width="154" height="184" rx="4" stroke="#E8B84B" strokeWidth="0.8" fill="none" opacity="0.4" />
        <path d="M5 32 Q90 14 175 32" stroke="#C9992F" strokeWidth="1.2" fill="none" />
        {([[5,5],[175,5],[5,205],[175,205]] as [number,number][]).map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="7" fill="#C9992F" />
            <circle cx={cx} cy={cy} r="3.5" fill="#FFE580" />
          </g>
        ))}
      </svg>
      <div
        className="absolute rounded-sm overflow-hidden flex items-center justify-center text-2xl sm:text-3xl"
        style={{ top: 14, left: 14, right: 14, bottom: 14, background: 'linear-gradient(145deg, #3A0E18, #5A1A28)' }}
      >
        {role === 'Groom' ? '🤵' : '👰'}
      </div>
    </div>
  );
}

function CoupleCard({
  role, hindiName, grandparentsHindi, parentsHindi, cityHindi, delay, inView,
}: {
  role: 'Groom' | 'Bride';
  hindiName: string;
  grandparentsHindi: string;
  parentsHindi: string;
  cityHindi: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65 }}
      className="w-full max-w-[min(100%,260px)] sm:max-w-[240px] mx-auto rounded-sm overflow-hidden"
      style={{
        background: 'linear-gradient(155deg, rgba(74,14,26,0.88), rgba(45,8,16,0.95))',
        border: '1px solid rgba(201,153,47,0.38)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.45)',
      }}
    >
      <GoldBand />
      <div className="px-4 py-4 sm:px-5 sm:py-5 text-center flex flex-col items-center">
        <PortraitIcon role={role} />

        <div
          className="mb-2 px-4 py-0.5 rounded-full"
          style={{ background: 'linear-gradient(135deg, #7A4E10, #C9992F, #7A4E10)' }}
        >
          <span className="font-cinzel text-[#1A0508] text-[8px] font-bold tracking-[0.28em] uppercase">
            The {role}
          </span>
        </div>

        <h3
          className="font-devanagari gold-text-shimmer w-full text-center leading-snug break-words px-1"
          style={{ fontSize: 'clamp(1.25rem, 4vw, 1.85rem)', lineHeight: 1.4, paddingBottom: '0.08em' }}
        >
          {hindiName}
        </h3>

        <div className="w-8 h-px my-2" style={{ background: 'linear-gradient(to right, transparent, #C9992F, transparent)' }} />

        <p className="font-devanagari text-[10px] sm:text-[11px] leading-relaxed opacity-75 break-words px-1 w-full" style={{ color: '#F0D080' }}>
          ({grandparentsHindi})
        </p>
        <p className="font-devanagari text-[10px] sm:text-[11px] leading-relaxed opacity-75 mt-1 break-words px-1 w-full" style={{ color: '#F0D080' }}>
          ({parentsHindi})
        </p>
        <p className="font-devanagari text-[11px] mt-1.5 opacity-65" style={{ color: '#C9992F' }}>
          {cityHindi}
        </p>
      </div>
      <GoldBand />
    </motion.div>
  );
}

function FamilyColumn({
  titleHindi, titleEn, members, name, delay, inView,
}: {
  titleHindi: string;
  titleEn: string;
  members?: readonly string[];
  name?: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="w-full rounded-sm overflow-hidden"
      style={{
        background: 'rgba(74,14,26,0.45)',
        border: '1px solid rgba(201,153,47,0.25)',
      }}
    >
      <div className="px-3 py-3.5 sm:px-4 sm:py-5 text-center">
        <p className="font-devanagari text-sm sm:text-base font-semibold mb-0.5" style={{ color: '#E8B84B' }}>
          {titleHindi}
        </p>
        <p className="font-cinzel text-[7px] sm:text-[8px] tracking-[0.18em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3 opacity-55" style={{ color: '#C9992F' }}>
          {titleEn}
        </p>
        {name ? (
          <p className="font-devanagari text-[11px] sm:text-xs leading-relaxed break-words" style={{ color: '#F0D080', opacity: 0.85 }}>
            {name}
          </p>
        ) : (
          <div className="space-y-0.5 sm:space-y-1">
            {members?.map((m, i) => (
              <p key={i} className="font-devanagari text-[10px] sm:text-[11px] leading-snug sm:leading-relaxed break-words" style={{ color: '#F0D080', opacity: 0.8 }}>
                {m}
              </p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function InvitationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      id="invitation"
      className="relative section-pad overflow-x-hidden bandhani-bg flex flex-col items-center"
      style={{ background: 'radial-gradient(ellipse at center, #3D0A12 0%, #2A0810 50%, #1A0508 100%)' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06]">
        <MandalaDecor size={420} opacity={1} />
      </div>
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-6 sm:mb-10 w-full flex flex-col items-center"
        >
          <p className="font-devanagari text-xs sm:text-base mb-2 sm:mb-3 px-2" style={{ color: '#E8B84B' }}>
            {WEDDING.invocations.mahavir}
          </p>
          <h2
            className="font-playfair font-bold gold-text-shimmer mb-2 sm:mb-3 text-center w-full px-2"
            style={{ fontSize: 'clamp(1.6rem, 5.5vw, 3.2rem)', lineHeight: 1.15 }}
          >
            The Bride &amp; Groom
          </h2>
          <p className="font-devanagari text-xs sm:text-base max-w-lg mx-auto px-3 sm:px-4 mb-3 sm:mb-4 text-center leading-relaxed break-words" style={{ color: '#F0D080', opacity: 0.88 }}>
            {WEDDING.jainShloka}
          </p>
          <LotusDivider />
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden rounded-sm w-full mx-auto"
          style={{
            background: 'linear-gradient(160deg, #2D0810 0%, #3A0E18 42%, #2D0810 100%)',
            border: '1px solid rgba(201,153,47,0.5)',
            boxShadow: '0 0 0 1px rgba(201,153,47,0.1), 0 30px 80px rgba(0,0,0,0.65)',
          }}
        >
          <GoldBand />

          <div className="px-4 py-6 sm:px-8 sm:py-10 md:px-10 md:py-12 flex flex-col items-center text-center w-full">

            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="font-devanagari text-sm sm:text-lg mb-6 sm:mb-8 w-full"
              style={{ color: '#E8B84B' }}
            >
              {WEDDING.salutationHindi}
            </motion.p>

            {/* Bride & Groom — responsive grid */}
            <div className="w-full max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-4 md:gap-3 items-center justify-items-center mb-5 sm:mb-6">
              <CoupleCard
                role="Bride"
                hindiName={WEDDING.bride.hindiName}
                grandparentsHindi={WEDDING.bride.grandparentsHindi}
                parentsHindi={WEDDING.bride.parentsHindi}
                cityHindi={WEDDING.bride.cityHindi}
                delay={0.3}
                inView={inView}
              />

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.45, type: 'spring', bounce: 0.4 }}
                className="flex flex-row md:flex-col items-center justify-center gap-2 py-1 md:py-0"
              >
                <div className="hidden md:block h-8 w-px mb-1" style={{ background: 'linear-gradient(to bottom, transparent, #C9992F)' }} />
                <motion.span
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-xl sm:text-2xl"
                >
                  ❤️
                </motion.span>
                <span className="font-devanagari text-lg sm:text-xl md:text-2xl" style={{ color: '#E8B84B' }}>
                  {WEDDING.sangHindi}
                </span>
                <div className="hidden md:block h-8 w-px mt-1" style={{ background: 'linear-gradient(to top, transparent, #C9992F)' }} />
              </motion.div>

              <CoupleCard
                role="Groom"
                hindiName={WEDDING.groom.hindiName}
                grandparentsHindi={WEDDING.groom.grandparentsHindi}
                parentsHindi={WEDDING.groom.parentsHindi}
                cityHindi={WEDDING.groom.cityHindi}
                delay={0.35}
                inView={inView}
              />
            </div>

            <LotusDivider />

            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="font-devanagari text-xs sm:text-base text-center mt-4 sm:mt-5 mb-2 sm:mb-3 w-full px-2"
              style={{ color: '#C9992F' }}
            >
              {WEDDING.occasionHindi}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55 }}
              className="font-devanagari text-xs sm:text-base md:text-lg leading-relaxed text-center w-full max-w-2xl mx-auto px-3 sm:px-4 break-words"
              style={{ color: '#F0D080', opacity: 0.9 }}
            >
              {WEDDING.invitationMessageHindi}
            </motion.p>

            <LotusDivider />

            {/* Family columns — stack mobile, 3-col desktop */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mt-5 sm:mt-6 mb-4 sm:mb-5">
              <FamilyColumn
                titleHindi={FAMILY.vinit.labelHindi}
                titleEn={FAMILY.vinit.label}
                members={FAMILY.vinit.members}
                delay={0.6}
                inView={inView}
              />
              <FamilyColumn
                titleHindi={FAMILY.visheshAnurodh.labelHindi}
                titleEn={FAMILY.visheshAnurodh.label}
                name={FAMILY.visheshAnurodh.nameHindi}
                delay={0.65}
                inView={inView}
              />
              <FamilyColumn
                titleHindi={FAMILY.swagatatur.labelHindi}
                titleEn={FAMILY.swagatatur.label}
                members={FAMILY.swagatatur.members}
                delay={0.7}
                inView={inView}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.75 }}
              className="font-devanagari text-[11px] sm:text-sm leading-relaxed text-center w-full max-w-xl mx-auto px-3 sm:px-4 mt-2 break-words"
              style={{ color: '#E8B84B', opacity: 0.8 }}
            >
              {WEDDING.childrenNoteHindi}
            </motion.p>
          </div>

          <GoldBand />
        </motion.div>
      </div>

      <div className="divider-gold absolute bottom-0 left-0 right-0" />
    </section>
  );
}
