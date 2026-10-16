'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useEffect, useState, type ReactNode } from 'react';

/** Season filter for the journeys list. Reads ?season= on mount so header links can deep-link. */
export function JourneyGrid({ items }: { items: { id: string; seasons: string[]; node: ReactNode }[] }) {
  const t = useTranslations('journey');
  const [season, setSeason] = useState<'all' | 'summer' | 'winter'>('all');

  // Static page: the filter can only be read from the URL after hydration.
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get('season');
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-off read of the URL after hydration
    if (s === 'summer' || s === 'winter') setSeason(s);
  }, []);

  const choose = (s: typeof season) => {
    setSeason(s);
    const url = new URL(window.location.href);
    if (s === 'all') url.searchParams.delete('season');
    else url.searchParams.set('season', s);
    window.history.replaceState(null, '', url);
  };

  const visible = items.filter((i) => season === 'all' || i.seasons.includes(season));
  return (
    <>
      <div role="group" aria-label={t('seasons')} className="flex flex-wrap gap-2">
        {(['all', 'summer', 'winter'] as const).map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={season === s}
            onClick={() => choose(s)}
            className={clsx(
              'rounded-full border px-5 py-2 text-sm transition-colors',
              season === s ? 'border-forest bg-forest text-birch' : 'border-forest/20 text-forest hover:border-forest',
            )}
          >
            {s === 'summer' ? '☀ ' : s === 'winter' ? '❄ ' : ''}
            {t(s === 'all' ? 'filterAll' : s === 'summer' ? 'filterSummer' : 'filterWinter')}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {visible.map((i) => (
          <div key={i.id}>{i.node}</div>
        ))}
      </div>
    </>
  );
}
