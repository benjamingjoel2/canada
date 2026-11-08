import { Link } from '@/i18n/navigation';
import type { Locale, Stay } from '@/data/types';
import { getRegion } from '@/lib/content';
import { tr } from '@/lib/l10n';
import { Picture } from '@/components/ui/Picture';

export function StayCard({ stay, locale }: { stay: Stay; locale: Locale }) {
  const region = getRegion(stay.regionId);
  return (
    <article className="group relative">
      <div className="overflow-hidden">
        <Picture img={stay.images[0]} locale={locale} className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 30vw, 90vw" />
      </div>
      <p className="mt-4 text-xs tracking-wider text-granite uppercase">
        {region ? tr(region.name, locale) : ''} · {tr(stay.style, locale)}
      </p>
      <h3 className="mt-1 text-2xl text-forest group-hover:text-lake-700">
        <Link href={`/stays/${stay.slug}`} className="after:absolute after:inset-0">
          {tr(stay.name, locale)}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-granite">{tr(stay.summary, locale)}</p>
    </article>
  );
}
