import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { press } from '@/data/press';
import { tr } from '@/lib/l10n';
import { SectionHeading } from '@/components/ui/SectionHeading';

export async function PressStrip({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  return (
    <section className="border-y border-forest/10 bg-birch-50 py-16 md:py-20">
      <div className="container-x">
        <SectionHeading title={t('pressTitle')} intro={t('pressIntro')} align="center" />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {press.map((p) => (
            <li key={p.id} className="text-center">
              <p className="font-serif text-lg text-forest/70 italic">{p.name}</p>
              <p className="mt-2 text-sm text-granite">“{tr(p.quote, locale)}”</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
