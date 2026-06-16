'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OpeningScreen from './components/OpeningScreen';
import FloatingPetals from './components/FloatingPetals';
import GoldenParticles from './components/GoldenParticles';
import ToranBorder from './components/ToranBorder';
import HeroSection from './components/HeroSection';
import InvitationSection from './components/InvitationSection';
import CeremoniesSection from './components/CeremoniesSection';
import EventScheduleSection from './components/EventScheduleSection';
import VenueSection from './components/VenueSection';
import FamilySection from './components/FamilySection';
import BlessingsSection from './components/BlessingsSection';
import ThankYouSection from './components/ThankYouSection';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: '#1A0508' }}>
      <OpeningScreen onOpen={() => setIsOpen(true)} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Background effects — lighter on mobile for performance */}
            {!isMobile && <GoldenParticles />}
            <FloatingPetals count={isMobile ? 10 : 22} />

            {/* ── Sections ── */}
            <div id="hero"><HeroSection /></div>
            <ToranBorder />
            <div id="invitation"><InvitationSection /></div>
            <ToranBorder />
            <div id="ceremonies"><CeremoniesSection /></div>
            <ToranBorder />
            <EventScheduleSection />
            <ToranBorder />
            <div id="venue"><VenueSection /></div>
            <ToranBorder />
            <div id="family"><FamilySection /></div>
            <ToranBorder />
            <div id="blessings"><BlessingsSection /></div>
            <ThankYouSection />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
