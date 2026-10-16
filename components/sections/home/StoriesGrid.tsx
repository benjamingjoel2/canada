import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { getStories } from '@/lib/stories';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StoryCard } from '@/components/sections/StoryCard';
import { Link } from '@/i18n/navigation';

export async function StoriesGrid({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const stories = (await getStories(locale)).slice(0, 3);
  return (
    <section className="container-x py-20 md:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading title={t('storiesTitle')} />
        <Link href="/stories" className="link-underline shrink-0 self-start text-sm font-medium text-forest md:self-auto">
          {t('storiesCta')}
        </Link>
      </div>
      <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
        {stories.map((s) => (
          <StoryCard key={s.slug} story={s} locale={locale} />
        ))}
      </div>
    </section>
  );
}
