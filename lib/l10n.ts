import type { L, Locale } from '@/data/types';

/** Pick the right language from a bilingual field. */
export function tr(value: L, locale: Locale | string): string {
  return (value as Record<string, string>)[locale] ?? value.en;
}

/** Strip *italic* markers, for plain-text contexts (meta tags, alt text, PDFs). */
export function plain(text: string): string {
  return text.replace(/\*/g, '');
}

/** BCP 47 tag for Intl number/date formatting. */
export function intlLocale(locale: string): string {
  return ({ fr: 'fr-CA', de: 'de-DE', es: 'es-ES' } as Record<string, string>)[locale] ?? 'en-CA';
}

export function asLocale(value: string): Locale {
  return value === 'fr' || value === 'de' || value === 'es' ? value : 'en';
}

/** Itinerary day labels are stored as "Days 1–3" / "Day 4"; localise them for French. */
export function dayLabel(label: string, locale: Locale | string): string {
  if (locale === 'fr') return label.replace(/^Days\b/, 'Jours').replace(/^Day\b/, 'Jour');
  if (locale === 'de') return label.replace(/^Days?\b/, 'Tag');
  if (locale === 'es') return label.replace(/^Days\b/, 'Días').replace(/^Day\b/, 'Día');
  return label;
}
