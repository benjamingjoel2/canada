import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { wildEvents } from '@/lib/content';
import { tr } from '@/lib/l10n';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import { NowAndNext, type TeaserEvent } from './NowAndNext';

/** "What's happening now" — this month and next, computed in the browser so a static page never goes stale. */
export async function CalendarTeaser({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const events: TeaserEvent[] = wildEvents.map((e) => ({
    id: e.id,
    title: tr(e.title, locale),
    summary: tr(e.summary, locale),
    type: e.type,
    months: e.months,
    peak: e.peak ?? [],
  }));
  return (
    <section className="bg-forest-900 py-20 text-birch md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading title={t('calendarTitle')} intro={t('calendarIntro')} light />
          <ButtonLink href="/wild-calendar" variant="light" className="shrink-0 self-start md:self-auto">
            {t('calendarCta')}
          </ButtonLink>
        </div>
        <NowAndNext events={events} />
      </div>
    </section>
  );
}
