import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Journey, Locale } from '@/data/types';
import { tr } from '@/lib/l10n';
import { Italic } from '@/components/ui/Italic';
import { SeasonalPicture } from '@/components/ui/Picture';
import { Price } from '@/components/ui/Price';
import { Arrow } from '@/components/ui/Button';

export function SeasonBadges({ seasons, light = false }: { seasons: Journey['seasons']; light?: boolean }) {
  const t = useTranslations('prefs');
  return (
    <span className={clsx('flex gap-2 text-xs', light ? 'text-birch/80' : 'text-granite')}>
      {seasons.includes('summer') && <span title={t('summer')}>☀ {t('summer')}</span>}
      {seasons.includes('winter') && <span title={t('winter')}>❄ {t('winter')}</span>}
    </span>
  );
}

export function JourneyCard({ journey, locale, light = false }: { journey: Journey; locale: Locale; light?: boolean }) {
  const t = useTranslations('common');
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative overflow-hidden">
        <SeasonalPicture
          img={journey.images}
          locale={locale}
          className="aspect-[4/5] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(min-width:1024px) 30vw, 80vw"
        />
        {journey.isNew && (
          <span className="absolute top-4 left-4 rounded-full bg-birch px-3 py-1 text-[11px] font-medium tracking-[0.14em] text-forest uppercase">
            {t('new')}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-center justify-between gap-3">
          <p className={clsx('eyebrow', light ? 'text-lake-200' : 'text-lake-700')}>{t('days', { count: journey.days })}</p>
          <SeasonBadges seasons={journey.seasons} light={light} />
        </div>
        <h3 className={clsx('mt-3 text-2xl md:text-[1.7rem]', light ? 'text-birch' : 'text-forest')}>
          <Link href={`/journeys/${journey.slug}`} className="after:absolute after:inset-0">
            <Italic text={tr(journey.title, locale)} />
          </Link>
        </h3>
        <p className={clsx('mt-3 line-clamp-3 text-sm leading-relaxed', light ? 'text-birch/70' : 'text-granite')}>
          {tr(journey.summary, locale)}
        </p>
        <div className={clsx('mt-auto flex items-end justify-between pt-5 text-sm', light ? 'text-birch' : 'text-forest')}>
          <span>
            <span className={clsx('block text-xs', light ? 'text-birch/60' : 'text-granite')}>{t('from')}</span>
            <Price cad={journey.fromPerPersonCAD} className="font-medium" /> <span className="text-xs">{t('perPerson')}</span>
          </span>
          <span className="flex items-center gap-2 font-medium">
            {t('exploreMore')} <Arrow className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
