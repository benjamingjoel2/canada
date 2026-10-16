import { Link } from '@/i18n/navigation';
import type { Experience, Locale } from '@/data/types';
import { tr } from '@/lib/l10n';
import { Italic } from '@/components/ui/Italic';
import { Picture } from '@/components/ui/Picture';

export function ExperienceCard({ experience, locale }: { experience: Experience; locale: Locale }) {
  return (
    <article className="group relative">
      <div className="overflow-hidden">
        <Picture img={experience.image} locale={locale} className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 30vw, 90vw" />
      </div>
      <h3 className="mt-5 text-2xl text-forest group-hover:text-lake-700">
        <Link href={`/experiences/${experience.group}/${experience.slug}`} className="after:absolute after:inset-0">
          <Italic text={tr(experience.title, locale)} />
        </Link>
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-granite">{tr(experience.summary, locale)}</p>
    </article>
  );
}
