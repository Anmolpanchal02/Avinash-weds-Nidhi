'use client';
import { motion } from 'framer-motion';

interface MandalaDecorProps {
  size?: number;
  opacity?: number;
  className?: string;
}

export default function MandalaDecor({ size = 300, opacity = 0.15, className = '' }: MandalaDecorProps) {
  const rings = [0.95, 0.78, 0.62, 0.45, 0.3, 0.18];
  const petalCounts = [16, 12, 10, 8, 6, 4];

  return (
    <div className={`pointer-events-none ${className}`} style={{ width: size, height: size, opacity }}>
      <motion.svg
        viewBox="0 0 300 300"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        {/* Outer decorative ring */}
        <circle cx="150" cy="150" r="142" stroke="#C9992F" strokeWidth="0.8" strokeDasharray="4 4" />
        <circle cx="150" cy="150" r="138" stroke="#C9992F" strokeWidth="0.4" />

        {rings.map((r, ri) => {
          const radius = r * 140;
          const count = petalCounts[ri];
          return (
            <g key={ri}>
              <circle cx="150" cy="150" r={radius} stroke="#C9992F" strokeWidth="0.5" />
              {Array.from({ length: count }, (_, i) => {
                const angle = (i / count) * 360;
                const rad = (angle * Math.PI) / 180;
                const x = 150 + (radius - 10) * Math.sin(rad);
                const y = 150 - (radius - 10) * Math.cos(rad);
                return (
                  <ellipse
                    key={i}
                    cx={x}
                    cy={y}
                    rx="4"
                    ry="8"
                    fill="#C9992F"
                    opacity="0.6"
                    transform={`rotate(${angle}, ${x}, ${y})`}
                  />
                );
              })}
            </g>
          );
        })}

        {/* Center lotus */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = 150 + 18 * Math.sin(rad);
          const y = 150 - 18 * Math.cos(rad);
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="5"
              ry="12"
              fill="#E8B84B"
              opacity="0.8"
              transform={`rotate(${angle}, ${x}, ${y})`}
            />
          );
        })}
        <circle cx="150" cy="150" r="8" fill="#E8B84B" opacity="0.9" />
        <circle cx="150" cy="150" r="4" fill="#FFE580" />

        {/* Diamond accents at cardinal points */}
        {[0, 90, 180, 270].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 150 + 145 * Math.sin(rad);
          const y = 150 - 145 * Math.cos(rad);
          return (
            <g key={angle} transform={`translate(${x}, ${y}) rotate(${angle})`}>
              <polygon points="0,-5 3,0 0,5 -3,0" fill="#E8B84B" opacity="0.9" />
            </g>
          );
        })}
      </motion.svg>
    </div>
  );
}
