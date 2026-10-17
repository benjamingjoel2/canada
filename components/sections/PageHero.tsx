import clsx from 'clsx';
import type { Img, Locale, SeasonalImg } from '@/data/types';
import { Italic } from '@/components/ui/Italic';
import { Picture, SeasonalPicture } from '@/components/ui/Picture';
import { Link } from '@/i18n/navigation';

export type Crumb = { href: string; label: string };

/** Inner-page hero (inferred from the homepage's patterns): breadcrumb, italic title, intro, optional image. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  seasonal,
  locale,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: Img;
  seasonal?: SeasonalImg;
  locale: Locale;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  const hasImage = !!(image || seasonal);
  return (
    <section className={clsx('relative', hasImage ? 'bg-forest-900 text-birch' : 'bg-birch')}>
      {hasImage && (
        <div className="absolute inset-0">
          {seasonal ? (
            <SeasonalPicture img={seasonal} locale={locale} className="h-full w-full" priority showCaption={false} />
          ) : (
            <Picture img={image!} locale={locale} className="h-full w-full" priority showCaption={false} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/30 to-forest-900/10" />
        </div>
      )}
      <div className={clsx('container-x relative', hasImage ? 'flex min-h-[62vh] flex-col justify-end pt-32 pb-14 md:pb-20' : 'pt-14 pb-14 md:pt-20 md:pb-20')}>
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className={clsx('flex flex-wrap gap-2 text-xs tracking-wider uppercase', hasImage ? 'text-birch/70' : 'text-granite')}>
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  <Link href={c.href} className="hover:underline">{c.label}</Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className={clsx('eyebrow mb-4', hasImage ? 'text-lake-200' : 'text-lake-700')}>{eyebrow}</p>}
        <h1 className={clsx('display-1 max-w-5xl', hasImage ? 'text-birch' : 'text-forest')}>
          <Italic text={title} />
        </h1>
        {intro && <p className={clsx('mt-6 max-w-2xl text-lg leading-relaxed', hasImage ? 'text-birch/85' : 'text-granite')}>{intro}</p>}
        {children}
      </div>
    </section>
  );
}
