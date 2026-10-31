import Image, { getImageProps } from 'next/image';
import clsx from 'clsx';
import type { Img, Locale, SeasonalImg } from '@/data/types';
import { tr } from '@/lib/l10n';
import { resolvePhoto } from '@/lib/photo';

const tones: Record<NonNullable<Img['tone']>, string> = {
  forest: 'from-[#2b4c3d] via-[#1f3a2e] to-[#11231b]',
  lake: 'from-[#5fbdb8] via-[#2f8f8b] to-[#1f3a2e]',
  granite: 'from-[#9aa0a4] via-[#5e6468] to-[#2f3437]',
  birch: 'from-[#f4efe4] via-[#d9cfb8] to-[#a99f88]',
  night: 'from-[#0e1d2a] via-[#123b3a] to-[#3fa7a3]',
  snow: 'from-[#ffffff] via-[#dfe8ea] to-[#9fb4ba]',
  autumn: 'from-[#e1a253] via-[#b8622a] to-[#4a3324]',
};
const lightTones = new Set(['birch', 'snow']);

/**
 * Image slot. Renders the slot's own `src`, or a matched stock photo (lib/photo.ts),
 * and falls back to a styled placeholder built from the subject and tone.
 */
export function Picture({
  img,
  locale,
  className,
  sizes = '100vw',
  priority = false,
  seasonalHigh = false,
  showCaption = true,
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
  const tone = img.tone ?? 'forest';
  const light = lightTones.has(tone);
  return (
    <div
      role="img"
      aria-label={alt}
      className={clsx('relative overflow-hidden bg-gradient-to-br', tones[tone], className)}
    >
      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.16]" preserveAspectRatio="none" viewBox="0 0 400 300">
        <path d="M0 210 L70 140 L120 180 L190 90 L250 160 L300 120 L400 200 L400 300 L0 300Z" fill={light ? '#1f3a2e' : '#f4efe4'} />
        <path d="M0 240 L90 190 L160 230 L240 170 L330 220 L400 190 L400 300 L0 300Z" fill={light ? '#1f3a2e' : '#f4efe4'} opacity="0.6" />
      </svg>
      {showCaption && img.subject && (
        <span
          aria-hidden
          className={clsx(
            'absolute bottom-3 left-3 right-3 text-[11px] tracking-wide',
            light ? 'text-forest/70' : 'text-birch/75',
          )}
        >
          {img.subject}
        </span>
      )}
    </div>
  );
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
