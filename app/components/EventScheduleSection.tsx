'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { SCHEDULE_DAYS, WEDDING } from '../data/wedding';

type ScheduleDay = (typeof SCHEDULE_DAYS)[number];
type ScheduleEvent = ScheduleDay['events'][number];

function EventRow({ event }: { event: ScheduleEvent }) {
  return (
    <div className={`schedule-event-row${event.highlight ? ' is-highlight' : ''}`}>
      <div className="schedule-event-left">
        <span className="schedule-event-icon" aria-hidden>{event.icon}</span>
        <div className="schedule-event-names">
          <span className="schedule-event-name-hindi">{event.nameHindi}</span>
          <span className="schedule-event-name-en">{event.name}</span>
        </div>
      </div>
      <div className="schedule-event-times">
        <time className="schedule-event-time">{event.time}</time>
        <span className="schedule-event-time-hindi">{event.timeHindi}</span>
      </div>
    </div>
  );
}

function DayCard({ day, index }: { day: ScheduleDay; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1, margin: '-40px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`schedule-day-card${day.isWedding ? ' schedule-day-card--wedding' : ''}`}
    >
      <header className={`schedule-day-header${day.isWedding ? ' schedule-day-header--wedding' : ''}`}>
        <div className="schedule-day-header-text">
          <p className="schedule-day-label">{day.dayLabel}</p>
          <h3 className="schedule-day-title-hindi">{day.titleHindi}</h3>
          <p className="schedule-day-title-en">{day.title}</p>
        </div>
        {day.isWedding && (
          <span className="schedule-wedding-badge">Wedding Day</span>
        )}
      </header>

      <div className="schedule-day-venue">
        <MapPin size={14} className="schedule-day-venue-icon" aria-hidden />
        <span className="schedule-day-venue-hindi">{day.venueHindi}</span>
        <span className="schedule-day-venue-en">{day.venue}</span>
      </div>

      <div className="schedule-day-events">
        {day.events.map((event, i) => (
          <div
            key={`${event.nameHindi}-${event.time}`}
            className={`schedule-event-wrap${i < day.events.length - 1 ? ' has-divider' : ''}`}
          >
            <EventRow event={event} />
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export default function EventScheduleSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section id="schedule" className="event-schedule">
      <div className="event-schedule-bg" aria-hidden />
      <div className="event-schedule-mandala" aria-hidden />
      <div className="event-schedule-orb event-schedule-orb--tl" aria-hidden />
      <div className="event-schedule-orb event-schedule-orb--br" aria-hidden />

      <div className="event-schedule-inner">
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="event-schedule-header"
        >
          <p className="event-schedule-hindi">{WEDDING.invocations.ganesha}</p>
          <p className="event-schedule-prayer">{WEDDING.ganeshaPrayerHindi}</p>

          <h2 className="event-schedule-title-hindi">{WEDDING.invocations.manglikBelaein}</h2>
          <p className="event-schedule-title">{WEDDING.invocations.manglikBelaeinEn}</p>

          <div className="event-schedule-divider">
            <span className="event-schedule-divider-line" />
            <span className="event-schedule-divider-icon" aria-hidden>🪔</span>
            <span className="event-schedule-divider-line event-schedule-divider-line--right" />
          </div>

          <p className="event-schedule-subtitle">
            तीन दिवस के पावन संस्कार · शुभ मांगलिक बेलाएँ
          </p>
        </motion.header>

        <div className="schedule-day-list">
          {SCHEDULE_DAYS.map((day, index) => (
            <DayCard key={day.id} day={day} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
