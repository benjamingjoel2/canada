import { places } from '@/data/places';
import { travelTimes } from '@/data/travel-times';
import { worldPairs } from '@/data/world-pairs';
import type { L, Locale, Place, WorldPair } from '@/data/types';
import { haversineKm } from './geo';

export type TravelResult = {
  from: Place;
  to: Place;
  km: number;
  flightMins: number;
  /** true when no listed estimate exists and the time comes from the formula */
  flightIsFormula: boolean;
  flightNote?: L;
  driveMins?: number;
  driveIsFormula: boolean;
  driveNote?: L;
  noRoad: boolean;
};

const roundTo = (n: number, step: number) => Math.round(n / step) * step;

/** Rough flight time: cruise at ~750 km/h plus ~45 minutes of taxi, climb and descent. */
function formulaFlightMins(km: number) {
  return roundTo((km / 750) * 60 + 45, 15);
}

/** Rough driving time: roads wind (~1.3× straight line) at ~80 km/h average. */
function formulaDriveMins(km: number) {
  return roundTo(((km * 1.3) / 80) * 60, 15);
}

export function getPlace(id: string) {
  return places.find((p) => p.id === id);
}

export function travelBetween(fromId: string, toId: string): TravelResult | null {
  const from = getPlace(fromId);
  const to = getPlace(toId);
  if (!from || !to) return null;
  const km = Math.round(haversineKm([from.lat, from.lng], [to.lat, to.lng]));
  const listed = travelTimes.find(
    (t) => (t.from === fromId && t.to === toId) || (t.from === toId && t.to === fromId),
  );
  const noRoad = !from.roadAccess || !to.roadAccess;
  const driveMins = noRoad ? undefined : (listed?.driveMins ?? formulaDriveMins(km));
  return {
    from,
    to,
    km,
    flightMins: listed?.flightMins ?? formulaFlightMins(km),
    flightIsFormula: listed?.flightMins === undefined,
    flightNote: listed?.flightNote,
    driveMins,
    driveIsFormula: !noRoad && listed?.driveMins === undefined,
    driveNote: listed?.driveNote,
    noRoad,
  };
}

export type Comparison = { pair: WorldPair; pairKm: number; ratio: number };

/** The world city pair whose distance is closest to `km`, favouring the reader's part of the world. */
export function compareDistance(km: number, locale: Locale): Comparison | null {
  if (km < 50) return null;
  const preferred = locale !== 'en' ? ['europe'] : ['europe', 'global', 'americas', 'oceania'];
  let best: Comparison | null = null;
  let bestScore = Infinity;
  for (const pair of worldPairs) {
    const pairKm = haversineKm(pair.aCoords, pair.bCoords);
    const ratio = km / pairKm;
    let score = Math.abs(Math.log(ratio));
    if (pair.audience && !preferred.includes(pair.audience)) score += 0.25;
    if (score < bestScore) {
      bestScore = score;
      best = { pair, pairKm: Math.round(pairKm), ratio };
    }
  }
  return best;
}

export function formatDuration(mins: number, locale: Locale): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (locale !== 'en') return h ? `${h} h${m ? ` ${String(m).padStart(2, '0')}` : ''}` : `${m} min`;
  return h ? `${h} hr${h > 1 ? 's' : ''}${m ? ` ${m} min` : ''}` : `${m} min`;
}
