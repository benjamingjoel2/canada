'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from '@/i18n/navigation';
import type { Area, WildEventType } from '@/data/types';
import { useEnquire } from '@/components/features/enquire/EnquireContext';

export type CalendarEvent = {
  id: string;
  title: string;
  summary: string;
  type: WildEventType;
  months: number[];
  peak: number[];
  areas: Area[];
  provinceIds: string[];
  regionIds: string[];
  places: string;
  journeys: { slug: string; title: string }[];
};

const typeColour: Record<WildEventType, { possible: string; peak: string; dot: string }> = {
  wildlife: { possible: 'bg-lake/35', peak: 'bg-lake-700', dot: 'bg-lake-700' },
  light: { possible: 'bg-[#6a7fb0]/35', peak: 'bg-[#34497d]', dot: 'bg-[#34497d]' },
  landscape: { possible: 'bg-[#d3954f]/40', peak: 'bg-[#a8602a]', dot: 'bg-[#a8602a]' },
};

const noop = () => () => {};

/** Month ranges like "Sep–Nov", handling year wrap (e.g. Aug–Apr). */
function ranges(months: number[], short: string[]) {
  if (!months.length) return '';
  const set = new Set(months);
  if (set.size === 12) return `${short[0]}–${short[11]}`;
  const out: string[] = [];
  // start at a month whose previous month is not included
  const start = [...set].find((m) => !set.has(((m + 10) % 12) + 1)) ?? months[0];
  let run: number[] = [];
  for (let i = 0; i < 12; i++) {
    const m = ((start - 1 + i) % 12) + 1;
    if (set.has(m)) run.push(m);
    else if (run.length) {
      out.push(run.length === 1 ? short[run[0] - 1] : `${short[run[0] - 1]}–${short[run[run.length - 1] - 1]}`);
      run = [];
    }
  }
  if (run.length) out.push(run.length === 1 ? short[run[0] - 1] : `${short[run[0] - 1]}–${short[run[run.length - 1] - 1]}`);
  return out.join(', ');
}

/**
 * The Wild Calendar: a month-by-month view of natural events, filterable by area and type.
 * Filters are mirrored in the URL (?area=north&type=light) so a view can be shared.
 */
export function WildCalendar({
  events,
  fixedProvince,
  showFilters = true,
}: {
  events: CalendarEvent[];
  fixedProvince?: string;
  showFilters?: boolean;
}) {
  const t = useTranslations('calendar');
  const tc = useTranslations('common');
  const { openEnquire } = useEnquire();
  const short: string[] = tc.raw('monthsShort');
  const long: string[] = tc.raw('months');
  const [area, setArea] = useState<Area | 'all'>('all');
  const [type, setType] = useState<WildEventType | 'all'>('all');
  const [open, setOpen] = useState<string | null>(null);
  const month = useSyncExternalStore(noop, () => new Date().getMonth() + 1, () => 0);

  // Read filters (and an #event hash) from the URL once mounted.
  useEffect(() => {
    if (!showFilters) return;
    const p = new URLSearchParams(window.location.search);
    const a = p.get('area');
    const ty = p.get('type');
    if (a === 'west' || a === 'north' || a === 'east') setArea(a);
    if (ty === 'wildlife' || ty === 'light' || ty === 'landscape') setType(ty);
    const hash = window.location.hash.slice(1);
    if (hash && events.some((e) => e.id === hash)) {
      setOpen(hash);
      setTimeout(() => document.getElementById(`ev-${hash}`)?.scrollIntoView({ block: 'center' }), 100);
    }
  }, [events, showFilters]);

  useEffect(() => {
    if (!showFilters) return;
    const p = new URLSearchParams(window.location.search);
    if (area === 'all') p.delete('area');
    else p.set('area', area);
    if (type === 'all') p.delete('type');
    else p.set('type', type);
    const qs = p.toString();
    window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`);
  }, [area, type, showFilters]);

  const visible = useMemo(
    () =>
      events
        .filter((e) => (fixedProvince ? e.provinceIds.includes(fixedProvince) : true))
        .filter((e) => area === 'all' || e.areas.includes(area))
        .filter((e) => type === 'all' || e.type === type)
        .sort((a, b) => (a.peak[0] ?? a.months[0]) - (b.peak[0] ?? b.months[0])),
    [events, fixedProvince, area, type],
  );

  const chip = (active: boolean) =>
    clsx(
      'rounded-full border px-4 py-2 text-sm transition-colors',
      active ? 'border-forest bg-forest text-birch' : 'border-forest/20 text-forest hover:border-forest',
    );

  return (
    <div>
      {showFilters && (
        <div className="flex flex-col gap-6 border-b border-forest/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div role="group" aria-label={t('filterRegion')} className="flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-2 text-granite">{t('filterRegion')}</span>
            {(['all', 'west', 'north', 'east'] as const).map((a) => (
              <button key={a} type="button" aria-pressed={area === a} className={chip(area === a)} onClick={() => setArea(a)}>
                {a === 'all' ? t('allRegions') : t(a)}
              </button>
            ))}
          </div>
          <div role="group" aria-label={t('filterType')} className="flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-2 text-granite">{t('filterType')}</span>
            {(['all', 'wildlife', 'light', 'landscape'] as const).map((ty) => (
              <button key={ty} type="button" aria-pressed={type === ty} className={chip(type === ty)} onClick={() => setType(ty)}>
                {ty !== 'all' && <span aria-hidden className={clsx('mr-2 inline-block h-2 w-2 rounded-full', typeColour[ty].dot)} />}
                {ty === 'all' ? t('all') : t(ty)}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="mt-6 text-sm text-granite" aria-live="polite">
        {t('eventCount', { count: visible.length })} · {t('verifyNote')}
      </p>

      {/* Month header (desktop) */}
      <div className="mt-6 hidden grid-cols-[minmax(220px,1.4fr)_repeat(12,minmax(0,1fr))] gap-px md:grid" aria-hidden>
        <div />
        {short.map((m, i) => (
          <div
            key={m}
            className={clsx('pb-2 text-center text-xs tracking-wider uppercase', month === i + 1 ? 'font-semibold text-maple' : 'text-granite')}
          >
            {m}
          </div>
        ))}
      </div>

      <ul className="border-t border-forest/10">
        {visible.map((e) => {
          const isOpen = open === e.id;
          const c = typeColour[e.type];
          return (
            <li key={e.id} id={`ev-${e.id}`} className="scroll-mt-32 border-b border-forest/10">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`ev-panel-${e.id}`}
                onClick={() => setOpen(isOpen ? null : e.id)}
                className="grid w-full grid-cols-1 items-center gap-3 py-4 text-left md:grid-cols-[minmax(220px,1.4fr)_repeat(12,minmax(0,1fr))] md:gap-px"
              >
                <span className="pr-4">
                  <span className="flex items-center gap-2">
                    <span aria-hidden className={clsx('h-2 w-2 shrink-0 rounded-full', c.dot)} />
                    <span className="font-serif text-lg leading-tight text-forest">{e.title}</span>
                  </span>
                  <span className="mt-1 block pl-4 text-xs text-granite">{e.places}</span>
                </span>
                {/* Month cells */}
                <span className="contents">
                  <span className="grid grid-cols-12 gap-px md:contents">
                    {Array.from({ length: 12 }, (_, i) => {
                      const m = i + 1;
                      const peak = e.peak.includes(m);
                      const possible = e.months.includes(m);
                      return (
                        <span
                          key={m}
                          aria-hidden
                          className={clsx(
                            'h-3 md:h-6',
                            peak ? c.peak : possible ? c.possible : 'bg-forest/[0.04]',
                            month === m && 'ring-1 ring-maple ring-inset',
                          )}
                        />
                      );
                    })}
                  </span>
                </span>
                <span className="sr-only">
                  {t('peak')}: {ranges(e.peak, long)}. {t('possible')}: {ranges(e.months, long)}.
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`ev-panel-${e.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 pb-8 md:grid-cols-[minmax(220px,1.4fr)_1fr] md:pl-4">
                      <div className="space-y-3 text-sm">
                        <p>
                          <span className="eyebrow text-lake-700">{t('peak')}</span>{' '}
                          <span className="text-forest">{ranges(e.peak, short) || '—'}</span>
                        </p>
                        <p>
                          <span className="eyebrow text-granite">{t('possible')}</span>{' '}
                          <span className="text-forest">{ranges(e.months, short)}</span>
                        </p>
                        <span className="inline-block rounded-full bg-birch-200 px-2.5 py-1 text-[10px] tracking-wider text-forest uppercase">
                          {tc('verifyYearly')}
                        </span>
                      </div>
                      <div>
                        <p className="max-w-2xl leading-relaxed text-ink">{e.summary}</p>
                        <p className="eyebrow mt-5 text-granite">{t('journeysWith')}</p>
                        {e.journeys.length ? (
                          <ul className="mt-2 flex flex-wrap gap-2">
                            {e.journeys.map((j) => (
                              <li key={j.slug}>
                                <Link
                                  href={`/journeys/${j.slug}`}
                                  className="inline-block rounded-full border border-forest/20 px-3 py-1 text-sm text-forest hover:border-forest"
                                >
                                  {j.title.replace(/\*/g, '')}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-2 text-sm text-granite">{t('noJourneys')}</p>
                        )}
                        <button
                          type="button"
                          onClick={() => openEnquire({ topic: e.title })}
                          className="mt-5 text-sm font-medium text-lake-700 underline underline-offset-4"
                        >
                          {t('enquireAbout')}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
        {visible.length === 0 && <li className="py-10 text-granite">{t('noResults')}</li>}
      </ul>

      <div className="mt-6 flex flex-wrap gap-6 text-xs text-granite" aria-hidden>
        <span className="flex items-center gap-2"><span className="h-3 w-6 bg-lake-700" /> {t('peak')}</span>
        <span className="flex items-center gap-2"><span className="h-3 w-6 bg-lake/35" /> {t('possible')}</span>
        <span className="flex items-center gap-2"><span className="h-3 w-6 ring-1 ring-maple ring-inset" /> {t('thisMonth')}</span>
      </div>
    </div>
  );
}
