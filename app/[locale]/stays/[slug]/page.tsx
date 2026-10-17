import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getProvince, getRegion, getStay, journeys, stays, staysInProvince } from '@/lib/content';
import { asLocale, tr } from '@/lib/l10n';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Picture } from '@/components/ui/Picture';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StayCard } from '@/components/sections/StayCard';
import { JourneyCard, SeasonBadges } from '@/components/sections/JourneyCard';
import { EnquireBand } from '@/components/sections/EnquireBand';
import { Link } from '@/i18n/navigation';

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => stays.map((s) => ({ locale, slug: s.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = getStay(slug);
  if (!s) return {};
  return pageMetadata({ locale, path: `/stays/${s.slug}`, title: s.name, description: tr(s.summary, locale) });
}

export default async function StayPage({ params }: Params) {
  const { locale: raw, slug } = await params;
  setRequestLocale(raw);
  const locale = asLocale(raw);
  const s = getStay(slug);
  if (!s) notFound();
  const t = await getTranslations({ locale, namespace: 'stays' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  const tn = await getTranslations({ locale, namespace: 'nav' });
  const tp = await getTranslations({ locale, namespace: 'province' });
  const region = getRegion(s.regionId);
  const province = getProvince(s.provinceId);
  const inJourneys = journeys.filter((j) => j.stayIds.includes(s.id));
  const nearby = staysInProvince(s.provinceId).filter((x) => x.id !== s.id).slice(0, 3);
  return (
    <>
      <PageHero
        image={s.images[0]}
        eyebrow={tr(s.style, locale)}
        title={s.name}
        intro={tr(s.summary, locale)}
        locale={locale}
        crumbs={[{ href: '/stays', label: tn('stays') }]}
      >
        {s.placeholder && <p className="mt-6 text-xs tracking-wider text-birch/70 uppercase">{tc('placeholder')}</p>}
      </PageHero>
      <section className="container-x grid gap-12 py-16 md:py-28 lg:grid-cols-12">
        <p className="font-serif text-2xl leading-snug text-forest lg:col-span-7">{tr(s.body, locale)}</p>
        <dl className="space-y-5 text-sm lg:col-span-5">
          {region && province && (
            <div>
              <dt className="eyebrow text-granite">{t('region')}</dt>
              <dd className="mt-1 text-lg">
                <Link href={`/destinations/${province.slug}/${region.slug}`} className="text-forest underline underline-offset-4">
                  {tr(region.name, locale)}, {tr(province.name, locale)}
                </Link>
              </dd>
            </div>
          )}
          <div>
            <dt className="eyebrow text-granite">{t('style')}</dt>
            <dd className="mt-1 text-lg text-forest">{tr(s.style, locale)}</dd>
          </div>
          <div>
            <dt className="eyebrow text-granite">{tc('bestMonths')}</dt>
            <dd className="mt-1"><SeasonBadges seasons={s.seasons} /></dd>
          </div>
        </dl>
        {s.images[1] && (
          <div className="lg:col-span-12">
            <Picture img={s.images[1]} locale={locale} className="aspect-[21/9] w-full" sizes="100vw" />
          </div>
        )}
      </section>
      {inJourneys.length > 0 && (
        <section className="container-x pb-16 md:pb-24">
          <SectionHeading title={tp('journeys', { name: s.name })} />
          <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {inJourneys.map((j) => (
              <JourneyCard key={j.id} journey={j} locale={locale} />
            ))}
          </div>
        </section>
      )}
      {nearby.length > 0 && (
        <section className="bg-birch py-16 md:py-28">
          <div className="container-x">
            <SectionHeading title={tp('stays')} />
            <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((x) => (
                <StayCard key={x.id} stay={x} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}
      <EnquireBand locale={locale} prefill={{ topic: s.name }} />
    </>
  );
}
