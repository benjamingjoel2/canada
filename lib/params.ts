import { setRequestLocale } from 'next-intl/server';
import { asLocale } from './l10n';

/** Reads and registers the locale for static rendering. */
export async function pageLocale(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  setRequestLocale(locale);
  return asLocale(locale);
}

export type LocaleParams = { params: Promise<{ locale: string }> };
