'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { CEREMONIES, WEDDING } from '../data/wedding';

type Ceremony = (typeof CEREMONIES)[number];

function MetaRow({
  icon: Icon,
  primary,
  secondary,
}: {
  icon: typeof Calendar;
  primary: string;
  secondary?: string;
}) {
  return (
    <div className="ceremony-meta-row">
      <Icon size={14} strokeWidth={1.75} className="ceremony-meta-icon" />
      <div className="ceremony-meta-text">
        <span className="ceremony-meta-primary">{primary}</span>
        {secondary && <span className="ceremony-meta-secondary">{secondary}</span>}
      </div>
    </div>
  );
}

function CeremonyCard({ ceremony }: { ceremony: Ceremony }) {
  const isHighlight = 'highlight' in ceremony && ceremony.highlight;

  return (
    <article className={`ceremony-glass-card${isHighlight ? ' ceremony-glass-card--highlight' : ''}`}>
      <div className="ceremony-card-body">
        <div className="ceremony-card-icon">{ceremony.icon}</div>

        {isHighlight && (
          <span className="ceremony-highlight-badge">मुख्य संस्कार · Main Ceremony</span>
        )}

        <div className="ceremony-card-titles">
          <h3 className="ceremony-card-title-hindi">{ceremony.hindi}</h3>
          <p className="ceremony-card-title-en">{ceremony.name}</p>
        </div>

        <p className="ceremony-card-desc">{ceremony.description}</p>

        <div className="ceremony-card-meta">
          <MetaRow icon={Calendar} primary={ceremony.dateHindi} secondary={ceremony.date} />
          <MetaRow icon={Clock} primary={ceremony.timeHindi} secondary={ceremony.time} />
          <MetaRow icon={MapPin} primary={ceremony.venueHindi} secondary={ceremony.venue} />
        </div>
      </div>
    </article>
  );
}

function TimelineItem({
  ceremony,
  index,
  isLast,
}: {
  ceremony: Ceremony;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12, margin: '-30px' });
  const isLeft = index % 2 === 0;
  const isHighlight = 'highlight' in ceremony && ceremony.highlight;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={`ceremony-timeline-item${isLast ? ' is-last' : ''}${isLeft ? ' is-left' : ' is-right'}`}
    >
      <span
        className={`ceremony-timeline-dot${isHighlight ? ' is-highlight' : ''}`}
        aria-hidden
      />

      <div className="ceremony-timeline-row">
        <CeremonyCard ceremony={ceremony} />
      </div>
    </motion.div>
  );
}

export default function CeremoniesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section className="ceremonies-timeline">
      <div className="ceremonies-timeline-bg" aria-hidden />
      <div className="ceremonies-mandala-pattern" aria-hidden />
      <div className="ceremonies-ambience-glow" aria-hidden />

      <div className="ceremonies-timeline-inner">
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="ceremonies-header"
        >
          <p className="ceremonies-hindi-header">{WEDDING.invocations.ganesha}</p>
          <h2 className="ceremonies-main-title-hindi">{WEDDING.invocations.manglikBelaein}</h2>
          <p className="ceremonies-main-title">Grand Wedding Ceremonies</p>

          <div className="ceremonies-header-divider">
            <span className="ceremonies-header-line" />
            <span className="ceremonies-header-icon" aria-hidden>🪔</span>
            <span className="ceremonies-header-line ceremonies-header-line--right" />
          </div>

          <p className="ceremonies-header-subtitle">
            तीन दिवस · ग्यारह संस्कार · जुलाई २०२६
          </p>
        </motion.header>

        <div className="ceremony-timeline-track">
          <div className="ceremony-timeline-line" aria-hidden />

          {CEREMONIES.map((ceremony, index) => (
            <TimelineItem
              key={ceremony.id}
              ceremony={ceremony}
              index={index}
              isLast={index === CEREMONIES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
