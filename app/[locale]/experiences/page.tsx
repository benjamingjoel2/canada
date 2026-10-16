import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { ExperienceRows } from '@/components/sections/home/ExperienceRows';
import { EnquireBand } from '@/components/sections/EnquireBand';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'experiences' });
  return pageMetadata({ locale, path: '/experiences', title: t('allTitle'), description: t('allIntro') });
}

export default async function Experiences({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'experiences' });
  return (
    <>
      <PageHero title={t('allTitle')} intro={t('allIntro')} locale={locale} />
      <ExperienceRows locale={locale} />
      <EnquireBand locale={locale} />
    </>
  );
}
