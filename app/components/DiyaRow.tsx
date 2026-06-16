'use client';
import { motion } from 'framer-motion';

/** Row of animated diyas — classic Indian wedding motif */
export default function DiyaRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-end justify-center gap-3 sm:gap-5 md:gap-7 ${className}`} aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={i}
          animate={{ scaleY: [1, 1.2, 0.95, 1.15, 1], opacity: [0.85, 1, 0.9, 1, 0.85] }}
          transition={{ duration: 1.8 + i * 0.2, repeat: Infinity, delay: i * 0.3 }}
          style={{ transformOrigin: 'bottom center' }}
        >
          <svg
            width={i === 2 ? 28 : 22}
            height={i === 2 ? 36 : 30}
            viewBox="0 0 28 36"
            fill="none"
          >
            {/* Flame */}
            <ellipse cx="14" cy="10" rx="5" ry="8" fill="#E8751A" opacity="0.9" />
            <ellipse cx="14" cy="9" rx="3" ry="5" fill="#FFE580" opacity="0.95" />
            {/* Diya bowl */}
            <path d="M4 18 Q14 14 24 18 L22 28 Q14 32 6 28 Z" fill="#C9992F" />
            <ellipse cx="14" cy="18" rx="10" ry="3" fill="#E8B84B" opacity="0.6" />
            <path d="M14 28 L14 34" stroke="#C9992F" strokeWidth="1.5" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
