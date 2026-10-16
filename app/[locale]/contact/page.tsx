import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { site } from '@/config/site';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { EnquireForm } from '@/components/features/enquire/EnquireForm';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return pageMetadata({ locale, path: '/contact', title: t('title'), description: t('intro') });
}

export default async function Contact({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'contact' });
  const rows: [string, React.ReactNode][] = [
    [t('phone'), <a key="p" href={site.contact.phoneHref}>{site.contact.phone}</a>],
    [t('email'), <a key="e" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>],
    [t('whatsapp'), site.contact.whatsapp],
    [t('hours'), site.contact.hours[locale]],
    [t('address'), <address key="a" className="not-italic">{site.address.lines.map((l) => <span key={l} className="block">{l}</span>)}</address>],
  ];
  return (
    <>
      <PageHero title={t('title')} intro={t('intro')} locale={locale} />
      <section className="container-x grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <dl className="space-y-6 lg:col-span-4">
          {rows.map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow text-granite">{k}</dt>
              <dd className="mt-1 text-lg text-forest">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="bg-birch p-6 md:p-10 lg:col-span-8">
          <EnquireForm idPrefix="contact" />
        </div>
      </section>
    </>
  );
}
