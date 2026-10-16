import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getStories } from '@/lib/stories';
import { pageLocale, type LocaleParams } from '@/lib/params';
import { pageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/sections/PageHero';
import { StoryCard } from '@/components/sections/StoryCard';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'stories' });
  return pageMetadata({ locale, path: '/stories', title: t('allTitle'), description: t('allIntro') });
}

export default async function Stories({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'stories' });
  const stories = await getStories(locale);
  return (
    <>
      <PageHero title={t('allTitle')} intro={t('allIntro')} locale={locale} />
      <section className="container-x grid gap-x-8 gap-y-16 py-16 sm:grid-cols-2 md:py-24 lg:grid-cols-3">
        {stories.map((s) => (
          <StoryCard key={s.slug} story={s} locale={locale} />
        ))}
      </section>
    </>
  );
}
