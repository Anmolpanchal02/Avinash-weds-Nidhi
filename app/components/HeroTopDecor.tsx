'use client';
import { motion } from 'framer-motion';

/** Royal Indian wedding top decoration — toran, drapes & floral garland */
export default function HeroTopDecor() {
  const marigoldX = [80, 180, 300, 420, 540, 660, 780, 900, 1020, 1120];

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0, rotate: [0, 0.35, 0, -0.35, 0] }}
      transition={{
        opacity: { duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] },
        y: { duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] },
        rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 },
      }}
      style={{ transformOrigin: '50% 0%' }}
      className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
      aria-hidden
    >
      <svg
        viewBox="0 0 1200 130"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-[72px] sm:h-[88px] md:h-[104px]"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-drape-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B1E2E" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#3A0E18" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="hero-drape-right" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6B1E2E" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#3A0E18" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="hero-gold-trim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B6E17" />
            <stop offset="50%" stopColor="#F5D060" />
            <stop offset="100%" stopColor="#8B6E17" />
          </linearGradient>
        </defs>

        {/* Side curtain drapes */}
        <path d="M0 0 L0 130 L220 130 Q160 70 120 0 Z" fill="url(#hero-drape-left)" />
        <path d="M1200 0 L1200 130 L980 130 Q1040 70 1080 0 Z" fill="url(#hero-drape-right)" />
        <path d="M0 0 L120 0 Q160 70 220 130" stroke="url(#hero-gold-trim)" strokeWidth="1.5" opacity="0.7" />
        <path d="M1200 0 L1080 0 Q1040 70 980 130" stroke="url(#hero-gold-trim)" strokeWidth="1.5" opacity="0.7" />

        {/* Top golden rail */}
        <rect x="0" y="0" width="1200" height="5" fill="url(#hero-gold-trim)" opacity="0.85" />
        <rect x="0" y="5" width="1200" height="2" fill="#C9992F" opacity="0.35" />

        {/* Hanging toran string */}
        <path
          d="M60 14 Q300 42 600 36 Q900 30 1140 14"
          stroke="#C9992F"
          strokeWidth="1.4"
          opacity="0.65"
        />

        {/* Mango leaf pairs along toran */}
        {[200, 400, 600, 800, 1000].map((x) => (
          <g key={`leaf-${x}`} opacity="0.75">
            <ellipse cx={x - 14} cy={30} rx="7" ry="14" fill="#4A7020" transform={`rotate(-35 ${x - 14} 30)`} />
            <ellipse cx={x + 14} cy={30} rx="7" ry="14" fill="#5A8020" transform={`rotate(35 ${x + 14} 30)`} />
            <line x1={x} y1={14} x2={x} y2={22} stroke="#C9992F" strokeWidth="0.8" opacity="0.5" />
          </g>
        ))}

        {/* Marigold garland clusters */}
        {marigoldX.map((x) => (
          <g key={`flower-${x}`}>
            <line x1={x} y1={14} x2={x} y2={24} stroke="#C9992F" strokeWidth="0.8" opacity="0.55" />
            <ellipse cx={x - 11} cy={38} rx="7" ry="13" fill="#4A7020" opacity="0.6" transform={`rotate(-28 ${x - 11} 38)`} />
            <ellipse cx={x + 11} cy={38} rx="7" ry="13" fill="#4A7020" opacity="0.6" transform={`rotate(28 ${x + 11} 38)`} />
            {Array.from({ length: 8 }, (_, p) => {
              const angle = (p / 8) * 360;
              const rad = (angle * Math.PI) / 180;
              const px = x + 10 * Math.sin(rad);
              const py = 44 + 10 * Math.cos(rad);
              return (
                <ellipse
                  key={p}
                  cx={px}
                  cy={py}
                  rx="4"
                  ry="8"
                  fill={p % 2 === 0 ? '#E8751A' : '#F0A030'}
                  opacity="0.9"
                  transform={`rotate(${angle} ${px} ${py})`}
                />
              );
            })}
            <circle cx={x} cy={44} r="4.5" fill="#FFE580" opacity="0.95" />
          </g>
        ))}

        {/* Center medallion */}
        <circle cx="600" cy="48" r="22" fill="#4A0E18" stroke="#C9992F" strokeWidth="1.5" opacity="0.9" />
        <circle cx="600" cy="48" r="14" fill="none" stroke="#E8B84B" strokeWidth="0.8" opacity="0.7" />
        <path
          d="M600 34 L603 44 L614 44 L605 50 L608 60 L600 54 L592 60 L595 50 L586 44 L597 44 Z"
          fill="#F5D060"
          opacity="0.95"
        />

        {/* Side hanging bells */}
        {[140, 1060].map((x) => (
          <g key={`bell-${x}`}>
            <line x1={x} y1={14} x2={x} y2={52} stroke="#C9992F" strokeWidth="0.9" opacity="0.5" />
            <path
              d={`M${x - 10} 52 Q${x} 46 ${x + 10} 52 L${x + 8} 68 Q${x} 74 ${x - 8} 68 Z`}
              fill="#D4AF37"
              opacity="0.85"
            />
            <circle cx={x} cy={70} r="3" fill="#F5D060" opacity="0.9" />
          </g>
        ))}

        {/* Delicate side tassels */}
        {[90, 1110].map((x) => (
          <g key={`tassel-${x}`} opacity="0.7">
            <line x1={x} y1={68} x2={x} y2={98} stroke="#C9992F" strokeWidth="0.7" />
            <line x1={x - 4} y1={98} x2={x + 4} y2={98} stroke="#E8B84B" strokeWidth="1.2" />
            <line x1={x} y1={98} x2={x} y2={108} stroke="#F5D060" strokeWidth="1" />
          </g>
        ))}

        {/* Subtle bottom fade into hero */}
        <rect x="0" y="108" width="1200" height="22" fill="url(#hero-drape-left)" opacity="0.15" />
      </svg>
    </motion.div>
  );
}
