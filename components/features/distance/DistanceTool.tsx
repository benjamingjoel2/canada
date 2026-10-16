'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useId, useMemo, useState } from 'react';
import { places } from '@/data/places';
import type { Locale } from '@/data/types';
import { compareDistance, formatDuration, travelBetween } from '@/lib/travel';
import { tr } from '@/lib/l10n';
import { Italic } from '@/components/ui/Italic';
import { useEnquire } from '@/components/features/enquire/EnquireContext';

/**
 * "Bigger than you think". Distances are calculated from coordinates in /data/places.ts;
 * flight and drive times come from /data/travel-times.ts, or a stated rough formula.
 */
export function DistanceTool({
  preset,
  provinceNames,
  title,
  intro,
  dark = true,
}: {
  preset: [string, string];
  /** provinceId → localised name, for grouping the pickers */
  provinceNames: Record<string, string>;
  title?: string;
  intro?: string;
  dark?: boolean;
}) {
  const t = useTranslations('distance');
  const tn = useTranslations('nav');
  const locale = useLocale() as Locale;
  const { openEnquire } = useEnquire();
  const [from, setFrom] = useState(preset[0]);
  const [to, setTo] = useState(preset[1]);
  const uid = useId();

  const groups = useMemo(() => {
    const collator = new Intl.Collator(locale);
    return Object.entries(provinceNames).map(([id, name]) => ({
      id,
      name,
      places: places.filter((p) => p.provinceId === id).sort((a, b) => collator.compare(tr(a.name, locale), tr(b.name, locale))),
    }));
  }, [provinceNames, locale]);

  const result = from === to ? null : travelBetween(from, to);
  const comparison = result ? compareDistance(result.km, locale) : null;
  const nf = new Intl.NumberFormat(locale === 'fr' ? 'fr-CA' : 'en-CA');

  let comparisonText = '';
  if (comparison) {
    const a = tr(comparison.pair.a, locale);
    const b = tr(comparison.pair.b, locale);
    const r = comparison.ratio;
    if (r > 1.6) comparisonText = t('comparisonTimes', { times: nf.format(Math.round(r * 10) / 10), a, b });
    else if (Math.abs(r - 1) <= 0.12) comparisonText = t('comparisonSame', { a, b });
    else if (r > 1) comparisonText = t('comparisonFurther', { a, b });
    else comparisonText = t('comparisonShorter', { a, b });
  }

  const tone = dark
    ? { bg: 'bg-forest text-birch', sub: 'text-birch/65', line: 'border-birch/15', select: 'bg-forest-800 border-birch/25 text-birch', accent: 'text-lake-200' }
    : { bg: 'bg-birch text-forest', sub: 'text-granite', line: 'border-forest/15', select: 'bg-white border-forest/20 text-forest', accent: 'text-lake-700' };

  const picker = (label: string, value: string, set: (v: string) => void, idSuffix: string) => (
    <div className="flex-1">
      <label htmlFor={`${uid}-${idSuffix}`} className={clsx('eyebrow block', tone.sub)}>
        {label}
      </label>
      <select
        id={`${uid}-${idSuffix}`}
        value={value}
        onChange={(e) => set(e.target.value)}
        className={clsx('mt-2 w-full cursor-pointer rounded-sm border px-4 py-3.5 font-serif text-xl', tone.select)}
      >
        {groups.map((g) => (
          <optgroup key={g.id} label={g.name}>
            {g.places.map((p) => (
              <option key={p.id} value={p.id}>
                {tr(p.name, locale)}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );

  return (
    <section id="distance" aria-labelledby={`${uid}-title`} className={clsx('py-20 md:py-28', tone.bg)}>
      <div className="container-x">
        <div className="max-w-3xl">
          <h2 id={`${uid}-title`} className={clsx('text-4xl md:text-6xl', dark ? 'text-birch' : 'text-forest')}>
            <Italic text={title ?? t('title')} />
          </h2>
          <p className={clsx('mt-5 text-lg', tone.sub)}>{intro ?? t('intro')}</p>
        </div>

        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-end">
          {picker(t('from'), from, setFrom, 'from')}
          <button
            type="button"
            onClick={() => {
              setFrom(to);
              setTo(from);
            }}
            aria-label={t('swap')}
            className={clsx('grid h-12 w-12 shrink-0 place-items-center self-center rounded-full border transition-colors md:mb-1', tone.line, dark ? 'hover:bg-birch hover:text-forest' : 'hover:bg-forest hover:text-birch')}
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 rotate-90 md:rotate-0" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M4 8h15l-4-4M20 16H5l4 4" />
            </svg>
          </button>
          {picker(t('to'), to, setTo, 'to')}
        </div>

        <div aria-live="polite" className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${from}-${to}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {!result ? (
                <p className="font-serif text-2xl">{t('samePlace')}</p>
              ) : (
                <>
                  <dl className={clsx('grid gap-px overflow-hidden md:grid-cols-3', dark ? 'bg-birch/15' : 'bg-forest/15')}>
                    <div className={clsx('p-6 md:p-8', dark ? 'bg-forest' : 'bg-birch')}>
                      <dt className={clsx('eyebrow', tone.sub)}>{t('distance')}</dt>
                      <dd className="mt-3">
                        <span className="font-serif text-5xl md:text-6xl">{nf.format(result.km)}</span>
                        <span className="ml-2 text-lg">km</span>
                        <span className={clsx('mt-2 block text-sm', tone.sub)}>
                          {t('miles', { value: nf.format(Math.round(result.km * 0.621371)) })} · {t('asTheCrowFlies')}
                        </span>
                      </dd>
                    </div>
                    <div className={clsx('p-6 md:p-8', dark ? 'bg-forest' : 'bg-birch')}>
                      <dt className={clsx('eyebrow', tone.sub)}>✈ {t('flight')}</dt>
                      <dd className="mt-3">
                        <span className="font-serif text-4xl md:text-5xl">{formatDuration(result.flightMins, locale)}</span>
                        <span className={clsx('mt-2 block text-sm', tone.sub)}>
                          {result.flightIsFormula ? t('rough') : t('estimate')}
                          {result.flightNote && <> · {tr(result.flightNote, locale)}</>}
                        </span>
                      </dd>
                    </div>
                    <div className={clsx('p-6 md:p-8', dark ? 'bg-forest' : 'bg-birch')}>
                      <dt className={clsx('eyebrow', tone.sub)}>🚗 {t('drive')}</dt>
                      <dd className="mt-3">
                        {result.driveMins === undefined ? (
                          <span className="font-serif text-3xl md:text-4xl">{t('noRoad')}</span>
                        ) : (
                          <span className="font-serif text-4xl md:text-5xl">{formatDuration(result.driveMins, locale)}</span>
                        )}
                        <span className={clsx('mt-2 block text-sm', tone.sub)}>
                          {result.driveMins !== undefined && (result.driveIsFormula ? t('rough') : t('estimate'))}
                          {result.driveMins !== undefined && result.driveNote && ' · '}
                          {result.driveNote && tr(result.driveNote, locale)}
                        </span>
                      </dd>
                    </div>
                  </dl>
                  {comparisonText && (
                    <p className="mt-10 max-w-3xl font-serif text-3xl leading-snug md:text-4xl">
                      <em className="font-light">{comparisonText}</em>
                    </p>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={clsx('mt-12 flex flex-col gap-6 border-t pt-8 md:flex-row md:items-center md:justify-between', tone.line)}>
          <div>
            <p className="font-serif text-2xl">{t('footer')}</p>
            <p className={clsx('mt-2 text-xs', tone.sub)}>{t('disclaimer')}</p>
          </div>
          <button
            type="button"
            onClick={() =>
              openEnquire({
                topic: result ? `${tr(result.from.name, locale)} → ${tr(result.to.name, locale)}` : undefined,
              })
            }
            className={clsx(
              'shrink-0 rounded-full px-6 py-3 text-sm font-medium transition-colors',
              dark ? 'bg-birch text-forest hover:bg-white' : 'bg-forest text-birch hover:bg-forest-700',
            )}
          >
            {tn('enquire')}
          </button>
        </div>
      </div>
    </section>
  );
}
