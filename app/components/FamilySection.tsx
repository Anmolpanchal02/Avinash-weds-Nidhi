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
    <div className="flex items-center justify-center gap-3 my-4 w-full">
      <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to right, transparent, #C9992F)' }} />
      <svg width="48" height="22" viewBox="0 0 48 22" fill="none" aria-hidden>
        <ellipse cx="8" cy="13" rx="4.5" ry="8" fill="#C9992F" opacity="0.6" transform="rotate(-15 8 13)" />
        <ellipse cx="40" cy="13" rx="4.5" ry="8" fill="#C9992F" opacity="0.6" transform="rotate(15 40 13)" />
        <circle cx="24" cy="9" r="5" fill="#E8B84B" />
        <circle cx="24" cy="9" r="2.5" fill="#FFE580" />
      </svg>
      <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to left, transparent, #C9992F)' }} />
    </div>
  );
}

function ParivarCard({
  titleHindi,
  titleEn,
  grandparentsHindi,
  parentsHindi,
  cityHindi,
  icon,
  delay,
  inView,
}: {
  titleHindi: string;
  titleEn: string;
  grandparentsHindi: string;
  parentsHindi: string;
  cityHindi: string;
  icon: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65 }}
      className="w-full max-w-[min(100%,280px)] mx-auto rounded-sm overflow-hidden"
      style={{
        background: 'linear-gradient(155deg, rgba(74,14,26,0.88), rgba(45,8,16,0.95))',
        border: '1px solid rgba(201,153,47,0.38)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
      }}
    >
      <GoldBand />
      <div className="px-4 py-5 sm:px-6 sm:py-6 text-center flex flex-col items-center">
        <span className="text-3xl mb-3" aria-hidden>{icon}</span>

        <p className="font-devanagari text-base sm:text-lg font-semibold mb-0.5" style={{ color: '#E8B84B' }}>
          {titleHindi}
        </p>
        <p className="font-cinzel text-[8px] tracking-[0.22em] uppercase mb-3 opacity-60" style={{ color: '#C9992F' }}>
          {titleEn}
        </p>

        <div className="w-10 h-px mb-3" style={{ background: 'linear-gradient(to right, transparent, #C9992F, transparent)' }} />

        <p className="font-devanagari text-[11px] sm:text-xs leading-relaxed opacity-80 break-words w-full px-1" style={{ color: '#F0D080' }}>
          {grandparentsHindi}
        </p>
        <p className="font-devanagari text-[11px] sm:text-xs leading-relaxed opacity-80 mt-1.5 break-words w-full px-1" style={{ color: '#F0D080' }}>
          {parentsHindi}
        </p>
        <p className="font-devanagari text-xs mt-2 opacity-70" style={{ color: '#C9992F' }}>
          {cityHindi}
        </p>
      </div>
      <GoldBand />
    </motion.div>
  );
}

function FamilyColumn({
  titleHindi,
  titleEn,
  members,
  name,
  closing,
  delay,
  inView,
}: {
  titleHindi: string;
  titleEn: string;
  members?: readonly string[];
  name?: string;
  closing?: string;
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
      <div className="px-3 py-4 sm:px-5 sm:py-5 text-center">
        <p className="font-devanagari text-sm sm:text-base font-semibold mb-0.5" style={{ color: '#E8B84B' }}>
          {titleHindi}
        </p>
        <p className="font-cinzel text-[7px] sm:text-[8px] tracking-[0.18em] uppercase mb-2 sm:mb-3 opacity-55" style={{ color: '#C9992F' }}>
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

        {closing && (
          <p className="font-devanagari text-[10px] sm:text-[11px] mt-3 pt-2 italic leading-relaxed break-words" style={{ color: '#C9992F', borderTop: '1px solid rgba(201,153,47,0.15)' }}>
            {closing}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function FamilySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative section-pad overflow-x-hidden bandhani-bg flex flex-col items-center"
      style={{ background: 'radial-gradient(ellipse at center, #3A0D14 0%, #2A0810 55%, #1A0508 100%)' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06]">
        <MandalaDecor size={420} opacity={1} />
      </div>
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-10 w-full flex flex-col items-center"
        >
          <p className="font-cinzel text-xs tracking-[0.5em] uppercase mb-3" style={{ color: '#C9992F', opacity: 0.75 }}>
            With Blessings From
          </p>
          <h2 className="font-playfair section-title font-bold gold-text mb-3 text-center">Our Families</h2>
          <p className="font-cormorant italic text-base md:text-lg text-center" style={{ color: '#F0D080', opacity: 0.65 }}>
            With love and blessings from both families
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-20 sm:w-24" style={{ background: 'linear-gradient(to right, transparent, #C9992F)' }} />
            <span className="text-lg">🙏</span>
            <div className="h-px w-20 sm:w-24" style={{ background: 'linear-gradient(to left, transparent, #C9992F)' }} />
          </div>
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

          <div className="px-4 py-6 sm:px-8 sm:py-10 flex flex-col items-center text-center w-full">

            {/* Bride & Groom parivar */}
            <div className="w-full max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-center justify-items-center">
              <ParivarCard
                titleHindi="सोनी परिवार"
                titleEn="Bride's Family"
                grandparentsHindi={WEDDING.bride.grandparentsHindi}
                parentsHindi={WEDDING.bride.parentsHindi}
                cityHindi={WEDDING.bride.cityHindi}
                icon="👰"
                delay={0.15}
                inView={inView}
              />

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.25, type: 'spring', bounce: 0.4 }}
                className="flex flex-row md:flex-col items-center justify-center gap-2 py-1 md:py-0"
              >
                <div className="hidden md:block h-8 w-px mb-1" style={{ background: 'linear-gradient(to bottom, transparent, #C9992F)' }} />
                <span className="font-devanagari text-lg sm:text-xl" style={{ color: '#E8B84B' }}>संग</span>
                <div className="hidden md:block h-8 w-px mt-1" style={{ background: 'linear-gradient(to top, transparent, #C9992F)' }} />
              </motion.div>

              <ParivarCard
                titleHindi="पाटनी परिवार"
                titleEn="Groom's Family"
                grandparentsHindi={WEDDING.groom.grandparentsHindi}
                parentsHindi={WEDDING.groom.parentsHindi}
                cityHindi={WEDDING.groom.cityHindi}
                icon="🤵"
                delay={0.2}
                inView={inView}
              />
            </div>

            <LotusDivider />

            {/* Extended family — 3 columns */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <FamilyColumn
                titleHindi={FAMILY.nanihal.labelHindi}
                titleEn={FAMILY.nanihal.label}
                members={FAMILY.nanihal.members}
                closing={FAMILY.nanihal.closing}
                delay={0.35}
                inView={inView}
              />
              <FamilyColumn
                titleHindi={FAMILY.samadhi.labelHindi}
                titleEn={FAMILY.samadhi.label}
                members={FAMILY.samadhi.members}
                delay={0.4}
                inView={inView}
              />
              <FamilyColumn
                titleHindi={FAMILY.vinit.labelHindi}
                titleEn={FAMILY.vinit.label}
                members={FAMILY.vinit.members}
                delay={0.45}
                inView={inView}
              />
            </div>

            <LotusDivider />

            {/* Special request & welcome — centered 2 columns */}
            <div className="w-full max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <FamilyColumn
                titleHindi={FAMILY.visheshAnurodh.labelHindi}
                titleEn={FAMILY.visheshAnurodh.label}
                name={FAMILY.visheshAnurodh.nameHindi}
                delay={0.5}
                inView={inView}
              />
              <FamilyColumn
                titleHindi={FAMILY.swagatatur.labelHindi}
                titleEn={FAMILY.swagatatur.label}
                members={FAMILY.swagatatur.members}
                delay={0.55}
                inView={inView}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65 }}
              className="font-devanagari text-[11px] sm:text-sm leading-relaxed text-center w-full max-w-xl mx-auto px-2 mt-6 break-words"
              style={{ color: '#E8B84B', opacity: 0.85 }}
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
