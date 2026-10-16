'use client';

import { useSeason } from '@/lib/preferences';
import type { Season } from '@/data/types';

/** Only mounts the film for the active season, so the other one is never downloaded. */
export function SeasonVideo({ season, src }: { season: Season; src: string }) {
  const active = useSeason();
  if (active !== season) return null;
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden
    />
  );
}
