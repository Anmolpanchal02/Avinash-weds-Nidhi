'use client';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  shape: number;
}

export default function FloatingPetals({ count = 20 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = ['#E8751A', '#C9992F', '#8B2E42', '#F0D080', '#FFB347', '#FF8C69'];
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 14 + 8,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.floor(Math.random() * 3),
    }));
    setPetals(generated);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-20px',
            width: petal.size,
            height: petal.size,
            animationName: 'petalFall',
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationFillMode: 'both',
          }}
        >
          {petal.shape === 0 && (
            <svg viewBox="0 0 24 24" fill={petal.color} opacity="0.75">
              <path d="M12 2C12 2 8 6 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 6 12 2 12 2Z" />
              <path d="M12 14C12 14 8 18 8 22" stroke={petal.color} strokeWidth="0.5" fill="none" />
            </svg>
          )}
          {petal.shape === 1 && (
            <svg viewBox="0 0 24 24" fill={petal.color} opacity="0.75">
              <ellipse cx="12" cy="8" rx="4" ry="7" />
            </svg>
          )}
          {petal.shape === 2 && (
            <svg viewBox="0 0 24 24" fill={petal.color} opacity="0.6">
              <path d="M12 2 Q16 8 12 14 Q8 8 12 2Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
