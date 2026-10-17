import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { experiences, experiencesIn, getExperience, getExperienceGroup, getProvince, getRegion, journeysForExperience } from '@/lib/content';
import { asLocale, plain, tr } from '@/lib/l10n';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Carousel } from '@/components/ui/Carousel';
import { JourneyCard, SeasonBadges } from '@/components/sections/JourneyCard';
import { ExperienceCard } from '@/components/sections/ExperienceCard';
import { EnquireBand } from '@/components/sections/EnquireBand';
import { Link } from '@/i18n/navigation';
import { EnquireButton } from '@/components/features/enquire/EnquireButton';

type Params = { params: Promise<{ locale: string; group: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => experiences.map((e) => ({ locale, group: e.group, slug: e.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const e = getExperience(slug);
  if (!e) return {};
  return pageMetadata({ locale, path: `/experiences/${e.group}/${e.slug}`, title: tr(e.title, locale), description: tr(e.summary, locale) });
}

export default async function ExperiencePage({ params }: Params) {
  const { locale: raw, group, slug } = await params;
  setRequestLocale(raw);
  const locale = asLocale(raw);
  const e = getExperience(slug);
  const g = getExperienceGroup(group);
  if (!e || !g || e.group !== g.id) notFound();
  const t = await getTranslations({ locale, namespace: 'experiences' });
  const tn = await getTranslations({ locale, namespace: 'nav' });
  const journeys = journeysForExperience(e.id);
  const regions = e.regionIds.map(getRegion).filter((r) => r !== undefined);
  const others = experiencesIn(g.id).filter((x) => x.id !== e.id);

  return (
    <>
      <PageHero
        image={e.image}
        eyebrow={plain(tr(g.title, locale))}
        title={tr(e.title, locale)}
        intro={tr(e.summary, locale)}
        locale={locale}
        crumbs={[
          { href: '/experiences', label: tn('experiences') },
          { href: `/experiences/${g.slug}`, label: plain(tr(g.title, locale)) },
        ]}
      />
      <section className="container-x grid gap-12 py-16 md:py-28 lg:grid-cols-12">
        <p className="font-serif text-2xl leading-snug text-forest md:text-3xl lg:col-span-8">{tr(e.body, locale)}</p>
        <aside className="space-y-6 lg:col-span-4">
          <div>
            <p className="eyebrow text-granite">{t('seasons')}</p>
            <div className="mt-2">
              <SeasonBadges seasons={e.seasons} />
            </div>
          </div>
          {regions.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {regions.map((r) => (
                <li key={r.id}>
                  <Link href={`/destinations/${getProvince(r.provinceId)?.slug}/${r.slug}`} className="inline-block rounded-full border border-forest/20 px-3 py-1 text-sm text-forest hover:border-forest">
                    {tr(r.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <EnquireButton prefill={{ topic: plain(tr(e.title, locale)) }}>{tn('enquire')}</EnquireButton>
        </aside>
      </section>
      {journeys.length > 0 && (
        <section className="bg-forest py-16 text-birch md:py-24">
          <div className="container-x">
            <SectionHeading title={t('journeysWith')} light />
            <Carousel label={t('journeysWith')} light>
              {journeys.map((j) => (
                <JourneyCard key={j.id} journey={j} locale={locale} light />
              ))}
            </Carousel>
          </div>
        </section>
      )}
      <section className="container-x py-16 md:py-28">
        <SectionHeading title={t('inGroup')} />
        <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {others.slice(0, 3).map((x) => (
            <ExperienceCard key={x.id} experience={x} locale={locale} />
          ))}
        </div>
      </section>
      <EnquireBand locale={locale} prefill={{ topic: plain(tr(e.title, locale)) }} />
    </>
  );
}
