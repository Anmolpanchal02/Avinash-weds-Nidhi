'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WEDDING_DATE = new Date('2026-07-12T00:00:00');

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = WEDDING_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-2 sm:gap-3 md:gap-6 justify-center flex-wrap px-2">
      {units.map(({ label, value }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 + 0.5 }}
          className="countdown-box rounded-lg px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 min-w-[64px] sm:min-w-[72px] md:min-w-[90px] text-center"
        >
          <motion.div
            key={value}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold gold-text leading-none"
          >
            {String(value).padStart(2, '0')}
          </motion.div>
          <div className="font-cinzel text-[10px] md:text-xs text-[#C9992F] tracking-[0.2em] uppercase mt-1 opacity-80">
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
