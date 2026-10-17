import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { aboutPage as page, howWeWorkSteps } from '@/data/pages';
import { tr } from '@/lib/l10n';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { PageSections } from '@/components/sections/PageSections';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Italic } from '@/components/ui/Italic';
import { TeamCarousel } from '@/components/sections/TeamCarousel';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { EnquireBand } from '@/components/sections/EnquireBand';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: '/about', title: tr(page.title, locale), description: tr(page.intro, locale) });
}

export default async function About({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'about' });
  return (
    <>
      <PageHero image={page.image} title={tr(page.title, locale)} intro={tr(page.intro, locale)} locale={locale} />
      <section className="bg-birch py-16 md:py-28">
        <div className="container-x">
          <SectionHeading title={t('howTitle')} />
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {[...howWeWorkSteps].sort((a, b) => a.step - b.step).map((s) => (
              <li key={s.id} className="border-t border-forest/15 pt-6">
                <span className="font-serif text-4xl text-lake-700 italic">{s.step}</span>
                <h3 className="mt-3 text-xl text-forest">{tr(s.title, locale)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-granite">{tr(s.body, locale)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <div className="container-x py-8">
        <PageSections sections={page.sections} locale={locale} />
      </div>
      <section className="bg-forest py-16 text-birch md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <h2 className="text-3xl text-birch md:text-5xl lg:col-span-4">
            <Italic text={tr(page.honesty.heading, locale)} />
          </h2>
          <ul className="space-y-5 lg:col-span-7 lg:col-start-6">
            {page.honesty.points.map((p, i) => (
              <li key={i} className="border-t border-birch/15 pt-5 font-serif text-xl text-birch/90">
                {tr(p, locale)}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <TeamCarousel locale={locale} />
      <TestimonialsCarousel locale={locale} />
      <EnquireBand locale={locale} />
    </>
  );
}
