import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { experienceGroups, experiencesIn, getExperienceGroup } from '@/lib/content';
import { asLocale, tr } from '@/lib/l10n';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { ExperienceCard } from '@/components/sections/ExperienceCard';
import { EnquireBand } from '@/components/sections/EnquireBand';

type Params = { params: Promise<{ locale: string; group: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => experienceGroups.map((g) => ({ locale, group: g.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, group } = await params;
  const g = getExperienceGroup(group);
  if (!g) return {};
  return pageMetadata({ locale, path: `/experiences/${g.slug}`, title: tr(g.title, locale), description: tr(g.intro, locale) });
}

export default async function ExperienceGroupPage({ params }: Params) {
  const { locale: raw, group } = await params;
  setRequestLocale(raw);
  const locale = asLocale(raw);
  const g = getExperienceGroup(group);
  if (!g) notFound();
  const tn = await getTranslations({ locale, namespace: 'nav' });
  return (
    <>
      <PageHero image={g.image} title={tr(g.title, locale)} intro={tr(g.intro, locale)} locale={locale} crumbs={[{ href: '/experiences', label: tn('experiences') }]} />
      <section className="container-x grid gap-x-8 gap-y-14 py-16 sm:grid-cols-2 md:py-24 lg:grid-cols-3">
        {experiencesIn(g.id).map((e) => (
          <ExperienceCard key={e.id} experience={e} locale={locale} />
        ))}
      </section>
      <EnquireBand locale={locale} />
    </>
  );
}
