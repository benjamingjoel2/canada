import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { journeys } from '@/lib/content';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { JourneyCard } from '@/components/sections/JourneyCard';
import { JourneyGrid } from '@/components/sections/JourneyGrid';
import { EnquireBand } from '@/components/sections/EnquireBand';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'journey' });
  return pageMetadata({ locale, path: '/journeys', title: t('allTitle'), description: t('allIntro') });
}

export default async function Journeys({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'journey' });
  return (
    <>
      <PageHero title={t('allTitle')} intro={t('allIntro')} locale={locale} />
      <section className="container-x py-12 md:py-16">
        <JourneyGrid items={journeys.map((j) => ({ id: j.id, seasons: j.seasons, node: <JourneyCard journey={j} locale={locale} /> }))} />
      </section>
      <EnquireBand locale={locale} />
    </>
  );
}
