import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { asLocale } from '@/lib/l10n';
import { pageMetadata } from '@/lib/seo';
import { calendarEvents } from '@/lib/calendar';
import { PageHero } from '@/components/sections/PageHero';
import { WildCalendar } from '@/components/features/calendar/WildCalendar';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'calendar' });
  return pageMetadata({ locale, path: '/wild-calendar', title: t('title'), description: t('intro') });
}

export default async function WildCalendarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  setRequestLocale(raw);
  const locale = asLocale(raw);
  const t = await getTranslations({ locale, namespace: 'calendar' });
  return (
    <>
      <PageHero title={t('title')} intro={t('intro')} locale={locale} />
      <section className="container-x py-12 md:py-16">
        <WildCalendar events={calendarEvents(locale)} />
      </section>
    </>
  );
}
