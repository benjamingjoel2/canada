'use client';

import { useTranslations } from 'next-intl';
import type { Locale, Place } from '@/data/types';
import { tr, intlLocale } from '@/lib/l10n';
import { haversineKm } from '@/lib/geo';

/**
 * The route as a numbered list of stops beside a small stats card.
 * Owner rule: no map illustrations, so there is no drawn schematic.
 */
export function RouteMap({ places, locale, label }: { places: Place[]; locale: Locale; label: string }) {
  const t = useTranslations('journey');

  if (places.length < 2) return null;
  const km = Math.round(places.slice(1).reduce((sum, p, i) => sum + haversineKm([places[i].lat, places[i].lng], [p.lat, p.lng]), 0));
  const nf = new Intl.NumberFormat(intlLocale(locale));

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <ol aria-label={label} className="grid content-start gap-px bg-birch p-4 sm:grid-cols-2 md:p-6 lg:col-span-9">
        {places.map((p, i) => (
          <li key={`${p.id}-${i}`} className="flex items-baseline gap-4 border-b border-forest/10 py-3">
            <span className="meta w-6 shrink-0 tabular-nums text-forest/60">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-lg text-ink">{tr(p.name, locale)}</span>
          </li>
        ))}
      </ol>
      <dl className="flex flex-col justify-between gap-6 bg-forest p-6 text-birch md:p-8 lg:col-span-3">
        <div>
          <dt className="eyebrow text-lake-200">{t('routeTotal')}</dt>
          <dd className="mt-2 font-serif text-5xl">
            {nf.format(km)} <span className="text-lg">km</span>
          </dd>
        </div>
        <div>
          <dt className="sr-only">{t('specStops')}</dt>
          <dd className="meta text-birch/70">{t('routeStops', { count: places.length })}</dd>
        </div>
      </dl>
    </div>
  );
}
