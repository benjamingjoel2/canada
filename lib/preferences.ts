'use client';

import { useSyncExternalStore } from 'react';
import type { Season } from '@/data/types';
import { currencies, defaultCurrency, type Currency } from '@/config/currency';
import { CURRENCY_COOKIE, SEASON_COOKIE } from '@/config/seasons';

const listeners = new Set<() => void>();
const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};
const emit = () => listeners.forEach((fn) => fn());

function persist(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode — cookie still works */
  }
  document.cookie = `${key}=${value}; path=/; max-age=31536000; samesite=lax`;
}

// ── Season ───────────────────────────────────────────────────────────────────
// The inline script in the root layout sets <html data-season> before paint.

export function getSeason(): Season {
  return document.documentElement.dataset.season === 'winter' ? 'winter' : 'summer';
}

export function setSeason(season: Season) {
  document.documentElement.dataset.season = season;
  persist(SEASON_COOKIE, season);
  emit();
}

/** null on the server and during hydration; the season once mounted. */
export function useSeason(): Season | null {
  return useSyncExternalStore(subscribe, getSeason, () => null);
}

// ── Currency ─────────────────────────────────────────────────────────────────

export function getCurrency(): Currency {
  const c = document.documentElement.dataset.currency as Currency | undefined;
  return c && (currencies as readonly string[]).includes(c) ? c : defaultCurrency;
}

export function setCurrency(currency: Currency) {
  document.documentElement.dataset.currency = currency;
  persist(CURRENCY_COOKIE, currency);
  emit();
}

export function useCurrency(): Currency {
  return useSyncExternalStore(subscribe, getCurrency, () => defaultCurrency);
}
