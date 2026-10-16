import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { provinces } from '@/lib/content';
import { tr } from '@/lib/l10n';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { SeasonalPicture } from '@/components/ui/Picture';
import { Link } from '@/i18n/navigation';
import { DistanceSection } from '@/components/features/distance/DistanceSection';
import { EnquireBand } from '@/components/sections/EnquireBand';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'province' });
  return pageMetadata({ locale, path: '/destinations', title: t('allTitle'), description: t('allIntro') });
}

export default async function Destinations({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'province' });
  const n = await getTranslations({ locale, namespace: 'nav' });
  return (
    <>
      <PageHero title={t('allTitle')} intro={t('allIntro')} locale={locale} />
      <section className="container-x grid gap-x-8 gap-y-14 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {provinces.map((p) => (
          <article key={p.id} className="group relative">
            <div className="overflow-hidden">
              <SeasonalPicture img={p.hero} locale={locale} className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 30vw, 90vw" />
            </div>
            <h2 className="mt-5 text-3xl text-forest">
              <Link href={`/destinations/${p.slug}`} className="after:absolute after:inset-0">
                {tr(p.name, locale)}
              </Link>
            </h2>
            <p className="mt-2 text-granite">{tr(p.tagline, locale)}</p>
            <p className="mt-3 text-sm text-lake-700">{n('explore', { name: tr(p.name, locale) })} →</p>
          </article>
        ))}
      </section>
      <DistanceSection locale={locale} />
      <EnquireBand locale={locale} />
    </>
  );
}
