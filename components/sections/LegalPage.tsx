import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { site } from '@/config/site';
import { PageHero } from './PageHero';

export async function LegalPage({ locale, title, body }: { locale: Locale; title: string; body: string }) {
  const t = await getTranslations({ locale, namespace: 'legal' });
  return (
    <>
      <PageHero title={title} locale={locale} />
      <section className="container-x py-12 md:py-16">
        <div className="prose-ctc max-w-2xl">
          <p className="rounded-sm border-l-2 border-maple bg-birch px-4 py-3 text-sm">{t('placeholder')}</p>
          <p>{body}</p>
          <p className="text-sm text-granite">
            {site.address.lines.join(', ')}
            <br />
            {site.registration.map((r) => r[locale]).join(' · ')}
          </p>
        </div>
      </section>
    </>
  );
}
