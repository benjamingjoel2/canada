import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { journeys, journeysBySeason } from '@/lib/content';
import { Carousel } from '@/components/ui/Carousel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { JourneyCard } from '@/components/sections/JourneyCard';
import { Link } from '@/i18n/navigation';

/**
 * Reference: dark journeys carousel. Ours orders journeys by the active season,
 * using CSS `order` keyed to <html data-season> (one render, no hydration flash).
 */
export async function JourneysCarousel({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const tp = await getTranslations({ locale, namespace: 'prefs' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  const summerOrder = journeysBySeason('summer').map((j) => j.id);
  const winterOrder = journeysBySeason('winter').map((j) => j.id);
  return (
    <section className="bg-forest py-20 text-birch md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading title={t('journeysTitle')} intro={t('journeysIntro')} light />
          <Link href="/journeys" className="link-underline shrink-0 self-start text-sm font-medium text-birch md:self-auto">
            {tc('viewAll')}
          </Link>
        </div>
        <p className="mt-10 mb-2 text-sm text-birch/60">
          <span className="summer-only">{t('journeysSeasonNote', { season: tp('summer').toLowerCase() })}</span>
          <span className="winter-only">{t('journeysSeasonNote', { season: tp('winter').toLowerCase() })}</span>
        </p>
        <Carousel
          label={t('journeysTitle').replace(/\*/g, '')}
          light
          seasonOrder={journeys.map((j) => ({ summer: summerOrder.indexOf(j.id), winter: winterOrder.indexOf(j.id) }))}
        >
          {journeys.map((j) => (
            <JourneyCard key={j.id} journey={j} locale={locale} light />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
