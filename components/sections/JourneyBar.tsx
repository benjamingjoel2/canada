'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useEnquire } from '@/components/features/enquire/EnquireContext';

/**
 * Sticky bottom bar on journey pages: shows where you are on the page and keeps
 * Enquire and the itinerary download in reach. Appears once the hero has scrolled away.
 * On mobile it shrinks to the two buttons.
 */
export function JourneyBar({ journeyId, title, sections }: { journeyId: string; title: string; sections: { id: string; label: string }[] }) {
  const t = useTranslations('journey');
  const tc = useTranslations('common');
  const { openEnquire, openItinerary } = useEnquire();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    // Leave room at the bottom of the page so the bar never covers the footer.
    document.body.style.paddingBottom = '4rem';
    return () => {
      document.body.style.paddingBottom = '';
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, [sections]);

  return (
    <div
      className={clsx(
        'fixed inset-x-0 bottom-0 z-30 border-t border-forest/10 bg-birch-50/95 backdrop-blur transition-transform duration-500 motion-reduce:transition-none',
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full',
      )}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <nav aria-label={t('onThisPage')} className="hidden lg:block">
          <ul className="flex gap-6">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? 'location' : undefined}
                  className={clsx('meta py-2 transition-colors', active === s.id ? 'text-forest underline underline-offset-8' : 'text-granite hover:text-forest')}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2 lg:flex-none">
          <button
            type="button"
            onClick={() => openItinerary(journeyId, title)}
            className="rounded-full border border-forest/30 px-4 py-2.5 text-sm text-forest hover:border-forest"
          >
            {tc('downloadItinerary')}
          </button>
          <button
            type="button"
            onClick={() => openEnquire({ journeyId, topic: title })}
            className="rounded-full bg-forest px-5 py-2.5 text-sm text-birch hover:bg-forest-700"
          >
            {tc('enquire')}
          </button>
        </div>
      </div>
    </div>
  );
}
