import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { specialists } from '@/data/specialists';
import { tr } from '@/lib/l10n';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Picture } from '@/components/ui/Picture';
import { EnquireButton } from '@/components/features/enquire/EnquireButton';
import { EnquireBand } from '@/components/sections/EnquireBand';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return pageMetadata({ locale, path: '/about/team', title: t('teamTitle'), description: t('teamIntro') });
}

export default async function Team({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'about' });
  const tm = await getTranslations({ locale, namespace: 'match' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return (
    <>
      <PageHero title={t('teamTitle')} intro={t('teamIntro')} locale={locale} />
      <section className="container-x space-y-20 py-16 md:py-24">
        {specialists.map((s, i) => (
          <article key={s.id} id={s.id} className="grid scroll-mt-32 gap-10 md:grid-cols-12 md:items-center">
            <Picture img={s.photo} locale={locale} className={`aspect-[4/5] w-full md:col-span-4 ${i % 2 ? 'md:order-2 md:col-start-9' : ''}`} sizes="(min-width:768px) 33vw, 100vw" />
            <div className={`md:col-span-7 ${i % 2 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-6'}`}>
              <h2 className="text-4xl text-forest">{s.name}</h2>
              <p className="mt-1 text-lake-700">{tr(s.role, locale)}</p>
              <p className="mt-6 font-serif text-2xl text-forest italic">“{tr(s.quote, locale)}”</p>
              <p className="mt-6 leading-relaxed text-granite">{tr(s.bio, locale)}</p>
              <p className="mt-4 text-sm text-granite">
                {t('languages')}: {s.languages.join(', ')}
              </p>
              <p className="mt-2 text-[10px] tracking-wider text-granite uppercase">{tc('placeholder')}</p>
              <EnquireButton className="mt-6" prefill={{ specialistId: s.id }}>
                {tm('talkTo', { name: s.name.split(' ')[0] })}
              </EnquireButton>
            </div>
          </article>
        ))}
      </section>
      <EnquireBand locale={locale} />
    </>
  );
}
