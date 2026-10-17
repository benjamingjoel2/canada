import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { indigenousPage as page } from '@/data/pages';
import { tr } from '@/lib/l10n';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { PageSections } from '@/components/sections/PageSections';
import { Italic } from '@/components/ui/Italic';
import { EnquireBand } from '@/components/sections/EnquireBand';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: '/indigenous-canada', title: tr(page.title, locale), description: tr(page.intro, locale) });
}

export default async function IndigenousCanada({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const tc = await getTranslations({ locale, namespace: 'common' });
  return (
    <>
      <PageHero image={page.image} title={tr(page.title, locale)} intro={tr(page.intro, locale)} locale={locale} />
      <div className="container-x py-8 md:py-12">
        <PageSections sections={page.sections} locale={locale} />
      </div>
      <section className="bg-birch py-16 md:py-28">
        <div className="container-x">
          <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {page.principles.map((p, i) => (
              <li key={p.id} className="border-t border-forest/15 pt-6">
                <span aria-hidden className="font-serif text-lake-700 italic">0{i + 1}</span>
                <h2 className="mt-2 text-2xl text-forest">
                  <Italic text={tr(p.title, locale)} />
                </h2>
                <p className="mt-3 leading-relaxed text-granite">{tr(p.body, locale)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="container-x grid gap-12 py-16 md:py-28 lg:grid-cols-2">
        <div>
          <ul className="space-y-6">
            {page.partners.map((p) => (
              <li key={p.id} className="border-l-2 border-lake pl-5">
                <p className="text-lg text-forest">{tr(p.name, locale)}</p>
                <p className="mt-1 text-sm text-granite">{tr(p.description, locale)}</p>
                <p className="mt-1 text-[10px] tracking-wider text-granite uppercase">{tc('placeholder')}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl text-forest">
            <Italic text={tr(page.furtherReading.heading, locale)} />
          </h2>
          <ul className="prose-ctc mt-6">
            {page.furtherReading.items.map((x, i) => (
              <li key={i}>{tr(x, locale)}</li>
            ))}
          </ul>
        </div>
      </section>
      <EnquireBand locale={locale} />
    </>
  );
}
