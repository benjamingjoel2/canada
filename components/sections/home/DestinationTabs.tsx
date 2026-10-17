import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { provinces, regionsOf } from '@/lib/content';
import { tr } from '@/lib/l10n';
import { Tabs } from '@/components/ui/Tabs';
import { Carousel } from '@/components/ui/Carousel';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import { RegionCard } from '@/components/sections/RegionCard';

/** Reference: tabbed destinations, each with its own region carousel. */
export async function DestinationTabs({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  const tp = await getTranslations({ locale, namespace: 'province' });
  return (
    <section className="bg-birch section-y">
      <div className="container-x">
        <SectionHeading title={t('destinationsTitle')} intro={t('destinationsIntro')} />
        <Tabs
          className="mt-12"
          label={t('destinationsTitle').replace(/\*/g, '')}
          items={provinces.map((p) => ({
            id: p.id,
            label: tr(p.name, locale),
            panel: (
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-serif text-2xl leading-snug text-forest">{tr(p.tagline, locale)}</p>
                  <p className="mt-4 leading-relaxed text-granite">{tr(p.intro, locale)}</p>
                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="eyebrow text-lake-700">{tp('bestAt')}</dt>
                      <dd className="mt-1 text-ink">{tr(p.pitch.bestAt, locale)}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-granite">{tp('notFor')}</dt>
                      <dd className="mt-1 text-ink">{tr(p.pitch.notFor, locale)}</dd>
                    </div>
                  </dl>
                  <ButtonLink arrow href={`/destinations/${p.slug}`} variant="outline" className="mt-8">
                    {tc('exploreMore')}
                  </ButtonLink>
                </div>
                <div className="min-w-0 lg:col-span-8">
                  <Carousel label={tp('regions', { name: tr(p.name, locale) }).replace(/\*/g, '')} itemClassName="w-[70%] sm:w-[42%] lg:w-[36%]">
                    {regionsOf(p.id).map((r) => (
                      <RegionCard key={r.id} region={r} provinceSlug={p.slug} locale={locale} />
                    ))}
                  </Carousel>
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}
