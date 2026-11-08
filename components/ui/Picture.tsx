import Image, { getImageProps } from 'next/image';
import clsx from 'clsx';
import type { Img, Locale, SeasonalImg } from '@/data/types';
import { tr } from '@/lib/l10n';
import { resolvePhoto } from '@/lib/photo';

/**
 * Image slot. Renders the slot's own `src`, or a matched stock photo (lib/photo.ts),
 * and falls back to a plain neutral block.
 */
export function Picture({
  img,
  locale,
  className,
  sizes = '100vw',
  priority = false,
  seasonalHigh = false,
  lowPriority = false,
}: {
  img: Img;
  locale: Locale;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /**
   * For an above-the-fold image inside a season-only wrapper: high fetch priority but
   * lazy, so the copy hidden by the season switch (display:none) is never downloaded.
   * `priority` would preload both seasons.
   */
  seasonalHigh?: boolean;
  /** Kept for callers; captions were only drawn on the old placeholder. */
  showCaption?: boolean;
  /** Below-the-fold image that lazy loading would still fetch early: don't let it compete. */
  lowPriority?: boolean;
}) {
  const photo = resolvePhoto(img);
  const alt = tr(photo?.alt ?? img.alt, locale);
  if (photo) {
    return (
      <div className={clsx('relative overflow-hidden bg-granite-100', className)}>
        <Image
          src={photo.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority && !seasonalHigh}
          {...(seasonalHigh ? { loading: 'lazy' as const, fetchPriority: 'high' as const } : lowPriority ? { fetchPriority: 'low' as const } : {})}
          className="object-cover"
        />
      </div>
    );
  }
  // No photo: a plain neutral block, never a drawing.
  return <div role="img" aria-label={alt} className={clsx('relative overflow-hidden bg-granite-100', className)} />;
}

/**
 * Preloads only the visible season's image. Season-switched images are lazy (so the hidden
 * copy is never fetched), which would start the LCP image late; this inline script runs
 * during HTML parsing, reads <html data-season> (set by the boot script) and adds a
 * high-priority <link rel="preload"> for that season's srcset.
 */
export function SeasonPreload({ summer, winter, sizes }: { summer?: Img; winter?: Img; sizes: string }) {
  const props = (img?: Img) => {
    const photo = img && resolvePhoto(img);
    if (!photo) return null;
    const { props: p } = getImageProps({ src: photo.src, alt: '', fill: true, sizes });
    return { srcset: p.srcSet ?? '', href: p.src };
  };
  const data = JSON.stringify({ summer: props(summer), winter: props(winter), sizes }).replace(/</g, '\\u003c');
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var d=${data};var s=document.documentElement.dataset.season==='winter'?'winter':'summer';var i=d[s];if(!i)return;var l=document.createElement('link');l.rel='preload';l.as='image';l.href=i.href;if(i.srcset){l.setAttribute('imagesrcset',i.srcset);l.setAttribute('imagesizes',d.sizes)}l.setAttribute('fetchpriority','high');document.head.appendChild(l)}catch(e){}})()`,
      }}
    />
  );
}

/**
 * Both seasonal images, swapped by the season switch through CSS (no layout shift, no flash).
 * `priority` becomes high-priority lazy loading so only the visible season is fetched.
 */
export function SeasonalPicture({
  img,
  priority,
  ...rest
}: { img: SeasonalImg } & Omit<Parameters<typeof Picture>[0], 'img'>) {
  return (
    <>
      {priority && <SeasonPreload summer={img.summer} winter={img.winter} sizes={rest.sizes ?? '100vw'} />}
      <Picture img={img.summer} {...rest} seasonalHigh={priority} className={clsx(rest.className, 'summer-only')} />
      <Picture img={img.winter} {...rest} seasonalHigh={priority} className={clsx(rest.className, 'winter-only')} />
    </>
  );
}
