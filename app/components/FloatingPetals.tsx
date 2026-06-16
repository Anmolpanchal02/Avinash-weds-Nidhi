'use client';
import { useEffect, useState } from 'react';

interface Flower {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  type: number;   // 0=rose, 1=marigold, 2=lotus petal, 3=full flower
  rotate: number;
  swing: number;  // horizontal swing amount
}

/* ── SVG flower shapes ── */
function RosePetal({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 50" fill="none" width="100%" height="100%">
      <path
        d="M20 48 C10 40 4 28 4 18 C4 8 11 2 20 2 C29 2 36 8 36 18 C36 28 30 40 20 48Z"
        fill={color} opacity="0.85"
      />
      <path
        d="M20 48 C15 38 12 26 13 18 C14 10 17 4 20 2 C23 4 26 10 27 18 C28 26 25 38 20 48Z"
        fill="white" opacity="0.18"
      />
    </svg>
  );
}

function MarigoldFlower({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="100%" height="100%">
      {/* 8 petals */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * 360;
        return (
          <ellipse
            key={i}
            cx="24" cy="10" rx="4.5" ry="10"
            fill={color} opacity="0.88"
            transform={`rotate(${angle}, 24, 24)`}
          />
        );
      })}
      {/* Center */}
      <circle cx="24" cy="24" r="6" fill="#E8751A" opacity="0.9" />
      <circle cx="24" cy="24" r="3" fill="#FFE580" opacity="0.9" />
    </svg>
  );
}

function LotusPetal({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 30 44" fill="none" width="100%" height="100%">
      <path
        d="M15 42 C6 34 2 22 3 13 C4 5 9 1 15 1 C21 1 26 5 27 13 C28 22 24 34 15 42Z"
        fill={color} opacity="0.8"
      />
      <path
        d="M15 42 C11 32 10 20 11 13 C12 7 14 2 15 1 C16 2 18 7 19 13 C20 20 19 32 15 42Z"
        fill="white" opacity="0.2"
      />
    </svg>
  );
}

function FullFlower({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 52 52" fill="none" width="100%" height="100%">
      {/* 6 petals */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * 360;
        return (
          <ellipse
            key={i}
            cx="26" cy="9" rx="5" ry="11"
            fill={color} opacity="0.82"
            transform={`rotate(${angle}, 26, 26)`}
          />
        );
      })}
      {/* Inner petals */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * 360 + 30;
        return (
          <ellipse
            key={i}
            cx="26" cy="14" rx="3.5" ry="8"
            fill={color} opacity="0.6"
            transform={`rotate(${angle}, 26, 26)`}
          />
        );
      })}
      <circle cx="26" cy="26" r="6" fill="#FFE580" opacity="0.95" />
      <circle cx="26" cy="26" r="3" fill="#E8751A" opacity="0.85" />
    </svg>
  );
}

const FLOWER_COLORS = [
  '#E8751A', // saffron
  '#C9992F', // gold
  '#8B2E42', // deep rose
  '#D4496A', // pink rose
  '#F59332', // marigold orange
  '#FFB347', // light marigold
  '#C0392B', // red rose
  '#E84393', // pink
];

export default function FloatingPetals({ count = 22 }: { count?: number }) {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const generated: Flower[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 22 + 14,       // 14–36px
      duration: Math.random() * 9 + 7,     // 7–16s fall time
      delay: Math.random() * 14,           // stagger start
      type: Math.floor(Math.random() * 4), // 4 flower types
      rotate: Math.random() * 360,
      swing: (Math.random() - 0.5) * 120, // -60 to +60px horizontal drift
    }));
    setFlowers(generated);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {flowers.map((f) => (
        <div
          key={f.id}
          style={{
            position: 'absolute',
            left: `${f.x}%`,
            top: '-60px',
            width: f.size,
            height: f.size,
            animation: `flowerFall ${f.duration}s ${f.delay}s linear infinite`,
            '--swing': `${f.swing}px`,
            '--rot-start': `${f.rotate}deg`,
            '--rot-end': `${f.rotate + 360}deg`,
          } as React.CSSProperties}
        >
          {f.type === 0 && <RosePetal   color={FLOWER_COLORS[f.id % FLOWER_COLORS.length]} />}
          {f.type === 1 && <MarigoldFlower color={FLOWER_COLORS[(f.id + 2) % FLOWER_COLORS.length]} />}
          {f.type === 2 && <LotusPetal  color={FLOWER_COLORS[(f.id + 4) % FLOWER_COLORS.length]} />}
          {f.type === 3 && <FullFlower  color={FLOWER_COLORS[(f.id + 1) % FLOWER_COLORS.length]} />}
        </div>
      ))}

      {/* Inject keyframes via a style tag */}
      <style>{`
        @keyframes flowerFall {
          0% {
            transform: translateY(-60px) translateX(0px) rotate(var(--rot-start));
            opacity: 0;
          }
          8% {
            opacity: 0.9;
          }
          50% {
            transform: translateY(50vh) translateX(var(--swing)) rotate(calc(var(--rot-start) + 180deg));
            opacity: 0.75;
          }
          92% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(108vh) translateX(calc(var(--swing) * -0.5)) rotate(var(--rot-end));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
