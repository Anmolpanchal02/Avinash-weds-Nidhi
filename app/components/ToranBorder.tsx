'use client';

/** Decorative toran (marigold garland) border for Indian wedding sections */
export default function ToranBorder({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-8 sm:h-10 md:h-12"
        fill="none"
      >
        {/* Hanging string */}
        <path d="M0 8 Q600 20 1200 8" stroke="#C9992F" strokeWidth="1.2" opacity="0.5" />
        {/* Marigold clusters */}
        {Array.from({ length: 13 }, (_, i) => {
          const x = 46 + i * 88;
          return (
            <g key={i}>
              {/* Leaves */}
              <ellipse cx={x - 10} cy={22} rx="6" ry="12" fill="#5A8020" opacity="0.55" transform={`rotate(-30 ${x - 10} 22)`} />
              <ellipse cx={x + 10} cy={22} rx="6" ry="12" fill="#5A8020" opacity="0.55" transform={`rotate(30 ${x + 10} 22)`} />
              {/* Marigold flower */}
              {Array.from({ length: 8 }, (_, p) => {
                const angle = (p / 8) * 360;
                const rad = (angle * Math.PI) / 180;
                const px = x + 9 * Math.sin(rad);
                const py = 28 + 9 * Math.cos(rad);
                return (
                  <ellipse
                    key={p}
                    cx={px}
                    cy={py}
                    rx="3.5"
                    ry="7"
                    fill={p % 2 === 0 ? '#E8751A' : '#F0A030'}
                    opacity="0.85"
                    transform={`rotate(${angle} ${px} ${py})`}
                  />
                );
              })}
              <circle cx={x} cy={28} r="4" fill="#FFE580" opacity="0.9" />
              {/* Hanging thread */}
              <line x1={x} y1={8} x2={x} y2={18} stroke="#C9992F" strokeWidth="0.8" opacity="0.6" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
