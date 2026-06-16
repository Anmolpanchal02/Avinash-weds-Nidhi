'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { WEDDING } from '../data/wedding';

interface OpeningScreenProps {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: OpeningScreenProps) {
  const [opened, setOpened] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [removed, setRemoved] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const handleZoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const screen = screenRef.current;
    const handleZone = handleZoneRef.current;
    const content = contentRef.current;
    if (!screen || !handleZone) return;

    let frame = 0;

    const syncKnobPosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const zoneRect = handleZone.getBoundingClientRect();
        const screenRect = screen.getBoundingClientRect();
        const top = zoneRect.top + zoneRect.height / 2 - screenRect.top;
        screen.style.setProperty('--opening-knob-top', `${top}px`);
      });
    };

    syncKnobPosition();

    const ro = new ResizeObserver(syncKnobPosition);
    ro.observe(handleZone);
    ro.observe(screen);
    if (content) ro.observe(content);

    window.addEventListener('resize', syncKnobPosition);
    document.fonts?.ready.then(syncKnobPosition).catch(() => {});

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener('resize', syncKnobPosition);
    };
  }, []);

  const handleOpen = useCallback(() => {
    if (opened) return;
    setOpened(true);

    setTimeout(() => {
      document.body.style.overflow = 'auto';
      onOpen();
    }, 1200);

    setTimeout(() => setExiting(true), 1000);

    setTimeout(() => setRemoved(true), 2500);
  }, [opened, onOpen]);

  if (removed) return null;

  return (
    <div
      ref={screenRef}
      className={`opening-screen${opened ? ' opened' : ''}${exiting ? ' exiting' : ''}`}
      aria-hidden={exiting}
    >
      <div className="opening-glow" aria-hidden />

      <div className="opening-gate opening-gate-left" aria-hidden>
        <div className="opening-gate-grid" />
        <div className="opening-gate-knob opening-gate-knob-right" />
      </div>

      <div className="opening-gate opening-gate-right" aria-hidden>
        <div className="opening-gate-grid" />
        <div className="opening-gate-knob opening-gate-knob-left" />
      </div>

      <div ref={contentRef} className="opening-content">
        <div className="opening-bell" aria-hidden>🔔</div>

        <p className="opening-sanskrit">{WEDDING.invocations.adinath}</p>

        <div className="opening-ornament" aria-hidden>
          <span className="opening-ornament-line" />
          <span className="opening-ornament-symbol">❖</span>
          <span className="opening-ornament-line opening-ornament-line-right" />
        </div>

        <p className="opening-subtext">Together With Their Families</p>

        <div className="opening-names-block">
          <h1 className="opening-name opening-name-groom">{WEDDING.groom.name}</h1>

          <div ref={handleZoneRef} className="opening-heart-divider" aria-hidden>
            <span className="opening-heart-icon">❤️</span>
          </div>

          <h1 className="opening-name opening-name-bride">{WEDDING.bride.name}</h1>
        </div>

        <p className="opening-invite-line">Invite You To Celebrate Their Wedding</p>

        <div className="opening-date-badge">{WEDDING.date}</div>

        <button
          type="button"
          className="opening-btn"
          onClick={handleOpen}
          disabled={opened}
        >
          <span>Open Invitation</span>
          <svg
            className="opening-btn-arrow"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden
          >
            <path
              d="M3 9H15M15 9L10 4M15 9L10 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
