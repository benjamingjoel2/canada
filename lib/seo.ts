import type { Metadata } from 'next';
import { site } from '@/config/site';
import { routing } from '@/i18n/routing';
import { plain } from './l10n';

/** Page metadata with canonical + hreflang alternates for every locale. `path` has no locale prefix ('' for home). */
export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const clean = path === '/' ? '' : path;
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = `${site.url}/${l}${clean}`;
  languages['x-default'] = `${site.url}/${routing.defaultLocale}${clean}`;
  const t = plain(title);
  return {
    title: t,
    description: plain(description),
    alternates: { canonical: `${site.url}/${locale}${clean}`, languages },
    openGraph: {
      title: t,
      description: plain(description),
      url: `${site.url}/${locale}${clean}`,
      siteName: site.name,
      locale: ({ fr: 'fr_CA', de: 'de_DE', es: 'es_ES' } as Record<string, string>)[locale] ?? 'en_CA',
      type: 'website',
    },
  };
}
