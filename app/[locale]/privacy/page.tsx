import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { site } from '@/config/site';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/sections/LegalPage';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return { ...pageMetadata({ locale, path: '/privacy', title: t('privacyTitle'), description: t('privacyBody', { email: site.contact.email }) }), robots: { index: false } };
}

export default async function Page({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'legal' });
  return <LegalPage locale={locale} title={t('privacyTitle')} body={t('privacyBody', { email: site.contact.email })} />;
}
