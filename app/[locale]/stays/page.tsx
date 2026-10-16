import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { provinces, staysInProvince } from '@/lib/content';
import { tr } from '@/lib/l10n';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { StayCard } from '@/components/sections/StayCard';
import { EnquireBand } from '@/components/sections/EnquireBand';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'stays' });
  return pageMetadata({ locale, path: '/stays', title: t('allTitle'), description: t('allIntro') });
}

export default async function Stays({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'stays' });
  return (
    <>
      <PageHero title={t('allTitle')} intro={t('allIntro')} locale={locale} />
      <div className="container-x space-y-16 py-12 md:py-16">
        {provinces
          .map((p) => ({ p, stays: staysInProvince(p.id) }))
          .filter((x) => x.stays.length)
          .map(({ p, stays }) => (
            <section key={p.id} aria-labelledby={`stays-${p.id}`}>
              <h2 id={`stays-${p.id}`} className="border-b border-forest/15 pb-4 text-3xl text-forest">
                {tr(p.name, locale)}
              </h2>
              <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {stays.map((s) => (
                  <StayCard key={s.id} stay={s} locale={locale} />
                ))}
              </div>
            </section>
          ))}
      </div>
      <EnquireBand locale={locale} />
    </>
  );
}
