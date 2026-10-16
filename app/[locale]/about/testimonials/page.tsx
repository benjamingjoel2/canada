import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { testimonials } from '@/data/testimonials';
import { getJourney } from '@/lib/content';
import { tr } from '@/lib/l10n';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { Flag } from '@/components/ui/Flag';
import { Italic } from '@/components/ui/Italic';
import { Link } from '@/i18n/navigation';
import { EnquireBand } from '@/components/sections/EnquireBand';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return pageMetadata({ locale, path: '/about/testimonials', title: t('testimonialsTitle'), description: t('testimonialsNote') });
}

export default async function Testimonials({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'about' });
  const names = new Intl.DisplayNames([locale], { type: 'region' });
  return (
    <>
      <PageHero title={t('testimonialsTitle')} intro={t('testimonialsNote')} locale={locale} />
      <section className="container-x grid gap-8 py-16 md:grid-cols-2 md:py-24">
        {testimonials.map((q) => {
          const j = q.journeyId ? getJourney(q.journeyId) : undefined;
          return (
            <figure key={q.id} className="flex flex-col justify-between bg-birch p-8 md:p-10">
              <blockquote className="font-serif text-2xl leading-relaxed text-forest">“{tr(q.quote, locale)}”</blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-3 text-sm text-granite">
                <Flag code={q.country} label={names.of(q.country) ?? q.country} />
                {tr(q.who, locale)}
                {j && (
                  <Link href={`/journeys/${j.slug}`} className="text-lake-700 underline underline-offset-4">
                    <Italic text={tr(j.title, locale)} />
                  </Link>
                )}
              </figcaption>
            </figure>
          );
        })}
      </section>
      <EnquireBand locale={locale} />
    </>
  );
}
