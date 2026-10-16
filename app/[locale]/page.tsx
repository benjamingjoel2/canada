import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { faqs } from '@/data/faq';
import { asLocale } from '@/lib/l10n';
import { pageMetadata } from '@/lib/seo';
import { Intro } from '@/components/sections/home/Intro';
import { HeroFilm } from '@/components/sections/home/HeroFilm';
import { SpecialistBand } from '@/components/sections/home/SpecialistBand';
import { JourneysCarousel } from '@/components/sections/home/JourneysCarousel';
import { ExperienceRows } from '@/components/sections/home/ExperienceRows';
import { DestinationTabs } from '@/components/sections/home/DestinationTabs';
import { CalendarTeaser } from '@/components/sections/home/CalendarTeaser';
import { ContactBlock } from '@/components/sections/home/ContactBlock';
import { StoriesGrid } from '@/components/sections/home/StoriesGrid';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { TeamCarousel } from '@/components/sections/TeamCarousel';
import { PressStrip } from '@/components/sections/PressStrip';
import { FaqSection } from '@/components/sections/FaqSection';
import { DistanceSection } from '@/components/features/distance/DistanceSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { ...pageMetadata({ locale, path: '', title: t('siteTitle'), description: t('siteDescription') }), title: { absolute: t('siteTitle') } };
}

/** Homepage, in the reference's section order with our additions marked. */
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  setRequestLocale(raw);
  const locale = asLocale(raw);
  return (
    <>
      <Intro locale={locale} />
      <HeroFilm locale={locale} />
      <SpecialistBand locale={locale} />
      <JourneysCarousel locale={locale} />
      <ExperienceRows locale={locale} />
      {/* Ours: Bigger than you think */}
      <DistanceSection locale={locale} />
      <DestinationTabs locale={locale} />
      {/* Ours: Wild Calendar teaser */}
      <CalendarTeaser locale={locale} />
      <TestimonialsCarousel locale={locale} />
      <TeamCarousel locale={locale} />
      <ContactBlock locale={locale} />
      <StoriesGrid locale={locale} />
      <PressStrip locale={locale} />
      <FaqSection locale={locale} faqs={faqs.filter((f) => f.onHome)} />
    </>
  );
}
