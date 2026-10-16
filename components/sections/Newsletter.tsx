import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { Italic } from '@/components/ui/Italic';
import { NewsletterForm } from './NewsletterForm';

export async function Newsletter({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'newsletter' });
  return (
    <section aria-labelledby="newsletter-title" className="container-x grid gap-8 py-16 md:grid-cols-2 md:items-end md:py-20">
      <div>
        <h2 id="newsletter-title" className="text-3xl text-birch md:text-4xl">
          <Italic text={t('title')} />
        </h2>
        <p className="mt-4 max-w-md text-birch/75">{t('intro')}</p>
      </div>
      <NewsletterForm />
    </section>
  );
}
