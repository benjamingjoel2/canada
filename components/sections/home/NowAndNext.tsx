'use client';

import { useTranslations } from 'next-intl';
import { useSyncExternalStore } from 'react';
import { Link } from '@/i18n/navigation';

export type TeaserEvent = { id: string; title: string; summary: string; type: string; months: number[]; peak: number[] };

const noop = () => () => {};

export function NowAndNext({ events }: { events: TeaserEvent[] }) {
  const t = useTranslations('common');
  const tc = useTranslations('calendar');
  const month = useSyncExternalStore(noop, () => new Date().getMonth() + 1, () => null);
  const months: string[] = t.raw('months');

  if (month === null) return <div className="mt-12 min-h-64" aria-hidden />;

  const next = (month % 12) + 1;
  return (
    <div className="mt-12 grid gap-10 md:grid-cols-2">
      {[month, next].map((m, i) => {
        const list = events.filter((e) => e.months.includes(m)).sort((a, b) => Number(b.peak.includes(m)) - Number(a.peak.includes(m)));
        return (
          <div key={m}>
            <h3 className="flex items-baseline gap-3 border-b border-birch/15 pb-4 text-3xl text-birch">
              {months[m - 1]}
              {i === 0 && <span className="eyebrow font-sans text-lake-200">{tc('thisMonth')}</span>}
            </h3>
            <ul className="divide-y divide-birch/10">
              {list.slice(0, 5).map((e) => (
                <li key={e.id} className="py-4">
                  <Link href={`/wild-calendar#${e.id}`} className="group block">
                    <span className="flex items-center gap-3">
                      <span className="text-lg text-birch group-hover:text-lake-200">{e.title}</span>
                      {e.peak.includes(m) && (
                        <span className="rounded-full bg-lake/25 px-2 py-0.5 text-[10px] tracking-wider text-lake-200 uppercase">{tc('peak')}</span>
                      )}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-sm text-birch/65">{e.summary}</span>
                  </Link>
                </li>
              ))}
              {list.length === 0 && <li className="py-4 text-birch/60">—</li>}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
