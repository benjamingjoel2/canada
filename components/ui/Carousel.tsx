'use client';

import clsx from 'clsx';
import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';

/**
 * Accessible scroll-snap carousel: swipe on touch, arrow buttons on desktop,
 * native keyboard scrolling, and every slide reachable by Tab.
 */
export function Carousel({
  children,
  label,
  itemClassName = 'w-[82%] sm:w-[46%] lg:w-[31%]',
  light = false,
  className,
  controlsPosition = 'top',
}: {
  children: ReactNode;
  label: string;
  itemClassName?: string;
  light?: boolean;
  className?: string;
  controlsPosition?: 'top' | 'bottom';
}) {
  const t = useTranslations('common');
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    el?.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el?.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  const items = Children.toArray(children);
  const btn = clsx(
    'grid h-11 w-11 place-items-center rounded-full border transition-colors disabled:opacity-30',
    light ? 'border-birch/40 text-birch hover:bg-birch hover:text-forest' : 'border-forest/30 text-forest hover:bg-forest hover:text-birch',
  );
  const controls = (
    <div className={clsx('hidden gap-2 md:flex', controlsPosition === 'top' ? 'justify-end' : 'mt-8 justify-end')}>
      <button type="button" className={btn} onClick={() => scroll(-1)} disabled={edges.start} aria-label={t('previous')}>
        <svg aria-hidden viewBox="0 0 20 10" className="h-2.5 w-5 rotate-180" fill="none" stroke="currentColor"><path d="M0 5h19M14 1l4 4-4 4" strokeWidth="1.2" /></svg>
      </button>
      <button type="button" className={btn} onClick={() => scroll(1)} disabled={edges.end} aria-label={t('next')}>
        <svg aria-hidden viewBox="0 0 20 10" className="h-2.5 w-5" fill="none" stroke="currentColor"><path d="M0 5h19M14 1l4 4-4 4" strokeWidth="1.2" /></svg>
      </button>
    </div>
  );

  return (
    <section aria-roledescription="carousel" aria-label={label} className={className}>
      {controlsPosition === 'top' && <div className="mb-6">{controls}</div>}
      <ul
        ref={track}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 md:-mx-8 md:gap-6 md:scroll-px-8 md:px-8 xl:-mx-12 xl:scroll-px-12 xl:px-12"
      >
        {items.map((child, i) => (
          <li
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${items.length}`}
            className={clsx('shrink-0 snap-start', itemClassName)}
          >
            {child}
          </li>
        ))}
      </ul>
      {controlsPosition === 'bottom' && controls}
    </section>
  );
}
