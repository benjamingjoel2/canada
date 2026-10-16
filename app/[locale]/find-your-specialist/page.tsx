import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { asLocale } from '@/lib/l10n';
import { pageMetadata } from '@/lib/seo';
import { matchSpecialists } from '@/lib/match-data';
import { PageHero } from '@/components/sections/PageHero';
import { SpecialistMatch } from '@/components/features/match/SpecialistMatch';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'match' });
  return pageMetadata({ locale, path: '/find-your-specialist', title: t('title'), description: t('intro') });
}

export default async function FindYourSpecialist({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  setRequestLocale(raw);
  const locale = asLocale(raw);
  const t = await getTranslations({ locale, namespace: 'match' });
  return (
    <>
      <PageHero eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} locale={locale} />
      <section className="container-x py-14 md:py-20">
        <SpecialistMatch specialists={matchSpecialists(locale)} />
      </section>
    </>
  );
}
