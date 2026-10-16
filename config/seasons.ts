import type { Season } from '@/data/types';

/**
 * Northern Hemisphere seasons for the site-wide switch.
 * Months are 1–12. Shoulder months are assigned to the trip they feel like:
 * October is still a summer-trip month (larches, bears, fall colour),
 * November is the start of the winter trip (polar bears, aurora, snow).
 */
export const summerMonths = [5, 6, 7, 8, 9, 10];

export function seasonForMonth(month: number): Season {
  return summerMonths.includes(month) ? 'summer' : 'winter';
}

export const SEASON_COOKIE = 'ctc-season';
export const CURRENCY_COOKIE = 'ctc-currency';
