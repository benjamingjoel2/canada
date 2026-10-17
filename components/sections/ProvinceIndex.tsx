'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from '@/i18n/navigation';

export type ProvincePanel = { slug: string; name: string; tagline: string; picture: ReactNode; regions: { slug: string; name: string }[] };

/** Background tints that crossfade as each province comes into view (forest, glacier, granite, birch). */
const tints = ['#e3ebe5', '#dcecea', '#e6e7e5', '#f1eadb', '#e1e9ec', '#e9e6dd'];

/**
 * Destinations index (pattern from the references): a pinned list of provinces on the left
 * while large images scroll on the right; the active province lights up and the background
 * tint shifts. Mobile: stacked panels. Reduced motion: tint changes without a fade.
 */
export function ProvinceIndex({ panels, exploreLabel, regionsLabel }: { panels: ProvincePanel[]; exploreLabel: string; regionsLabel: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="transition-colors duration-700 motion-reduce:transition-none" style={{ backgroundColor: tints[active % tints.length] }}>
      <div className="container-x grid gap-10 py-12 md:py-20 lg:grid-cols-12">
        <nav aria-label={regionsLabel} className="hidden lg:col-span-4 lg:block">
          <ol className="sticky top-36 space-y-1">
            {panels.map((p, i) => (
              <li key={p.slug}>
                <a
                  href={`#prov-${p.slug}`}
                  aria-current={active === i ? 'true' : undefined}
                  className={clsx(
                    'group flex items-baseline gap-4 py-1.5 font-serif text-3xl transition-colors duration-300',
                    active === i ? 'text-forest' : 'text-granite hover:text-forest',
                  )}
                >
                  <span className="meta w-6 text-granite">{String(i + 1).padStart(2, '0')}</span>
                  {active === i ? <em className="font-light">{p.name}</em> : p.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="space-y-20 lg:col-span-8 lg:space-y-32">
          {panels.map((p, i) => (
            <article
              key={p.slug}
              id={`prov-${p.slug}`}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="scroll-mt-32"
            >
              <Link href={`/destinations/${p.slug}`} className="group block overflow-hidden">
                <div className="transition-transform duration-700 group-hover:scale-[1.02]">{p.picture}</div>
              </Link>
              <div className="mt-6 grid gap-4 md:grid-cols-2 md:items-end">
                <div>
                  <p className="meta text-granite">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="display-2 mt-2 text-forest">
                    <Link href={`/destinations/${p.slug}`}>{p.name}</Link>
                  </h2>
                  <p className="mt-3 max-w-md text-granite">{p.tagline}</p>
                </div>
                <div className="md:text-right">
                  <ul className="flex flex-wrap gap-2 md:justify-end">
                    {p.regions.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/destinations/${p.slug}/${r.slug}`}
                          className="inline-block rounded-full border border-forest/20 px-3 py-1 text-sm text-forest hover:border-forest"
                        >
                          {r.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/destinations/${p.slug}`} className="link-underline mt-5 inline-block text-sm font-medium text-forest">
                    {exploreLabel.replace('{name}', p.name)} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
