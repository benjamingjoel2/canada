import type { L, Locale } from '@/data/types';

/** Pick the right language from a bilingual field. */
export function tr(value: L, locale: Locale | string): string {
  return locale === 'fr' ? value.fr : value.en;
}

/** Strip *italic* markers, for plain-text contexts (meta tags, alt text, PDFs). */
export function plain(text: string): string {
  return text.replace(/\*/g, '');
}

export function asLocale(value: string): Locale {
  return value === 'fr' ? 'fr' : 'en';
}

/** Itinerary day labels are stored as "Days 1–3" / "Day 4"; localise them for French. */
export function dayLabel(label: string, locale: Locale | string): string {
  if (locale !== 'fr') return label;
  return label.replace(/^Days\b/, 'Jours').replace(/^Day\b/, 'Jour');
}
