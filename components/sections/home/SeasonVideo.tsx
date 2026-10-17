'use client';

import { useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useSeason } from '@/lib/preferences';
import type { Season } from '@/data/types';

/**
 * Only mounts the film for the active season, so the other one is never downloaded.
 * Has a visible pause control (WCAG 2.2.2) and doesn't autoplay for reduced motion.
 */
export function SeasonVideo({ season, src, pauseLabel, playLabel }: { season: Season; src: string; pauseLabel: string; playLabel: string }) {
  const active = useSeason();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(!reduce);
  if (active !== season) return null;
  return (
    <>
      <video ref={ref} className="absolute inset-0 h-full w-full object-cover" src={src} autoPlay={!reduce} muted loop playsInline aria-hidden />
      <button
        type="button"
        onClick={() => {
          const v = ref.current;
          if (!v) return;
          if (v.paused) {
            void v.play();
            setPlaying(true);
          } else {
            v.pause();
            setPlaying(false);
          }
        }}
        aria-label={playing ? pauseLabel : playLabel}
        className="absolute top-6 right-6 z-10 grid h-11 w-11 place-items-center rounded-full border border-birch/50 text-birch backdrop-blur hover:bg-birch hover:text-forest"
      >
        {playing ? (
          <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor"><path d="M2 1h3v10H2zM7 1h3v10H7z" /></svg>
        ) : (
          <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor"><path d="M2 1l9 5-9 5z" /></svg>
        )}
      </button>
    </>
  );
}
