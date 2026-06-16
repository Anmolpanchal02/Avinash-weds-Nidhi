'use client';

export default function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-[#C9992F]" />
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
        <path d="M5 10 L25 3 L30 10 L25 17 L5 10Z" fill="#C9992F" opacity="0.8" />
        <path d="M55 10 L35 3 L30 10 L35 17 L55 10Z" fill="#C9992F" opacity="0.8" />
        <circle cx="30" cy="10" r="3" fill="#F0D080" />
        <path d="M10 10 L25 10" stroke="#E8B84B" strokeWidth="0.8" />
        <path d="M35 10 L50 10" stroke="#E8B84B" strokeWidth="0.8" />
      </svg>
      <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-[#C9992F]" />
    </div>
  );
}
