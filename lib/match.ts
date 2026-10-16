import type { Area, Interest, Season, Specialist } from '@/data/types';

export type MatchAnswers = { area: Area | 'all'; season: Season; interests: Interest[] };

/**
 * Scores each specialist: region fit matters most, then what the traveller cares about,
 * then season. Ties go to the first specialist in /data/specialists.ts.
 */
export function scoreSpecialist(s: Pick<Specialist, 'areas' | 'interests' | 'seasons'>, a: MatchAnswers) {
  let score = 0;
  if (a.area === 'all') score += s.areas.includes('all') ? 6 : 1;
  else if (s.areas.includes(a.area)) score += 6;
  else if (s.areas.includes('all')) score += 2;
  for (const i of a.interests) score += s.interests[i] ?? 0;
  if (s.seasons.includes(a.season)) score += 1;
  return score;
}

export function bestMatch<T extends Pick<Specialist, 'areas' | 'interests' | 'seasons'>>(list: T[], a: MatchAnswers): T {
  return list.reduce((best, s) => (scoreSpecialist(s, a) > scoreSpecialist(best, a) ? s : best), list[0]);
}
