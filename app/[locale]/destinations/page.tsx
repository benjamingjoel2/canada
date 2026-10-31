import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { provinces, regionsOf } from '@/lib/content';
import { tr } from '@/lib/l10n';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { SeasonalPicture } from '@/components/ui/Picture';
import { ProvinceIndex } from '@/components/sections/ProvinceIndex';
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
      <ProvinceIndex
        exploreLabel={n.raw('explore')}
        regionsLabel={n('destinations')}
        panels={provinces.map((p, i) => ({
          slug: p.slug,
          name: tr(p.name, locale),
          tagline: tr(p.tagline, locale),
          picture: <SeasonalPicture img={p.hero} locale={locale} className="aspect-[16/10] w-full" sizes="(min-width:1024px) 60vw, 100vw" priority={i === 0} lowPriority={i > 0} />,
          regions: regionsOf(p.id).map((r) => ({ slug: r.slug, name: tr(r.name, locale) })),
        }))}
      />
      <DistanceSection locale={locale} />
      <EnquireBand locale={locale} />
    </>
  );
}
