'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WEDDING } from '../data/wedding';

export default function VenueSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative section-pad overflow-x-hidden flex flex-col items-center">
      <div className="absolute inset-0"
        style={{background:'radial-gradient(ellipse at 50% 0%,#5A1020 0%,#2D0810 50%,#1A0508 100%)'}}/>

      <div className="relative z-10 w-full max-w-5xl mx-auto lg:translate-x-5 xl:translate-x-6">
        {/* Heading */}
        <motion.div initial={{opacity:0,y:26}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.65}}
          className="text-center mb-12 w-full flex flex-col items-center">
          <p className="font-cinzel text-[#C9992F] text-xs tracking-[0.5em] uppercase mb-2">— Venue —</p>
          <h2 className="font-playfair section-title font-bold gold-text mb-3">The Royal Venue</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-24" style={{background:'linear-gradient(to right,transparent,#C9992F)'}}/>
            <span className="text-xl">📍</span>
            <div className="h-px w-24" style={{background:'linear-gradient(to left,transparent,#C9992F)'}}/>
          </div>
        </motion.div>

        {/* Two column grid */}
        <div className="grid md:grid-cols-2 gap-7 items-stretch">

          {/* ── Location info card ── */}
          <motion.div
            initial={{opacity:0,x:-55}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:0.15,duration:0.75}}
            className="rounded-sm overflow-hidden hover-glow flex flex-col"
            style={{
              background:'linear-gradient(145deg,rgba(74,14,26,0.92),rgba(45,8,16,0.97))',
              border:'1px solid rgba(201,153,47,0.4)',
            }}
          >
            <div className="h-[3px]" style={{background:'linear-gradient(90deg,#6B1E2E,#C9992F,#F0D080,#C9992F,#6B1E2E)'}}/>

            <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-10 text-center">
              {/* Animated pin */}
              <motion.div animate={{y:[0,-9,0]}} transition={{duration:3,repeat:Infinity,ease:'easeInOut'}}
                className="mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center animate-gold-glow"
                  style={{
                    background:'radial-gradient(circle,rgba(201,153,47,0.2),rgba(74,14,26,0.5))',
                    border:'2px solid rgba(201,153,47,0.55)',
                  }}>
                  <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
                    <path d="M18 1C9.2 1 2 8.2 2 17C2 29.5 18 43 18 43C18 43 34 29.5 34 17C34 8.2 26.8 1 18 1Z"
                      fill="#C9992F" opacity="0.85" stroke="#E8B84B" strokeWidth="1.5"/>
                    <circle cx="18" cy="17" r="6" fill="#1A0508"/>
                    <circle cx="18" cy="17" r="3.5" fill="#E8B84B"/>
                  </svg>
                </div>
              </motion.div>

              <h3 className="font-playfair text-2xl sm:text-3xl font-bold gold-text mb-1">{WEDDING.venue.name}</h3>
              <div className="h-px w-28 mx-auto mb-5"
                style={{background:'linear-gradient(to right,transparent,#C9992F,transparent)'}}/>

              <div className="space-y-2 mb-6">
                {[WEDDING.venue.address, WEDDING.venue.state].map((line, i) => (
                  <div key={i} className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{background:'#C9992F'}}/>
                    <span className="font-cormorant text-[#F0D080] text-lg">{line}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-14" style={{background:'linear-gradient(to right,transparent,#C9992F)'}}/>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="#E8B84B">
                  <path d="M6 0L7.5 4.5H12L8.5 7L10 12L6 9L2 12L3.5 7L0 4.5H4.5Z"/>
                </svg>
                <div className="h-px w-14" style={{background:'linear-gradient(to left,transparent,#C9992F)'}}/>
              </div>

              {/* Get Directions CTA */}
              <motion.a
                href={WEDDING.venue.mapsUrl}
                target="_blank" rel="noopener noreferrer"
                whileHover={{scale:1.06}} whileTap={{scale:0.96}}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-sm font-cinzel text-sm tracking-[0.2em] uppercase font-bold"
                style={{
                  background:'linear-gradient(135deg,#7A4E10,#C9992F,#F0D080,#C9992F,#7A4E10)',
                  color:'#1A0508',
                  boxShadow:'0 0 20px rgba(201,153,47,0.4)',
                }}
              >
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
                  <path d="M6.5 0.5C3.5 0.5 1 3 1 6C1 10 6.5 15.5 6.5 15.5C6.5 15.5 12 10 12 6C12 3 9.5 0.5 6.5 0.5Z"
                    stroke="#1A0508" strokeWidth="1.2" fill="none"/>
                  <circle cx="6.5" cy="6" r="2" fill="#1A0508"/>
                </svg>
                Get Directions
              </motion.a>
            </div>

            <div className="h-[3px]" style={{background:'linear-gradient(90deg,#6B1E2E,#C9992F,#F0D080,#C9992F,#6B1E2E)'}}/>
          </motion.div>

          {/* ── Map visual card ── */}
          <motion.div
            initial={{opacity:0,x:55}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:0.3,duration:0.75}}
            className="relative rounded-sm overflow-hidden hover-glow"
            style={{
              border:'1px solid rgba(201,153,47,0.35)',
              minHeight: 'min(400px, 60vw)',
              background:'linear-gradient(145deg,rgba(26,5,8,0.96),rgba(45,8,16,0.92))',
            }}
          >
            {/* Decorative map grid */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.09]" viewBox="0 0 420 400" preserveAspectRatio="xMidYMid slice">
              {Array.from({length:9},(_,i)=>(
                <g key={i}>
                  <line x1={i*52} y1="0" x2={i*52} y2="400" stroke="#C9992F" strokeWidth="0.6"/>
                  <line x1="0" y1={i*50} x2="420" y2={i*50} stroke="#C9992F" strokeWidth="0.6"/>
                </g>
              ))}
              {/* Stylised roads */}
              <path d="M0 200 L420 200" stroke="#E8B84B" strokeWidth="2.5" opacity="0.6"/>
              <path d="M210 0 L210 400" stroke="#E8B84B" strokeWidth="2.5" opacity="0.6"/>
              <path d="M0 120 Q100 135 210 120 Q315 105 420 120" stroke="#C9992F" strokeWidth="1.8" fill="none" opacity="0.45"/>
              <path d="M0 290 Q105 275 210 290 Q315 305 420 290" stroke="#C9992F" strokeWidth="1.8" fill="none" opacity="0.45"/>
              {/* Venue ring */}
              <circle cx="210" cy="200" r="48" stroke="#C9992F" strokeWidth="1.5" fill="none" opacity="0.7"/>
              <circle cx="210" cy="200" r="24" fill="#6B1E2E" opacity="0.65"/>
              <circle cx="210" cy="200" r="8" fill="#C9992F"/>
              {/* Pin */}
              <line x1="210" y1="200" x2="210" y2="148" stroke="#E8B84B" strokeWidth="2"/>
              <path d="M198 148 Q210 132 222 148 Q210 163 198 148Z" fill="#E8751A"/>
              <circle cx="210" cy="145" r="3.5" fill="#FFE580"/>
            </svg>

            {/* Pulsing marker overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <motion.div
                className="relative"
                animate={{scale:[1,1.12,1]}} transition={{duration:2.5,repeat:Infinity,ease:'easeInOut'}}
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#C9992F] flex items-center justify-center"
                  style={{background:'radial-gradient(circle,rgba(201,153,47,0.3),rgba(26,5,8,0.7))',boxShadow:'0 0 30px rgba(201,153,47,0.5)'}}>
                  <svg width="28" height="34" viewBox="0 0 28 34" fill="none">
                    <path d="M14 1C7 1 1 7 1 14C1 22.5 14 33 14 33C14 33 27 22.5 27 14C27 7 21 1 14 1Z"
                      fill="#C9992F" stroke="#E8B84B" strokeWidth="1.2"/>
                    <circle cx="14" cy="14" r="4.5" fill="#1A0508"/>
                    <circle cx="14" cy="14" r="2.5" fill="#E8B84B"/>
                  </svg>
                </div>
                {/* Pulse rings */}
                {[1,2,3].map(i=>(
                  <motion.div key={i} className="absolute inset-0 rounded-full border border-[#C9992F]"
                    animate={{scale:[1,2.2+i*0.4],opacity:[0.55,0]}}
                    transition={{duration:2.2,repeat:Infinity,delay:i*0.5}}/>
                ))}
              </motion.div>

              <div className="text-center">
                <h4 className="font-cinzel text-[#E8B84B] text-base font-bold">Katara Paradise</h4>
                <p className="font-cormorant text-[#C9992F] text-sm">Niwai, Rajasthan</p>
              </div>

              <motion.a
                href={WEDDING.venue.mapsUrl}
                target="_blank" rel="noopener noreferrer"
                whileHover={{scale:1.06}}
                className="px-5 py-2 rounded text-xs font-cinzel tracking-[0.2em] font-bold"
                style={{background:'linear-gradient(135deg,#C9992F,#E8B84B)',color:'#1A0508',boxShadow:'0 0 14px rgba(201,153,47,0.35)'}}>
                Open in Google Maps ↗
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.65 }}
          className="mt-7 grid sm:grid-cols-2 gap-5"
        >
          <div className="p-5 rounded-sm text-center"
            style={{ background: 'rgba(74,14,26,0.6)', border: '1px solid rgba(201,153,47,0.25)' }}>
            <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: '#C9992F' }}>Day 1 Venue</p>
            <p className="font-cormorant text-base mb-1" style={{ color: '#E8B84B' }}>{WEDDING.day1Venue.name}</p>
            <p className="font-cormorant text-sm" style={{ color: '#F0D080', opacity: 0.8 }}>{WEDDING.day1Venue.city}</p>
          </div>
          <div className="p-5 rounded-sm text-center"
            style={{ background: 'rgba(74,14,26,0.6)', border: '1px solid rgba(201,153,47,0.25)' }}>
            <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: '#C9992F' }}>Contact</p>
            {WEDDING.sender.phones.map(phone => (
              <a key={phone} href={`tel:${phone}`}
                className="block font-cinzel text-sm mb-1"
                style={{ color: '#E8B84B' }}>
                📞 {phone}
              </a>
            ))}
            <p className="font-cormorant text-xs mt-2 leading-relaxed" style={{ color: '#C9992F', opacity: 0.75 }}>
              {WEDDING.sender.address}
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          className="text-center font-cormorant text-sm mt-6 px-4"
          style={{ color: '#E8B84B', opacity: 0.85 }}
        >
          {WEDDING.specialNote}
        </motion.p>

        {/* Venue features */}
        <motion.div
          initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.5,duration:0.65}}
          className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            {icon:'🏰',label:'Royal Banquet Hall'},
            {icon:'🌸',label:'Garden Lawns'},
            {icon:'🅿️',label:'Ample Parking'},
            {icon:'🎶',label:'Live Entertainment'},
          ].map(({icon,label},i)=>(
            <motion.div key={i} whileHover={{y:-5}}
              className="flex flex-col items-center gap-2 py-4 px-3 rounded-sm text-center hover-glow"
              style={{background:'rgba(74,14,26,0.6)',border:'1px solid rgba(201,153,47,0.22)'}}>
              <span className="text-2xl">{icon}</span>
              <span className="font-cormorant text-[#C9992F] text-sm">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
