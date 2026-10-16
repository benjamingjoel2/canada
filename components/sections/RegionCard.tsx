import { Link } from '@/i18n/navigation';
import type { Locale, Region } from '@/data/types';
import { tr } from '@/lib/l10n';
import { SeasonalPicture } from '@/components/ui/Picture';

export function RegionCard({ region, provinceSlug, locale }: { region: Region; provinceSlug: string; locale: Locale }) {
  return (
    <Link href={`/destinations/${provinceSlug}/${region.slug}`} className="group relative block overflow-hidden">
      <SeasonalPicture
        img={region.images}
        locale={locale}
        className="aspect-[3/4] w-full transition-transform duration-700 group-hover:scale-[1.04]"
        sizes="(min-width:1024px) 25vw, 70vw"
        showCaption={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-2xl text-birch">{tr(region.name, locale)}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-birch/75">{tr(region.summary, locale)}</p>
      </div>
    </Link>
  );
}
