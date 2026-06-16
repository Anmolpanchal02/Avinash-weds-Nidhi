import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Avinash & Nidhi Wedding Invitation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3A0A14 0%, #5A1020 40%, #3A0A14 100%)',
          fontFamily: 'serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background pattern lines */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(201,153,47,0.12) 0%, transparent 65%)',
        }} />

        {/* Top gold line */}
        <div style={{
          position: 'absolute', top: 40, left: 60, right: 60, height: 1,
          background: 'linear-gradient(90deg, transparent, #C9992F, #F0D080, #C9992F, transparent)',
        }} />
        {/* Bottom gold line */}
        <div style={{
          position: 'absolute', bottom: 40, left: 60, right: 60, height: 1,
          background: 'linear-gradient(90deg, transparent, #C9992F, #F0D080, #C9992F, transparent)',
        }} />
        {/* Left gold line */}
        <div style={{
          position: 'absolute', left: 40, top: 40, bottom: 40, width: 1,
          background: 'linear-gradient(180deg, transparent, #C9992F, #F0D080, #C9992F, transparent)',
        }} />
        {/* Right gold line */}
        <div style={{
          position: 'absolute', right: 40, top: 40, bottom: 40, width: 1,
          background: 'linear-gradient(180deg, transparent, #C9992F, #F0D080, #C9992F, transparent)',
        }} />

        {/* Corner dots */}
        {[
          { top: 35, left: 35 }, { top: 35, right: 35 },
          { bottom: 35, left: 35 }, { bottom: 35, right: 35 },
        ].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute', ...pos,
            width: 12, height: 12, borderRadius: '50%',
            background: '#E8B84B',
          }} />
        ))}

        {/* 🙏 circle icon */}
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg, #3A0E18, #5A1828)',
          border: '2px solid #C9992F',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 32,
          marginBottom: 16,
          boxShadow: '0 0 30px rgba(201,153,47,0.5)',
        }}>
          🙏
        </div>

        {/* Together with their families */}
        <p style={{
          fontFamily: 'serif',
          fontSize: 16,
          letterSpacing: '0.4em',
          color: '#C9992F',
          textTransform: 'uppercase',
          marginBottom: 12,
          margin: '0 0 12px 0',
        }}>
          Together With Their Families
        </p>

        {/* AVINASH */}
        <p style={{
          fontSize: 96,
          color: '#E8B84B',
          margin: '0',
          lineHeight: 1.05,
          fontStyle: 'italic',
          textShadow: '0 0 40px rgba(232,184,75,0.6)',
        }}>
          Avinash
        </p>

        {/* Heart + & */}
        <p style={{
          fontSize: 36,
          color: '#C9992F',
          margin: '4px 0',
        }}>
          ❤️
        </p>

        {/* NIDHI */}
        <p style={{
          fontSize: 96,
          color: '#E8B84B',
          margin: '0',
          lineHeight: 1.05,
          fontStyle: 'italic',
          textShadow: '0 0 40px rgba(232,184,75,0.6)',
        }}>
          Nidhi
        </p>

        {/* Divider */}
        <div style={{
          width: 200, height: 1,
          background: 'linear-gradient(90deg, transparent, #C9992F, transparent)',
          margin: '18px 0 14px',
        }} />

        {/* Date & Venue */}
        <p style={{
          fontSize: 22,
          color: '#F0D080',
          letterSpacing: '0.2em',
          fontFamily: 'serif',
          margin: '0 0 6px 0',
        }}>
          SUNDAY, 12 JULY 2026
        </p>
        <p style={{
          fontSize: 16,
          color: '#C9992F',
          letterSpacing: '0.1em',
          margin: 0,
          opacity: 0.8,
        }}>
          Katara Paradise · Niwai, Rajasthan
        </p>
      </div>
    ),
    { ...size }
  );
}
