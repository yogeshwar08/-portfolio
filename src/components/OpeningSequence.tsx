import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE, Magnetic } from './fx';

/**
 * Cinematic Opening Sequence:
 * Beat 0: Pitch black
 * Beat 1: Studio Card ("AN ARALA ORIGINAL")
 * Beat 2: Portrait reveal with ambient light
 * Beat 3: Hero Title Reveal ("YOGESHWAR") + ("THE SERIES")
 * Beat 4: Role tagline & "▶ PLAY INTRO" button
 */
const TIMELINE = [
  { at: 300,  beat: 1 },  // Studio Card
  { at: 1800, beat: 2 },  // Portrait reveal
  { at: 3200, beat: 3 },  // Title Slam
  { at: 4200, beat: 4 },  // Role & Play Button
];

// Optional cinematic sound synthesizer (Web Audio API)
function playCinematicSound(type: 'flare') {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(480, ctx.currentTime + 0.6);
    gain.gain.setValueAtTime(0.01, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.75);
  } catch {
    // Audio autoplay restrictions silently handled
  }
}

export default function OpeningSequence({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotionPref();
  const [beat, setBeat] = useState(reduced ? 4 : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = TIMELINE.map(({ at, beat }) =>
      window.setTimeout(() => {
        setBeat(beat);
        if (beat === 2) playCinematicSound('flare');
      }, at)
    );
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  const portraitScale = beat < 2 ? 1.08 : 1.0;
  const portraitBlur  = beat < 2 ? 'blur(14px)' : 'blur(0px)';

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-black select-none"
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
      transition={{ duration: 0.9, ease: EASE }}
      role="dialog"
      aria-label="Opening titles"
    >
      {/* Background ambient light */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 50% at 50% 45%, rgba(229,19,43,0.3), transparent 70%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= 2 ? [0.2, 0.9, 0.6, 1] : 0 }}
        transition={{ duration: 1.4 }}
      />

      {/* Studio card (Beat 1) */}
      <AnimatePresence>
        {beat === 1 && (
          <motion.div
            key="studio"
            className="absolute inset-0 z-40 flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-sans text-xs font-semibold tracking-[0.5em] text-mist sm:text-sm uppercase"
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '0.6em', opacity: 1 }}
              transition={{ duration: 1.5, ease: EASE }}
            >
              {profile.originalLabel}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Portrait — clean fade-in at beat 2 */}
      <motion.div
        className="absolute inset-0 z-10 flex items-end justify-center"
        animate={{
          scale: portraitScale,
          filter: portraitBlur,
          opacity: beat >= 2 ? 1 : 0,
        }}
        transition={{ duration: 1.0, ease: EASE }}
      >
        <div className="relative h-full w-full max-w-[1000px] flex items-end justify-center">
          <img
            src={profile.portrait.src}
            srcSet={profile.portrait.srcSet}
            sizes="(max-width: 768px) 100vw, 1000px"
            alt={profile.portrait.alt}
            className="h-[75vh] w-auto max-w-none object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)]"
          />
        </div>
      </motion.div>

      {/* Static cinematic letterbox bars */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[6vh] bg-black z-20" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[6vh] bg-black z-20" />

      {/* Atmospheric cinema vignette */}
      <div aria-hidden className="absolute inset-0 z-[15] pointer-events-none bg-[radial-gradient(75%_65%_at_50%_40%,transparent_35%,rgba(0,0,0,0.85)_100%)]" />

      {/* Hero Title Reveal (Beat 3) */}
      <div className="absolute inset-0 z-[25] flex flex-col items-center justify-center px-4 text-center pointer-events-none">
        <motion.h1
          className="font-display leading-[0.82] text-bone drop-shadow-[0_8px_45px_rgba(0,0,0,0.9)]"
          style={{ fontSize: 'clamp(4.6rem, 20vw, 15rem)' }}
          initial={{ opacity: 0, scale: 1.4, filter: 'blur(20px)', letterSpacing: '0.4em' }}
          animate={
            beat >= 3
              ? { opacity: 1, scale: 1, filter: 'blur(0px)', letterSpacing: '0.04em', y: '-28vh' }
              : {}
          }
          transition={{ duration: 1.1, ease: EASE }}
        >
          {profile.firstName}
        </motion.h1>
        <motion.p
          className="font-sans text-sm font-bold text-crimson-2 [text-shadow:0_2px_20px_rgba(0,0,0,0.9)] sm:text-lg tracking-[0.7em]"
          initial={{ opacity: 0, letterSpacing: '1.4em' }}
          animate={beat >= 3 ? { opacity: 1, letterSpacing: '0.7em', y: '-28vh' } : {}}
          transition={{ duration: 1.0, ease: EASE }}
        >
          {profile.seriesTag}
        </motion.p>
      </div>

      {/* Role + Play Button (Beat 4) */}
      <div className="absolute inset-x-0 bottom-[9vh] z-30 flex flex-col items-center gap-6 px-4 text-center">
        <motion.p
          className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-bone/90 sm:text-sm sm:tracking-[0.4em]"
          initial={{ opacity: 0, y: 14 }}
          animate={beat >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {profile.tagline.join('  •  ')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={beat >= 4 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onDone}
              tabIndex={beat >= 4 ? 0 : -1}
              className="group flex items-center gap-3 rounded-full bg-bone px-9 py-4 font-sans text-base font-bold tracking-wide text-ink shadow-[0_0_60px_rgba(229,19,43,0.55)] transition hover:bg-white active:scale-95"
            >
              <span className="text-lg transition-transform group-hover:scale-125">▶</span> PLAY INTRO
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Skip Button */}
      <button
        type="button"
        onClick={onDone}
        className="absolute right-4 top-[calc(6vh+12px)] z-40 rounded-full border border-white/20 px-4 py-2 font-sans text-[11px] font-semibold tracking-[0.2em] text-mist transition hover:border-white/60 hover:text-bone"
      >
        SKIP INTRO
      </button>
    </motion.div>
  );
}
