import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getEvent, getExperience, getSpecialist, getStay, journeys, getJourney } from '@/lib/content';
import { getPlace } from '@/lib/travel';
import { asLocale, dayLabel, plain, tr } from '@/lib/l10n';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/config/site';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { Carousel } from '@/components/ui/Carousel';
import { Italic } from '@/components/ui/Italic';
import { Price } from '@/components/ui/Price';
import { RouteMap } from '@/components/sections/RouteMap';
import { StayCard } from '@/components/sections/StayCard';
import { JourneyCard, SeasonBadges } from '@/components/sections/JourneyCard';
import { SpecialistCard } from '@/components/sections/SpecialistCard';
import { EnquireBand } from '@/components/sections/EnquireBand';
import { EnquireButton, ItineraryButton } from '@/components/features/enquire/EnquireButton';
import { Link } from '@/i18n/navigation';

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => journeys.map((j) => ({ locale, slug: j.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const j = getJourney(slug);
  if (!j) return {};
  return pageMetadata({ locale, path: `/journeys/${j.slug}`, title: tr(j.title, locale), description: tr(j.summary, locale) });
}

export default async function JourneyPage({ params }: Params) {
  const { locale: raw, slug } = await params;
  setRequestLocale(raw);
  const locale = asLocale(raw);
  const j = getJourney(slug);
  if (!j) notFound();
  const t = await getTranslations({ locale, namespace: 'journey' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  const tn = await getTranslations({ locale, namespace: 'nav' });
  const title = tr(j.title, locale);
  const places = j.route.map(getPlace).filter((p) => p !== undefined);
  const stays = j.stayIds.map(getStay).filter((s) => s !== undefined);
  const events = j.eventIds.map(getEvent).filter((e) => e !== undefined);
  const experiences = j.experienceIds.map(getExperience).filter((e) => e !== undefined);
  const specialist = getSpecialist(j.specialistId);
  const related = journeys.filter((x) => x.id !== j.id && x.seasons.some((s) => j.seasons.includes(s))).slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: plain(title),
    description: tr(j.summary, locale),
    provider: { '@type': 'TravelAgency', name: site.name, url: site.url },
    itinerary: { '@type': 'ItemList', itemListElement: places.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: tr(p.name, locale) })) },
    offers: { '@type': 'Offer', price: j.fromPerPersonCAD, priceCurrency: 'CAD' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        seasonal={j.images}
        eyebrow={tc('days', { count: j.days })}
        title={title}
        intro={tr(j.summary, locale)}
        locale={locale}
        crumbs={[{ href: '/journeys', label: tn('journeys') }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <SeasonBadges seasons={j.seasons} light />
          <p className="text-birch">
            <span className="text-sm text-birch/70">{tc('from')} </span>
            <Price cad={j.fromPerPersonCAD} className="text-xl" /> <span className="text-sm text-birch/70">{tc('perPerson')}</span>
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <EnquireButton variant="light" prefill={{ journeyId: j.id, topic: plain(title) }}>
            {tc('enquire')}
          </EnquireButton>
          <ItineraryButton journeyId={j.id} title={plain(title)} variant="outlineLight">
            {tc('downloadItinerary')}
          </ItineraryButton>
        </div>
      </PageHero>

      <section className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow text-lake-700">{t('overview')}</p>
          <p className="mt-4 font-serif text-2xl leading-snug text-forest md:text-3xl">{tr(j.intro, locale)}</p>
          {experiences.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2">
              {experiences.map((e) => (
                <li key={e.id}>
                  <Link href={`/experiences/${e.group}/${e.slug}`} className="inline-block rounded-full border border-forest/20 px-3 py-1 text-sm text-forest hover:border-forest">
                    {plain(tr(e.title, locale))}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {j.honestNote && (
          <aside className="self-start border-l-2 border-maple bg-birch p-8 lg:col-span-5">
            <h2 className="text-2xl text-forest">
              <Italic text={`*${t('honestNote')}*`} />
            </h2>
            <p className="mt-4 leading-relaxed text-ink">{tr(j.honestNote, locale)}</p>
          </aside>
        )}
      </section>

      <section className="container-x pb-16 md:pb-24">
        <SectionHeading title={t('route')} />
        <div className="mt-8">
          <RouteMap places={places} locale={locale} label={places.map((p) => tr(p.name, locale)).join(' → ')} />
        </div>
      </section>

      <section className="container-x grid gap-12 pb-16 md:pb-24 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionHeading title={t('itinerary')} />
          <Accordion
            className="mt-8"
            items={j.itinerary.map((d, i) => ({
              id: `d${i}`,
              title: (
                <span className="flex flex-col gap-1 md:flex-row md:gap-6">
                  <span className="w-28 shrink-0 text-base text-lake-700 italic">{dayLabel(d.days, locale)}</span>
                  <span>{plain(tr(d.title, locale))}</span>
                </span>
              ),
              content: <p className="md:pl-34">{tr(d.body, locale)}</p>,
            }))}
          />
        </div>
        <aside className="lg:col-span-4">
          <h2 className="text-2xl text-forest">{t('includes')}</h2>
          <ul className="mt-5 space-y-3 text-ink">
            {j.includes.map((x, i) => (
              <li key={i} className="flex gap-3 border-t border-forest/10 pt-3">
                <span aria-hidden className="text-lake-700">✓</span>
                {tr(x, locale)}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-granite">{t('guidePrice')}</p>
        </aside>
      </section>

      {events.length > 0 && (
        <section className="bg-forest-900 py-16 text-birch md:py-20">
          <div className="container-x">
            <SectionHeading title={t('events')} light />
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {events.map((e) => (
                <li key={e.id} className="border-t border-birch/20 pt-4">
                  <Link href={`/wild-calendar#${e.id}`} className="text-lg text-birch hover:text-lake-200">
                    {tr(e.title, locale)}
                  </Link>
                  <p className="mt-2 text-sm text-birch/70">{tr(e.summary, locale)}</p>
                  <span className="mt-3 inline-block rounded-full bg-birch/10 px-2 py-0.5 text-[10px] tracking-wider uppercase">{tc('verifyYearly')}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {stays.length > 0 && (
        <section className="container-x py-16 md:py-24">
          <SectionHeading title={t('stays')} />
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {stays.map((s) => (
              <StayCard key={s.id} stay={s} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {specialist && (
        <section className="container-x pb-16 md:pb-24">
          <SectionHeading title={t('specialist')} />
          <div className="mt-8">
            <SpecialistCard specialist={specialist} locale={locale} topic={plain(title)} />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-forest py-16 text-birch md:py-24">
          <div className="container-x">
            <SectionHeading title={t('related')} light />
            <Carousel label={t('related')} light>
              {related.map((r) => (
                <JourneyCard key={r.id} journey={r} locale={locale} light />
              ))}
            </Carousel>
          </div>
        </section>
      )}
      <EnquireBand locale={locale} prefill={{ journeyId: j.id, topic: plain(title) }} />
    </>
  );
}
