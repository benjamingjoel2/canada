import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { faqs } from '@/data/faq';
import type { FaqCategory } from '@/data/types';
import { tr } from '@/lib/l10n';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { FaqSection } from '@/components/sections/FaqSection';
import { EnquireBand } from '@/components/sections/EnquireBand';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });
  return pageMetadata({ locale, path: '/faq', title: t('title'), description: t('intro') });
}

export default async function FaqPage({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'faq' });
  const categories: FaqCategory[] = ['how-we-work', 'planning', 'practical'];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: tr(f.q, locale), acceptedAnswer: { '@type': 'Answer', text: tr(f.a, locale) } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero title={t('title')} intro={t('intro')} locale={locale} />
      {categories.map((c) => (
        <FaqSection key={c} locale={locale} title={t(c)} faqs={faqs.filter((f) => f.category === c)} showAllLink={false} />
      ))}
      <EnquireBand locale={locale} />
    </>
  );
}
