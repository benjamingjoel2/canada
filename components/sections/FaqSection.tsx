import { getTranslations } from 'next-intl/server';
import type { Faq, Locale } from '@/data/types';
import { tr } from '@/lib/l10n';
import { Accordion } from '@/components/ui/Accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Link } from '@/i18n/navigation';

export async function FaqSection({ locale, faqs, title, showAllLink = true }: { locale: Locale; faqs: Faq[]; title?: string; showAllLink?: boolean }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const tf = await getTranslations({ locale, namespace: 'faq' });
  return (
    <section className="container-x grid gap-10 py-20 md:py-28 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <SectionHeading title={title ?? t('faqTitle')} />
        {showAllLink && (
          <Link href="/faq" className="link-underline mt-6 inline-block text-sm font-medium text-forest">
            {t('faqCta')}
          </Link>
        )}
      </div>
      <div className="lg:col-span-8">
        <Accordion
          items={faqs.map((f) => ({
            id: f.id,
            title: tr(f.q, locale),
            content: (
              <>
                <p className="whitespace-pre-line">{tr(f.a, locale)}</p>
                {f.verify && process.env.NODE_ENV !== 'production' && (
                  <p className="mt-3 text-xs text-maple">{tf('verify', { note: f.verify })}</p>
                )}
              </>
            ),
          }))}
        />
      </div>
    </section>
  );
}
