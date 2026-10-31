import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getStory, storySlugs } from '@/lib/stories';
import { asLocale, plain, intlLocale } from '@/lib/l10n';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/config/site';
import { PageHero } from '@/components/sections/PageHero';
import { Picture } from '@/components/ui/Picture';
import { EnquireBand } from '@/components/sections/EnquireBand';
import { Link } from '@/i18n/navigation';

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => storySlugs.map((slug) => ({ locale, slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const story = await getStory(asLocale(locale), slug);
  if (!story) return {};
  return { ...pageMetadata({ locale, path: `/stories/${slug}`, title: story.meta.title, description: story.meta.excerpt }), openGraph: { type: 'article' } };
}

export default async function StoryPage({ params }: Params) {
  const { locale: raw, slug } = await params;
  setRequestLocale(raw);
  const locale = asLocale(raw);
  const story = await getStory(locale, slug);
  if (!story) notFound();
  const { Content, meta } = story;
  const t = await getTranslations({ locale, namespace: 'stories' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  const date = new Intl.DateTimeFormat(intlLocale(locale), { dateStyle: 'long' }).format(new Date(meta.date));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: plain(meta.title),
    datePublished: meta.date,
    inLanguage: locale,
    publisher: { '@type': 'Organization', name: site.name },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero title={meta.title} intro={meta.excerpt} locale={locale} crumbs={[{ href: '/stories', label: t('back') }]}>
        <p className="mt-6 text-xs tracking-wider text-granite uppercase">
          <time dateTime={meta.date}>{date}</time> · {tc('minRead', { count: meta.readMins })}
        </p>
      </PageHero>
      <div className="container-x">
        <Picture img={meta.image} locale={locale} className="aspect-[21/9] w-full" sizes="100vw" priority />
      </div>
      <article className="container-x py-16 md:py-20">
        <div className="prose-ctc mx-auto max-w-2xl">
          <Content />
        </div>
        <div className="mx-auto mt-16 max-w-2xl border-t border-forest/15 pt-8">
          <Link href="/stories" className="text-sm font-medium text-lake-700 underline underline-offset-4">
            ← {t('back')}
          </Link>
        </div>
      </article>
      <EnquireBand locale={locale} />
    </>
  );
}
