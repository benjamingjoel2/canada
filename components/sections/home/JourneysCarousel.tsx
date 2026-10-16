import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { journeysBySeason } from '@/lib/content';
import { Carousel } from '@/components/ui/Carousel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { JourneyCard } from '@/components/sections/JourneyCard';
import { Link } from '@/i18n/navigation';

/**
 * Reference: dark journeys carousel. Ours orders journeys by the active season:
 * both orders are rendered and the season switch shows one (no hydration flash).
 */
export async function JourneysCarousel({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const tp = await getTranslations({ locale, namespace: 'prefs' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return (
    <section className="bg-forest py-20 text-birch md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading title={t('journeysTitle')} intro={t('journeysIntro')} light />
          <Link href="/journeys" className="link-underline shrink-0 self-start text-sm font-medium text-birch md:self-auto">
            {tc('viewAll')}
          </Link>
        </div>
        {(['summer', 'winter'] as const).map((s) => (
          <div key={s} className={`${s}-only mt-10`}>
            <p className="mb-2 text-sm text-birch/60">{t('journeysSeasonNote', { season: tp(s).toLowerCase() })}</p>
            <Carousel label={t('journeysTitle').replace(/\*/g, '')} light>
              {journeysBySeason(s).map((j) => (
                <JourneyCard key={j.id} journey={j} locale={locale} light />
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </section>
  );
}
