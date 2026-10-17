import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { site } from '@/config/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EnquireForm } from '@/components/features/enquire/EnquireForm';

/** Reference: contact block with the enquire form inline. */
export async function ContactBlock({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const tc = await getTranslations({ locale, namespace: 'contact' });
  return (
    <section id="contact" className="bg-birch section-y">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading title={t('contactTitle')} intro={t('contactIntro')} />
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="eyebrow text-granite">{tc('phone')}</dt>
              <dd className="mt-1 text-lg text-forest"><a href={site.contact.phoneHref}>{site.contact.phone}</a></dd>
            </div>
            <div>
              <dt className="eyebrow text-granite">{tc('email')}</dt>
              <dd className="mt-1 text-lg text-forest"><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></dd>
            </div>
            <div>
              <dt className="eyebrow text-granite">{tc('hours')}</dt>
              <dd className="mt-1 text-forest">{site.contact.hours[locale]}</dd>
            </div>
          </dl>
        </div>
        <div className="bg-birch-50 p-6 md:p-10 lg:col-span-8">
          <EnquireForm idPrefix="inline" />
        </div>
      </div>
    </section>
  );
}
