import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getProvince, getRegion, journeysInRegion, provinces, regionsOf, staysInRegion } from '@/lib/content';
import { calendarEvents } from '@/lib/calendar';
import { asLocale, tr } from '@/lib/l10n';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Carousel } from '@/components/ui/Carousel';
import { RegionCard } from '@/components/sections/RegionCard';
import { JourneyCard } from '@/components/sections/JourneyCard';
import { StayCard } from '@/components/sections/StayCard';
import { EnquireBand } from '@/components/sections/EnquireBand';
import { WildCalendar } from '@/components/features/calendar/WildCalendar';

type Params = { params: Promise<{ locale: string; province: string; region: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    provinces.flatMap((p) => regionsOf(p.id).map((r) => ({ locale, province: p.slug, region: r.slug }))),
  );
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, province, region } = await params;
  const p = getProvince(province);
  const r = getRegion(region);
  if (!p || !r) return {};
  return pageMetadata({
    locale,
    path: `/destinations/${p.slug}/${r.slug}`,
    title: `${tr(r.name, locale)}, ${tr(p.name, locale)}`,
    description: tr(r.summary, locale),
  });
}

export default async function RegionPage({ params }: Params) {
  const { locale: raw, province, region } = await params;
  setRequestLocale(raw);
  const locale = asLocale(raw);
  const p = getProvince(province);
  const r = getRegion(region);
  if (!p || !r || r.provinceId !== p.id) notFound();
  const t = await getTranslations({ locale, namespace: 'region' });
  const tp = await getTranslations({ locale, namespace: 'province' });
  const tn = await getTranslations({ locale, namespace: 'nav' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  const months: string[] = tc.raw('months');
  const pName = tr(p.name, locale);
  const rName = tr(r.name, locale);
  const events = calendarEvents(locale).filter((e) => e.regionIds.includes(r.id));
  const journeys = journeysInRegion(r.id);
  const stays = staysInRegion(r.id);
  const siblings = regionsOf(p.id).filter((x) => x.id !== r.id);

  return (
    <>
      <PageHero
        seasonal={r.images}
        eyebrow={t('inProvince', { name: pName })}
        title={rName}
        intro={tr(r.summary, locale)}
        locale={locale}
        crumbs={[
          { href: '/destinations', label: tn('destinations') },
          { href: `/destinations/${p.slug}`, label: pName },
        ]}
      />
      <section className="container-x grid gap-12 py-16 md:py-28 lg:grid-cols-12">
        <div className="prose-ctc lg:col-span-7">
          <p className="font-serif text-2xl leading-snug text-forest">{tr(r.body, locale)}</p>
        </div>
        <aside className="lg:col-span-5">
          <p className="eyebrow text-lake-700">{tc('bestMonths')}</p>
          <p className="mt-2 text-lg text-forest">{r.bestMonths.map((m) => months[m - 1]).join(', ')}</p>
          <div className="mt-8 grid gap-6">
            {(['summer', 'winter'] as const).map((s) => (
              <div key={s} className="border-t border-forest/15 pt-5">
                <h2 className="text-xl text-forest">
                  <span aria-hidden>{s === 'summer' ? '☀ ' : '❄ '}</span>
                  {tp(s === 'summer' ? 'summerHighlights' : 'winterHighlights')}
                </h2>
                <ul className="mt-3 space-y-2 text-ink">
                  {r.highlights[s].map((h, i) => (
                    <li key={i}>— {tr(h, locale)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {events.length > 0 && (
        <section className="container-x pb-16 md:pb-24">
          <SectionHeading title={t('events')} />
          <div className="mt-6">
            <WildCalendar events={events} showFilters={false} />
          </div>
        </section>
      )}

      {journeys.length > 0 && (
        <section className="bg-forest py-16 text-birch md:py-24">
          <div className="container-x">
            <SectionHeading title={tp('journeys', { name: rName })} light />
            <Carousel label={tp('journeys', { name: rName }).replace(/\*/g, '')} light>
              {journeys.map((j) => (
                <JourneyCard key={j.id} journey={j} locale={locale} light />
              ))}
            </Carousel>
          </div>
        </section>
      )}

      {stays.length > 0 && (
        <section className="container-x py-16 md:py-28">
          <SectionHeading title={tp('stays')} />
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {stays.map((s) => (
              <StayCard key={s.id} stay={s} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <section className="bg-birch py-16 md:py-28">
          <div className="container-x">
            <SectionHeading title={t('otherRegions', { name: pName })} />
            <Carousel label={t('otherRegions', { name: pName }).replace(/\*/g, '')} itemClassName="w-[72%] sm:w-[40%] lg:w-[28%]">
              {siblings.map((x) => (
                <RegionCard key={x.id} region={x} provinceSlug={p.slug} locale={locale} />
              ))}
            </Carousel>
          </div>
        </section>
      )}
      <EnquireBand locale={locale} prefill={{ topic: `${rName}, ${pName}` }} />
    </>
  );
}
