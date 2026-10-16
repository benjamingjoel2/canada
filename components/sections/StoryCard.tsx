import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/data/types';
import type { StoryMeta } from '@/lib/stories';
import { Italic } from '@/components/ui/Italic';
import { Picture } from '@/components/ui/Picture';

export function StoryCard({ story, locale }: { story: StoryMeta; locale: Locale }) {
  const t = useTranslations('common');
  const date = new Intl.DateTimeFormat(locale === 'fr' ? 'fr-CA' : 'en-CA', { dateStyle: 'long' }).format(new Date(story.date));
  return (
    <article className="group relative">
      <div className="overflow-hidden">
        <Picture img={story.image} locale={locale} className="aspect-[3/2] w-full transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 30vw, 90vw" />
      </div>
      <p className="mt-5 text-xs tracking-wider text-granite uppercase">
        <time dateTime={story.date}>{date}</time> · {t('minRead', { count: story.readMins })}
      </p>
      <h3 className="mt-2 text-2xl text-forest group-hover:text-lake-700">
        <Link href={`/stories/${story.slug}`} className="after:absolute after:inset-0">
          <Italic text={story.title} />
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-granite">{story.excerpt}</p>
    </article>
  );
}
