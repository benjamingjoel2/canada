'use client';

import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { currencies, type Currency } from '@/config/currency';
import { setCurrency, setSeason, useCurrency, useSeason } from '@/lib/preferences';
import { usePathname, useRouter } from '@/i18n/navigation';

/** ☀ Summer / ❄ Winter. Swaps hero films, featured journeys and imagery site-wide. */
export function SeasonSwitch({ light = false, compact = false, className }: { light?: boolean; compact?: boolean; className?: string }) {
  const t = useTranslations('prefs');
  const season = useSeason();
  const opts = [
    { id: 'summer' as const, icon: '☀', label: t('summer') },
    { id: 'winter' as const, icon: '❄', label: t('winter') },
  ];
  return (
    <div
      role="radiogroup"
      aria-label={`${t('season')}: ${t('seasonHint')}`}
      className={clsx(
        'relative inline-flex rounded-full border p-0.5 text-xs',
        light ? 'border-birch/30' : 'border-forest/20',
        className,
      )}
    >
      {opts.map((o) => {
        const active = season === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setSeason(o.id)}
            className={clsx(
              'flex items-center gap-1.5 rounded-full px-2.5 py-1.5 font-medium transition-colors duration-300',
              active
                ? light
                  ? 'bg-birch text-forest'
                  : 'bg-forest text-birch'
                : light
                  ? 'text-birch/80 hover:text-birch'
                  : 'text-forest/70 hover:text-forest',
              // Before hydration, mirror <html data-season> with CSS so the right pill shows immediately.
              season === null && (o.id === 'summer' ? 'season-pill-summer' : 'season-pill-winter'),
            )}
          >
            <span aria-hidden>{o.icon}</span>
            <span className={clsx(compact && 'sr-only min-[1400px]:not-sr-only')}>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

const names = { en: 'English', fr: 'Français', de: 'Deutsch', es: 'Español' } as const;

export function LocaleSwitch({ light = false, className }: { light?: boolean; className?: string }) {
  const t = useTranslations('prefs');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [pending, start] = useTransition();
  const go = (next: 'en' | 'fr' | 'de' | 'es') => {
    if (next === locale) return;
    start(() => {
      // @ts-expect-error -- params are always valid for the current route
      router.replace({ pathname, params }, { locale: next });
    });
  };
  return (
    <div role="group" aria-label={t('language')} className={clsx('flex items-center gap-1 text-xs font-medium', pending && 'opacity-60', className)}>
      {(['en', 'fr', 'de', 'es'] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden className={light ? 'text-birch/40' : 'text-forest/30'}>·</span>}
          <button
            type="button"
            lang={l}
            title={names[l]}
            aria-current={l === locale ? 'true' : undefined}
            onClick={() => go(l)}
            className={clsx(
              'px-1 py-1 uppercase tracking-wider',
              l === locale ? (light ? 'text-birch underline underline-offset-4' : 'text-forest underline underline-offset-4') : light ? 'text-birch/70 hover:text-birch' : 'text-forest/60 hover:text-forest',
            )}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

export function CurrencySwitch({ light = false, className }: { light?: boolean; className?: string }) {
  const t = useTranslations('prefs');
  const currency = useCurrency();
  return (
    <label className={clsx('flex items-center gap-2 text-xs', className)}>
      <span className="sr-only">{t('currency')}</span>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as Currency)}
        title={t('currencyNote')}
        className={clsx(
          'cursor-pointer rounded-sm border-0 bg-transparent py-1 pr-1 font-medium tracking-wider',
          light ? 'text-birch [&>option]:text-ink' : 'text-forest',
        )}
      >
        {currencies.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </label>
  );
}
