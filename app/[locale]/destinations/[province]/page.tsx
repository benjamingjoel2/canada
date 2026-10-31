import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import type { Province } from '@/data/types';
import { faqs } from '@/data/faq';
import { getProvince, journeysInProvince, provinces, regionsOf, staysInProvince } from '@/lib/content';
import { calendarEvents } from '@/lib/calendar';
import { asLocale, tr } from '@/lib/l10n';
import { pageMetadata } from '@/lib/seo';
import { setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Carousel } from '@/components/ui/Carousel';
import { RegionCard } from '@/components/sections/RegionCard';
import { JourneyCard } from '@/components/sections/JourneyCard';
import { StayCard } from '@/components/sections/StayCard';
import { EnquireBand } from '@/components/sections/EnquireBand';
import { FaqSection } from '@/components/sections/FaqSection';
import { DistanceSection } from '@/components/features/distance/DistanceSection';
import { WildCalendar } from '@/components/features/calendar/WildCalendar';
import { Italic } from '@/components/ui/Italic';

type Params = { params: Promise<{ locale: string; province: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => provinces.map((p) => ({ locale, province: p.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, province } = await params;
  const p = getProvince(province);
  if (!p) return {};
  return pageMetadata({ locale, path: `/destinations/${p.slug}`, title: tr(p.name, locale), description: tr(p.intro, locale) });
}

export default async function ProvincePage({ params }: Params) {
  const { locale: raw, province } = await params;
  setRequestLocale(raw);
  const locale = asLocale(raw);
  const p = getProvince(province) as Province | undefined;
  if (!p) notFound();
  const t = await getTranslations({ locale, namespace: 'province' });
  const tn = await getTranslations({ locale, namespace: 'nav' });
  const tp = await getTranslations({ locale, namespace: 'prefs' });
  const tcal = await getTranslations({ locale, namespace: 'calendar' });
  const name = tr(p.name, locale);
  const regions = regionsOf(p.id);
  const journeys = journeysInProvince(p.id);
  const stays = staysInProvince(p.id);
  const events = calendarEvents(locale).filter((e) => e.provinceIds.includes(p.id));
  const provinceFaqs = (p.faqIds ?? []).map((id) => faqs.find((f) => f.id === id)).filter((f) => f !== undefined);

  return (
    <>
      <PageHero
        seasonal={p.hero}
        title={name}
        intro={tr(p.tagline, locale)}
        locale={locale}
        crumbs={[{ href: '/destinations', label: tn('destinations') }]}
      />

      {/* The honest pitch */}
      <section className="container-x grid gap-12 py-16 md:py-28 lg:grid-cols-12">
        <p className="font-serif text-2xl leading-snug text-forest md:text-3xl lg:col-span-6">{tr(p.intro, locale)}</p>
        <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-6">
          <div className="border-t-2 border-lake pt-5">
            <dt className="eyebrow text-lake-700">{t('bestAt')}</dt>
            <dd className="mt-3 leading-relaxed text-ink">{tr(p.pitch.bestAt, locale)}</dd>
          </div>
          <div className="border-t-2 border-granite-300 pt-5">
            <dt className="eyebrow text-granite">{t('notFor')}</dt>
            <dd className="mt-3 leading-relaxed text-ink">{tr(p.pitch.notFor, locale)}</dd>
          </div>
        </dl>
      </section>

      {/* Summer and winter highlights */}
      <section className="bg-birch py-16 md:py-28">
        <div className="container-x">
          <h2 className="text-3xl text-forest md:text-5xl">
            <Italic text={`${t('highlights')}: *${locale === 'de' ? tp('summer') : tp('summer').toLowerCase()}* & *${locale === 'de' ? tp('winter') : tp('winter').toLowerCase()}*`} />
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {(['summer', 'winter'] as const).map((s) => (
              <div key={s} className="bg-birch-50 p-8">
                <h3 className="flex items-center gap-3 text-2xl text-forest">
                  <span aria-hidden>{s === 'summer' ? '☀' : '❄'}</span>
                  {t(s === 'summer' ? 'summerHighlights' : 'winterHighlights')}
                </h3>
                <ul className="mt-6 space-y-4">
                  {p.highlights[s].map((h, i) => (
                    <li key={i} className="flex gap-4 border-t border-forest/10 pt-4 text-ink">
                      <span aria-hidden className="font-serif text-lake-700 italic">0{i + 1}</span>
                      {tr(h, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions carousel */}
      <section className="container-x py-16 md:py-28">
        <SectionHeading title={t('regions', { name })} />
        <Carousel label={t('regions', { name }).replace(/\*/g, '')} itemClassName="w-[72%] sm:w-[40%] lg:w-[28%]">
          {regions.map((r) => (
            <RegionCard key={r.id} region={r} provinceSlug={p.slug} locale={locale} />
          ))}
        </Carousel>
      </section>

      {/* Distance tool, pre-set to this province */}
      <DistanceSection locale={locale} preset={p.distancePreset} title={t('distanceTitle', { name })} />

      {/* Wild Calendar slice */}
      {events.length > 0 && (
        <section className="container-x py-16 md:py-28">
          <SectionHeading title={tcal('sliceTitle', { name })} intro={tcal('verifyNote')} />
          <div className="mt-8">
            <WildCalendar events={events} showFilters={false} />
          </div>
        </section>
      )}

      {journeys.length > 0 && (
        <section className="bg-forest py-16 text-birch md:py-24">
          <div className="container-x">
            <SectionHeading title={t('journeys', { name })} light />
            <Carousel label={t('journeys', { name }).replace(/\*/g, '')} light>
              {journeys.map((j) => (
                <JourneyCard key={j.id} journey={j} locale={locale} light />
              ))}
            </Carousel>
          </div>
        </section>
      )}

      {stays.length > 0 && (
        <section className="container-x py-16 md:py-28">
          <SectionHeading title={t('stays')} />
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {stays.map((s) => (
              <StayCard key={s.id} stay={s} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {provinceFaqs.length > 0 && <FaqSection locale={locale} faqs={provinceFaqs} />}
      <EnquireBand locale={locale} prefill={{ topic: name }} />
    </>
  );
}
