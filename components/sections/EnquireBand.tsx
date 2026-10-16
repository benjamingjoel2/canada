import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { site } from '@/config/site';
import { Italic } from '@/components/ui/Italic';
import { EnquireButton } from '@/components/features/enquire/EnquireButton';
import type { EnquirePrefill } from '@/components/features/enquire/EnquireContext';

export async function EnquireBand({ locale, prefill }: { locale: Locale; prefill?: EnquirePrefill }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const n = await getTranslations({ locale, namespace: 'nav' });
  return (
    <section className="bg-forest py-16 text-birch md:py-20">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-birch md:text-5xl">
            <Italic text={t('contactTitle')} />
          </h2>
          <p className="mt-4 text-birch/75">{t('contactIntro')}</p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <EnquireButton variant="light" prefill={prefill}>
            {n('enquire')}
          </EnquireButton>
          <a href={site.contact.phoneHref} className="inline-block py-1 text-sm text-birch/70 hover:text-birch">
            {site.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
